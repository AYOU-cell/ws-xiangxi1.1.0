import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { AdminPage } from "./components/AdminPage.tsx";
import { LegalPage } from "./components/LegalPage.tsx";
import "./index.css";

const path = window.location.pathname;

function render() {
  if (path.startsWith("/admin")) return <AdminPage />;
  if (path.startsWith("/privacy")) return <LegalPage doc="privacy" />;
  if (path.startsWith("/terms")) return <LegalPage doc="terms" />;
  return <App />;
}

createRoot(document.getElementById("root")!).render(render());
