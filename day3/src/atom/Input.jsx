const Input = (props)=>{
    console.log(props)
    // const style = {borderColor: "red"}
    return <input 
        style={{borderColor: "red"}}
        {...props}
    />
}

export default Input