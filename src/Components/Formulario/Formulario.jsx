import './Formulario.css';

export default () => {
    return (
        <section className="container">
            <div className="box">
                <form action="https://api.staticforms.xyz/submit" method="post">
                    <input type="hidden" name="accessKey" value="5c000c14-2996-46e0-a7d6-6fe1005dbfc1"/>
                        <fieldset>
                            <legend><b>Fale com a gente...</b></legend>
                            <br />
                                <div className="inputbox inpNome">
                                    <input type="text" name="name" id="nome" className="inputUser" required />
                                    <label for="nome" className="labelInput">Nome Completo</label>
                                </div>
                                <br /><br />
                                <div className="inputbox">
                                    <input type="text" name="email" id="email" className="inputUser" required />
                                    <label for="email" className="labelInput">Email</label>
                                </div>
                                <br /><br />
                                <div className="inputbox">
                                    <input type="tel" name="telefone" id="telefone" className="inputUser" required />
                                    <label for="telefone" className="labelInput">Telefone</label>
                                </div>
                                <br /><br />
                                <div className="inputbox">
                                    <label for="data_nascimento"><b>Data de nascimento</b></label>
                                    <input type="date" name="data_nascimento" id="data_nascimento" required />
                                </div>
                                <br /><br />
                                <div className="inputbox">
                                    <textarea name="message" id="textarea" className="inputUser" rows="5" required></textarea>
                                    <label for="textarea" className="labelInput">Escreva aqui...</label>
                                </div>
                                <br /><br />
                                <input type="submit" name="submit" id="submit" />
                        </fieldset>
                </form>
            </div>
        </section>
    );
}