function InputGroup( {label, value, onChange} ){
    return (
        <div className="input-row">
            <label>{label}</label>
            <input type="number" value={value} onChange={onChange}></input>
        </div>
    )
}
export default InputGroup;