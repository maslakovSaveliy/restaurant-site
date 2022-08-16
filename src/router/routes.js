import About from "../pages/About";
import Auth from "../pages/AuthPage";
import Error from "../pages/Error";
import Events from "../pages/Events";
import Feedback from "../pages/Feedback";
import Menu from "../pages/Menu";
import Reviews from "../pages/Reviews";
import AuthPage from "../pages/AuthPage";
export const publicRoutes = [
  { path: "/", element: About },
  { path: "/error", element: Error },
  { path: "/events", element: Events },
  { path: "/menu", element: Menu },
  { path: "/reviews", element: Reviews },
  { path: "/auth", element: AuthPage },
];
export const privateRoutes = [
  { path: "/", element: About },
  { path: "/error", element: Error },
  { path: "/events", element: Events },
  { path: "/menu", element: Menu },
  { path: "/reviews", element: Reviews },
  { path: "/feedback", element: Feedback },
];
