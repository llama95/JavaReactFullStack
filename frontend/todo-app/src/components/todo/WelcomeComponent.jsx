import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import HelloWorldService from "../../api/todo/HelloWorldService";

class WelcomeComponent extends Component {
    constructor(props) {
        super(props);
        this.handleError = this.handleError.bind(this); //need these to activate the methods within this "class"
        this.retrieveWelcomeMessage= this.retrieveWelcomeMessage.bind(this);
        // this.handleSuccessfulResponse = this.handleSuccessfulResponse.bind(this);
        this.state = {
            welcomeMessage: ''
        }
    }
    render() {
        return (
            <>
                <h1>Welcome!</h1>
                <div className="container">
                Welcome {this.props.match.params.name}. You can manage your todos <Link to="/todos">here</Link>. //match comes from the uri that gets passed in
                </div>
                <div className="container">
                Click here for custom shite
                <button onClick={this.retrieveWelcomeMessage} className={"btn btn-success"}> get welcome msg</button>
                </div>
                <div>
                    {this.state.welcomeMessage}
                </div>

            </>
        )        
    }

    retrieveWelcomeMessage() {

        HelloWorldService.executeHelloWorldPathVariable(this.props.match.params.name)
            .then(response => this.setState({welcomeMessage : response.data.message})) //set the welcomeMessage to the response.data.message
            .catch(error=>this.handleError(error))
    }
    handleError(error){
        console.log(error.response);
        this.setState({welcomeMessage:error.response.data.message})
    }
    // retrieveWelcomeMessage() {
    //     HelloWorldService.executeHelloWorldService()
    //         .then(response => this.setState({welcomeMessage : response.data}))
    // }
    //
    // handleSuccessfulResponse(response){
    //     this.setState({welcomeMessage : response.data})
    // }
}



export default WelcomeComponent