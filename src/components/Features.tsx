import {
  Smartphone,
  ShoppingCart,
  CreditCard,
  Truck,
  BarChart3,
  Zap,
  Clock,
  Package
} from 'lucide-react';
import { useTranslation } from 'react-i18next';

const features = [
  {
    icon: Smartphone,
    titleKey: 'features.items.whatsappManager.title',
    descKey: 'features.items.whatsappManager.description',
    color: 'emerald'
  },
  {
    icon: Package,
    titleKey: 'features.items.catalogManagement.title',
    descKey: 'features.items.catalogManagement.description',
    color: 'blue'
  },
  {
    icon: Clock,
    titleKey: 'features.items.workingHours.title',
    descKey: 'features.items.workingHours.description',
    color: 'orange'
  },
  {
    icon: CreditCard,
    titleKey: 'features.items.paymentGateway.title',
    descKey: 'features.items.paymentGateway.description',
    color: 'green'
  },
  {
    icon: Truck,
    titleKey: 'features.items.deliveryManagement.title',
    descKey: 'features.items.deliveryManagement.description',
    color: 'cyan'
  },
  {
    icon: BarChart3,
    titleKey: 'features.items.metaAds.title',
    descKey: 'features.items.metaAds.description',
    color: 'red'
  },
  {
    icon: ShoppingCart,
    titleKey: 'features.items.commerceDashboard.title',
    descKey: 'features.items.commerceDashboard.description',
    color: 'violet'
  },
  {
    icon: Zap,
    titleKey: 'features.items.oneClickConnection.title',
    descKey: 'features.items.oneClickConnection.description',
    color: 'yellow'
  }
];

const colorClasses = {
  emerald: 'bg-emerald-100 text-emerald-600',
  blue: 'bg-blue-100 text-blue-600',
  orange: 'bg-orange-100 text-orange-600',
  green: 'bg-green-100 text-green-600',
  cyan: 'bg-cyan-100 text-cyan-600',
  red: 'bg-red-100 text-red-600',
  violet: 'bg-violet-100 text-violet-600',
  yellow: 'bg-yellow-100 text-yellow-600'
};

export default function Features() {
  const { t } = useTranslation();

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            {t('features.title')}
          </h2>
          <p className="text-xl text-gray-600">
            {t('features.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group bg-white border-2 border-gray-100 rounded-2xl p-6 hover:border-emerald-200 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className={`w-14 h-14 ${colorClasses[feature.color as keyof typeof colorClasses]} rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform`}>
                  <Icon className="w-7 h-7" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  {t(feature.titleKey)}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {t(feature.descKey)}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
