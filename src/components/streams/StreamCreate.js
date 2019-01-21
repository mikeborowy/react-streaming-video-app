import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class StreamCreate extends Component {

    renderError(meta) {
        if(meta.touched && meta.error) {
            return(
                <div className="ui error message">
                    <div className="header">{meta.error}</div>
                </div>
            )
        }
    }
    renderInput = (formProps) => {
        const className=`field ${formProps.meta.touched && formProps.meta.error ? 'error' : ''}`

        return (
            <div className={className}>
                <label>{formProps.label}</label>
                <input {...formProps.input} autoComplete="off"/>
                {this.renderError(formProps.meta)}
            </div>
        )
    }


    submitHandler(formValues) {
        console.log(formValues)
    }
    render() {

        const { handleSubmit } = this.props;

        return (
            <form 
                className="ui form error" 
                onSubmit={handleSubmit(this.submitHandler)} 
            >
                <Field 
                    name="title"
                    label="Enter name" 
                    component={this.renderInput}
                />
                <Field 
                    name="description" 
                    label="Enter description" 
                    component={this.renderInput}
                />
                <button className="ui button primary">Submit</button>
            </form>
        );
    }
}

const validate = (formValues) => {
    const errors= {}
    !formValues.title && (errors.title = "Enter title");
    !formValues.description && (errors.description = "Enter description");
    return errors;
}

const formCfg = {
    form: 'streamCreate',
    validate
}

export default reduxForm(formCfg)(StreamCreate);