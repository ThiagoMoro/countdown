import './App.css';
import Counter from './components/Counter';
import Title from './components/Title';

import useCountdown from './hooks/useCountdown';

import NewYear from "./assets/newyear.jpg";

function App() {
  const [day, hour, minute, second] = useCountdown("Jan 1, 2026 00:00:00");

  return (
    <>
      <div className='App' style={{backgroundImage: `url(${NewYear})`}}>
        <div className="container">
          <Title title="Countdown to 2026"/>
          <div className="countdown-container">
            <Counter title="Days" number={day}/>
            <Counter title="Hours" number={hour}/>
            <Counter title="Minute" number={minute}/>
            <Counter title="Seconds" number={second}/>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
