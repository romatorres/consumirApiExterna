import { useUsers } from "./hooks/useUsers";
import { Toaster } from "sonner";
import Card from "../components/card";

function App() {
  const { users } = useUsers();

  return (
    <>
      <Toaster richColors />
      <section className="w-7xl mx-auto mt-10">
        <div className="flex flex-col justify-center items-center text-center">
          <h1 className="text-3xl mb-6">Usuarios do Sistema</h1>
          {users.length > 0 ? (
            <div>
              {users.map((user) => (
                <Card key={users.id}>
                  <div>
                    <p>{user.name}</p>
                    <p>{user.email}</p>
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
