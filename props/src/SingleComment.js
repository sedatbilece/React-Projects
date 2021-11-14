import React from "react";



const SingleComment =(props)=>{// Component isimleri büyük harf ile başlamak zorunda


    return (
        <div className="comment">
        <a href='/' className="avatar">
<img src={props.image} alt="profile picture"/>
        </a>

        <div className="content">
            <a href="/" className="author">
                {props.name}
            </a>
        </div>

        <div className="metadata">
            <span>{props.date}</span>
        </div>

       <div className="text">
       {props.text} 
       </div>
</div>
    )
}

export default SingleComment;// bu dosyaya tüm dosyalardan erişim sağlar