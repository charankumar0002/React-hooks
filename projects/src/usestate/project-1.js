import { useState } from "react"

const Project1 = () => {

  const [cart, setCart] = useState([]);
  const [input, setInput] = useState([]);

  const saveInput = e => {
    setInput(e.target.value);
  };

  const addNewItem = () => {
    setCart(prevState => [...prevState, input]);
  };

  return (
    <div>
      <input type="text" onChange={saveInput} />
      <button onClick={addNewItem}> Add Item </button>
      <ol>
        {cart.map((Items, Index) => (
          <li key={Index}> {Items}</li>
        ))}
      </ol>
    </div>
  );
};
export default Project1
