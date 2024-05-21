import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClientProvider, QueryClient } from "react-query";
import { Provider } from "react-redux";
import { SnackbarProvider } from "notistack";
import { store } from "./store/store";
import AuthListener from "./components/AuthListener";
import ProtectedRoute from "./components/ProtectedRoute";

const HomePage = lazy(() => import("./pages/HomePage"));
const LoginPage = lazy(() => import("./pages/LoginPage"));
const KanbanPage = lazy(() => import("./pages/KanbanPage"));
const AddTaskPage = lazy(() => import("./pages/AddTaskPage"));
const UsersPage = lazy(() => import("./pages/UsersPage"));
const NotFound = lazy(() => import("./pages/NotFound"));
const RegisterPage = lazy(() => import("./pages/RegisterPage"));

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000 * 1000,
    },
  },
});

export default function App() {
  return (
    <SnackbarProvider>
      <QueryClientProvider client={queryClient}>
        <div className="min-h-screen p-4">
          <Provider store={store}>
            <BrowserRouter>
              <AuthListener>
                <Suspense
                  fallback={<div className="flex justify-center">Loading</div>}
                >
                  <Routes>
                    <Route path="/" element={<ProtectedRoute />}>
                      <Route path="/" element={<HomePage />} />
                      <Route path="/kanban" element={<KanbanPage />} />
                      <Route path="/add-task" element={<AddTaskPage />} />
                      <Route path="/users" element={<UsersPage />} />
                    </Route>
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/register" element={<RegisterPage />} />
                    <Route path="*" element={<NotFound />} />
                  </Routes>
                </Suspense>
              </AuthListener>
            </BrowserRouter>
          </Provider>
        </div>
      </QueryClientProvider>
    </SnackbarProvider>
  );
}
