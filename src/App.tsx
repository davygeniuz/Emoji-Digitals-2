import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar, Footer } from "./components/Shared";
import AIAssistant from "./components/AIAssistant";
import Home        from "./pages/Home";
import Services    from "./pages/Services";
import Portfolio   from "./pages/Portfolio";
import Design      from "./pages/Design";
import Academy     from "./pages/Academy";
import About       from "./pages/About";
import Contact     from "./pages/Contact";
import Lab         from "./pages/Lab";
import CaseStudies from "./pages/CaseStudies";
import TechStack   from "./pages/TechStack";
import Process     from "./pages/Process";
import FAQ         from "./pages/FAQ";

export function App() {
  return (
    <BrowserRouter>
      <div style={{ minHeight: "100vh", background: "#050510", color: "#f9fafb" }}>
        <Navbar />
        <main>
          <Routes>
            <Route path="/"             element={<Home />}        />
            <Route path="/services"     element={<Services />}    />
            <Route path="/portfolio"    element={<Portfolio />}   />
            <Route path="/design"       element={<Design />}      />
            <Route path="/academy"      element={<Academy />}     />
            <Route path="/about"        element={<About />}       />
            <Route path="/contact"      element={<Contact />}     />
            <Route path="/lab"          element={<Lab />}         />
            <Route path="/case-studies" element={<CaseStudies />} />
            <Route path="/stack"        element={<TechStack />}   />
            <Route path="/process"      element={<Process />}     />
            <Route path="/faq"          element={<FAQ />}         />
            <Route path="*"             element={<Home />}        />
          </Routes>
        </main>
        <Footer />
        <AIAssistant />
      </div>
    </BrowserRouter>
  );
}
