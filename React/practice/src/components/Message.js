import React,{Component} from "react";

class Message extends Component {
    constructor(){
        super();
        this.state = {
            message: 'Welcome Visitor'

        }
    }

    changemsg(){
        this.setState({
            message: 'agyi mojjj'
        })
    }
    render(){
        return (
            <div>
                <h1>{this.state.message}</h1>
                <button onClick={() => {this.changemsg()}}>thookoo</button>
            </div>
        );
    }
}
 export default Message;