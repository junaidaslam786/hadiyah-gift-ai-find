
import React from 'react';
import { Gift, Users, Zap } from 'lucide-react';

const HowItWorksSection: React.FC = () => {
  const steps = [
    {
      icon: Gift,
      title: 'اختر المناسبة',
      description: 'حدد نوع المناسبة التي تريد شراء هدية لها'
    },
    {
      icon: Users,
      title: 'حدّد الشخص والميزانية',
      description: 'أخبرنا عن الشخص وميزانيتك المتاحة'
    },
    {
      icon: Zap,
      title: 'شاهد اقتراحات فورية',
      description: 'احصل على قائمة مخصصة من أفضل الهدايا'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-tiffany-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            كيف يعمل الموقع؟
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            ثلاث خطوات بسيطة للوصول إلى الهدية المثالية
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <div 
              key={index}
              className="text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group hover:border-tiffany-200 border border-transparent"
            >
              <div className="w-20 h-20 bg-tiffany-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-tiffany-200 transition-colors">
                <step.icon className="w-10 h-10 text-tiffany-600" />
              </div>
              
              <div className="relative mb-4">
                <span className="absolute -top-4 -right-4 bg-tiffany-500 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">
                  {index + 1}
                </span>
                <h3 className="text-2xl font-bold text-gray-800">
                  {step.title}
                </h3>
              </div>
              
              <p className="text-gray-600 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
