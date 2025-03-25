import { useUsers } from "./hooks/useUsers";
import Card from "../components/card";
import Button from "../components/button";
import { Link } from "react-router-dom";

function UserPage() {
  const { users } = useUsers();

  return (
    <>
      <section className="w-7xl mx-auto mt-10">
        <div className="flex flex-col items-center justify-center">
          <div className="flex items-center justify-between max-w-2xl w-full mb-6">
            <h1 className="text-3xl">Usuarios do Sistema</h1>
            <Link to="users/new">
              <Button>Novo Usuário</Button>
            </Link>
          </div>
          {users.length > 0 ? (
            <div className="max-w-3xl w-full bg-gradient-to-b from-amber-100/50 to-amber-100 px-8 py-8 mt-8 rounded-b-sm border-2 border-amber-100 shadow-lg">
              {users.map((user) => (
                <Card key={user.id} className="mb-4 px-8">
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
                      <div className="flex gap-2">
                        <strong>Idade:</strong>
                        <p>{user.age}</p>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="secondary">Editar</Button>
                      <Button variant="danger">Excluir</Button>
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

export default UserPage;
