import { useEffect, useState } from 'react';
import './App.css';

function App() {

  const [data, setData] = useState([{}])

  useEffect (()=>{
    fetch("/users")
    .then(res => res.json())
    .then(data => {
      setData(data)
      console.log(data)
    }
    )
  }, [])

  const mappedUsers = data.map(users=> (
    <div key={users.id} >
    Name: <h2>{users.first_name}</h2>
    Last name: <h2>{users.last_name}</h2>
    <h2>User: {users.username}</h2>
    </div>))
  return (
    <div className="App">
      <header className="App-header">
        
      </header>
      <div>
        <h3>Page content</h3>
        <div>
          {mappedUsers}
        </div>
      </div>
      <footer>
        <p>client side ready to use</p>
      </footer>
    </div>
  );
}

export default App;
