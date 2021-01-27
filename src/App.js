import Hangman from "./components/Hangman";
import backgroundImage from "./components/images/background.jpg";

function App() {
  return (
    <div className="Hangman">
      <img
        className="backGroundImage"
        alt="cookie shop"
        src={backgroundImage}
      />
      <Hangman />
    </div>
  );
}

export default App;
