import React, { useState } from 'react';
import data from './data';
function App() {
  const [count, setCount] = useState(0); // no. of paragraphs to be generated
  const [text, setText] = useState([]); // array of those paragraphs

  const handleSubmit = (e) => {
    e.preventDefault();
    // we were getting back a string even though the type of input was number, therefore, use parseInt() to convert the string to an integer value
    let amount = parseInt(count);
    if(count <= 0){
      amount = 1;
    }
    if(count > 8){
      amount = 8;
    }
    // since we don't want the entire data and want only those number of paragraphs as requested by the user, therefore, slice it. Slice will return a new copy of the array and then we select items from the start to end (end not included). The start and the end values represent indexes.
    setText(data.slice(0,amount));
  }
  
  return (
    <section className='section section-center'>
      <h3>tired of boring lorem-ipsum?</h3>
      <form className='lorem-form' onSubmit={handleSubmit}>
        <label htmlFor='amount'>Paragraph: </label>
        <input
          type='number' 
          id='amount' 
          name='amount' 
          value={count} 
          onChange={(e) => setCount(e.target.value)}
        />
        <button type="submit" className='btn'>generate</button>
      </form>
      {/* <article className='lorem-text'>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus, voluptate!</p>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus, voluptate!</p>
      </article> */}
      {text.map((item, index) => {
        return(
          <p key={index}>{item}</p>
        )
      })}
    </section>
    )
}

export default App;
