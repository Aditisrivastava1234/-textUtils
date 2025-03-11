import React, { useState } from "react";

export default function TextForm(props) {
  const handleLpClick = () => {
    let newText = Text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lowercase!","success")
  };
  const handleUpClick = () => {
    let newText = Text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to uppercase!","success")
  };
  const handleClearClick = () => {
    let newText = '';
    setText(newText);
    props.showAlert("Clear Text!","success")
  };
  const handleOnChange = (event) => {
    console.log("clicked on handle change");
    setText(event.target.value);
  };
  const handleCopy = () =>{
    navigator.clipboard.writeText(Text);
    props.showAlert("Text copied!","success")
  }
  const handleExtraSpace = () =>{
    let newText = Text.split(/[ ]+/);
    setText(newText.join(" "))
    props.showAlert("Remove Extra spaces!","success")
  }
  const [Text, setText] = useState("");

  return (
    <>
    <div className="container my-4" style={{color:props.mode=== 'dark' ? 'white' : '#042743'}}>
      <h1>{props.heading} </h1>
      <div className="mb-3">
        <textarea
          className="form-control"
          value={Text}
          onChange={handleOnChange}
          style={{backgroundColor:props.mode=== 'dark' ? '#13466e' : 'white' ,color:props.mode=== 'dark' ? 'white' : '#042743' }}
          id="myBox"
          rows="6"
        ></textarea>
      </div>
        <button disabled ={Text.length===0} className="btn btn-primary mx-1 my-1 " onClick={handleUpClick}>Convert to Uppercase</button>
        <button disabled ={Text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLpClick}>Convert to Lowercase</button>
        <button disabled ={Text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>Clear Text</button>
        <button disabled ={Text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy Text</button>
        <button disabled ={Text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleExtraSpace}>Remove Extra Space</button>
     
    </div>
    <div className="container my-3" style={{color:props.mode=== 'dark' ? 'white' : '#042743'}}>
      <h2>Your Text Summary</h2>
      <p>{Text.split(/\s+/).filter((element)=>{return element.length!==0 }).length} words and {Text.length} characters</p>
      <p>{0.008 * Text.split(" ").length} Minutes Read</p>
      <h2>Preview</h2>
      <p>{Text.length>0 ? Text : "Nothing to Preview!"}</p>
    </div>
    </>
  );
}
