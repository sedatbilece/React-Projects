import React from "react";

const ImageList =(props)=>{

const images =   props.images.map(image=>{//map fonksiyonu propdan gelen dizi içinde gezer ve img comp listesi döner
  // map fonksiyonu burada primitive dillerdeki while gibi
               return(
               
                        <div className="grid-item">
                           <img className="rounded-2xl "  key={image.id} src={image.webformatURL} />
                        </div>

                         )

                 });

//tek bir comp içinde images listesindeki componentlar geri döndürülür
return (<div className="grid-container">
{images}
</div>)


}
export default ImageList;


