import { Check, Zap, TrendingUp, Crown } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const plans = [
    {
        icon: Zap,
        nameKey: 'pricing.starter.name',
        priceIDR: '499.000',
        priceEN: 'Rp 499,000',
        period: 'pricing.perMonth',
        descKey: 'pricing.starter.description',
        color: 'blue',
        features: [
            'pricing.starter.feature1',
            'pricing.starter.feature2',
            'pricing.starter.feature3',
            'pricing.starter.feature4',
            'pricing.starter.feature5'
        ]
    },
    {
        icon: TrendingUp,
        nameKey: 'pricing.professional.name',
        priceIDR: '999.000',
        priceEN: 'Rp 999,000',
        period: 'pricing.perMonth',
        descKey: 'pricing.professional.description',
        color: 'emerald',
        popular: true,
        features: [
            'pricing.professional.feature1',
            'pricing.professional.feature2',
            'pricing.professional.feature3',
            'pricing.professional.feature4',
            'pricing.professional.feature5',
            'pricing.professional.feature6'
        ]
    },
    {
        icon: Crown,
        nameKey: 'pricing.enterprise.name',
        priceIDR: 'Custom',
        priceEN: 'Custom',
        period: 'pricing.perMonth',
        descKey: 'pricing.enterprise.description',
        color: 'purple',
        features: [
            'pricing.enterprise.feature1',
            'pricing.enterprise.feature2',
            'pricing.enterprise.feature3',
            'pricing.enterprise.feature4',
            'pricing.enterprise.feature5',
            'pricing.enterprise.feature6',
            'pricing.enterprise.feature7'
        ]
    }
];

export default function Pricing() {
    const { t, i18n } = useTranslation();

    return (
        <section className="py-24 bg-gradient-to-br from-gray-900 via-slate-900 to-gray-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                        {t('pricing.title')}
                    </h2>
                    <p className="text-xl text-gray-400">
                        {t('pricing.subtitle')}
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {plans.map((plan, index) => {
                        const Icon = plan.icon;
                        const isPopular = plan.popular;

                        return (
                            <div
                                key={index}
                                className={`relative rounded-3xl overflow-hidden transition-all duration-300 hover:-translate-y-2 ${isPopular
                                        ? 'bg-gradient-to-br from-emerald-600 to-green-600 shadow-2xl shadow-emerald-500/30 scale-105'
                                        : 'bg-gray-800/50 backdrop-blur-sm border border-gray-700'
                                    }`}
                            >
                                {isPopular && (
                                    <div className="absolute top-6 right-6 bg-yellow-400 text-gray-900 px-4 py-1 rounded-full font-semibold text-xs uppercase">
                                        {t('pricing.mostPopular')}
                                    </div>
                                )}

                                <div className="p-8">
                                    <div className={`inline-flex items-center space-x-2 mb-6`}>
                                        <Icon className={`w-6 h-6 ${isPopular ? 'text-white' : 'text-emerald-400'}`} />
                                        <h3 className={`text-2xl font-bold ${isPopular ? 'text-white' : 'text-white'}`}>
                                            {t(plan.nameKey)}
                                        </h3>
                                    </div>

                                    <p className={`mb-6 ${isPopular ? 'text-emerald-50' : 'text-gray-400'}`}>
                                        {t(plan.descKey)}
                                    </p>

                                    <div className="mb-6">
                                        <div className="flex items-baseline">
                                            <span className={`text-5xl font-bold ${isPopular ? 'text-white' : 'text-emerald-400'}`}>
                                                {plan.priceIDR === 'Custom' ? plan.priceIDR : (i18n.language === 'id' ? plan.priceIDR + 'K' : plan.priceEN)}
                                            </span>
                                            {plan.priceIDR !== 'Custom' && (
                                                <span className={`ml-2 ${isPopular ? 'text-emerald-100' : 'text-gray-400'}`}>
                                                    /{t(plan.period)}
                                                </span>
                                            )}
                                        </div>
                                    </div>

                                    <ul className="space-y-4 mb-8">
                                        {plan.features.map((featureKey, idx) => (
                                            <li key={idx} className="flex items-start space-x-3">
                                                <Check className={`w-5 h-5 flex-shrink-0 mt-0.5 ${isPopular ? 'text-white' : 'text-emerald-400'}`} />
                                                <span className={isPopular ? 'text-white' : 'text-gray-300'}>{t(featureKey)}</span>
                                            </li>
                                        ))}
                                    </ul>

                                    <button className={`w-full py-4 rounded-xl font-semibold transition-all ${isPopular
                                            ? 'bg-white hover:bg-gray-100 text-emerald-600 shadow-lg'
                                            : 'bg-emerald-600 hover:bg-emerald-700 text-white'
                                        }`}>
                                        {t('pricing.getStarted')}
                                    </button>
                                </div>
                            </div>
                        );
                    })}
                </div>

                <div className="mt-16 text-center">
                    <p className="text-gray-400 mb-6">
                        {t('pricing.needHelp')}
                    </p>
                    <button className="bg-gray-800 hover:bg-gray-700 text-white px-8 py-3 rounded-xl font-semibold border-2 border-gray-700 transition-all">
                        {t('pricing.contactSales')}
                    </button>
                </div>
            </div>
        </section>
    );
}
