import React from "react";
import Form from "./Form";
import { SubmissionError } from "redux-form"

const data = {
    firstName: "Nathaniel",
    lastName: "Payne",
    email: "nathaniel@payne.org",
}

const PracticeForm = () => {
    const submit = ({ firstName = "", lastName = "", email = "" }) => {
        let error = {};
        let isError = false;
        
        if(firstName.trim() === "") {
            error.firstName = "Required";
            isError = true;
        }

        if(firstName.length < 5) {
            error.firstName = "Min length is 5 characters";
            isError = true;
        }

        if(lastName.trim() === "") {
            error.lastName = "Required";
            isError = true;
        }

        if(email.trim() === "") {
            error.email = "Required";
            isError = true;
        }

        if (isError) {
            throw new SubmissionError(error)
        } else {
            console.log("valid values", {firstName, lastName, email});
        }
    }

    return (
        <Form onSubmit={submit} data={data} />
    )
}

export default PracticeForm;