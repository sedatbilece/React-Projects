import React from "react";
import ReactDOM from "react-dom";


const HemisphereDisplay=({latidute})=>{ // {latidute } props.latidute alınır sadece props ile gelen verilerden


const hemisphere= latidute >0 ? "kuzey yarımküre ": "güney yarımküre" ;
              // latidute büyük sıfır ise  ? ----koşul ---- : --değil ise koşulu -----
    return(<div>

    {hemisphere+"  : "}

<span>{latidute}</span>
    </div>);
}

export default HemisphereDisplay;