import { useState } from "react";

const FormAction= ()=>{
  const [user, setUser] = useState([])
  const [show, setShow] = useState([])
  function enrollUser(e) {
    const name = e.target.parentNode.children[0].value;
    const age = e.target.parentNode.children[1].value;
    setUser([...user,{name, age}]);
    setShow(user);
    console.log(show);
  }
  function searchUser(e) {
    const idx = e.target.parentNode.children[0];
    console.log(idx);
    const ppp = user.filter((val) => val.name.includes(idx.value));
    setShow(ppp);
  }

  return(
    <div>
      name <input type="text"></input>
      age <input type="text"></input>
      <button onClick={enrollUser}>save</button>
      <div>
        <input type="text"></input>
        <button onClick={searchUser}>검색</button>
      </div>
      {show.map((val, index) => (<div key={index}>{val.name}, {val.age}</div>
        ))}
    </div>)

}
export default FormAction;