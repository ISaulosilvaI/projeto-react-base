import React from "react";

const Colorido=({children, color, showTextColor})=>{
    return(
        <div className="colorido" style={{color}} onClick={()=> showTextColor(color)}>{children}</div>
    )
}

Colorido.defaultProps={
    color: 'red'
}

export default Colorido