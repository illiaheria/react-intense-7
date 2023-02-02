import React from "react";

export const FormContext = React.createContext();

class Form extends React.Component {
  render() {
    return (
      <FormContext.Provider value={{ name: "Igor", age: 23 }}>
        {this.props.children}
      </FormContext.Provider>
    );
  }
}

export default Form;
