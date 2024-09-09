import { useState } from "react";

const Test = () => {
  const [state, setState] = useState();
    return (
        <div>
            <input name="text" type="text"/>
        </div>
    );
}

export default Test;