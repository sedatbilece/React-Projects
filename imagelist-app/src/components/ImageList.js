import React from "react";

const ImageList =(props)=>{

const images =   props.images.map(image=>{//map fonksiyonu propdan gelen dizi içinde gezer ve img comp listesi döner
  // map fonksiyonu burada primitive dillerdeki while gibi
               return(
               
                        <div className="w-full  ">
                           <img className="rounded-2xl "  key={image.id} src={image.webformatURL} />
                        </div>

                         )

                 });

//tek bir comp içinde images listesindeki componentlar geri döndürülür
return (<div className="container mx-auto space-y-2 lg:space-y-0 lg:gap-2 lg:grid lg:grid-cols-3 mt-8">
{images}
</div>)


}
export default ImageList;