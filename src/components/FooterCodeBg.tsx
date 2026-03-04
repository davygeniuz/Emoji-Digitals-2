import { useEffect, useRef } from "react";

interface Node {
  x: number; y: number;
  vx: number; vy: number;
  radius: number;
  color: [number, number, number];
  pulsePhase: number;
  pulseSpeed: number;
}

interface Packet {
  fromNode: number; toNode: number;
  progress: number; speed: number;
  color: [number, number, number];
}

const COLORS: [number, number, number][] = [
  [59,  130, 246],  // blue
  [99,  102, 241],  // indigo
  [139,  92, 246],  // violet
  [34,  211, 238],  // cyan
  [52,  211, 153],  // emerald
];

export function FooterCodeBg() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const rafRef    = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let nodes: Node[]     = [];
    let packets: Packet[] = [];
    let frame = 0;

    const setup = () => {
      const W = canvas.parentElement?.offsetWidth  || window.innerWidth;
      const H = canvas.parentElement?.offsetHeight || 500;
      canvas.width  = W;
      canvas.height = H;

      // Subtle node count — gentle network feel
      const count = Math.floor((W * H) / 22000);
      nodes = Array.from({ length: Math.max(count, 14) }, () => {
        const c = COLORS[Math.floor(Math.random() * COLORS.length)];
        return {
          x:          Math.random() * W,
          y:          Math.random() * H,
          vx:         (Math.random() - 0.5) * 0.25,
          vy:         (Math.random() - 0.5) * 0.25,
          radius:     1.5 + Math.random() * 2.5,
          color:      c,
          pulsePhase: Math.random() * Math.PI * 2,
          pulseSpeed: 0.02 + Math.random() * 0.02,
        };
      });
      packets = [];
    };

    const draw = () => {
      frame++;
      const W = canvas.width;
      const H = canvas.height;

      ctx.clearRect(0, 0, W, H);

      const maxDist = Math.min(W * 0.18, 180);

      // Move nodes slowly
      for (const n of nodes) {
        n.x += n.vx; n.y += n.vy;
        n.pulsePhase += n.pulseSpeed;
        if (n.x < 0 || n.x > W) n.vx *= -1;
        if (n.y < 0 || n.y > H) n.vy *= -1;
      }

      // Spawn packets infrequently — every 35 frames, only 1 at a time
      if (frame % 35 === 0 && nodes.length > 1) {
        for (let attempt = 0; attempt < 6; attempt++) {
          const from = Math.floor(Math.random() * nodes.length);
          let to     = Math.floor(Math.random() * nodes.length);
          while (to === from) to = Math.floor(Math.random() * nodes.length);
          const dx   = nodes[from].x - nodes[to].x;
          const dy   = nodes[from].y - nodes[to].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < maxDist * 2) {
            packets.push({
              fromNode: from, toNode: to,
              progress: 0,
              speed:    0.008 + Math.random() * 0.012,
              color:    COLORS[Math.floor(Math.random() * COLORS.length)],
            });
            break;
          }
        }
      }

      // Draw connections — subtle, thin, low opacity
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx   = nodes[i].x - nodes[j].x;
          const dy   = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < maxDist) {
            const alpha = (1 - dist / maxDist) * 0.18;
            const [r, g, b] = nodes[i].color;

            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.strokeStyle = `rgba(${r},${g},${b},${alpha})`;
            ctx.lineWidth   = 0.7;
            ctx.stroke();

            // Circuit right-angle on ~20% of short connections
            if (dist < maxDist * 0.5 && Math.random() < 0.20) {
              const midX = (nodes[i].x + nodes[j].x) / 2;
              const [r2, g2, b2] = nodes[j].color;
              ctx.beginPath();
              ctx.moveTo(nodes[i].x, nodes[i].y);
              ctx.lineTo(midX, nodes[i].y);
              ctx.lineTo(midX, nodes[j].y);
              ctx.lineTo(nodes[j].x, nodes[j].y);
              ctx.strokeStyle = `rgba(${r2},${g2},${b2},${alpha * 0.4})`;
              ctx.lineWidth   = 0.5;
              ctx.stroke();
            }
          }
        }
      }

      // Draw nodes — small, soft glow
      for (const n of nodes) {
        const pulse = 0.5 + 0.5 * Math.sin(n.pulsePhase);
        const [r, g, b] = n.color;

        // Soft outer glow
        const glowR = n.radius * (3 + pulse * 1.5);
        const glow = ctx.createRadialGradient(n.x, n.y, 0, n.x, n.y, glowR);
        glow.addColorStop(0, `rgba(${r},${g},${b},${0.12 * pulse})`);
        glow.addColorStop(1, `rgba(${r},${g},${b},0)`);
        ctx.beginPath();
        ctx.arc(n.x, n.y, glowR, 0, Math.PI * 2);
        ctx.fillStyle = glow;
        ctx.fill();

        // Small colored core dot
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.radius * 0.7, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${r},${g},${b},${0.5 + pulse * 0.3})`;
        ctx.fill();
      }

      // Draw packets — small, subtle
      packets = packets.filter(p => p.progress <= 1);
      for (const p of packets) {
        p.progress += p.speed;
        const fn = nodes[p.fromNode];
        const tn = nodes[p.toNode];
        if (!fn || !tn) continue;

        const px = fn.x + (tn.x - fn.x) * p.progress;
        const py = fn.y + (tn.y - fn.y) * p.progress;
        const [r, g, b] = p.color;

        // Short, faint trail
        const trailStart = Math.max(0, p.progress - 0.10);
        const tsx = fn.x + (tn.x - fn.x) * trailStart;
        const tsy = fn.y + (tn.y - fn.y) * trailStart;
        const grad = ctx.createLinearGradient(tsx, tsy, px, py);
        grad.addColorStop(0, `rgba(${r},${g},${b},0)`);
        grad.addColorStop(1, `rgba(${r},${g},${b},0.35)`);
        ctx.beginPath();
        ctx.moveTo(tsx, tsy);
        ctx.lineTo(px, py);
        ctx.strokeStyle = grad;
        ctx.lineWidth   = 1.2;
        ctx.stroke();

        // Small packet head — colored dot, no massive glow
        ctx.beginPath();
        ctx.arc(px, py, 2.5, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${r},${g},${b},0.8)`;
        ctx.fill();
      }

      rafRef.current = requestAnimationFrame(draw);
    };

    setup();
    window.addEventListener("resize", setup);
    rafRef.current = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener("resize", setup);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      style={{
        position:      "absolute",
        inset:         0,
        width:         "100%",
        height:        "100%",
        pointerEvents: "none",
        zIndex:        0,
        display:       "block",
      }}
    />
  );
}
