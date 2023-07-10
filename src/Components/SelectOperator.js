import React from "react";


const SelectOperator = (props) => {

  const selectedOperator = (e) => {
    props.selectOperator(e.target.value);
  }

  return (
    <div className="operator">
      <label>Select an operation:
        <select className="select-operator" name="operator" onChange={selectedOperator}>
          <option value="+">Addition(+)</option>
          <option value="-">Subtraction(-)</option>
        </select>
      </label>
    </div>
  )
}

export default SelectOperator;