/* eslint-disable react/jsx-no-undef */
import React from "react";
import Colorido from "../colorido/colorido";
import './paragrafo.css'

const showTextColor=(color)=>{
    console.log(color);
}

const Paragrafo= ()=>{
    return(
        <div>
            <h2>Parágrafo colorido- desafio 1</h2>
            <div className="paragrafo">
                <Colorido color='blue' showTextColor={showTextColor}>
                    <p>"O SEGREDO DA FELICIDADE ESTÁ EM VALORIZAR O QUE VOCÊ TEM, EM VEZ DE DESEJAR O QUE VOCÊ NÃO POSSUI."</p>
                </Colorido>

                <Colorido showTextColor={showTextColor}>
                    <p>"O VERDADEITO PODER ESTÁ NA CAPACIDADE DE SE ADAPTAR ÀS MUDANÇAS E ENCONTAR OPORTUNIDADES MESMO NAS SITUAÇÕES MAIS DESAFIADORAS."</p>
                </Colorido>
            </div>
        </div>
    )
}

export default Paragrafo