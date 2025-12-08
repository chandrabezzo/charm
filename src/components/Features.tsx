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

const features = [
  {
    icon: Smartphone,
    title: 'WhatsApp Business Manager',
    description: 'Complete control over your WhatsApp Business profile, automated responses, and customer engagement tools.',
    color: 'emerald'
  },
  {
    icon: Package,
    title: 'Product Catalog Management',
    description: 'Easily add, edit, and organize your product catalogs with rich media support and instant sync.',
    color: 'blue'
  },
  {
    icon: Clock,
    title: 'Smart Working Hours',
    description: 'Set business hours, auto-responses, and manage availability across different time zones effortlessly.',
    color: 'orange'
  },
  {
    icon: CreditCard,
    title: 'Payment Gateway Integration',
    description: 'Accept payments directly through WhatsApp with multiple payment methods and secure transactions.',
    color: 'green'
  },
  {
    icon: Truck,
    title: 'Delivery Management',
    description: 'Integrate delivery services with WhatsApp Flow for seamless order fulfillment and tracking.',
    color: 'cyan'
  },
  {
    icon: BarChart3,
    title: 'Meta Ads Integration',
    description: 'Create and manage Meta advertising campaigns directly from your dashboard to boost sales.',
    color: 'red'
  },
  {
    icon: ShoppingCart,
    title: 'Commerce Dashboard',
    description: 'Powerful analytics and insights to track sales, customer behavior, and business performance.',
    color: 'violet'
  },
  {
    icon: Zap,
    title: 'One-Click Connection',
    description: 'Simple WhatsApp Business API integration with secure authentication and instant setup.',
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
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Everything You Need to Succeed
          </h2>
          <p className="text-xl text-gray-600">
            Powerful features designed to streamline your WhatsApp commerce operations and accelerate growth.
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
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
