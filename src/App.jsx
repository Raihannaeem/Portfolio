import MenuBar from "./components/menubar";
import Home from "./components/home";
import "./styles/App.css"

function App(){
  return(
    <div className="main">
      <MenuBar/>
      <Home/>
    </div>
  )
}

export default App