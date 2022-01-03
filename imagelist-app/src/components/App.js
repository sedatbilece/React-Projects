import React from "react";
import SearchInput from "./SearchInput";
import axios from 'axios';
import ImageList from "./ImageList";
class App extends React.Component{

    //state oluşturduk
    state={ images : []  }

    onSearchSubmit= async (entry)=>{

     const res=  await  axios.get(`https://pixabay.com/api/?key=25000034-e6e5471e6e21c9f7f0e5d100a&q=${entry}&image_type=photo`);

   
// state güncellenince comp yeniden render edilir
     this.setState ({ images:res.data.hits })
    }



     render(){

        return(<div>

            <SearchInput  onSearchSubmit={this.onSearchSubmit}/> 
           
            <ImageList images={this.state.images} />
                </div>
                )

     }
    
}

export default App;