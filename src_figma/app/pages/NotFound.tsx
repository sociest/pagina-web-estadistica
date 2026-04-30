import { Link } from 'react-router';
import { Home } from 'lucide-react';

export default function NotFound() {
  return (
    <main className="flex items-center justify-center min-h-[70vh] px-4">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-[#00a5a8] mb-4">404</h1>
        <p className="text-xl text-gray-700 mb-8">Página no encontrada</p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-6 py-3 bg-[#00a5a8] text-white rounded-lg hover:bg-[#008b8d] transition-colors"
        >
          <Home size={20} />
          Volver al Inicio
        </Link>
      </div>
    </main>
  );
}
