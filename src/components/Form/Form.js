import React from "react";

export const FormContext = React.createContext();

const Form = ({ children }) => {
  return (
    <FormContext.Provider value={{ name: "Igor", age: 23 }}>
      {children}
    </FormContext.Provider>
  );
};

export default Form;
