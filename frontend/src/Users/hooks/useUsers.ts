import { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "sonner";

const url = "http://localhost:3000/api";

interface User {
  id: number;
  name: string;
  email: string;
  age: number;
}

export function useUsers() {
  const [users, setUsers] = useState<User[]>([]);

  const fetchUsers = async () => {
    try {
      const response = await axios.get<User[]>(url);
      setUsers(response.data);
      console.log("Usuarios carregados com sucesso!");
    } catch (error) {
      console.error(error);
    }
  };

  const createUser = async (userData: Omit<User, "id">) => {
    try {
      const response = await axios.post<User>(url, userData);
      setUsers((prevUsers) => [...prevUsers, response.data]);
      toast.success("Usuario criado com sucesso!");
      return response.data;
    } catch (error) {
      console.error(error);
      toast.error("Não foi possivel criar o usuario");
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);
  return { users, createUser };
}
