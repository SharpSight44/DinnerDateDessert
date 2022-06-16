import { ConstructionRounded } from '@mui/icons-material';
import React, { Component } from 'react';
import FacebookLogin from "react-facebook-login";
import "../../../styles/home.css";

export class Fb extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isLoggedIn: false
        }
    }
    responseFacebook = (response) => {
        console.log(response);
        this.setState({
            isLoggedIn: true
        })
    }
    render() {
        return (
            this.state.isLoggedIn ? '' :
                (<div>
                    <FacebookLogin className="fbbutton"
                        appId="1402573673591526"
                        autoLoad={false}
                        fields="name,email,picture"
                        callback={this.responseFacebook}
                        cssClass="my-facebook-button-class rounded" style={{ margin: "1rem", background: "white", border: "1px solid #ccc!important" }}
                        icon="fa-facebook"
                    />
                </div>)
        )
    }
}

export default Fb