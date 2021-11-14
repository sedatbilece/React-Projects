import React from "react";
import ReactDOM from "react-dom";
import profile1 from "./images/b.png";
import profile2 from "./images/a.png";
import profile3 from "./images/c.jpg";
import SingleComment from "./SingleComment";
const  App=() =>{//

    return (

        <div className="ui comments">

         <SingleComment 
          name="alex" 
          date="5:00 PM"
          text="its amazing"
          image={profile1}
         />

         <SingleComment 
          name="sarah" 
          date="7:00 PM"
          text='dont do this again'
          image={profile2}
         />

         <SingleComment 
          name="jax" 
          date="8:18 PM"
          text="well played"
          image={profile3}
         />

        </div>
    )
}


ReactDOM.render(// hangi fonksiyonun hangi dive render edileceği
    <App /> ,
    document.querySelector("#root")
)
