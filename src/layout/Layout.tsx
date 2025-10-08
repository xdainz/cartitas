import { useLocation } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";
import TextMove from "./textmove";

interface LayoutProps {
    children: React.ReactNode;
}

function Layout({ children }: LayoutProps) {
    const location = useLocation();
    const pagesWithoutLayout = ["/login", "/register"];

    if (pagesWithoutLayout.includes(location.pathname)) {
        return <div className="pt-5">{children}</div>;
    }

    return (
        <>
            <Navbar />
            <main className="main-content">{children}</main>
            <TextMove />
            <Footer />
        </>
    );
}

export default Layout;
