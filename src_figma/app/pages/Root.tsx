import { Outlet } from 'react-router';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

export default function Root() {
  return (
    <div className="min-h-screen bg-white font-['Inter',sans-serif]">
      <Header />
      <div className="h-[68px]" />
      <Outlet />
      <Footer />
    </div>
  );
}
