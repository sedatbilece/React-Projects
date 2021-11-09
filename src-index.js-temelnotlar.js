import React from 'react';
import ReactDOM from 'react-dom';



const App =function(){// render edilecek fonksiyonumuz

    const buttonText="tıkla !";

    return (
    
        <div>
  <label htmlFor="name" className="label" >enter email </label>
  <input id="name" type="text" />
  
  <button style={{backgroundColor:'red'  , color:'white'}} > {buttonText}</button>
  
</div>
    
    )
}
// class için className
// style için stye={{nesne:'param' , nesne:'param'}} çeklinde verilmeli

ReactDOM.render(//render işlemi 
    <App/>,//neyin render edileceği
    document.querySelector("#root")//public/index içindeki root idli dive render edilecek 

)