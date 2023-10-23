import "./App.css";
import ButtomComponent from "./ButtomComponents";
import ImageComponent from "./ImageComponents";

function App() {
  return (
    <div className="App">
      <ButtomComponent buttomText="CLICCA QU" />
      <ImageComponent
        imageSrc="https://static.vecteezy.com/ti/vettori-gratis/p1/3623626-tramonto-lago-paesaggio-illustrazione-gratuito-vettoriale.jpg"
        alt="Img"
      />
    </div>
  );
}

export default App;
