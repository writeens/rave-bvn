import React, { Component } from 'react'
import "./ValidateForm.css";

class ValidateForm extends Component {
    constructor(props){
        super(props);
        this.state = { bvn: ""}

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(evt){
        this.setState({ [evt.target.name]: evt.target.value })
    }

    handleSubmit(evt){
        evt.preventDefault()
        if(isNaN(this.state.bvn)){
            alert("Please check the BVN and try again")
            this.setState({ bvn: ""})
        } else {
            this.props.validate(this.state.bvn)
            this.setState({ bvn: ""})
        }
        
    }

    render(){
        const {bvn} = this.state
        return(
            <form className="ValidateForm" onSubmit={this.handleSubmit}>
                <label htmlFor="bvn">Customer Validation </label>
                <input
                    type="text"
                    id="bvn"
                    name="bvn"
                    placeholder="Enter BVN"
                    value={bvn} 
                    onChange={this.handleChange}
                    required
                    disabled={(this.props.isLoaded) ? true: false}
                    />
                    {(this.props.isLoaded) ? "" : <button disabled={(this.props.isLoading) ? true : false}>{(this.props.isLoading) ? "Validating..." : "Validate"}</button>}
            </form>
        )
    }
}

export default ValidateForm;