import React from 'react';
import { Menu, Phone, Mail, MessageCircle, ChevronDown, Scissors } from 'lucide-react';
import Hero from './components/Hero';
import About from './components/About';
import Production from './components/Production';
import Services from './components/Services';
import Products from './components/Products';
import Process from './components/Process';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ThemeToggle from './components/ThemeToggle';

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white dark:bg-gray-900 shadow-sm dark:shadow-gray-800 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Scissors className="h-8 w-8 text-teal-600" />
              <span className="ml-2 text-xl font-semibold text-gray-900 dark:text-white">SAVIA</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#about" className="text-gray-600 dark:text-gray-300 hover:text-teal-600 dark:hover:text-teal-500">О компании</a>
              <a href="#production" className="text-gray-600 dark:text-gray-300 hover:text-teal-600 dark:hover:text-teal-500">Производство</a>
              <a href="#services" className="text-gray-600 dark:text-gray-300 hover:text-teal-600 dark:hover:text-teal-500">Услуги</a>
              <a href="#contact" className="text-gray-600 dark:text-gray-300 hover:text-teal-600 dark:hover:text-teal-500">Контакты</a>
              <ThemeToggle />
              <button className="bg-teal-600 text-white px-4 py-2 rounded-md hover:bg-teal-700">
                Оставить заявку
              </button>
            </div>
            <div className="md:hidden flex items-center space-x-4">
              <ThemeToggle />
              <button className="text-gray-600 dark:text-gray-300">
                <Menu className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      <main className="pt-16">
        <Hero />
        <About />
        <Production />
        <Services />
        <Products />
        <Process />
        <Contact />
      </main>

      <Footer />

      {/* Chat Widget */}
      <div className="fixed bottom-6 right-6 bg-teal-600 text-white p-3 rounded-full shadow-lg cursor-pointer hover:bg-teal-700">
        <MessageCircle className="h-6 w-6" />
      </div>
    </div>
  );
}

export default App;