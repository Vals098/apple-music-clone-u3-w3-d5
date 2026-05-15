import "./App.css"
import Home from "./components/Home"
import Player from "./components/Player"
import SideBar from "./components/SideBar"

function App() {
  return (
    <div className="vh-100 d-flex flex-column">
      <div className="d-flex flex-grow-1">
        <SideBar className="d-none d-md-block"/>
        <Home />
      </div>
      <Player />
    </div>
  )
}

export default App
