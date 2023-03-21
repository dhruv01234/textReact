import React, {useState} from 'react'

export default function TextForm(props){
    const [text,setText] = useState('');
    const [color,setColor] = useState("#000000");
    const convertToUpper = ()=>{
        setText(text.toUpperCase());
    };
    const convertToLower = ()=>{
        setText(text.toLowerCase());
    };
    const handleonChange = (event)=>{
        setText(event.target.value);
    };
    const changeColor = (event)=>{
        setColor(event.target.value);
    };
  return (
    <>
    <div className='container' style={{backgroundColor:props.bgclr,color:props.txtclr}}>
  <div className="mb-3">
    <label htmlFor="mybox" className="form-label">{props.heading}</label>
    <textarea className="form-control" value={text} onChange={handleonChange} id="mybox" rows="8" placeholder='Enter your text...' style={{color: color,backgroundColor:props.bgclr}}></textarea>
    </div>
    <button className="btn btn-primary" onClick={convertToUpper}>Convert to Uppercase</button>
    <button className="btn btn-primary mx-3" onClick={convertToLower}>Convert to Lowercase</button>
    <input type="color" id="textcolor" onChange={changeColor}/>
    </div>
    <div className="container" style={{backgroundColor:props.bgclr}}>
        <h2 style={{color:props.txtclr}}>Your text summary</h2>
        <p style={{color:props.txtclr}}>{text.split(" ").length} words and {text.length} characters</p>
    </div>
   
</>
  )
}
