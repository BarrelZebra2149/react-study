import React from "react";
// eslint-disable-next-line import/no-anonymous-default-export
const InputBlock = ({appendItem})=>{
    // 구조분해 할당 기호: 배열은 [], 객체는 {}

    const [inputValue, setInputValue] = React.useState("");

    return (<div className="input-group mb-3">
        <input value={inputValue} onChange={(e)=>{
            setInputValue(e.target.value);
        }}  type="text" className="form-control" placeholder="add your todo..." />
        <div className="input-group-append">
            <button onClick={()=>{
                appendItem(inputValue);
                setInputValue("");
            }} className="btn btn-primary" type="button">OK</button>
            <button onClick={() => {
                setInputValue("");
            }} className="btn btn-danger" type="button">Cancel</button>
        </div>
    </div>);
}

export default InputBlock;