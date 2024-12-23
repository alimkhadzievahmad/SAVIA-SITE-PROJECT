import React from 'react';
import { CheckCircle } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-24 bg-white dark:bg-gray-900 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
              О компании
            </h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
              Наша компания специализируется на пошиве женской, мужской и детской одежды
              для клиентов из Москвы и всей России. Наши талантливые дизайнеры разрабатывают
              индивидуальные корпоративные стили, логотипы и авторские рисунки.
            </p>
            
            <div className="mt-8 space-y-4">
              {[
                'Гибкая система скидок для оптовых клиентов',
                'Гарантия сроков. Собственные производственные мощности',
                'Представлены на Wildberries и Ozon'
              ].map((item, index) => (
                <div key={index} className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-teal-600 flex-shrink-0" />
                  <p className="ml-3 text-lg text-gray-600 dark:text-gray-300">{item}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="mt-12 lg:mt-0">
            <div className="grid grid-cols-2 gap-4">
              <img
                className="rounded-lg object-cover"
                src="https://images.unsplash.com/photo-1556740738-b6a63e27c4df?auto=format&fit=crop&q=80"
                alt="Швейное оборудование"
              />
              <img
                className="rounded-lg object-cover"
                src="https://images.unsplash.com/photo-1574634534894-89d7576c8259?auto=format&fit=crop&q=80"
                alt="Коллектив за работой"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}