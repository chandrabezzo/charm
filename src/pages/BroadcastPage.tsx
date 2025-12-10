import { Bot, Store, Megaphone, TrendingUp, MessageSquare, GitBranch, Bell, RefreshCw, MessageCircle, Image as ImageIcon, Users, BarChart3, Edit, Link as LinkIcon, FileText, CheckCircle } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function BroadcastPage() {
    const { t } = useTranslation();
    const [activeCategory, setActiveCategory] = useState<'ai' | 'ecommerce' | 'marketing' | 'business'>('ai');

    const categories = [
        { key: 'ai' as const, icon: Bot, labelKey: 'broadcastPage.categories.ai' },
        { key: 'ecommerce' as const, icon: Store, labelKey: 'broadcastPage.categories.ecommerce' },
        { key: 'marketing' as const, icon: Megaphone, labelKey: 'broadcastPage.categories.marketing' },
        { key: 'business' as const, icon: TrendingUp, labelKey: 'broadcastPage.categories.business' }
    ];

    const featuresData = {
        ai: [
            { icon: MessageSquare, titleKey: 'broadcastPage.features.ai.chat.title', descKey: 'broadcastPage.features.ai.chat.desc', itemsKey: 'broadcastPage.features.ai.chat.items' },
            { icon: GitBranch, titleKey: 'broadcastPage.features.ai.flow.title', descKey: 'broadcastPage.features.ai.flow.desc', itemsKey: 'broadcastPage.features.ai.flow.items' },
            { icon: Bell, titleKey: 'broadcastPage.features.ai.autoReply.title', descKey: 'broadcastPage.features.ai.autoReply.desc', itemsKey: 'broadcastPage.features.ai.autoReply.items' },
            { icon: RefreshCw, titleKey: 'broadcastPage.features.ai.followUp.title', descKey: 'broadcastPage.features.ai.followUp.desc', itemsKey: 'broadcastPage.features.ai.followUp.items' },
            { icon: MessageCircle, titleKey: 'broadcastPage.features.ai.forms.title', descKey: 'broadcastPage.features.ai.forms.desc', itemsKey: 'broadcastPage.features.ai.forms.items' },
            { icon: ImageIcon, titleKey: 'broadcastPage.features.ai.vision.title', descKey: 'broadcastPage.features.ai.vision.desc', itemsKey: 'broadcastPage.features.ai.vision.items' }
        ],
        ecommerce: [
            { icon: Store, titleKey: 'broadcastPage.features.ecommerce.webStore.title', descKey: 'broadcastPage.features.ecommerce.webStore.desc', itemsKey: 'broadcastPage.features.ecommerce.webStore.items' },
            { icon: MessageSquare, titleKey: 'broadcastPage.features.ecommerce.conversational.title', descKey: 'broadcastPage.features.ecommerce.conversational.desc', itemsKey: 'broadcastPage.features.ecommerce.conversational.items' },
            { icon: CheckCircle, titleKey: 'broadcastPage.features.ecommerce.payment.title', descKey: 'broadcastPage.features.ecommerce.payment.desc', itemsKey: 'broadcastPage.features.ecommerce.payment.items' },
            { icon: TrendingUp, titleKey: 'broadcastPage.features.ecommerce.inventory.title', descKey: 'broadcastPage.features.ecommerce.inventory.desc', itemsKey: 'broadcastPage.features.ecommerce.inventory.items' },
            { icon: RefreshCw, titleKey: 'broadcastPage.features.ecommerce.shipping.title', descKey: 'broadcastPage.features.ecommerce.shipping.desc', itemsKey: 'broadcastPage.features.ecommerce.shipping.items' },
            { icon: FileText, titleKey: 'broadcastPage.features.ecommerce.order.title', descKey: 'broadcastPage.features.ecommerce.order.desc', itemsKey: 'broadcastPage.features.ecommerce.order.items' }
        ],
        marketing: [
            { icon: Megaphone, titleKey: 'broadcastPage.features.marketing.broadcast.title', descKey: 'broadcastPage.features.marketing.broadcast.desc', itemsKey: 'broadcastPage.features.marketing.broadcast.items' },
            { icon: Users, titleKey: 'broadcastPage.features.marketing.segmentation.title', descKey: 'broadcastPage.features.marketing.segmentation.desc', itemsKey: 'broadcastPage.features.marketing.segmentation.items' },
            { icon: BarChart3, titleKey: 'broadcastPage.features.marketing.analytics.title', descKey: 'broadcastPage.features.marketing.analytics.desc', itemsKey: 'broadcastPage.features.marketing.analytics.items' },
            { icon: Edit, titleKey: 'broadcastPage.features.marketing.personalization.title', descKey: 'broadcastPage.features.marketing.personalization.desc', itemsKey: 'broadcastPage.features.marketing.personalization.items' },
            { icon: LinkIcon, titleKey: 'broadcastPage.features.marketing.utm.title', descKey: 'broadcastPage.features.marketing.utm.desc', itemsKey: 'broadcastPage.features.marketing.utm.items' },
            { icon: FileText, titleKey: 'broadcastPage.features.marketing.template.title', descKey: 'broadcastPage.features.marketing.template.desc', itemsKey: 'broadcastPage.features.marketing.template.items' }
        ],
        business: [
            { icon: TrendingUp, titleKey: 'broadcastPage.features.business.crm.title', descKey: 'broadcastPage.features.business.crm.desc', itemsKey: 'broadcastPage.features.business.crm.items' },
            { icon: Users, titleKey: 'broadcastPage.features.business.team.title', descKey: 'broadcastPage.features.business.team.desc', itemsKey: 'broadcastPage.features.business.team.items' },
            { icon: BarChart3, titleKey: 'broadcastPage.features.business.reporting.title', descKey: 'broadcastPage.features.business.reporting.desc', itemsKey: 'broadcastPage.features.business.reporting.items' },
            { icon: LinkIcon, titleKey: 'broadcastPage.features.business.integration.title', descKey: 'broadcastPage.features.business.integration.desc', itemsKey: 'broadcastPage.features.business.integration.items' },
            { icon: CheckCircle, titleKey: 'broadcastPage.features.business.automation.title', descKey: 'broadcastPage.features.business.automation.desc', itemsKey: 'broadcastPage.features.business.automation.items' },
            { icon: FileText, titleKey: 'broadcastPage.features.business.compliance.title', descKey: 'broadcastPage.features.business.compliance.desc', itemsKey: 'broadcastPage.features.business.compliance.items' }
        ]
    };

    const features = featuresData[activeCategory];

    return (
        <div className="min-h-screen bg-white">
            <Navbar />

            {/* Hero Section */}
            <section className="bg-gradient-to-br from-slate-900 via-gray-900 to-slate-900 py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div className="inline-flex items-center space-x-2 bg-emerald-500/20 text-emerald-400 px-6 py-3 rounded-full text-sm font-bold border border-emerald-500/30 mb-8">
                        <span>🚀</span>
                        <span>{t('broadcastPage.hero.badge')}</span>
                    </div>

                    <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
                        {t('broadcastPage.hero.title1')}<br />
                        <span className="text-emerald-400">{t('broadcastPage.hero.title2')}</span>
                    </h1>

                    <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-16">
                        {t('broadcastPage.hero.subtitle')}
                    </p>

                    {/* Stats */}
                    <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                        <div>
                            <div className="w-16 h-1 bg-emerald-500 mx-auto mb-4"></div>
                            <div className="text-5xl font-bold text-white mb-2">50+</div>
                            <div className="text-gray-400">{t('broadcastPage.hero.stats.features')}</div>
                        </div>
                        <div>
                            <div className="w-16 h-1 bg-emerald-500 mx-auto mb-4"></div>
                            <div className="text-5xl font-bold text-white mb-2">24/7</div>
                            <div className="text-gray-400">{t('broadcastPage.hero.stats.aiActive')}</div>
                        </div>
                        <div>
                            <div className="w-16 h-1 bg-emerald-500 mx-auto mb-4"></div>
                            <div className="text-5xl font-bold text-white mb-2">10K+</div>
                            <div className="text-gray-400">{t('broadcastPage.hero.stats.messagesPerDay')}</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Section with Tabs */}
            <section className="py-24 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                            {t('broadcastPage.features.title')}
                        </h2>
                        <div className="w-24 h-1 bg-emerald-500 mx-auto mb-6"></div>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            {t('broadcastPage.features.subtitle')}
                        </p>
                    </div>

                    {/* Category Tabs */}
                    <div className="flex flex-wrap justify-center gap-4 mb-12">
                        {categories.map((category) => {
                            const Icon = category.icon;
                            return (
                                <button
                                    key={category.key}
                                    onClick={() => setActiveCategory(category.key)}
                                    className={`flex items-center space-x-2 px-6 py-3 rounded-xl font-semibold transition-all ${activeCategory === category.key
                                            ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-600/30'
                                            : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                                        }`}
                                >
                                    <Icon className="w-5 h-5" />
                                    <span>{t(category.labelKey)}</span>
                                </button>
                            );
                        })}
                    </div>

                    {/* Feature Cards */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {features.map((feature, index) => {
                            const Icon = feature.icon;
                            const items = t(feature.itemsKey, { returnObjects: true }) as string[];

                            return (
                                <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all border border-gray-100">
                                    <div className="w-14 h-14 bg-emerald-100 rounded-2xl flex items-center justify-center mb-6">
                                        <Icon className="w-7 h-7 text-emerald-600" />
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                                        {t(feature.titleKey)}
                                    </h3>
                                    <p className="text-gray-600 mb-6">
                                        {t(feature.descKey)}
                                    </p>
                                    <ul className="space-y-3">
                                        {Array.isArray(items) && items.map((item, idx) => (
                                            <li key={idx} className="flex items-start space-x-2 text-sm text-gray-600">
                                                <CheckCircle className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Broadcast Process Section */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                            {t('broadcastPage.process.title')}
                        </h2>
                        <div className="w-24 h-1 bg-emerald-500 mx-auto mb-6"></div>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            {t('broadcastPage.process.subtitle')}
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        {/* Steps */}
                        <div className="space-y-8">
                            {[1, 2, 3, 4].map((num) => (
                                <div key={num} className="flex space-x-4">
                                    <div className="flex-shrink-0">
                                        <div className="w-12 h-12 bg-emerald-600 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-emerald-600/30">
                                            {num}
                                        </div>
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-xl font-bold text-gray-900 mb-2">
                                            {t(`broadcastPage.process.step${num}.title`)}
                                        </h3>
                                        <p className="text-gray-600">
                                            {t(`broadcastPage.process.step${num}.desc`)}
                                        </p>
                                        {num === 2 && (
                                            <div className="mt-3 inline-flex items-center space-x-2 bg-emerald-100 text-emerald-700 px-4 py-2 rounded-lg text-sm font-semibold">
                                                <CheckCircle className="w-4 h-4" />
                                                <span>{t('broadcastPage.process.step2.badge')}</span>
                                            </div>
                                        )}
                                        {num === 3 && (
                                            <div className="mt-3 inline-flex items-center space-x-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-lg text-sm font-semibold">
                                                <Users className="w-4 h-4" />
                                                <span>{t('broadcastPage.process.step3.badge')}</span>
                                            </div>
                                        )}
                                        {num === 4 && (
                                            <div className="mt-3 inline-flex items-center space-x-2 bg-purple-100 text-purple-700 px-4 py-2 rounded-lg text-sm font-semibold">
                                                <BarChart3 className="w-4 h-4" />
                                                <span>{t('broadcastPage.process.step4.badge')}</span>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Campaign Demo Mockup */}
                        <div className="relative">
                            <div className="bg-slate-800 rounded-3xl p-8 shadow-2xl">
                                <div className="bg-emerald-500 rounded-t-2xl p-6 text-center">
                                    <h3 className="text-xl font-bold text-white mb-2">Broadcast Campaign Demo</h3>
                                    <p className="text-emerald-100 text-sm">Broadcast Terkirim!</p>
                                </div>

                                <div className="bg-white rounded-b-2xl p-6">
                                    <div className="grid grid-cols-2 gap-4 mb-6">
                                        <div className="text-center p-4 bg-gray-50 rounded-xl">
                                            <div className="text-4xl font-bold text-emerald-600 mb-1">6</div>
                                            <div className="text-sm text-gray-600">Terkirim</div>
                                        </div>
                                        <div className="text-center p-4 bg-gray-50 rounded-xl">
                                            <div className="text-4xl font-bold text-emerald-600 mb-1">6</div>
                                            <div className="text-sm text-gray-600">Dibaca</div>
                                        </div>
                                        <div className="text-center p-4 bg-gray-50 rounded-xl">
                                            <div className="text-4xl font-bold text-emerald-600 mb-1">2</div>
                                            <div className="text-sm text-gray-600">Dibalas</div>
                                        </div>
                                        <div className="text-center p-4 bg-gray-50 rounded-xl">
                                            <div className="text-4xl font-bold text-emerald-600 mb-1">95%</div>
                                            <div className="text-sm text-gray-600">Success Rate</div>
                                        </div>
                                    </div>

                                    <div className="space-y-3">
                                        {[
                                            { name: 'Budi Santoso', initials: 'BS', status: 'Terkirim & Dibaca' },
                                            { name: 'Siti Rahayu', initials: 'SR', status: 'Terkirim & Dibaca' },
                                            { name: 'Ahmad Fadil', initials: 'AF', status: 'Terkirim & Dibaca' },
                                            { name: 'Dewi Lestari', initials: 'DL', status: 'Terkirim' }
                                        ].map((contact, idx) => (
                                            <div key={idx} className="flex items-center space-x-3">
                                                <div className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm ${idx === 0 ? 'bg-emerald-500' : idx === 1 ? 'bg-emerald-600' : idx === 2 ? 'bg-emerald-700' : 'bg-gray-400'
                                                    }`}>
                                                    {contact.initials}
                                                </div>
                                                <div className="flex-1">
                                                    <div className="font-semibold text-gray-900 text-sm">{contact.name}</div>
                                                    <div className="text-xs text-emerald-600 flex items-center space-x-1">
                                                        <CheckCircle className="w-3 h-3" />
                                                        <span>{contact.status}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Bottom CTA */}
            <section className="py-16 bg-gradient-to-br from-emerald-500 to-green-600">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                        {t('broadcastPage.cta.title')}
                    </h2>
                    <p className="text-xl text-emerald-50 mb-8">
                        {t('broadcastPage.cta.subtitle')}
                    </p>
                    <button className="bg-white hover:bg-gray-100 text-emerald-600 px-8 py-4 rounded-xl font-semibold transition-all shadow-lg">
                        {t('broadcastPage.cta.button')}
                    </button>
                </div>
            </section>

            <Footer />
        </div>
    );
}
