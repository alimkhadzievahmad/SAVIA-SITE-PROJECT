import React from 'react';
import { Scissors } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 dark:bg-black">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1">
            <div className="flex items-center">
              <Scissors className="h-8 w-8 text-teal-500" />
              <span className="ml-2 text-xl font-semibold text-white">SAVIA</span>
            </div>
            <p className="mt-4 text-gray-400">
              Качественный пошив одежды для брендов по всей России
            </p>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
              Компания
            </h3>
            <ul className="mt-4 space-y-4">
              <li>
                <a href="#about" className="text-base text-gray-300 hover:text-white">
                  О компании
                </a>
              </li>
              <li>
                <a href="#production" className="text-base text-gray-300 hover:text-white">
                  Производство
                </a>
              </li>
              <li>
                <a href="#services" className="text-base text-gray-300 hover:text-white">
                  Услуги
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
              Контакты
            </h3>
            <ul className="mt-4 space-y-4">
              <li>
                <a href="tel:+7XXXXXXXXXX" className="text-base text-gray-300 hover:text-white">
                  +7 (XXX) XXX-XX-XX
                </a>
              </li>
              <li>
                <a href="mailto:info@example.com" className="text-base text-gray-300 hover:text-white">
                  info@example.com
                </a>
              </li>
              <li>
                <a href="https://t.me/Ceh_SvoiPoshiv" className="text-base text-gray-300 hover:text-white">
                  Telegram
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
              Юридическая информация
            </h3>
            <ul className="mt-4 space-y-4">
              <li>
                <a href="#" className="text-base text-gray-300 hover:text-white">
                  Политика конфиденциальности
                </a>
              </li>
              <li>
                <span className="text-base text-gray-300">
                  ИНН: XXXXXXXXXX
                </span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 border-t border-gray-800 pt-8">
          <p className="text-base text-gray-400 text-center">
            © 2024 SAVIA. Все права защищены.
          </p>
        </div>
      </div>
    </footer>
  );
}