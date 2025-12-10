import { MessageSquare, Store, Megaphone, GitBranch, Users2, BarChart4, ShoppingCart, CreditCard, Calendar, Shield, Webhook } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';

const allFeatures = {
    ai: [
        {
            icon: MessageSquare,
            titleKey: 'detailedFeatures.aiChat.title',
            descKey: 'detailedFeatures.aiChat.description',
            color: 'emerald'
        },
        {
            icon: Megaphone,
            titleKey: 'detailedFeatures.broadcast.title',
            descKey: 'detailedFeatures.broadcast.description',
            color: 'emerald'
        },
        {
            icon: Users2,
            titleKey: 'detailedFeatures.crm.title',
            descKey: 'detailedFeatures.crm.description',
            color: 'emerald'
        }
    ],
    store: [
        {
            icon: Store,
            titleKey: 'detailedFeatures.store.title',
            descKey: 'detailedFeatures.store.description',
            color: 'emerald'
        },
        {
            icon: ShoppingCart,
            titleKey: 'detailedFeatures.commerce.title',
            descKey: 'detailedFeatures.commerce.description',
            color: 'emerald'
        },
        {
            icon: Calendar,
            titleKey: 'detailedFeatures.booking.title',
            descKey: 'detailedFeatures.booking.description',
            color: 'emerald'
        }
    ],
    platform: [
        {
            icon: GitBranch,
            titleKey: 'detailedFeatures.flowBuilder.title',
            descKey: 'detailedFeatures.flowBuilder.description',
            color: 'emerald'
        },
        {
            icon: CreditCard,
            titleKey: 'detailedFeatures.payment.title',
            descKey: 'detailedFeatures.payment.description',
            color: 'emerald'
        },
        {
            icon: Shield,
            titleKey: 'detailedFeatures.verification.title',
            descKey: 'detailedFeatures.verification.description',
            color: 'emerald'
        },
        {
            icon: Webhook,
            titleKey: 'detailedFeatures.integration.title',
            descKey: 'detailedFeatures.integration.description',
            color: 'emerald'
        },
        {
            icon: BarChart4,
            titleKey: 'detailedFeatures.analytics.title',
            descKey: 'detailedFeatures.analytics.description',
            color: 'emerald'
        }
    ]
};

export default function DetailedFeatures() {
    const { t } = useTranslation();
    const [activeCategory, setActiveCategory] = useState<'ai' | 'store' | 'platform'>('ai');

    const categories = [
        { key: 'ai', labelKey: 'detailedFeatures.categories.ai' },
        { key: 'store', labelKey: 'detailedFeatures.categories.store' },
        { key: 'platform', labelKey: 'detailedFeatures.categories.platform' }
    ];

    const currentFeatures = allFeatures[activeCategory];

    return (
        <section className="py-24 bg-gradient-to-br from-gray-900 via-slate-900 to-gray-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-12">
                    <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
                        {t('detailedFeatures.title')}
                    </h2>
                    <p className="text-xl text-gray-400">
                        {t('detailedFeatures.subtitle')}
                    </p>
                </div>

                {/* Category Tabs */}
                <div className="flex justify-center mb-12">
                    <div className="inline-flex bg-gray-800/50 backdrop-blur-sm rounded-xl p-1 border border-gray-700">
                        {categories.map((category) => (
                            <button
                                key={category.key}
                                onClick={() => setActiveCategory(category.key as 'ai' | 'store' | 'platform')}
                                className={`px-6 py-3 rounded-lg font-medium transition-all ${activeCategory === category.key
                                    ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-600/30'
                                    : 'text-gray-400 hover:text-white'
                                    }`}
                            >
                                {t(category.labelKey)}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {currentFeatures.map((feature, index) => {
                        const Icon = feature.icon;
                        return (
                            <div
                                key={index}
                                className="group bg-gray-800/30 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 hover:border-emerald-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-emerald-500/10"
                            >
                                <div className="w-16 h-16 bg-emerald-500/20 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-emerald-500/30 transition-all">
                                    <Icon className="w-8 h-8 text-emerald-400" />
                                </div>

                                <h3 className="text-xl font-bold text-white mb-3">
                                    {t(feature.titleKey)}
                                </h3>

                                <p className="text-gray-400 leading-relaxed">
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
