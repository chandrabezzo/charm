import { Link2, Settings, Rocket, CheckCircle2 } from 'lucide-react';

const steps = [
  {
    icon: Link2,
    number: '01',
    title: 'Connect WhatsApp Business',
    description: 'Link your WhatsApp Business account with CHARM using our secure one-click integration. Grant permissions and you\'re ready to go.'
  },
  {
    icon: Settings,
    number: '02',
    title: 'Configure Your Dashboard',
    description: 'Set up your business profile, working hours, product catalog, payment gateway, and delivery preferences from our intuitive dashboard.'
  },
  {
    icon: Rocket,
    number: '03',
    title: 'Launch & Grow',
    description: 'Start selling through WhatsApp and create Meta Ads campaigns to reach more customers. Track everything in real-time.'
  },
  {
    icon: CheckCircle2,
    number: '04',
    title: 'Scale Your Business',
    description: 'Use insights and analytics to optimize your operations, automate workflows, and maximize your revenue potential.'
  }
];

export default function HowItWorks() {
  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 to-emerald-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Get Started in Minutes
          </h2>
          <p className="text-xl text-gray-600">
            Simple, straightforward setup process to launch your WhatsApp commerce business.
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
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
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
