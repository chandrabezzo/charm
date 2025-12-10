import { Link2, Settings, Rocket, CheckCircle2 } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const steps = [
  {
    icon: Link2,
    number: '01',
    titleKey: 'howItWorks.steps.connect.title',
    descKey: 'howItWorks.steps.connect.description'
  },
  {
    icon: Settings,
    number: '02',
    titleKey: 'howItWorks.steps.configure.title',
    descKey: 'howItWorks.steps.configure.description'
  },
  {
    icon: Rocket,
    number: '03',
    titleKey: 'howItWorks.steps.launch.title',
    descKey: 'howItWorks.steps.launch.description'
  },
  {
    icon: CheckCircle2,
    number: '04',
    titleKey: 'howItWorks.steps.scale.title',
    descKey: 'howItWorks.steps.scale.description'
  }
];

export default function HowItWorks() {
  const { t } = useTranslation();

  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 to-emerald-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            {t('howItWorks.title')}
          </h2>
          <p className="text-xl text-gray-600">
            {t('howItWorks.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-emerald-200 via-emerald-400 to-emerald-200"></div>

          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="relative">
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-gray-100 relative z-10">
                  <div className="flex items-center justify-between mb-6">
                    <div className="bg-gradient-to-br from-emerald-500 to-emerald-600 text-white w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg shadow-emerald-500/30">
                      <Icon className="w-8 h-8" />
                    </div>
                    <span className="text-5xl font-bold text-emerald-100">
                      {step.number}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {t(step.titleKey)}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {t(step.descKey)}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
