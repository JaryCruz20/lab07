import { ArrowRightIcon, RocketLaunchIcon } from '@heroicons/react/24/outline';

const Home = () => {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen text-center px-6 bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="max-w-2xl mx-auto">
        <div className="inline-flex items-center justify-center bg-blue-100 p-4 rounded-full mb-6">
          <RocketLaunchIcon className="h-8 w-8 text-blue-600" />
        </div>
        <h1 className="text-5xl font-bold mb-6 text-gray-900">Bienvenido a MiApp </h1>
        <p className="text-xl text-gray-600 mb-8 leading-relaxed">
          Una plataforma moderna diseñada para optimizar tu productividad. Accede a tu cuenta para explorar todas las funciones disponibles según tu rol.
        </p>
        <div className="flex justify-center space-x-4">
          <a 
            href="/login" 
            className="btn-primary flex items-center space-x-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
          >
            <span>Iniciar Sesión</span>
            <ArrowRightIcon className="h-5 w-5" />
          </a>
          <a 
            href="/register" 
            className="btn-outline flex items-center space-x-2 px-6 py-3 border border-blue-600 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
          >
            <span>Registrarse</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;