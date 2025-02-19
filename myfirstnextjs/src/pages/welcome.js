import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function WelcomePage() {
  const [sessionData, setSessionData] = useState(null);
  const router = useRouter();

  useEffect(() => {
    // Simulação de sessão válida
    setTimeout(() => {
      setSessionData({
        user: { username: "utilizador.teste@example.com" },
        token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
      });
    }, 1500);
  }, []);

  const handleLogout = () => {
    toast.info("Logout realizado!");
    setTimeout(() => router.push("/auth_login"), 1500);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-4">
      <h2 className="text-2xl font-bold mb-4">Bem-vindo</h2>

      {sessionData && (
        <div className="bg-gray-800 text-gray-300 p-3 rounded-md text-sm w-full max-w-md border border-gray-700 mb-4">
          <span className="font-semibold text-blue-400">Utilizador:</span>
          <pre className="mt-2 break-words whitespace-pre-wrap">{sessionData.user.username}</pre>

          <span className="font-semibold text-blue-400">Token JWT:</span>
          <pre className="mt-2 break-words whitespace-pre-wrap text-xs">{sessionData.token}</pre>
        </div>
      )}

      <button onClick={handleLogout} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
        Logout
      </button>
    </div>
  );
}
