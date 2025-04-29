import { useAuth } from "../hooks/useAuth";
import { ShieldCheckIcon, UsersIcon, ChartPieIcon } from '@heroicons/react/24/outline';

const AdminPanel = () => {
  const { user } = useAuth();

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8 flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Panel de Administración</h1>
            <p className="text-lg text-gray-600">
              Bienvenido <strong className="text-blue-600">{user?.username}</strong>. Gestiona toda la plataforma desde aquí.
            </p>
          </div>
          <div className="flex items-center space-x-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-lg">
            <ShieldCheckIcon className="h-5 w-5" />
            <span className="font-medium">Administrador</span>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
            <div className="flex items-start mb-4">
              <div className="p-3 rounded-lg bg-red-100 mr-4">
                <UsersIcon className="h-6 w-6 text-red-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">Gestión de Usuarios</h3>
                <p className="text-sm text-gray-500 mt-1">Administra todos los usuarios del sistema</p>
              </div>
            </div>
            <button className="text-sm font-medium text-blue-600 hover:text-blue-800 transition-colors">
              Ver detalles →
            </button>
          </div>
          
          {/* Card 2 */}
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
            <div className="flex items-start mb-4">
              <div className="p-3 rounded-lg bg-purple-100 mr-4">
                
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">Configuración del Sistema</h3>
                <p className="text-sm text-gray-500 mt-1">Ajusta los parámetros globales de la plataforma</p>
              </div>
            </div>
            <button className="text-sm font-medium text-blue-600 hover:text-blue-800 transition-colors">
              Configurar →
            </button>
          </div>
          
          {/* Card 3 */}
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
            <div className="flex items-start mb-4">
              <div className="p-3 rounded-lg bg-green-100 mr-4">
                <ChartPieIcon className="h-6 w-6 text-green-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">Estadísticas</h3>
                <p className="text-sm text-gray-500 mt-1">Visualiza métricas y análisis de uso</p>
              </div>
            </div>
            <button className="text-sm font-medium text-blue-600 hover:text-blue-800 transition-colors">
              Ver reportes →
            </button>
          </div>
        </div>
        
        <div className="mt-8 bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Actividad Reciente del Sistema</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Fecha
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Evento
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Usuario
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    10/05/2023 14:30
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    Nuevo usuario registrado
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    usuario_nuevo
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    09/05/2023 09:15
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    Configuración actualizada
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {user?.username}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;