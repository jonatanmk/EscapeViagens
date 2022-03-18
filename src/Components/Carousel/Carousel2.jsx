import './Carousel2.css'

function Carousel2 (){
    return (
        <div className="carouselFull2">
            <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active fixedHeightImg">
                        <img src="https://www.melhoresdestinos.com.br/wp-content/uploads/2019/08/rio-de-janeiro-capa2019-01.jpg" className="d-block w-100" alt="..."/>
                    </div>
                    <div className="carousel-item fixedHeightImg">
                        <img src="https://blog.vb.com.br/wp-content/uploads/2021/01/post_thumbnail-2b82e3545d7b40afd46ff1fa64ff3475-780x430.jpeg" className="d-block w-100" alt="..."/>
                    </div>
                    <div className="carousel-item fixedHeightImg">
                        <img src="https://www.cvc.com.br/dicas-de-viagem/wp-content/uploads/2019/12/viagem-familia_271121096.jpg" className="d-block w-100" alt="..."/>
                    </div>
                    <div className="carousel-item fixedHeightImg">
                        <img src="https://guiadoestudante.abril.com.br/wp-content/uploads/sites/4/2012/12/fc3a9rias-praia.jpg" className="d-block w-100" alt="..."/>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    );
}

export default Carousel2;