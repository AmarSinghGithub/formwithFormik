import React from "react";
import { Formik, Form } from "formik";
import { schema } from "./DummyData";
import FormField from "./FormField";

const initialValues = {};
schema.forEach((field) => {
  initialValues[field.name] = "";
});
const Formik_Form = () => {
  const handleSubmit = (values) => {
    console.log("Form data:", values);
  };
  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit} >
      <Form className="grid gap-4 grid-cols-12">
        {schema.map((field, index) => (
          <FormField key={index} {...field} />
        ))}
        <button className="btn" type="submit">submit</button>
      </Form>
    </Formik>
  );
};

export default Formik_Form;
