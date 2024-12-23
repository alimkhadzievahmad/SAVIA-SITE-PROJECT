import React from 'react';

export default function Products() {
  const products = [
    {
      title: 'Женская одежда',
      image: 'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?auto=format&fit=crop&q=80',
      items: ['Платья', 'Футболки', 'Толстовки']
    },
    {
      title: 'Мужская линия',
      image: 'https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?auto=format&fit=crop&q=80',
      items: ['Толстовки', 'Куртки', 'Штаны']
    },
    {
      title: 'Детский ассортимент',
      image: 'https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?auto=format&fit=crop&q=80',
      items: ['Комбинезоны', 'Футболки', 'Спортивные костюмы']
    },
    {
      title: 'Домашний текстиль',
      image: 'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&q=80',
      items: ['Постельное белье', 'Полотенца', 'Декоративные подушки']
    }
  ];

  return (
    <section id="products" className="py-24 bg-gray-50 dark:bg-gray-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
            Что мы шьём?
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
            Разнообразный ассортимент для различных категорий
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product, index) => (
            <div key={index} className="bg-white dark:bg-gray-700 rounded-lg overflow-hidden shadow-sm group cursor-pointer">
              <div className="aspect-w-3 aspect-h-2">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-48 object-cover transform transition-transform duration-200 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  {product.title}
                </h3>
                <ul className="mt-4 space-y-2">
                  {product.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="text-gray-600 dark:text-gray-300">
                      • {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}