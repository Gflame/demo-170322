import './App.css'
import SearchModule  from './SearchModule/SearchModule'
import SearchView from './component/SearchView'


function App() {
  return (
    <div className="App">
    <SearchModule>{SearchView}</SearchModule>
    </div>
  )
}

export default App
