import { useEffect, useRef } from "react";

const LINES = [
  // React / JSX
  `import React, { useState, useEffect } from 'react';`,
  `const App = () => <EmojiDigitals theme="dark" />;`,
  `export default function Dashboard({ user }: Props) {`,
  `const [projects, setProjects] = useState<Project[]>([]);`,
  `useEffect(() => { fetchProjects(userId); }, [userId]);`,
  `return <motion.div animate={{ opacity: 1 }} />;`,
  `const router = useRouter(); router.push('/dashboard');`,
  `<Button onClick={handleSubmit} variant="primary" />`,
  // TypeScript
  `interface Brand { id: string; name: string; logo: string; }`,
  `type Service = "branding" | "web" | "app" | "academy";`,
  `async function deployApp(config: Config): Promise<void> {`,
  `const token = jwt.sign({ id, role }, process.env.JWT_SECRET!);`,
  `enum Status { PENDING = "pending", LIVE = "live" }`,
  `const response = await fetch<ApiResponse>("/api/projects");`,
  // Node / Express
  `router.post("/api/auth/login", authMiddleware, async (req, res) => {`,
  `app.use(cors({ origin: "https://emojidigitals.com" }));`,
  `const hashedPass = await bcrypt.hash(password, 12);`,
  `mongoose.connect(process.env.MONGO_URI!).then(() => {`,
  `res.status(200).json({ success: true, data: projects });`,
  `app.listen(PORT, () => console.log("Server live on port", PORT));`,
  // CSS / Tailwind
  `@keyframes neonPulse { 0% { opacity:0.4 } 50% { opacity:1 } }`,
  `background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%);`,
  `.card { backdrop-filter: blur(20px); border-radius: 1.5rem; }`,
  `animation: fadeInUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;`,
  // Python / AI / ML
  `model = OpenAI(api_key=os.environ["OPENAI_API_KEY"])`,
  `embeddings = model.encode(texts, batch_size=32)`,
  `df = pd.read_csv("data.csv"); df.dropna(inplace=True)`,
  `clf.fit(X_train, y_train, epochs=100, batch_size=32)`,
  `response = openai.chat.completions.create(model="gpt-4")`,
  `similarity = cosine_similarity(vec_a, vec_b)`,
  // DevOps
  `git commit -m "feat: launch emoji-digitals platform v3.0"`,
  `docker build -t emoji/api:latest . && docker push`,
  `kubectl apply -f k8s/deployment.yaml --namespace prod`,
  `terraform apply -auto-approve -var-file=prod.tfvars`,
  `npm run build && vercel deploy --prod --token $TOKEN`,
  `gh workflow run deploy.yml --ref main`,
  // SQL / Database
  `SELECT p.*, u.name FROM projects p JOIN users u ON p.user_id = u.id;`,
  `CREATE INDEX idx_projects_status ON projects(status, created_at);`,
  `INSERT INTO brands (name, logo, created_at) VALUES ($1,$2,NOW());`,
  `UPDATE users SET last_active = NOW() WHERE id = $1 RETURNING *;`,
  // Networking / Security
  `openssl req -x509 -newkey rsa:4096 -keyout key.pem -out cert.pem`,
  `nmap -sS -O --script vuln 192.168.1.0/24`,
  `iptables -A INPUT -p tcp --dport 443 -j ACCEPT`,
  `ssh -i ~/.ssh/emoji_key ubuntu@api.emojidigitals.com`,
  // AI Engineering
  `model = torch.nn.Transformer(d_model=512, nhead=8)`,
  `tokenizer = AutoTokenizer.from_pretrained("bert-base-uncased")`,
  `pipeline = Pipeline([("tfidf", TfidfVectorizer()), ("clf", SVC())])`,
  // Video / FFmpeg
  `ffmpeg -i input.mp4 -vf scale=1920:1080 -crf 23 output.mp4`,
  `ffmpeg -i video.mp4 -ss 00:01:00 -t 30 -c copy clip.mp4`,
  // Data Science
  `sns.heatmap(df.corr(), annot=True, cmap="Blues")`,
  `X_train, X_test = train_test_split(X, test_size=0.2)`,
  `print(f"Accuracy: {accuracy_score(y_test, y_pred):.4f}")`,
  // Brand
  `console.log("🚀 Emoji Digitals — Engineering Digital Futures");`,
  `// Emoji Digitals — Creative Technology Innovation Lab`,
  `const brand = await BrandEngine.init({ client: "EmojiDigitals" });`,
];

// STRICTLY TWO BRAND COLOURS: Blue & Purple only
const COLORS: [number, number, number][] = [
  [59,  130, 246],  // blue-500  (primary brand blue)
  [96,  165, 250],  // blue-400  (lighter blue)
  [139, 92,  246],  // purple-500 (primary brand purple)
  [167, 139, 250],  // purple-400 (lighter purple)
  [99,  102, 241],  // indigo-500 (mid blue-purple transition)
  [129, 140, 248],  // indigo-400 (lighter mid)
];

