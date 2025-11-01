import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function HomePage() {
  return (
    <div className="max-w-4xl mx-auto text-center py-24">
      <h1 className="text-5xl font-bold text-gray-900 mb-6">Chào mừng đến với Kinh Tế Chính Trị Mác-Lênin</h1>
      <p className="text-lg text-gray-600 mb-8">Tìm hiểu lý luận cơ bản và thực hành qua các tình huống mô phỏng.</p>

      <div className="grid md:grid-cols-2 gap-6">
        <Link to="/timeline" className="block bg-gradient-to-r from-indigo-600 to-indigo-500 text-white rounded-xl p-8 hover:scale-105 transition-transform">
          <h3 className="text-2xl font-bold">Lý Thuyết & Lịch Sử</h3>
          <p className="mt-2">Dòng thời gian phát triển học thuyết và nội dung chi tiết.</p>
        </Link>

        <Link to="/game" className="block bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-xl p-8 hover:scale-105 transition-transform">
          <h3 className="text-2xl font-bold">Mini Game Mô Phỏng</h3>
          <p className="mt-2">Áp dụng lý thuyết vào tình huống thực tế, rèn luyện tư duy kinh tế.</p>
          <div className="mt-4 inline-flex items-center">
            <span className="font-semibold">Bắt đầu</span>
            <ArrowRight className="w-4 h-4 ml-2" />
          </div>
        </Link>
      </div>
    </div>
  );
}
