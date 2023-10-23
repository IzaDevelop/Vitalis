import { Navigate, Route, Routes } from "react-router-dom";
import { useAppContext } from "../context/AppContext";
import { Loading } from "../components/Loading";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";
import ScrollToTop from "./ScrollToTop";

import { Home } from "../pages/private/Home";

import { Login } from "../pages/public/Login";
import { Register } from "../pages/public/Register";
import { RegisterConfirm } from "../pages/public/RegisterConfirm";
import { ForgotPassword } from "../pages/public/ForgotPassword";
import { ResetPassword } from "../pages/public/ResetPassword";

export function Router() {
    const { loadingScreen } = useAppContext()

    return (
        <ScrollToTop>
            {!loadingScreen ?
                <Routes>
                    <Route path="*" element={<Navigate replace to="/" />} />

                    {/* <Route element={<PublicRoute />}> */}
                        <Route path="/login" element={<Login />} />
                        <Route path="/register" element={<Register />} />
                        <Route path="/register-confirm" element={<RegisterConfirm />} />
                        <Route path="/forgot-password" element={<ForgotPassword />} />
                        <Route path="/reset-password" element={<ResetPassword />} />
                    {/* </Route>

                    <Route element={<PrivateRoute />}> */}
                        <Route path="/" element={<Home />} />
                    {/* </Route> */}
                </Routes>
                :
                <Loading />
            }
        </ScrollToTop>
    )
}