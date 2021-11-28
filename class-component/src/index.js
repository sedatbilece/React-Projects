import React from "react";
import ReactDOM from "react-dom";



class App extends React.Component{

   constructor(props){// ilk oluşturmada çağrılır / zorunlu değil
    
      super(props);//miras alınan classları çağırır

      this.state ={ latitude:25 }//state oluşturuldu

      window.navigator.geolocation.getCurrentPosition(
         
         (position)=>{//position bilgisi gelirse yapılacak işlem 
            this.setState({latitude:position.coords.latitude})// state güncelleme
         },
         (error)=>console.log(error)  
         
         );



   }


   render(){// class component için oluşturulması zorunlu method

     
     

      return (
         <div className="ui card">
            {this.state.latitude}
         </div>
      )
   }
}


ReactDOM.render(

    <App/>,
    document.querySelector("#root")
)