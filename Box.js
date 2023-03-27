import { useState } from 'react';

let colors = [  '#3498db',
                '#9b59b6',
                '#e74c3c',
                '#2c3e50',
                '#d35400',];

function App() {
  const [totalBox, setTotalBox] = useState(0);
  const [boxes, setBoxes] = useState([]);

  function addMoreBoxes() {
    let newBoxes = [];
    for (let i = 0; i < 5; i++) {
      let color = colors[(i + totalBox) % colors.length];
      newBoxes.push(color);
    }
    setTotalBox(totalBox + newBoxes.length);
    setBoxes(boxes.concat(newBoxes));
  }

  function removeBox(index) {
    let newBoxes = [...boxes];
    newBoxes.splice(index, 1);
    setTotalBox(totalBox - 1);
    setBoxes(newBoxes);
  }

  function Box({ color, onClick }) {
    return (
      <div className="box" style={{ backgroundColor: color }} onClick={onClick}></div>
    );
  }
  return (
    <div class="wrap">  
        <h1> JS DOM</h1>
        <div id="container">
            {boxes.map((color, index) => (
            <Box key={index} color={color} onClick={() => removeBox(index)} />
            ))}
        </div>
        <button onClick={addMoreBoxes} id="btn">More boxes</button>
        <p id="score"> Total box:<span> {totalBox}</span></p>
        <div class="boxes"></div>
    </div>
  );            
}

export default App;