import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import NotFound from "./pages/NotFound";
import LoginPage from "./pages/LoginPage";
import { KanbanContextProvider } from "./context/kanban-context";

export default function App() {
  return (
    <div className="min-h-screen flex items-center justify-center flex-col gap-3">
      <BrowserRouter>
        <KanbanContextProvider>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </KanbanContextProvider>
      </BrowserRouter>
    </div>
  );
}
