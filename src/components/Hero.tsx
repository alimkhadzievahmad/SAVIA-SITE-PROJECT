import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative bg-gray-50 dark:bg-gray-900">
      <div className="absolute inset-0">
        <img
          className="w-full h-full object-cover"
          src="https://i.imghippo.com/files/Tbh7886Slc.jpg"
          alt="Швейное производство"
        />
        <div className="absolute inset-0 bg-gray-900/70 mix-blend-multiply" />
      </div>
      
      <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
          Производим одежду для брендов<br />по всей России
        </h1>
        <p className="mt-6 max-w-3xl text-xl text-gray-300">
          Шьём женскую, мужскую и детскую одежду. Разрабатываем индивидуальные стили,
          логотипы и красивые принты. Гарантируем сроки и качество даже при крупных заказах.
        </p>
        
        <div className="mt-10 flex items-center gap-x-6">
          <button className="rounded-md bg-teal-600 px-6 py-3 text-lg font-semibold text-white shadow-sm hover:bg-teal-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600">
            Оставить заявку
          </button>
          <button className="text-lg font-semibold leading-6 text-white flex items-center gap-2">
            Узнать подробности <ArrowRight className="h-5 w-5" />
          </button>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {[
            'Выпускаем 3000–5000 изделий ежемесячно',
            'Шьём под ключ или на давальческой основе',
            'Полный контроль качества на всех этапах',
            'Принимаем заказы от 50 единиц на цвет/модель'
          ].map((feature, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 dark:bg-gray-800/30">
              <p className="text-lg font-medium text-white">{feature}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}