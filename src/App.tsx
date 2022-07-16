import './App.css'
import NavBar from './components/NavBar/NavBar'
import ListContainer from './components/ListContainer/ListContainer'

function App() {
  return (
    <div className="App">
      <NavBar />
      <ListContainer greeting={"Hello!"}/>
    </div>
  )
}

export default App
