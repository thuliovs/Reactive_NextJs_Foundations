import { useState } from "react";
import Image from "next/image";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Input from "../components/ui/Input";
import Button from "../components/ui/Button";

export default function Auth() {
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username: formData.email, password: formData.password }),
      });

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem("token", data.token);
        toast.success("Login efetuado com sucesso! 🎉");
        setTimeout(() => window.location.href = "/welcome", 2000);
      } else {
        toast.error(data.message || "Falha no login. Verifique os seus dados.");
      }
    } catch (error) {
      toast.error("Erro inesperado. Tente novamente mais tarde.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 to-black text-white">
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-96 border border-gray-700 flex flex-col items-center">
        <Image src="/nextjs-icon.svg" alt="Next.js Logo" width={80} height={80} className="mb-4" />

        <form onSubmit={handleLogin} className="w-full">
          <Input label="E-mail" type="email" name="email" value={formData.email} onChange={handleChange} />
          <Input label="Password" type="password" name="password" value={formData.password} onChange={handleChange} />

          <Button text="Entrar" />

          <div className="text-center mt-4 text-sm">
            <a href="/recovery_password" className="text-blue-400 hover:underline">Recuperar password</a>
          </div>
        </form>

        <p className="text-center text-sm mt-4">
          Ainda não tem conta? <a href="/auth_registry" className="text-blue-400 hover:underline">Registe-se</a>
        </p>
      </div>

      {/* Notificações */}
      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
}