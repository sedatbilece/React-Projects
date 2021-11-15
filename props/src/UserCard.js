import React from "react";



const UserCard =(props)=>{
    console.log(props);

return(<div className="ui card">

<div className="content">

        <div className="header">
            alex candretti
        </div>
         
         <div className="description">
          {props.children}
         </div>

</div>

<div className="ui bottom button">
    <i className="add icon"> add friend</i>

   
</div>
<button className="mt-8 btn btn-blue bg-blue-700 px-4 py-2 text-white font-bold hover:bg-red-700 rounded">tailwind</button>
</div>)
}
export default  UserCard;