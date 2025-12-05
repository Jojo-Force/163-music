import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Top from "@/components/Top";
import Playbar from "@/components/Playbar";
import Home from "../Home";


const Index = () => {
    return (
        <>
            <Header/>
            <main>
                <Home/>
            </main>
            <Footer/>
            <Top/>
            <Playbar/>
        </>
    );
};

export default Index;
