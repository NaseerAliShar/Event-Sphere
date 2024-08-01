import Navigation from "./Navigation";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

function Layout() {
    const { role } = useSelector(state => state.auth);
    return (
        <div className="flex min-h-screen">
            <div className="w-80">
                <Navigation />
            </div>
            <div className="w-full text-center">
                <div className="bg-blue-500 p-4 text-white font-semibold text-2xl">Dashboard Content</div>
                <main className="h-screen bg-blue-200">
                    {!role === 'admin' && <Outlet />}
                </main>
                <div className="bg-blue-500 p-2 text-white">&copy; {new Date().getFullYear()} EventSphere. All rights reserved.</div>
            </div>
        </div>
    );
}

export default Layout;

