import React, { useState } from "react";

export default function TextForm(props) {
  const handleupClick = () => {
    // console.log("the upppercase was clicked");
    let newtext = text.toUpperCase();
    setText(newtext);
    setText1(newtext);
    props.showalert("Converted to uppercase!" , "success");
    
  };
  
  const handlelowClick = () => {
    // console.log("the upppercase was clicked");
    let newtext = text.toLowerCase();
    setText(newtext);
    setText1(newtext);
    props.showalert("Converted to Lowercase!" , "success");
  };
  
  const handleclearClick = () => {
    let newtext = "";
    setText(newtext);
    setText1(newtext)
    props.showalert("Text has been cleared" , "success");
  };

  const handleonchange = (event) => {
    // console.log("on change");
    setText(event.target.value);
  };
  
    const predis = ()=>{
      let newtext1 = text
      setText1(newtext1)
    }

  const handleonpre = (event)=>{
    setText1(event.target.value)

  }

  const [text, setText] = useState(" ");
  const [text1, setText1] = useState(" ");

    return (
    <>
    <div className="container" style={{color: props.mode === 'dark'?'white':'black'}}>
      <h2>{props.heading}</h2>
      <div className="mb-3">
        <textarea className={`form-control text-${props.mode === 'light' ? 'black' : 'white'}`} id="myBox" rows="10" value={text} onChange={handleonchange} style={{backgroundColor: props.mode === 'dark' ? 'grey' : 'white'}}></textarea>
      </div>
      <button className="btn btn-primary" onClick={handleupClick}> convert to uppercase</button>
      <button className="btn btn-primary mx-3" onClick={handlelowClick}> convert to Lowercase</button>
      <button className="btn btn-primary mx-1" onClick={handleclearClick}> clear text</button>
    </div>

    <div className="container my-3" style={{color: props.mode === 'dark'?'white':'black'}}>
        <h2>your text summary</h2>
        <p>{text.split(" ").length} words  {text.length} characters</p>
        <button className="btn btn-primary" onClick={predis}>preview</button>
        <p id="outlinetext">
        <textarea className={`pretext text-${props.mode === 'light' ? 'black' : 'white'}`}  value={text1} onChange={handleonpre} style={{backgroundColor: props.mode === 'dark' ? 'grey' : 'white'}}></textarea>

        </p>
        
    </div>
    
    </> 
  );
}
