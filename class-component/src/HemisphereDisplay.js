import React from "react";
import ReactDOM from "react-dom";
import southernpic from "./images/southern.jpg";
import northernpic from "./images/northen.jpg";
const HemisphereDisplay=({latidute})=>{ // {latidute } props.latidute alınır sadece props ile gelen verilerden


const hemisphere= latidute >0 ? "kuzey yarımküre ": "güney yarımküre" ;
              // latidute büyük sıfır ise  ? ----koşul ---- : --değil ise koşulu -----


    const picture =latidute>0? northernpic : southernpic;
    return(<div>

    {hemisphere+"  : "}

<span>{latidute}</span>

<div>
   <img src={picture}></img>
</div>
    </div>);
}

export default HemisphereDisplay;