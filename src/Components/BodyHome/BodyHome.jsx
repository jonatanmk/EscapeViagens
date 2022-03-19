import './BodyHome.css';
import b1 from "../../Assets/img/b1.png"
import b2 from "../../Assets/img/b2.png"
import b3 from "../../Assets/img/b3.png"
import bmeio from "../../Assets/img/b-meio.png"

function BodyHome() {
    return (
        <>
            <div className="mt-4 container meio">
                <div class="row al">
                    <img class="img1" src={b1} alt="banner 1" />
                </div>

                <div class="row al">
                    <img class="img2" src={b2} alt="banner 2" />
                </div>
                <div class="row al">
                    <img class="img3" src={b3} alt="banner 2" />
                </div>
            </div>
            <div className="container mt-4">
                <div>
                    <h2 className="titulo">Perguntas Frequentes</h2>
                </div>
                <div className="accordion accordion-flush " id="accordionFlushExample">
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="flush-headingOne">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                COVID19
                            </button>
                        </h2>
                        <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                            <div className="accordion-body">Estamos acompanhando de perto todas as notícias e atualizações sobre a
                                situação do Coronavírus (Covid-19) no mundo. A segurança e o bem-estar de nossos clientes são a nossa
                                maior prioridade e, por isso, selecionamos alguns dos principais questionamentos e preocupações em relação
                                as suas viagens.
                                <br /><br />
                                Devido ao impacto do vírus, os contatos por meio da nossa Central de Atendimento estão com um volume bem
                                superior ao normal, e por isso estão com maior tempo de espera. Estamos nos esforçando para atender a todos,
                                mas é necessário priorizar quem já está em viagem, além de remarcações e cancelamentos para embarques
                                nas próximas 72h. Se sua compra foi realizada em uma de nossas lojas, solicitamos que entre em contato
                                com seu agente de viagens e loja para reagendar sua viagem.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="flush-headingTwo">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                Tenho uma viagem agendada. O que devo fazer?
                            </button>
                        </h2>
                        <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                            <div className="accordion-body">Com a gradativa abertura das fronteiras e a flexibilização das medidas
                                restritivas, orientamos que leia as principais orientações de acordo com o seu destino:
                                <br /><br />
                                Destinos nacionais:<br />
                                Alguns hotéis, atrações turísticas e passeios podem solicitar o comprovante das duas doses de vacina.
                                Emita seu certificado aqui.
                                <br /><br />
                                Destinos internacionais:<br />
                                As regras e documentos obrigatórios para viagens com destinos internacionais podem variar de acordo com
                                o país de destino escolhido. Acompanhe as notícias e as orientações aqui.
                                <br /><br />
                                Cruzeiros pelo Brasil:<br />
                                - A utilização da máscara é obrigatória nos terminais dos portos nacionais, a bordo da embarcação
                                (em locais de convivência) e durante as visitas da escala.<br />
                                - Documentos obrigatórios: formulário de pré-embarque referente à triagem das condições de saúde,
                                comprovante de vacinação completa contra a COVID e resultado negativo do teste do tipo RT-PCR feito
                                até 72 horas ou de teste de antígeno feito até 24 horas antes do embarque. Para mais informações,
                                acesse aqui.
                                <br /><br />
                                Cruzeiros internacionais:<br />
                                A retomada dos Cruzeiros internacionais ainda não foi autorizada pelas autoridades sanitárias Lembre-se:
                                a utilização da máscara (cirúrgica, PFF2 sem válvula e de pano) é obrigatória nos aeroportos e aeronaves.
                                Para saber mais, clique aqui
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="flush-headingThree">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                                Quero remarcar/alterar a minha viagem. Como eu faço?
                            </button>
                        </h2>
                        <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                            <div className="accordion-body">As remarcações solicitadas pelo consumidor podem ter custo adicional de
                                acordo com as políticas de remarcação/alteração dos nossos fornecedores, hotéis e companhias aéreas.
                                <br /><br />
                                Lembrando que a remarcação da viagem deverá ser realizada com os mesmos serviços e/ou produtos adquiridos
                                no ato da compra.
                                <br /><br />
                                No caso de produtos terrestres, a data limite para que ocorra a remarcação é 31 de dezembro de 2022
                                (art. 2º, §5º, inciso II da Lei nº 14.046/20).
                                <br /><br />
                                Estamos nos esforçando para atender a todos, mas no momento é necessário priorizar: (i) quem já está
                                em viagem e (ii) solicitando remarcações ou cancelamentos de viagens com embarques nas próximas 72h.
                                <br /><br />
                                Caso ainda assim opte pela remarcação, solicitamos que entre em contato através da nossa Central de
                                Atendimento: 11 3003 9282. </div>
                        </div>
                    </div>
                </div>

            </div>

            <div className="mt-3 container al">
                <img className="img1" src={bmeio} alt="banner meio" />
            </div>
        </>
    );
}

export default BodyHome;