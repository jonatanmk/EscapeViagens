import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import Carousel from "../../Components/Carousel/Carousel";
import Cartoes from "../../Components/Cartoes/Cartoes";


export default () => {
    return (
        <>
            <Header/>
            <main>
                <Carousel/>
                <Cartoes/>
            </main>
            <Footer/>
        </>
    );
}