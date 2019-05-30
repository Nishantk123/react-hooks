import React, { useState } from 'react';

export default function  button (){
  const [buttonText, setButtonText] = useState("Click me, Please");

  return(
    <button onClick = { () =>  setButtonText("Thanks, been clicked!")}>
      {buttonText}
    </button>
  )
}