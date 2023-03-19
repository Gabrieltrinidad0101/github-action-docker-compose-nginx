import { useEffect, useState } from 'react'
import './App.css'

const url = import.meta.env.VITE_API ?? "http://localhost:8000";

function App() {
  const [users, setUser] = useState([])

  const getUser = async _ => {
    const req = await fetch(`${url}/api/get`)
    const listUsers = await req.json();
    if (listUsers.message) return alert("error get users")
    setUser(listUsers.list);
  }
  
  const addUserApi = async name => {
    const req = await fetch(`${url}/api/add`,{
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({name})
    })
    const info = await req.json();
    if (info.message != "ok") return alert("error add users")
  }

  const addUser = async e=>{
    if(e.keyCode !== 13) return;
    const name = e.target.value;
    await addUserApi(name)
    getUser();
  }

  useEffect(_ => {
    getUser();
  },[])

  return (
    <div className="App">
      <input type="text" onKeyDown={addUser} maxLength="6" />
      {JSON.stringify(import.meta.env)}
      <div>
        {
          users.map(({ name,_id }) =>
            <div className='user' key={_id}>
              <h1>Name: {name}</h1>
            </div>
          )
        }
      </div>
    </div>
  )
}

export default App
