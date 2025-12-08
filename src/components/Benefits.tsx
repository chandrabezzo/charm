import { TrendingUp, Users, Clock, Shield } from 'lucide-react';

const benefits = [
  {
    icon: TrendingUp,
    title: 'Increase Revenue',
    description: 'Average 3x increase in sales',
    stats: '+300%',
    color: 'emerald'
  },
  {
    icon: Users,
    title: 'Grow Customer Base',
    description: 'Reach millions on WhatsApp',
    stats: '2B+',
    color: 'blue'
  },
  {
    icon: Clock,
    title: 'Save Time',
    description: 'Automate repetitive tasks',
    stats: '80%',
    color: 'orange'
  },
  {
    icon: Shield,
    title: 'Secure & Reliable',
    description: 'Enterprise-grade security',
    stats: '99.9%',
    color: 'green'
  }
];

export default function Benefits() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Why Choose CHARM?
          </h2>
          <p className="text-xl text-gray-600">
            Join thousands of businesses already growing their sales with our platform.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            const gradients = {
              emerald: 'from-emerald-500 to-emerald-600',
              blue: 'from-blue-500 to-blue-600',
              orange: 'from-orange-500 to-orange-600',
              green: 'from-green-500 to-green-600'
            };

            return (
              <div
                key={index}
                className="relative group"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${gradients[benefit.color as keyof typeof gradients]} rounded-2xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity`}></div>
                <div className="relative bg-white rounded-2xl p-8 shadow-lg border-2 border-gray-100 group-hover:border-transparent group-hover:shadow-2xl transition-all">
                  <div className={`w-14 h-14 bg-gradient-to-br ${gradients[benefit.color as keyof typeof gradients]} rounded-xl flex items-center justify-center mb-6 shadow-lg`}>
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <div className={`text-4xl font-bold bg-gradient-to-br ${gradients[benefit.color as keyof typeof gradients]} bg-clip-text text-transparent mb-2`}>
                    {benefit.stats}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600">
                    {benefit.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-20 bg-gradient-to-br from-emerald-600 to-blue-600 rounded-3xl p-12 text-white shadow-2xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl lg:text-4xl font-bold mb-6">
                Trusted by Leading Businesses
              </h3>
              <p className="text-emerald-50 text-lg leading-relaxed mb-8">
                From startups to enterprises, businesses worldwide trust CHARM to power their WhatsApp commerce operations and drive growth.
              </p>
              <div className="flex items-center space-x-8">
                <div>
                  <div className="text-3xl font-bold">150+</div>
                  <div className="text-emerald-100">Countries</div>
                </div>
                <div>
                  <div className="text-3xl font-bold">$50M+</div>
                  <div className="text-emerald-100">Processed</div>
                </div>
                <div>
                  <div className="text-3xl font-bold">4.9/5</div>
                  <div className="text-emerald-100">Rating</div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <div className="text-2xl font-bold mb-2">24/7</div>
                <div className="text-emerald-50 text-sm">Support Available</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <div className="text-2xl font-bold mb-2">5 min</div>
                <div className="text-emerald-50 text-sm">Setup Time</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <div className="text-2xl font-bold mb-2">API</div>
                <div className="text-emerald-50 text-sm">Integration Ready</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <div className="text-2xl font-bold mb-2">SOC 2</div>
                <div className="text-emerald-50 text-sm">Certified</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
