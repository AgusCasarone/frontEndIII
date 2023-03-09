import { useState } from "react";
import { input } from "./input";

export const Inscription = () => {
  const [formValues, setFormValues] = useState({ name: "", instrument: "" });
  const [errors, setErrors] = useState({ name: "", instrument: "" });
  const [isFormValid, setIsFormValid] = useState(false);

  const onInputNameChange = (e) => {
    const input = e.target.value;

    if (input.trim().length < 3) {
      setErrors({ name: "El nombre debe tener más de 6 caracteres y no puede empezar con espacio." });
      return;
    }

    setErrors({ name: "" });
    setFormValues({ ...formValues, name: input });
  };
  const onInputInstrumentChange = (e) => {
    const input = e.target.value;

    if (input.trim().length < 6) {
      setErrors({ instrument: "El instrumento debe tener más de 3 caracteres" });
      return;
    }

    setErrors({ instrument: "" });
    setFormValues({ ...formValues, instrument: input });
  };

  const onFormSubmit = (e, values) => {
    e.preventDefault();

    if (formValues.name && formValues.instrument) {
      setIsFormValid(true);
    }
  };

  return (
    <>
      <form onSubmit={(e) => onFormSubmit(e, formValues)}>
        <Input
          forHtml="name"
          text="Name"
          type="text"
          name="name"
          onChange= { onInputNameChange }
        />
        {errors.name?.length > 6 && (
          <span className="text-red-500">{ errors.name }</span>
        )}
        <Input
          forHtml="instrument"
          text="Instrument"
          type="instrument"
          name="instrument"
          onChange= { onInputInstrumentChange }
        />
        { errors.instrument?.trim().length > 3 && (
          <span className="text-red-500"> { errors.instrument } </span>
        )}
        <button type="submit" className="border-2"> Enviar </button>
      </form>

      {isFormValid && (
        <div>
          <h1>{ formValues.name }</h1>
          <h2>{ formValues.instrument }</h2>
        </div>
      )}
    </>
  );
};

export default Inscription;