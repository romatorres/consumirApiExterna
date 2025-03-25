import { useUsers } from "./hooks/useUsers";
import { Toaster } from "sonner";
import Card from "../components/card";

function App() {
  const { users } = useUsers();

  return (
    <>
      <Toaster richColors />
      <section className="w-7xl mx-auto mt-10">
        <div className="flex flex-col items-center justify-center">
            <div className="flex items-center justify-between max-w-2xl w-full mb-6">
          <h1 className="text-3xl mb-6">Usuarios do Sistema</h1>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded">Novo Usuário</button>
          </div>
          {users.length > 0 ? (
            <div className="max-w-2xl w-full">
              {users.map((user) => (
                <Card key={users.id} className="mb-4 px-8">
                  <div className="flex justify-between items-center">
                    <div className="flex flex-col gap-1 text-xl">
                    <div className="flex gap-2 items-start">
                    <strong>Nome:</strong>
                    <p>{user.name}</p>
                      </div>
                      <div className="flex gap-2">
                        <strong>Email:</strong>
                    <p>{user.email}</p>
                    </div>
                    </div>
                    <div className="flex gap-2">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded">Editar</button>
                    <button className="bg-red-500 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded">Excluir</button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          ) : (
            <Card>
              <p>Nenhum usuário cadastrado</p>
            </Card>
          )}
        </div>
      </section>
    </>
  );
}

export default App;
