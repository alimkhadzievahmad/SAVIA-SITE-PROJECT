import React from 'react';
import { Scissors, Box, Printer, Award, Package as PackageIcon, Truck } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: Scissors,
      title: 'Пошив «под ключ»',
      description: 'Берём на себя разработку лекал, поиск и закуп ткани, производство и упаковку. Подходит для крупных партий.'
    },
    {
      icon: Box,
      title: 'Пошив на давальческой основе',
      description: 'Работаем по вашим лекалам и с вашей тканью и фурнитурой. От 50 единиц на цвет.'
    },
    {
      icon: Printer,
      title: 'Печать принтов и вышивка',
      description: 'Позволяем дополнить изделия логотипами, надписями и графикой на ваш вкус.'
    },
    {
      icon: Award,
      title: 'Сертификация',
      description: 'Наше производство сертифицировано, оформляем нужные документы и коды маркировки по РФ.'
    },
    {
      icon: PackageIcon,
      title: 'Упаковка и отправка',
      description: 'Предлагаем услуги по сборке, упаковке, маркировке и доставке заказов на склады.'
    },
    {
      icon: Truck,
      title: 'Доставка',
      description: 'Самовывоз из Нижнего Новгорода, доставка до Москвы и по всей России в кратчайшие сроки.'
    }
  ];

  return (
    <section id="services" className="py-24 bg-white dark:bg-gray-900 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
            Наши услуги
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
            Полный спектр услуг по пошиву и обработке одежды
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div key={index} className="relative group">
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-8 transition-all duration-200 group-hover:shadow-md dark:shadow-gray-900/30">
                <service.icon className="h-12 w-12 text-teal-600" />
                <h3 className="mt-6 text-xl font-semibold text-gray-900 dark:text-white">
                  {service.title}
                </h3>
                <p className="mt-4 text-gray-600 dark:text-gray-300">
                  {service.description}
                </p>
                <button className="mt-6 text-teal-600 dark:text-teal-500 font-medium group-hover:text-teal-700 dark:group-hover:text-teal-400">
                  Подробнее →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}