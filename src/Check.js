import React from "react";
import { useState } from "react";

const Check = (props) => {

  const [check, setCheck] = useState();
  const showCheck = () => {
    if (props.isCorrect === true) {
      setCheck('✅');
    } else {
      setCheck('❌');
    }
  }

  return (
    <div className="check">
      { }
    </div>
  )

}

export default Check;