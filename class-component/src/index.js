import React from "react";
import ReactDOM from "react-dom";



class App extends React.Component{

   constructor(props){ // ilk oluşturmada çağrılır / zorunlu değil
      
    
      super(props);//miras alınan classları çağırır


   }

   state ={ latitude:25 ,errorMassage:""}//state oluşturuldu



   componentDidMount(){// sayfa yüklemesinde component render edildikten sonra bir defa çağrılır
     
      window.navigator.geolocation.getCurrentPosition(
         
         (position)=>{//position bilgisi gelirse yapılacak işlem 
           
            this.setState({latitude:position.coords.latitude})// state güncelleme
         },
         (error)=>{//position alırken hata gelirse

            this.setState({errorMassage:error.message});
         } 
         
         );

       
         } 



   render(){// class component için oluşturulması zorunlu method

         if(this.state.errorMassage &&  !this.state.latitude){
            return (
               <div>
               {this.state.errorMassage}
               
               </div>
            )
         }

         if( !this.state.errorMassage &&  this.state.latitude){
            return (
               <div>
               {this.state.latitude}
               
               </div>
            )
         }
         else{ 

            return(
               <div>loading ....</div>
            )

         }

         
         
         
   
   }
}


ReactDOM.render(

    <App/>,
    document.querySelector("#root")
)