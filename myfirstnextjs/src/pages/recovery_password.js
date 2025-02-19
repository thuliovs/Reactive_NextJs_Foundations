import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Input from "../components/ui/Input";
import Button from "../components/ui/Button";
import { useRouter } from "next/router";

export default function RecoverPassword() {
  const [email, setEmail] = useState("");
  const router = useRouter();
  const emailInputRef = useRef(null);

  useEffect(() => {
    if (emailInputRef.current) {
      emailInputRef.current.focus();
    }
  }, []);

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const handleRecover = (e) => {
    e.preventDefault();

    // Simulação de envio de email de recuperação
    setTimeout(() => {
      if (email.includes("@")) {
        toast.success("E-mail de recuperação enviado! 📩");
      } else {
        toast.error("Erro ao recuperar password.");
      }
    }, 1500);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 to-black text-white">
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-96 border border-gray-700 flex flex-col items-center">
        <div className="flex items-center space-x-3 mb-4">
          <Image src="/nextjs-icon.svg" alt="Next.js Logo" width={40} height={40} />
          <h2 className="text-2xl font-semibold">Recuperar Password</h2>
        </div>

        <form onSubmit={handleRecover} className="w-full">
          <Input label="E-mail" type="email" name="email" value={email} onChange={handleChange} ref={emailInputRef} />
          <Button text="Recuperar" />

          <p className="text-center text-sm mt-4">
            Lembrou-se da password?{" "}
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
