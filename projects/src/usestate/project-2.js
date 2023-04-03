import {useState} from 'react'



export default function Project2() {
    
    const [inputValue , setInputValue] = useState([]);
    const [cart ,setCart] =useState([])

    const handleInputValue = event => {
        setInputValue(event.target.value)
    } 

    const handleAddItem = event => {
        setCart(items => [...items , inputValue])
    }

    const handleKeys = event => {
      if (event.key === 'Enter') {
          handleAddItem();
      }
    }


  return (
    <div>
      <h1>
        Grocery List
      </h1>
      <input type='text' onChange={handleInputValue} onKeyPress={handleKeys}/>
      <button type='button' onClick={handleAddItem}  >
        Add to cart
      </button>
      <h1>
        Cart
      </h1>
      <ol>      
        {cart.map((Value,item) => (
        <li key={item}>{Value}</li>
        ))}
      </ol>

    </div>
  )
}
