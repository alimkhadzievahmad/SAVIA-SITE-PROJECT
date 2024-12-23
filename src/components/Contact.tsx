import React from 'react';
import { Phone, Mail, MapPin, Send } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-gray-50 dark:bg-gray-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
              Связаться с нами
            </h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
              Готовы обсудить ваш проект? Свяжитесь с нами любым удобным способом
            </p>

            <div className="mt-8 space-y-6">
              <div className="flex items-center">
                <Phone className="h-6 w-6 text-teal-600" />
                <span className="ml-4 text-gray-600 dark:text-gray-300">+7 (XXX) XXX-XX-XX</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-6 w-6 text-teal-600" />
                <span className="ml-4 text-gray-600 dark:text-gray-300">info@example.com</span>
              </div>
              <div className="flex items-center">
                <MapPin className="h-6 w-6 text-teal-600" />
                <span className="ml-4 text-gray-600 dark:text-gray-300">Нижний Новгород</span>
              </div>
            </div>

            <div className="mt-8">
              <a
                href="https://t.me/Ceh_SvoiPoshiv"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-teal-600 hover:bg-teal-700"
              >
                <Send className="h-5 w-5 mr-2" />
                Написать в Telegram
              </a>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-700 rounded-lg shadow-sm p-8">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              Оставить заявку
            </h3>
            <form className="mt-6 space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Имя
                </label>
                <input
                  type="text"
                  id="name"
                  className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 shadow-sm focus:border-teal-500 focus:ring-teal-500 dark:bg-gray-600 dark:text-white"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Телефон
                </label>
                <input
                  type="tel"
                  id="phone"
                  className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 shadow-sm focus:border-teal-500 focus:ring-teal-500 dark:bg-gray-600 dark:text-white"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Комментарий
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 shadow-sm focus:border-teal-500 focus:ring-teal-500 dark:bg-gray-600 dark:text-white"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-teal-600 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 dark:focus:ring-offset-gray-800"
              >
                Отправить заявку
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}