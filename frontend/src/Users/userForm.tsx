import React, { useState, FormEvent } from "react";
import { useUsers } from "./hooks/useUsers";
import Button from "../components/button";
import { useNavigate } from "react-router-dom";

export default function UserForm() {
  const navigate = useNavigate();
  const { createUser } = useUsers();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    age: "",
  });

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await createUser({
        ...formData,
        age: Number(formData.age),
      });
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <>
      <div className="w-full max-w-2xl mx-auto mt-10">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex flex-col gap-2">
            <label htmlFor="name">Nome:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="border p-2 rounded"
              required
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="border p-2 rounded"
              required
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="age">Idade:</label>
            <input
              type="number"
              id="age"
              name="age"
              value={formData.age}
              onChange={handleChange}
              className="border p-2 rounded"
              required
            />
          </div>

          <div className="flex gap-2">
            <Button type="submit">Salvar</Button>
            <Button
              type="button"
              variant="secondary"
              onClick={() => navigate("/")}
            >
              Cancelar
            </Button>
          </div>
        </form>
      </div>
    </>
  );
}
