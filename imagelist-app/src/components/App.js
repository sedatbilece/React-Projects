import React from "react";
import SearchInput from "./SearchInput";


class App extends React.Component{

    onSearchSubmit=(entry)=>{
console.log(entry);

    }



     render(){

        return(<div>

            <SearchInput  onSearchSubmit={this.onSearchSubmit}/> 
            
                </div>
                )

     }
    
}

export default App;