import React, { Component } from 'react';
import axios from "axios";
import "./Validate.css";
import ValidateForm from './ValidateForm';

class Validate extends Component {
    constructor(props){
        super(props);
        this.state = { data: {}, isLoading:false, isLoaded: false}
        this.validate = this.validate.bind(this);
        this.renderDetails = this.renderDetails.bind(this);
        this.submit = this.submit.bind(this);
    }

    submit(evt){
        evt.preventDefault();
        this.setState({
            data:{},
            isLoading:false,
            isLoaded:false
        })
    }

    validate(bvn){
        this.setState({isLoading: true, isLoaded: false})
        const URL = `https://ravesandboxapi.flutterwave.com/v2/kyc/bvn/${bvn}?seckey=${process.env.REACT_APP_RAVE_SECRET_API}`;
        axios.get(URL).then(response => {
            if(response.data.status === "success"){
                let details = response.data.data
                this.setState(st => ({
                    isLoaded:true, 
                    isLoading:false,
                    data: {...st.data, ...details}
                }))
            } else{
                alert("An error occured, Please try again");
                this.setState({
                    data:{},
                    isLoading:false,
                    isLoaded:false
                })
            }
        })
    }
    renderDetails(){
        const {isLoaded, isLoading, data } = this.state
        if(isLoading){
            return <div className={"loader"}></div>
        } else{
            if(isLoaded){
                return (
                    <div className="Validate-details">
                        <div className="Validate-hi">Hi, {data["first_name"]}</div>
                        <form className="Validate-details-form" onSubmit={this.submit}>
                            <div>
                                <label htmlFor="name">BVN: </label>
                                <input id="name" defaultValue={data["bvn"]} disabled />
                            </div>
                            <div>
                                <label htmlFor="name">First Name: </label>
                                <input id="name" defaultValue={data["first_name"]} disabled />
                            </div>
                            <div>
                                <label htmlFor="name">Midlle Name: </label>
                                <input id="name" defaultValue={data["middle_name"]} disabled />
                            </div>
                            <div>
                                <label htmlFor="name">Last Name: </label>
                                <input id="name" defaultValue={data["last_name"]} disabled />
                            </div>
                            <div>
                                <label htmlFor="name">Date Of Birth: </label>
                                <input id="name" defaultValue={data["date_of_birth"]} disabled />
                            </div>
                            <div>
                                <label htmlFor="name">Phone Number: </label>
                                <input id="name" defaultValue={data["phone_number"]} disabled />
                            </div>
                            <button>OK</button>
                        </form>
                    </div>
                )
            } else {
                return <div></div>
            }
        }
    }

    render(){
        return(
            <div className="d-flex">
                <div className="Validate">
                    <ValidateForm validate={this.validate} isLoading={this.state.isLoading} isLoaded={this.state.isLoaded}/>
                    {this.renderDetails()}
                </div>
            </div>
            
        )
    }
}

export default Validate;