import { useState } from 'react';
import LightToggle from './components/LightToggle';
import LottoNumbers from './components/LottoNumbers';
import ClickCounter from './components/ClickCounter';

const App = () => {
  /* Your states here */
  const [isLightsOn, setIsLightsOn] = useState<boolean>(true)
  const [lottoNumbers, setLottoNumbers] = useState<number[]>([])
  const [count, setCount] = useState<number>(0)

  const onClickLight = () => {
    setIsLightsOn(curr => !curr)
  }

  const onClickLotto = () =>{
    const newArr = []
    for(let i = 0; i < 7; i++){
      const num =  Math.floor(Math.random() * 51);
      newArr.push(num)  
    }
    setLottoNumbers(newArr)
  }

  const onClickCounter = () => {
    setCount(curr => curr + 1)
  }

  return (
    <div>
      <h2>Light Toggle</h2>
      <LightToggle onClick={onClickLight} />
      <div style={{ backgroundColor: isLightsOn ? "white" : "black"}}>Change this background color using the style attribute</div>

      <h2>Lotto Numbers</h2>
      <LottoNumbers  onClick={onClickLotto}/>
      <div className="output">
      {lottoNumbers.map((num, index) => (
          <li key={index}>{num}</li>
      ))}

      </div>

      <h2>Click Counter</h2>
      <ClickCounter onClick={onClickCounter}/>
      <div className="output">count: {count}</div>
    </div>
  );
};

export default App;