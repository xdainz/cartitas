import { useLocation } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";
import TextMove from "./textmove";

interface LayoutProps {
    children: React.ReactNode;
}

function Layout({ children }: LayoutProps) {
    const location = useLocation();
    const pagesWithoutLayout = ["/Login", "/Register", "/Palette"];

    if (pagesWithoutLayout.includes(location.pathname)) {
        return <>{children}</>;
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
