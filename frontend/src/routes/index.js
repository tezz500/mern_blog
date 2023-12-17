import { createBrowserRouter } from "react-router-dom";
import OrginTemplate from "../components/layouts/OriginTemplate";
import ForbiddenComponent from "../components/backend/errors/ForbiddenComponent";
import BackendTemplate from "../components/backend/layouts/BackendTemplate";
import BackendDashboard from '../components/backend/BackendDashboard';
import UserTableComponent from "../components/backend/user/UserTableComponent";
import UserFormComponent from '../components/backend/user/UserFormComponent';
import RoleTableComponent from "../components/backend/user/role/RoleTableComponent";
import RoleFormComponent from '../components/backend/user/role/RoleFormComponent';
import ThreeComponent from '../components/three/ThreeComponent';
import ReduxComponent from '../components/redux/ReduxComponent';
import LoginPage from "../components/layouts/auth/LoginPageComponent";
import ChatComponent from "../components/chat/ChatComponent";
const router = createBrowserRouter([
    {
        path: "/admin",
        element: <BackendTemplate />,
        children: [
            {
              path: "dashboard",
              element: <BackendDashboard />,
            },
            {
                pathname:"role",
                path: "role",
                element: <RoleTableComponent />,
            },
            {
                pathname:"role-create",
                path: "role/create",
                element: <RoleFormComponent />,
            },
            {
                pathname:"role-edit",
                path: "role/:id",
                element: <RoleFormComponent />,
            },
            {
                pathname:"user",
                path: "user",
                element: <UserTableComponent />,
            },
            {
                pathname:"user-create",
                path: "user/create",
                element: <UserFormComponent />,
            },
            {
                pathname:"user-edit",
                path: "user/:id/edit",
                element: <UserFormComponent />,
            },
        ],
    },
    {
        path: "/",
        element: <OrginTemplate />,
        children: [
            {
              path: "login",
              element: <LoginPage />,
            },
            {
                pathname:"forbidden",
                path: "forbidden",
                element: <ForbiddenComponent />,
            },
            {
                path: "three-tutorials",
                element: <ThreeComponent />,
            },
            {
                path: "redux-tutorials",
                element: <ReduxComponent />,
            },
            {
                path: "chat-tutorials",
                element: <ChatComponent />,
            },
        ],
    },
]);

export default router;