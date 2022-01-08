import React from "react";



class Card extends React.Component {

state={user:''}
    componentDidMount(){

        let user=this.props.match.params.user
        this.setState({user})
    }

    render (){
        const user=this.state
          
         return(<div>

<h3 className="bg-purple-300 inline-block">Card Component</h3>
 <h2> {user}  </h2>
         </div>)

    }
}


export default Card;