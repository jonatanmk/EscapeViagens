import './Footer.css'
import facebook from '../../Assets/img/facebook.png'
import youtube from '../../Assets/img/youtube.png'
import instagram from '../../Assets/img/instagram.png'
import linkedin from '../../Assets/img/linkedin.png'
import github from '../../Assets/img/github.png'

function Footer() {
    return (
        <>
            <footer className="text-center text-black">
                <div className="fundo p-1 pb-0 mt-5">
                    <div >
                        <a className="footer1 btn" href="https://www.facebook.com/jonatan.vasconcelos" target="_blank" rel="noreferrer">
                            <img src={facebook} alt="Facebook" />
                        </a>
                        <a className="footer1 btn" href="https://youtube.com/user/jonatanmk" target="_blank" rel="noreferrer">
                            <img src={youtube} alt="YouTube" />
                        </a>
                        <a className="footer1 btn" href="https://www.instagram.com/jonatanvs?r=nametag" target="_blank" rel="noreferrer">
                            <img src={instagram} alt="Instagram" />
                        </a>
                        <a className="footer1 btn" href="https://www.linkedin.com/in/jonatan-vasconcelos-08bb29171" target="_blank" rel="noreferrer">
                            <img src={linkedin} alt="linkedin" />
                        </a>
                        <a className="footer1 btn" href="https://github.com/jonatanmk" target="_blank" rel="noreferrer">
                            <img src={github} alt="github" />
                        </a>
                    </div>
                    <div className=" text-center p-3">
                        © 2021 Jonatan Vasconcelos Soares
                    </div>
                </div>

            </footer>
        </>
    );
}

export default Footer;