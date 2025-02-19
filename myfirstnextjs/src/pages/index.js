import { useEffect } from "react";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    router.replace("/auth_login"); // Redireciona para a página de login automaticamente
  }, []);

  return (
    <div className="flex items-center justify-center h-screen bg-gray-900 text-white">
      <p>Loading ...</p>
    </div>
  );
}