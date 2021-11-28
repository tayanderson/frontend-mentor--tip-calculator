import { useEffect, useState } from 'react'
import './App.css';

function App() {
  const [bill, setBill] = useState(0)
  const [tipPercentage, setTipPercentage] = useState(0)
  const [people, setPeople] = useState(1)
  const [tip, setTip] = useState(0)
  const [total, setTotal] = useState(0)

  const [showCustom, setShowCustom] = useState(false)

  const reset = () => {
    setBill(0)
    setTipPercentage(0)
    setPeople(1)
    setShowCustom(false)
  }
  
  useEffect(() => {
    let tipPerPerson = (bill * (tipPercentage * 0.01)) / people
    let totalPerPerson = (bill / people) + tipPerPerson
    setTip(tipPerPerson)
    setTotal(totalPerPerson)
  }, [bill, tipPercentage, people]);

  const Button = (props) => (
    <button className={`py-2 px-4 rounded font-bold ${tipPercentage === props.value ? 'bg-cyan-strong text-cyan-dark' : 'bg-cyan-dark text-white'}`} value={props.value} onClick={() => {setTipPercentage(props.value);}}>{props.text}</button>
  )

  return (
    <div className="h-screen bg-cyan-light_gray py-10">
      <header className="w-full py-12">
        <img src="./logo.svg" className="mx-auto" alt="Splitter" />
      </header>
      <main>
        <div className="bg-white rounded-xl flex flex-col md:flex-row mx-auto max-w-screen-lg p-6 gap-8">
          <div className="flex-1 flex flex-col gap-8">
            <div>
              <span className="block text-cyan-dark_gray font-semibold mb-2">Bill</span>
              <input 
                type="number" className="text-right bg-cyan-light_gray w-full rounded py-2 font-semibold px-4"
                value={bill}
                onChange={(e) => {setBill(e.target.value)}}
              />
            </div>
            <div className="w-full">
              <span className="block text-cyan-dark_gray font-semibold mb-2">Select Tip %</span>
              <div className="w-full grid grid-cols-2 md:grid-cols-3 gap-3">
                <Button text="5%" value={5} />
                <Button text="10%" value={10} />
                <Button text="15%" value={15} />
                <Button text="20%" value={20} />
                <Button text="25%" value={25} />
                {showCustom ? (
                  <input 
                    type="number" placeholder="Custom" className="bg-cyan-light_gray text-center placeholder-cyan-dark font-bold text-cyan-dark_gray px-4"
                    onChange={(e) => setTipPercentage(e.target.value)}
                  />
                ) : (
                  <button 
                    className="bg-cyan-light_gray text-center placeholder-cyan-dark font-bold text-cyan-dark_gray"
                    onClick={() => setShowCustom(true)}>Custom</button>
                )}
              </div>
            </div>
            <div>
              <span className="block text-cyan-dark_gray font-semibold mb-2">Number of People</span>
              <input 
                type="number" className="bg-cyan-light_gray w-full py-2 rounded text-right font-semibold px-4" 
                onChange={(e) => {setPeople(e.target.value)}}
                value={people}
              />
            </div>
          </div>
          <div className="bg-cyan-dark flex-1 rounded p-8 flex flex-col justify-between">
            <div className="flex flex-col gap-6 md:gap-8">
              <div className="flex justify-between items-center">
                <div className="text-cyan-light_gray font-semibold">
                  Tip Amount
                  <span className="block text-cyan-dark_gray">/person</span>
                </div>
                <div className="text-cyan-strong text-4xl font-bold">
                  ${tip.toFixed(2)}
                </div>
              </div>
              <div className="flex justify-between items-center">
                <div className="font-semibold text-cyan-light_gray">
                  Total
                  <span className="block text-cyan-dark_gray">/person</span>
                </div>
                <div className="text-cyan-strong text-4xl font-bold">
                  ${total.toFixed(2)}
                </div>
              </div>
            </div>
            <button className="mt-8 md:mt-0 bg-cyan-strong rounded py-2 px-4 font-bold uppercase" onClick={reset}>Reset</button>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
