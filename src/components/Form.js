import React from "react";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import { load as loadAction } from "../actions/index"


const renderField = ({ type, label, input, meta: { touched, error } }) => {
    return (
        <div className="input-row">
            <label>{ label }</label>
            <br />
            <input {...input} type={type} placeholder={label} />
            {touched && error && <span className="error">{ error }</span>}
        </div>
    )
}

let Form = ({ handleSubmit, data, pristine, submitting, load, reset }) => {
    return (
        <form onSubmit={ handleSubmit }>
            <div>
                <button type="button" onClick={() => load(data)}>
                    Load Initial Values
                </button>
            </div>
            <div>  
                <Field name="firstName" label="First Name" component={renderField} type="text" />
            </div>
            <div>  
                <Field name="lastName" label="Last Name" component={renderField} type="text" />
            </div>
            <div>  
                <Field name="email" label="Email" component={renderField} type="email" />
            </div>
            <button type="submit" disabled={pristine || submitting}>Submit</button>
            <button type="butoon" disabled={pristine || submitting} onClick={reset}>Undo Changes</button>
        </form>
    )
}

Form = reduxForm({
    form: "practice"
})(Form)

Form = connect(
    state => ({
        initialValues: state.initialValues.data
    }),
    { load: loadAction }
)(Form)

export default Form;