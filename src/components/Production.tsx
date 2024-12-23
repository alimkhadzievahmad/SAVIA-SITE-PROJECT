import React from 'react';
import { Factory, Wrench, Users, Package } from 'lucide-react';

export default function Production() {
  return (
    <section id="production" className="py-24 bg-gray-50 dark:bg-gray-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
            Технические возможности и масштабы
          </h2>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {[
            {
              icon: Factory,
              title: 'Мощность',
              description: '3000–5000 единиц ежемесячно с возможностью расширения'
            },
            {
              icon: Wrench,
              title: 'Оборудование',
              description: 'Прямострочки, оверлоки, пятинитки, плоскошовные машины и другое современное оборудование'
            },
            {
              icon: Users,
              title: 'Команда',
              description: '10 швей, технолог, закройщик, специалист ОТК – все с большим опытом'
            },
            {
              icon: Package,
              title: 'Минимальный тираж',
              description: 'От 50 единиц на цвет/модель'
            }
          ].map((item, index) => (
            <div key={index} className="bg-white dark:bg-gray-700 rounded-lg p-8 shadow-sm">
              <item.icon className="h-12 w-12 text-teal-600" />
              <h3 className="mt-6 text-xl font-semibold text-gray-900 dark:text-white">{item.title}</h3>
              <p className="mt-4 text-gray-600 dark:text-gray-300">{item.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16">
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">Работаем с тканями:</h3>
          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              'Трикотаж',
              'Костюмные ткани',
              'Плащевка (мембрана, софтшел)',
              'Джинса',
              'Экомех',
              'Ворсовые материалы'
            ].map((fabric, index) => (
              <div key={index} className="bg-white dark:bg-gray-700 rounded-lg p-4 border border-gray-200 dark:border-gray-600">
                <p className="text-gray-600 dark:text-gray-300">{fabric}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}