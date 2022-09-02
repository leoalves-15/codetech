import React, {useState} from "react";
import {ContainerNewsletter, ContainNewsletter} from './styles';
import {sendNewsletter} from "../../utils/services/newsletter";

const Newsletter = () => {
    const [email, setEmail] = useState<string>('');

    const Send = async (e: React.SyntheticEvent) =>{
        e.preventDefault();
        sendNewsletter(email);
    }
    return (
        <ContainerNewsletter>
            <ContainNewsletter>
                <h3>Faça parte do clube Codetech e ganhe <br/> <b>10% de desconto</b> na sua primeira compra!</h3>
            </ContainNewsletter>
            <ContainNewsletter>
                <form onSubmit={Send}>
                    <input onChange={(e)=>setEmail(e.target.value)} placeholder="Digite seu email"/>
                    <button>Enviar</button>
                </form>
            </ContainNewsletter>
        </ContainerNewsletter>
    );
}

export default Newsletter;