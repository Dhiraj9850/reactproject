import React, {useState} from 'react';

export default function TextForm(props) {
  const handleUPClick = () =>{
    console.log("uppercase was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText)
  }
  const handleLoClick = () =>{
    console.log("Lowercase was clicked" + text);
    let newText = text.toLowerCase();
    setText(newText)
  }
  const handleClear= () =>{
    let newText = '';
    setText(newText)
  }
  const handleOnChange = (event) =>{
    console.log("on change");
    setText(event.target.value);
  }
 
  const [text, setText] = useState(''); 
  return (
    <>
    <div className="container my-3" style={{color:props.mode==='dark'?'white':'black'}}>
        <h3>{props.title}</h3>
        <div className="mb-3">
        <textarea className="form-control" id="myBox" value={text} onChange = {handleOnChange} rows="7" style={{backgroundColor:props.mode==='dark'?'#1f1f2e':'white' ,color:props.mode==='dark'?'white':'black'}}></textarea>
        </div>
        <button disabled={text.length===0} className="btn btn-primary mx-1" onClick={handleUPClick}>convert to uppercase</button>
        <button  disabled={text.length===0} className="btn btn-primary mx-1" onClick={handleLoClick}>convert to lowercase</button>
        <button  disabled={text.length===0} className="btn btn-primary mx-1" onClick={handleClear}>clear text</button> 
    </div>

    <div className="container my-3" style={{color:props.mode==='dark'?'white':'black'}}>
        <h4>your text summary</h4>
        <p>this para contains {text.split(" ").length} words and {text.length}characters</p>
        <p>you can read this generally in {0.008 * text.split(" ").length} minutes...</p>
        <h5>preview</h5>
        <p>{text.length>0?text:"Nothing to preview"}</p>
    </div>
    </>
  )
  
}
