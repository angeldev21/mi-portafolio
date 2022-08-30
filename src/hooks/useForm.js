import { useState } from "react";

const useForm = (values = {}) => {
  const [formValues, setFormValues] = useState(values);

  const handleChangeValue = ({ target }) => {
    setFormValues({
      ...formValues,
      [target.name]: target.value,
    });
  };

  return [formValues, handleChangeValue];
};

export default useForm;
