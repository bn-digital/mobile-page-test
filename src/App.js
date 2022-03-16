import './App.css';
import lottie from "lottie-web";
import animation from './search-page-animation.json'
import {useEffect} from "react";

const cardsContent = [
  {
    location: "Los Angeles (US)",
    image: "assets/images/la.jpg"
  },
  {
    location: "Las vegas (US)",
    image: "assets/images/vegas.png"
  },
  {
    location: "Miami (US)",
    image: "assets/images/miami.jpg"
  },
  {
    location: "Orlando (US)",
    image: "assets/images/orlando.jpg"
  }
]

function App() {
  useEffect(() => {
    lottie.loadAnimation({
      container: document.querySelector("#animation"),
      animationData: animation
    });
  }, []);
  return (
    <div className="App">
      <header className={'app-header'}>
        Flights Price Finder
      </header>
      <div id={'animation'} style={{width: '100%', height: 146}}></div>
      <h1>We are about to change everything you know about finding a flight</h1>
      <div className={'subtitle'}>Customize to your trip and your desires</div>
      <button className={'cta-button'}>Check our deals</button>
      <section className={'destinations'}>
        <h2>Check the popular destinations</h2>
        {cardsContent.map(it => (
          <div className={'card'} key={it.location}>
            <div className={'place'}>
              <img src={it.image} alt={it.location}/>
              <span>{it.location}</span>
            </div>
            <img src={'./assets/images/Arrow 13.svg'} alt={'arrow'}/>
          </div>
        ))}
      </section>
    </div>
  );
}

export default App;
