import React from 'react';
import { ClipboardList, Calculator, Scissors, FileText, Factory, Package } from 'lucide-react';

export default function Process() {
  const steps = [
    {
      icon: ClipboardList,
      title: 'Заявка/бриф',
      description: 'Заполняете форму или пишете в Телеграм. Присылаете ТЗ, эскизы, референсы.'
    },
    {
      icon: Calculator,
      title: 'Расчёт стоимости',
      description: 'Менеджер уточняет детали и даёт коммерческое предложение в течение 1–2 рабочих дней.'
    },
    {
      icon: Scissors,
      title: 'Отшив образца',
      description: 'Согласовываем ткань, фурнитуру, принты. Отшиваем тестовый экземпляр для утверждения.'
    },
    {
      icon: FileText,
      title: 'Заключение договора',
      description: 'Утверждаем финальные условия, подписываем договор. Вносится предоплата.'
    },
    {
      icon: Factory,
      title: 'Массовый пошив',
      description: 'Производство запускается по согласованным спецификациям. ОТК контролирует качество.'
    },
    {
      icon: Package,
      title: 'Сдача и доставка',
      description: 'Маркируем, упаковываем, отправляем партию. Доставка в Москву, регионы или на склады маркетплейсов.'
    }
  ];

  return (
    <section id="process" className="py-24 bg-white dark:bg-gray-900 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
            Этапы работы
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
            Прозрачный процесс сотрудничества от заявки до готовой продукции
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {steps.map((step, index) => (
            <div key={index} className="relative group">
              <div className="bg-white dark:bg-gray-800 rounded-lg p-8 border border-gray-200 dark:border-gray-700 transition-all duration-200 group-hover:border-teal-600 dark:group-hover:border-teal-500">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <span className="flex items-center justify-center h-12 w-12 rounded-md bg-teal-600 text-white">
                      <step.icon className="h-6 w-6" />
                    </span>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                      {step.title}
                    </h3>
                  </div>
                </div>
                <p className="mt-4 text-gray-600 dark:text-gray-300">
                  {step.description}
                </p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 left-full w-8 transform -translate-x-4">
                  <div className="h-0.5 w-full bg-gray-300 dark:bg-gray-700"></div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}