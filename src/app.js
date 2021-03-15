

import Gist from "./components/Gist.js"
import Header from "./partials/Header.js"

function App () {
  return (
    <main className="App">
      <Header/>

      <Gist user="gui3" id="6e8c14e8587b319a09eb32847c0884df"/>
    </main>
  )
}

export default App