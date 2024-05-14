import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import HomePage from "./pages/HomePage";
import NotFound from "./pages/NotFound";
import LoginPage from "./pages/LoginPage";
import { store } from "./store/store";

export default function App() {
  return (
    <div className="min-h-screen flex items-center justify-center flex-col gap-3">
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  );
}
