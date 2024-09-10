import { useState } from "react";

const CalcUtil = [
  {name:"+", func: (result,target)=>(result+target)},
  {name:"-", func: (result,target)=>(result-target)},
  {name:"*", func: (result,target)=>(result*target)},
  {name:"/", func: (result,target)=>(result/target)},
]
const Calcul = () => {

  const [target, setTarget] = useState(0);
  const [result, setResult] = useState(0);
  
  const onChangeTarget = (e)=> {
    setTarget(Number(e.target.value));
  }

  const onChangeResult = (getFunc) => {
    const newResult = getFunc(result,target);
    setResult(newResult);
  }

  return (
    <div>
      <h1>{result}</h1>
        <input id="input" type="number" onChange={onChangeTarget} />
        {CalcUtil.map(obj=>
          <button onClick={()=>onChangeResult(obj.func)}>{obj.name}</button>
        )}
    </div>
  );
}

export default Calcul;