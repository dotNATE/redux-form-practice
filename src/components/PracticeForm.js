import React from "react";
import Form from "./Form";

const PracticeForm = () => {
    const submit = (values) => {
        console.log("values", values);
    }

    return (
        <Form onSubmit={submit} />
    )
}

export default PracticeForm;