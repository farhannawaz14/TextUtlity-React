import React, {useState} from 'react'

export default function Main(props) {
const handUpCase = ()=>{
// console.log ("Change the Text")
let handleOnChange = text.toUpperCase();
setText (handleOnChange);
props.showAlert("Converted To UpperCase" , "success ")
};
const handlowCase = ()=>{
// console.log ("Change the Text")
let handleOnChange = text.toLocaleLowerCase();
props.showAlert("Converted To LowerCase" , "success ")
setText (handleOnChange);
};
const handclearCase = ()=>{
// console.log ("Change the Text")
let handleOnChange = '';
setText (handleOnChange);
props.showAlert("Clear Text" , "success ")
};

const removeExtraSpaces = () => {
 let newtext = text.split(/[ ]+/)
 setText(newtext.join(" ") )
 props.showAlert("Extra Spaces Remove" , "primary")
};
const handleCopy = () => {
  var copyText = document.getElementById("mybox");
  copyText.select();
  navigator.clipboard.writeText(copyText.value);
  props.showAlert("Copy Text to Clipboard" , "success ")
};


const handleOnChange =(event)=>{
  // console.log("Change the areia")
    setText(event.target.value)

}





const [text, setText] = useState("");

  return (
    <div>
      <h1 style={{color : props.mode==='dark'?'white':'black'}}>{props.heading}</h1>
      <div className="mb-3">
  <textarea className="form-control" value={text} onChange={handleOnChange} id="mybox" rows="8" style={{backgroundColor : props.mode==='dark'?'#043460':'white' ,  color : props.mode==='dark'?'white':'black'  } } ></textarea>
  <button type="button" className="my-3 btn btn-primary" onClick={handUpCase} >Change The Uppercase</button>
  <button type="button" className="my-3 btn btn-primary mx-3" onClick={handlowCase} >Change The LowerCase</button>
  <button type="button" className="my-3 btn btn-primary mx-3" onClick={handclearCase} >Clear Text</button>
  <button type="button" className="my-3 btn btn-primary mx-3" onClick={removeExtraSpaces} >Remove Extra Spaces</button>
  <button type="button" className="my-3 btn btn-primary mx-3" onClick={handleCopy} >Copy Text</button>
</div>

<div className="container my-3" style={{color : props.mode==='dark'?'white':'black'}}>
<h2>Your Text Summary</h2>
<p>{text.split(" ").length} Words and {text.length} Character</p>
<p>{0.008 * text.split(" ").length} Minutes Read</p>
<h2>Preview</h2>
<p>{text}</p>
</div>
    </div>
  )
}
