import { Suspense, lazy } from "react";
import { Navigate, useRoutes, useLocation } from "react-router-dom";

import MainLayout from "layouts";
import BadgeDetail from "./pages/BadgeDetail";
import Explore from "./pages/Explore";
import Create from "./pages/Create";
import CreateProfile from "./pages/CreateProfile";
import Staking from "./pages/Staking";
import Claim from "./pages/Claim";
import Profile from "./pages/Profile";
import Whitelist from "./pages/Whitelist";
import Loading from "components/Loading";

const Loadable = (Component) => (props) => {
  return (
    <Suspense fallback={<Loading />}>
      <Component {...props} />
    </Suspense>
  );
};

export default function Router() {
  return useRoutes([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        { path: "/", element: <Navigate to="/create-profile" replace /> },
        { path: "/explore", element: <Explore /> },
        { path: "/create", element: <Create /> },
        { path: "/create-profile", element: <CreateProfile /> },
        { path: "/profile", element: <Profile /> },
        { path: "/whitelist", element: <Whitelist /> }
      ]
    }
  ]);
}

// IMPORT COMPONENTS
