import { Book, Gamepad2, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';

function AppLayout() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navButtonClass = (isActive: boolean) =>
    `flex items-center space-x-2 px-4 py-2 rounded-lg transition-all ${
      isActive ? 'bg-white text-red-700 shadow-md' : 'bg-red-600 hover:bg-red-500'
    }`;

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-yellow-50">
      <nav className="bg-red-700 text-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <Book className="w-8 h-8" />
              <div>
                <h1 className="text-xl font-bold">Kinh Tế Chính Trị Mác - Lênin</h1>
                <p className="text-xs text-red-100">Marxist-Leninist Political Economy</p>
              </div>
            </div>

            <div className="hidden md:flex space-x-4">
              <NavLink to="/" end className={({ isActive }: { isActive: boolean }) => navButtonClass(isActive)}>
                <span className="w-5 h-5 font-bold">🏠</span>
                <span>Trang Chủ</span>
              </NavLink>
              <NavLink to="/timeline" className={({ isActive }: { isActive: boolean }) => navButtonClass(isActive)}>
                <Book className="w-5 h-5" />
                <span>Lý Thuyết</span>
              </NavLink>
              <NavLink to="/game" className={({ isActive }: { isActive: boolean }) => navButtonClass(isActive)}>
                <Gamepad2 className="w-5 h-5" />
                <span>Mini Game</span>
              </NavLink>
            </div>

            <button
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {mobileMenuOpen && (
            <div className="md:hidden pb-4 space-y-2">
              <Link
                to="/"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center space-x-2 px-4 py-2 rounded-lg bg-red-600 hover:bg-red-500"
              >
                <span className="w-5 h-5">🏠</span>
                <span>Trang Chủ</span>
              </Link>
              <Link
                to="/timeline"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center space-x-2 px-4 py-2 rounded-lg bg-red-600 hover:bg-red-500"
              >
                <Book className="w-5 h-5" />
                <span>Lý Thuyết</span>
              </Link>
              <Link
                to="/game"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center space-x-2 px-4 py-2 rounded-lg bg-red-600 hover:bg-red-500"
              >
                <Gamepad2 className="w-5 h-5" />
                <span>Mini Game</span>
              </Link>
            </div>
          )}
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Outlet />
      </main>

      <footer className="bg-gray-800 text-white py-6 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm">Trang web học tập Kinh Tế Chính Trị Mác - Lênin</p>
          <p className="text-xs text-gray-400 mt-2">
            Củng cố niềm tin vào cuộc sống, chủ trương đường lối của Đảng, chính sách và pháp luật của Nhà nước
          </p>
        </div>
      </footer>
    </div>
  );
}

export default AppLayout;
