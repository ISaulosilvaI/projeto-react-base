//desafio 2
import React from "react";
import './button.css'

const sayHello= ()=>{
    alert('Você realmente apertou?🤔');
    alert('E se travasse seu computador?😑');
    alert()
    alert()
    alert()
    alert()
    alert()
    alert('Vou deixar passar!🤨');
    alert('Mas fica esperto!😈');
    alert('Desafio 2')
}

const Button= (props)=>{
    return <button className="btn" onClick={sayHello}>
                {props.label}
            </button>
}

Button.defaultProps={
    label: 'Recomendo que não aperte!!'
}

export default Button