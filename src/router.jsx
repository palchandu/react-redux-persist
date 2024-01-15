import * as ReactDOM from "react-dom/client";
import {
    Route,
  createBrowserRouter, createRoutesFromElements,
} from "react-router-dom";
import { Root } from "./layouts/Root";
import { Auth } from "./layouts/Auth";
import { Dashboard } from "./layouts/Dashboard";
import { TaskManager } from "./pages/TaskManager";
import { Base64Generator } from "./pages/Base64Generator";
import { UrlParser } from "./pages/UrlParser";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import { UserDashboard } from "./pages/UserDashboard";
import { Profile } from "./pages/Profile";
import { Setting } from "./pages/Setting";
import { Home } from "./pages/Home";
import ErrorPage from "./pages/error";
const router = createBrowserRouter(
    createRoutesFromElements(<>
        <Route path="/" element={<Root />} errorElement={<ErrorPage/>}>
            <Route path="/" element={<Home/>} />
            <Route path="task-manager" element={<TaskManager />} />
            <Route path="encoder" element={<Base64Generator />} />
            <Route path="parser" element={<UrlParser />} />
    </Route>
    <Route path="/auth" element={<Auth/>} errorElement={<ErrorPage/>}>
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register/>} />
    </Route>
    <Route path="/" element={<Dashboard />} errorElement={<ErrorPage/>}>
        <Route path="dashboard" element={<UserDashboard />} />
        <Route path="profile" element={<Profile />} />
        <Route path="setting" element={<Setting/>} />
    </Route></>
    )
);

export default router;