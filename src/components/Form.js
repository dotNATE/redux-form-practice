import React from "react";
import { Field, reduxForm } from "redux-form";

const renderField = ({ type, label, input, meta: { touched, error } }) => {
    return (
        <div className="input-row">
            <label>{ label }</label>
            <br />
            <input {...input} type={type} />
            {touched && error && <span className="error">{ error }</span>}
        </div>
    )
}

let Form = props => {
    const { handleSubmit } = props

    return (
        <form onSubmit={ handleSubmit }>
            <div>  
                <Field name="firstName" label="First Name" component={renderField} type="text" />
            </div>
            <div>  
                <Field name="lastName" label="Last Name" component={renderField} type="text" />
            </div>
            <div>  
                <Field name="email" label="Email" component={renderField} type="email" />
            </div>
            <button type="submit">Submit</button>
        </form>
    )
}

Form = reduxForm({
    form: "practice"
})(Form)

export default Form;