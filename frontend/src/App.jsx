import axios from "axios"
import { useEffect, useState } from "react"

const url = "http://localhost:3000/api"

function App() {
  const [users, setUsers] = useState([]);

const fetchUsers = async () => {
  try{
    const response = await axios.get(url)
    setUsers(response.data)
  }catch(error){ 
   console.error("Erro ao buscar o usuario!",error)
  }
}

// useEffect para buscar os usuários quando o componente é montado
useEffect(() => {
  fetchUsers();
}, []);

  return (
    <section className="w-7xl mx-auto mt-10">
      <div className="flex flex-col justify-center items-center text-center">
        <h1 className="text-3xl">Hello Word</h1>
        {users.length > 0 ? (
          <ul className="list-disc">
            {users.map((user) => (
              <li key={user.id} className="mb-2">
                <strong>Nome:</strong> {user.name}, <strong>Email:</strong>{" "}
                {user.email}, <strong>Idade:</strong> {user.age}
              </li>
            ))}
          </ul>
        ) : (
          <p>Carregando usuários...</p>
        )}
      </div>
    </section>
  );
}

export default App;