interface Line {
  text: string;
  x: number;
  y: number;
  charPos: number;
  speed: number;
  color: [number, number, number];
  done: boolean;
  pause: number;
  delay: number;
  alpha: number;
  size: number;
}

function rnd<T>(arr: T[]): T { return arr[Math.floor(Math.random() * arr.length)]; }

function makeLine(x: number, y: number, delay = 0): Line {
  return {
    text:    rnd(LINES),
    x, y,
    charPos: 0,
    speed:   1.5 + Math.random() * 2.5,      // fast, compiler-like
    color:   rnd(COLORS),
    done:    false,
    pause:   0,
    delay,
    alpha:   0.35 + Math.random() * 0.30,    // 0.35–0.65 — clearly visible
    size:    Math.random() > 0.7 ? 13 : 11,  // mix of font sizes
  };
}

export function LiveCodeBg({ opacity = 1 }: { opacity?: number }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const rafRef    = useRef<number>(0);
  const linesRef  = useRef<Line[]>([]);
  const accRef    = useRef<number[]>([]);
  const frameRef  = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const setup = () => {
      const W = canvas.parentElement?.offsetWidth  || window.innerWidth;
      const H = canvas.parentElement?.offsetHeight || window.innerHeight;
      canvas.width  = W;
      canvas.height = H;

      // Dense: many columns, many rows — like a real compiler/terminal
      const cols  = Math.max(6, Math.floor(W / 200));
      const laneW = W / cols;
      const rows  = 7;   // 7 lines per column = 42–56 total lines
      linesRef.current = [];
      accRef.current   = [];

      for (let c = 0; c < cols; c++) {
        for (let r = 0; r < rows; r++) {
          const x     = laneW * c + 8 + Math.random() * (laneW * 0.4);
          const y     = (H / rows) * r + 32 + Math.random() * (H / rows - 40);
          // stagger delays so they don't all start at once
          const delay = Math.floor(r * 15 + c * 8 + Math.random() * 60);
          linesRef.current.push(makeLine(x, y, delay));
          accRef.current.push(0);
        }
      }
    };

    setup();
    window.addEventListener("resize", setup);

    const draw = () => {
      frameRef.current++;
      const W = canvas.width;
      const H = canvas.height;

      // Trail fade — lower = longer trails / more persistence
      ctx.fillStyle = "rgba(5,5,16,0.30)";
      ctx.fillRect(0, 0, W, H);

      for (let i = 0; i < linesRef.current.length; i++) {
        const ln = linesRef.current[i];

        if (ln.delay > 0) { ln.delay--; continue; }

        const [r, g, b] = ln.color;
        const a = ln.alpha * opacity;

        ctx.font = `300 ${ln.size}px 'Fira Code','Courier New',monospace`;

        if (ln.done) {
          if (ln.pause > 0) {
            ln.pause--;
            // Dim finished lines slightly
            ctx.fillStyle = `rgba(${r},${g},${b},${a * 0.5})`;
            ctx.fillText(ln.text, ln.x, ln.y);
          } else {
            // Recycle with a short delay
            const fresh = makeLine(ln.x, ln.y, Math.floor(Math.random() * 80 + 20));
            linesRef.current[i] = fresh;
            accRef.current[i]   = 0;
          }
          continue;
        }

        // Accumulate fractional chars
        accRef.current[i] += ln.speed;
        const add = Math.floor(accRef.current[i]);
        if (add > 0) {
          ln.charPos = Math.min(ln.charPos + add, ln.text.length);
          accRef.current[i] -= add;
        }

        if (ln.charPos >= ln.text.length) {
          ln.done  = true;
          ln.pause = 60 + Math.floor(Math.random() * 120);
        }

        const visible = ln.text.slice(0, ln.charPos);
        ctx.fillStyle = `rgba(${r},${g},${b},${a})`;
        ctx.fillText(visible, ln.x, ln.y);

        // Blinking block cursor
        if (!ln.done && frameRef.current % 60 < 30) {
          const tw = ctx.measureText(visible).width;
          ctx.fillStyle = `rgba(${r},${g},${b},${Math.min(a * 1.8, 1)})`;
          ctx.fillRect(ln.x + tw + 1, ln.y - ln.size, 7, ln.size + 2);
        }
      }

      rafRef.current = requestAnimationFrame(draw);
    };

    rafRef.current = requestAnimationFrame(draw);
    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener("resize", setup);
    };
  }, [opacity]);

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
        zIndex:        1,
        display:       "block",
      }}
    />
  );
}
