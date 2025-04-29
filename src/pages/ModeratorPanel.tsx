import { useAuth } from "../hooks/useAuth";

const ModeratorPanel = () => {
  const { user } = useAuth();

  return (
    <section className="p-8">
      <h1 className="text-3xl font-bold mb-4 text-purple-700">Panel de Moderador</h1>
      <p className="text-lg text-gray-600">
        ¡Hola <strong>{user?.username}</strong>! Desde aquí puedes moderar comentarios, publicaciones y reportes de usuarios.
      </p>
    </section>
  );
};

export default ModeratorPanel;
