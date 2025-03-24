import { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "sonner";

const url = "http://localhost:3000/api";

export function useUsers() {
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    try {
      const response = await axios.get(url);
      setUsers(response.data);
      toast.success("Usuarios carregados com sucesso!");
    } catch (error) {
      console.error(error);
      toast.error("Não foi possivel carregar os usuarios");
    }
  };
  useEffect(() => {
    fetchUsers();
  }, []);
  return { users };
}
