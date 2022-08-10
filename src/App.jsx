import './App.css';
import Button from './components/Button/Button';
import Input from './components/Input/Input';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Div from './components/Div/Div';


const handleSave =() => {
  alert("your Nickname was Saved")
}

function App() {
  return (

      <div className="container">
        <Header>

        </Header>
        <div className='inputs'>
        <Input></Input>
        <Button onClick={handleSave}>Save</Button>
        </div>
        <Div></Div>

        <Footer>

        </Footer>

      </div>
  );
}

export default App;
