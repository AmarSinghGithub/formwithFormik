import React from "react";
import { Formik, Form } from "formik";
import { schema } from "./DummyData";
import FormField from "./FormField";
import * as Yup from "yup";

const initialValues = {};
const validationSchemaFields = {};
schema.forEach((field) => {
  initialValues[field.name] = "";
  validationSchemaFields[field.name] = Yup.string().required(
    `${field.label} is required`
  );
});
const validationSchema = Yup.object().shape(validationSchemaFields);
const Formik_Form = () => {
  const handleSubmit = (values) => {
    console.log("Form data:", values);
  };
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      <Form className="grid gap-4 grid-cols-12">
        {schema.map((field, index) => (
          <FormField key={index} {...field} />
        ))}
        <div className="cols-span-2">
          <button className="btn" type="submit">
            submit
          </button>
        </div>
      </Form>
    </Formik>
  );
};

export default React.memo(Formik_Form);
