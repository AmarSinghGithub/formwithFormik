import FormHeader from "./components/FormHeader";
import FormikForm from "./components/Formik_Form";
function App() {
  return (
    <div className=" bg-[#f0f0f2] min-h-screen p-6  flex items-center justify-center">
      <div className="container max-w-screen-lg mx-auto">
        <FormHeader />

        <FormikForm />
      </div>
    </div>
  );
}

export default App;
