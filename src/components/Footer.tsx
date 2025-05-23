
import React from 'react';
import { Instagram, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Logo and Description */}
          <div className="space-y-4">
            <h3 className="text-3xl font-bold text-tiffany-400">هدية</h3>
            <p className="text-gray-300 leading-relaxed">
              أداة ذكية تساعدك في العثور على الهدية المثالية باستخدام الذكاء الاصطناعي
            </p>
          </div>

          {/* Links */}
          <div className="space-y-4">
            <h4 className="text-xl font-semibold">روابط مهمة</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-300 hover:text-tiffany-400 transition-colors">
                  من نحن
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-tiffany-400 transition-colors">
                  سياسة الخصوصية
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-tiffany-400 transition-colors">
                  تواصل معنا
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-tiffany-400 transition-colors">
                  الأسئلة الشائعة
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div className="space-y-4">
            <h4 className="text-xl font-semibold">تابعنا</h4>
            <div className="flex gap-4">
              <a 
                href="#" 
                className="w-12 h-12 bg-tiffany-500 rounded-full flex items-center justify-center hover:bg-tiffany-600 transition-colors"
              >
                <Instagram className="w-6 h-6" />
              </a>
              <a 
                href="#" 
                className="w-12 h-12 bg-tiffany-500 rounded-full flex items-center justify-center hover:bg-tiffany-600 transition-colors"
              >
                <Twitter className="w-6 h-6" />
              </a>
              <a 
                href="#" 
                className="w-12 h-12 bg-tiffany-500 rounded-full flex items-center justify-center hover:bg-tiffany-600 transition-colors text-xl font-bold"
              >
                تك
              </a>
            </div>
            <p className="text-sm text-gray-400">
              اشترك في نشرتنا الإخبارية للحصول على أحدث العروض
            </p>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © ٢٠٢٥ جميع الحقوق محفوظة لـ هدية
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
