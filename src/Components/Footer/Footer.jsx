import './Footer.css'
import facebook from '../../Assets/img/facebook.png'
import youtube from '../../Assets/img/youtube.png'
import instagram from '../../Assets/img/instagram.png'
import linkedin from '../../Assets/img/linkedin.png'
import github from '../../Assets/img/github.png'

export default () => {
    return (
        <>
            <footer class="text-center text-black">
                <div className="fundo p-1 pb-0 mt-5">
                    <section >
                        <a className="footer1 btn" href="https://www.facebook.com/jonatan.vasconcelos" target="_blank">
                            <img src={facebook} />
                        </a>
                        <a className="footer1 btn" href="https://youtube.com/user/jonatanmk" target="_blank">
                            <img src={youtube} />
                        </a>
                        <a className="footer1 btn" href="https://www.instagram.com/jonatanvs?r=nametag" target="_blank">
                            <img src={instagram} />
                        </a>
                        <a className="footer1 btn" href="https://www.linkedin.com/in/jonatan-vasconcelos-08bb29171" target="_blank">
                            <img src={linkedin} />
                        </a>
                        <a className="footer1 btn" href="https://github.com/jonatanmk" target="_blank">
                            <img src={github} />
                        </a>
                    </section>
                </div>
                <div className="fundo text-center p-3">
                    © 2021 Jonatan Vasconcelos Soares
                </div>
            </footer>

        </>
    );
}