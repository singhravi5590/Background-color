
import React from "react";

class About extends React.Component{
    constructor(){
        console.log("1")
        super();
        this.state = {
            userInfo : {
                name : "Ravi"
            }
        }
    }

        componentDidMount(){
            console.log("3")
        }
        componentDidUpdate(){
            console.log("4")
        }
        componentWillUnmount(){
            console.log("5")
        }
    render(){
        return(
        <>
            {console.log("2")}
            <h1>Hello</h1>
        </>
        )
    }
}

export default About;