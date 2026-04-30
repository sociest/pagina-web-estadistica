import { createBrowserRouter } from "react-router";
import Root from "./pages/Root";
import Home from "./pages/Home";
import AcercaCarrera from "./pages/institucional/AcercaCarrera";
import Acreditacion from "./pages/institucional/Acreditacion";
import Autoridades from "./pages/institucional/Autoridades";
import Docentes from "./pages/institucional/Docentes";
import Convenios from "./pages/institucional/Convenios";
import Reglamentos from "./pages/institucional/Reglamentos";
import Transparencia from "./pages/institucional/Transparencia";
import NotFound from "./pages/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "inicio", Component: Home },
      { 
        path: "institucional",
        children: [
          { path: "acerca", Component: AcercaCarrera },
          { path: "acreditacion", Component: Acreditacion },
          { path: "autoridades", Component: Autoridades },
          { path: "docentes", Component: Docentes },
          { path: "convenios", Component: Convenios },
          { path: "reglamentos", Component: Reglamentos },
          { path: "transparencia", Component: Transparencia },
        ]
      },
      { path: "*", Component: NotFound },
    ],
  },
]);
