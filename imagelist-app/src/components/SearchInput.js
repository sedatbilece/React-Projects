import React from "react";

class SearchInput extends React.Component{

      render(){

            return ( <div>
                
                <form className="inline-block w-full mt-20 ml-64">

                <div class="grid grid-cols-4 gap-4">
                    <div>
                    <input type="text" placeholder="Write Here !" className=" inline-block focus:outline-none focus:outline-cyan-300 focus:placeholder-cyan-500 shadow appearance-none border rounded w-96 py-2 px-3 text-gray-700 leading-tight " />
                    </div>
                    <div>
                    <button type="submit" className="inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">Search</button>
                    </div>
                     </div>
                  
                  
                </form>
            </div>
            )

      }
     


}


export default SearchInput;