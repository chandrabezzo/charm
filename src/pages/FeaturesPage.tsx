import { CheckCircle, Bot, ShoppingBag, Megaphone, Database, Ticket, Plug, ShoppingCart, CreditCard, Calendar, Users, BarChart3, Brain, Shuffle, RefreshCw, ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function FeaturesPage() {
    const { t } = useTranslation();
    const [activeCategory, setActiveCategory] = useState('platform');

    const categories = [
        { key: 'aiFlow', icon: Bot, label: 'AI Chat & Flow' },
        { key: 'store', icon: ShoppingBag, label: 'Store' },
        { key: 'broadcast', icon: Megaphone, label: 'Broadcast & Marketing' },
        { key: 'platform', icon: Database, label: 'Platform & CRM' }
    ];

    const features = {
        platform: [
            {
                icon: CheckCircle,
                titleKey: 'featuresPage.platform.waba.title',
                descKey: 'featuresPage.platform.waba.description',
                benefitsKey: 'featuresPage.platform.waba.benefits',
                ctaKey: 'featuresPage.platform.waba.cta',
                color: 'emerald'
            },
            {
                icon: Ticket,
                titleKey: 'featuresPage.platform.crm.title',
                descKey: 'featuresPage.platform.crm.description',
                benefitsKey: 'featuresPage.platform.crm.benefits',
                ctaKey: 'featuresPage.platform.crm.cta',
                color: 'emerald'
            },
            {
                icon: Plug,
                titleKey: 'featuresPage.platform.api.title',
                descKey: 'featuresPage.platform.api.description',
                benefitsKey: 'featuresPage.platform.api.benefits',
                ctaKey: 'featuresPage.platform.api.cta',
                color: 'emerald'
            }
        ],
        store: [
            {
                icon: ShoppingCart,
                titleKey: 'featuresPage.store.conversational.title',
                descKey: 'featuresPage.store.conversational.description',
                benefitsKey: 'featuresPage.store.conversational.benefits',
                ctaKey: 'featuresPage.store.conversational.cta',
                color: 'emerald'
            },
            {
                icon: CreditCard,
                titleKey: 'featuresPage.store.payment.title',
                descKey: 'featuresPage.store.payment.description',
                benefitsKey: 'featuresPage.store.payment.benefits',
                ctaKey: 'featuresPage.store.payment.cta',
                color: 'emerald'
            },
            {
                icon: Calendar,
                titleKey: 'featuresPage.store.booking.title',
                descKey: 'featuresPage.store.booking.description',
                benefitsKey: 'featuresPage.store.booking.benefits',
                ctaKey: 'featuresPage.store.booking.cta',
                color: 'emerald'
            }
        ],
        broadcast: [
            {
                icon: Megaphone,
                titleKey: 'featuresPage.broadcast.mass.title',
                descKey: 'featuresPage.broadcast.mass.description',
                benefitsKey: 'featuresPage.broadcast.mass.benefits',
                ctaKey: 'featuresPage.broadcast.mass.cta',
                color: 'emerald'
            },
            {
                icon: Users,
                titleKey: 'featuresPage.broadcast.segmentation.title',
                descKey: 'featuresPage.broadcast.segmentation.description',
                benefitsKey: 'featuresPage.broadcast.segmentation.benefits',
                ctaKey: 'featuresPage.broadcast.segmentation.cta',
                color: 'emerald'
            },
            {
                icon: BarChart3,
                titleKey: 'featuresPage.broadcast.analytics.title',
                descKey: 'featuresPage.broadcast.analytics.description',
                benefitsKey: 'featuresPage.broadcast.analytics.benefits',
                ctaKey: 'featuresPage.broadcast.analytics.cta',
                color: 'emerald'
            }
        ],
        aiFlow: [
            {
                icon: Brain,
                titleKey: 'featuresPage.aiFlow.aiChat.title',
                descKey: 'featuresPage.aiFlow.aiChat.description',
                benefitsKey: 'featuresPage.aiFlow.aiChat.benefits',
                ctaKey: 'featuresPage.aiFlow.aiChat.cta',
                color: 'emerald'
            },
            {
                icon: Shuffle,
                titleKey: 'featuresPage.aiFlow.flowBuilder.title',
                descKey: 'featuresPage.aiFlow.flowBuilder.description',
                benefitsKey: 'featuresPage.aiFlow.flowBuilder.benefits',
                ctaKey: 'featuresPage.aiFlow.flowBuilder.cta',
                color: 'emerald'
            },
            {
                icon: RefreshCw,
                titleKey: 'featuresPage.aiFlow.followUp.title',
                descKey: 'featuresPage.aiFlow.followUp.description',
                benefitsKey: 'featuresPage.aiFlow.followUp.benefits',
                ctaKey: 'featuresPage.aiFlow.followUp.cta',
                color: 'emerald',
                highlighted: true
            }
        ]
    };

    return (
        <div className="min-h-screen bg-gray-50">
            <Navbar />

            {/* Hero Banner */}
            <section className="bg-gradient-to-br from-slate-900 via-gray-900 to-slate-900 py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-green-400">
                            {t('featuresPage.hero.title')}
                        </span>
                    </h1>
                    <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8">
                        {t('featuresPage.hero.subtitle')}
                    </p>
                    <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-xl font-semibold transition-all shadow-lg shadow-emerald-600/30">
                        {t('featuresPage.hero.cta')}
                    </button>
                </div>
            </section>

            {/* Category Tabs */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-wrap justify-center gap-4 mb-12">
                        {categories.map((category) => {
                            const Icon = category.icon;
                            return (
                                <button
                                    key={category.key}
                                    onClick={() => setActiveCategory(category.key)}
                                    className={`flex items-center space-x-2 px-6 py-3 rounded-xl font-medium transition-all ${activeCategory === category.key
                                        ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-600/30'
                                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                        }`}
                                >
                                    <Icon className="w-5 h-5" />
                                    <span>{category.label}</span>
                                </button>
                            );
                        })}
                    </div>

                    {/* Feature Cards */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {features[activeCategory as keyof typeof features].map((feature, index) => {
                            const Icon = feature.icon;
                            const benefits = t(feature.benefitsKey, { returnObjects: true }) as string[];

                            return (
                                <div
                                    key={index}
                                    className={`bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all ${feature.highlighted !== undefined ? (feature.highlighted ? 'border-2 border-emerald-500' : 'border border-gray-200') : 'border border-gray-200'
                                        }`}
                                >
                                    <div className={`w-16 h-16 bg-${feature.color}-100 rounded-2xl flex items-center justify-center mb-6`}>
                                        <Icon className={`w-8 h-8 text-${feature.color}-600`} />
                                    </div>

                                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                                        {t(feature.titleKey)}
                                    </h3>

                                    <p className="text-gray-600 mb-6 leading-relaxed">
                                        {t(feature.descKey)}
                                    </p>

                                    <ul className="space-y-3 mb-6">
                                        {Array.isArray(benefits) && benefits.map((benefit, idx) => (
                                            <li key={idx} className="flex items-start space-x-2">
                                                <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                                                <span className="text-gray-700 text-sm">{benefit}</span>
                                            </li>
                                        ))}
                                    </ul>

                                    <button className="text-emerald-600 hover:text-emerald-700 font-semibold flex items-center space-x-2 group">
                                        <span>{t(feature.ctaKey)}</span>
                                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                    </button>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Bottom CTA Banner */}
            <section className="bg-gradient-to-br from-slate-900 via-gray-900 to-slate-900 py-16">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                        {t('featuresPage.bottomCta.title')}
                    </h2>
                    <p className="text-xl text-gray-300 mb-8">
                        {t('featuresPage.bottomCta.subtitle')}
                    </p>
                    <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-xl font-semibold transition-all shadow-lg shadow-emerald-600/30">
                        {t('featuresPage.bottomCta.cta')}
                    </button>
                </div>
            </section>

            <Footer />
        </div>
    );
}
