import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Top from "@/components/Top";
import Playbar from "@/components/Playbar";
import {Outlet} from "react-router-dom";


const Index = () => {
    return (
        <>
            <Header/>
            <main>
                <Outlet/>
            </main>
            <Footer/>
            <Top/>
            <Playbar/>
        </>
    );
};

export default Index;
