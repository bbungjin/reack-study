import { useState } from "react";

const Test = () => {
  const [state, setState] = useState({log:[]});
  const logState = (e) => {
    const {name, value} = e.target
    return setState({value,log:[...state.log, value]});
  }

    return (
        <div>
            <input name="text" type="text" onChange={logState}/>
            {state.log.map((state)=> <div> {state}</div>)}
        </div>
    );
}

export default Test;