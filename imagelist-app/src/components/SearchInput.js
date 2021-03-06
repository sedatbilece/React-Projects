import React from "react";

class SearchInput extends React.Component{

constructor (props){
    super(props);

    this.state={entry:' '}


    this.onFormSubmit=this.onFormSubmit.bind(this);// fonksiyon bağlanır (state undefined hatası için çözüm)
}

    onInputChange(event){//değişim olduğunda çağırılacak method

console.log(event.target.value)


    }

    onFormSubmit(event){//enter basıldığında yada butona basılınca çağrılıcak
         event.preventDefault();    
           
         this.props.onSearchSubmit(this.state.entry);
    }


      render(){

            return ( <div>
                
                <form onSubmit={this.onFormSubmit} className="inline-block w-full mt-20 formclass">

                
                     <div class="maindiv">

                     
                    <input type="text" placeholder="Write Here !" 
                    onChange={(event)=>this.setState({entry:event.target.value.toUpperCase()})} //burada parantez konursa render edildiği gibi çağrılır
                    value={this.state.entry}
                    className=" focus:shadow-md inline-block focus:outline-none focus:placeholder-cyan-500 shadow appearance-none border  py-2 px-3 text-gray-700 leading-tight z-10  inpt " />
                   

                    
                    <button type="submit" className="inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4  z-20 butt" >Search</button>
                    
                    </div>
                    
                  
                  
                </form>
            </div>
            )

      }
     


}


export default SearchInput;