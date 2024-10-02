import './App.css';
import sun from './assets/sun.png'
import cloud from './assets/cloud.png'

function App() {
  return (
    <div className="app">
      <div className='wrapper'>
        <h1>Доброе Утро</h1>
        <img className='cloud cloud1' src={cloud} alt="cloud" />
        <img className='cloud cloud2' src={cloud} alt="cloud" />
        {/* <img className='cloud cloud3' src={cloud} alt="cloud" /> */}
        <img className='cloud cloud4' src={cloud} alt="cloud" />
        <img className='logoSun' src={sun} alt="sun" />
        <h2>Солнышко</h2>
      </div>
    </div>
  );
}

export default App;
