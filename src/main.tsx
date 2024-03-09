import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "@/styles/index.css";

const rootElement = document.getElementById("app")!;

if (!rootElement.innerHTML) {
  const root = createRoot(rootElement);
  root.render(<StrictMode></StrictMode>);
}
