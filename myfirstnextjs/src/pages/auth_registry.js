import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Input from "../components/ui/Input";
import Button from "../components/ui/Button";
import { useRouter } from "next/router";

export default function Register() {
  const [formData, setFormData] = useState({ email: "", password: "", confirmPassword: "" });
  const router = useRouter();
  const emailInputRef = useRef(null);

  useEffect(() => {
    if (emailInputRef.current) {
      emailInputRef.current.focus();
    }
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRegister = (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      toast.error("As palavras-passe não coincidem!");
      return;
    }

    // Simulação de registo
    setTimeout(() => {
      if (formData.email.includes("@")) {
        toast.success("Registo efetuado com sucesso! 🚀");
        setTimeout(() => router.push("/auth_login"), 2000);
      } else {
        toast.error("Erro ao registar. Verifique os dados.");
      }
    }, 1500);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 to-black text-white">
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-96 border border-gray-700 flex flex-col items-center">
        <div className="flex items-center space-x-3 mb-4">
          <Image src="/nextjs-icon.svg" alt="Next.js Logo" width={40} height={40} />
          <h2 className="text-2xl font-semibold">Criar Conta</h2>
        </div>

        <form onSubmit={handleRegister} className="w-full">
          <Input label="E-mail" type="email" name="email" value={formData.email} onChange={handleChange} ref={emailInputRef} />
          <Input label="Password" type="password" name="password" value={formData.password} onChange={handleChange} />
          <Input label="Confirmar Password" type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} />

          <Button text="Registar" />

          <p className="text-center text-sm mt-4">
            Já tem conta?{" "}
            <a onClick={() => router.push("/auth_login")} className="text-blue-400 hover:underline cursor-pointer">
              Inicie sessão
            </a>
          </p>
        </form>
      </div>

      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
}