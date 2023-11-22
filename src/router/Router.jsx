import { Navigate, Route, Routes } from "react-router-dom";
import { useAppContext } from "../context/AppContext";
import { Loading } from "../components/Loading";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";
import ScrollToTop from "./ScrollToTop";

import { Home } from "../pages/private/Home";

export function Router() {
    const { loadingScreen } = useAppContext()

    return (
        <ScrollToTop>
            {!loadingScreen ?
                <Routes>
                    <Route path="*" element={<Navigate replace to="/" />} />

                    {/* <Route element={<PublicRoute />}> */}
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