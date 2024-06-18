import './App.css'

import {useState} from "react"
import ReactDOM from 'react-dom/client'


function App() {
 const [name, setName] = useState("Sofía")
 const [newName, setNewName] = useState("")

 function changeName (newName){
    setName(newName)
 }

 return(
    <div>
      <h2>Teacher Name: {name}</h2>
      <ul>
        <li> <button onClick={() => changeName('Data')}>Data</button> </li>
        <li> <button onClick={() => changeName('Reyes')}>Reyes</button> </li>
        <li> <button onClick={() => changeName('Yolanda')}>Yolanda</button> </li>
      </ul>
    </div>
)
}



export default App


ReactDOM.createRoot(document.getElementById("root")).render(<App/>)
