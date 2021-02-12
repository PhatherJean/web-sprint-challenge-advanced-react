import { useState } from "react";

const useForm = (initialValue, initialState) => {
  const [values, setValues] = useState(initialValue);
  const [showSuccessMessage, setShowSuccessMessage] = useState(initialState);

  const handleChanges = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return [values, showSuccessMessage, setShowSuccessMessage, handleChanges];
};
export default useForm;
// write your custom hook here to control your checkout form
