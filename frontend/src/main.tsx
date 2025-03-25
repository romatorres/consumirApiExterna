import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import Users from "./Users/page";
import UserForm from "./Users/userForm";
import { Toaster } from "sonner";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Toaster richColors />
      <Routes>
        <Route path="/" element={<Users />} />
        <Route path="/users/new" element={<UserForm />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
