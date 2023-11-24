import { Router } from "./pages/view-controller/router.js"

export function App() {
    const root= document.getElementById("root")
    Router(root)
}