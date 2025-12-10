import { MousePointer, Bot, Webhook, Eye, ShoppingCart, Calendar, MessageCircle, TrendingUp, Clock, DollarSign, BarChart, Star, Zap, Play } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function FlowPage() {
    const { t } = useTranslation();

    const features = [
        {
            icon: MousePointer,
            titleKey: 'flow.features.dragDrop.title',
            descKey: 'flow.features.dragDrop.description'
        },
        {
            icon: Bot,
            titleKey: 'flow.features.aiIntegration.title',
            descKey: 'flow.features.aiIntegration.description'
        },
        {
            icon: Webhook,
            titleKey: 'flow.features.apiWebhook.title',
            descKey: 'flow.features.apiWebhook.description'
        },
        {
            icon: Eye,
            titleKey: 'flow.features.preview.title',
            descKey: 'flow.features.preview.description'
        }
    ];

    const useCases = [
        {
            icon: ShoppingCart,
            titleKey: 'flow.useCases.ecommerce.title',
            items: [
                'flow.useCases.ecommerce.item1',
                'flow.useCases.ecommerce.item2',
                'flow.useCases.ecommerce.item3',
                'flow.useCases.ecommerce.item4'
            ]
        },
        {
            icon: Calendar,
            titleKey: 'flow.useCases.services.title',
            items: [
                'flow.useCases.services.item1',
                'flow.useCases.services.item2',
                'flow.useCases.services.item3',
                'flow.useCases.services.item4'
            ]
        },
        {
            icon: MessageCircle,
            titleKey: 'flow.useCases.support.title',
            items: [
                'flow.useCases.support.item1',
                'flow.useCases.support.item2',
                'flow.useCases.support.item3',
                'flow.useCases.support.item4'
            ]
        },
        {
            icon: TrendingUp,
            titleKey: 'flow.useCases.leadGen.title',
            items: [
                'flow.useCases.leadGen.item1',
                'flow.useCases.leadGen.item2',
                'flow.useCases.leadGen.item3',
                'flow.useCases.leadGen.item4'
            ]
        }
    ];

    const benefits = [
        {
            icon: Clock,
            titleKey: 'flow.benefits.timeSaver.title',
            descKey: 'flow.benefits.timeSaver.description',
            emoji: '⏱️'
        },
        {
            icon: DollarSign,
            titleKey: 'flow.benefits.costSaver.title',
            descKey: 'flow.benefits.costSaver.description',
            emoji: '💰'
        },
        {
            icon: BarChart,
            titleKey: 'flow.benefits.increaseSales.title',
            descKey: 'flow.benefits.increaseSales.description',
            emoji: '📈'
        },
        {
            icon: Star,
            titleKey: 'flow.benefits.satisfaction.title',
            descKey: 'flow.benefits.satisfaction.description',
            emoji: '⭐'
        }
    ];

    return (
        <div className="min-h-screen bg-white">
            <Navbar />

            {/* Hero Section */}
            <section className="bg-gradient-to-br from-slate-900 via-gray-900 to-slate-900 py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-4xl mx-auto">
                        <h1 className="text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                            {t('flow.hero.title1')}
                            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-green-400">
                                {t('flow.hero.title2')}
                            </span>
                            {t('flow.hero.title3')}
                        </h1>

                        <p className="text-xl text-gray-300 leading-relaxed mb-10">
                            {t('flow.hero.description')}
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-xl font-semibold transition-all shadow-lg shadow-emerald-600/30 flex items-center justify-center space-x-2">
                                <Zap className="w-5 h-5" />
                                <span>{t('flow.hero.ctaStart')}</span>
                            </button>
                            <button className="bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-xl font-semibold border-2 border-white/20 transition-all flex items-center justify-center space-x-2">
                                <Play className="w-5 h-5" />
                                <span>{t('flow.hero.ctaDemo')}</span>
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* What is Flow Maker Section */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                            {t('flow.whatIs.title')}
                        </h2>
                        <p className="text-xl text-gray-600">
                            {t('flow.whatIs.subtitle')}
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {features.map((feature, index) => {
                            const Icon = feature.icon;
                            return (
                                <div
                                    key={index}
                                    className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all border border-gray-100 group"
                                >
                                    <div className="w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-emerald-500 transition-colors">
                                        <Icon className="w-8 h-8 text-emerald-600 group-hover:text-white transition-colors" />
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">
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

            {/* Flow Example Section */}
            <section className="py-24 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                            {t('flow.example.title')}
                        </h2>
                        <p className="text-xl text-gray-600">
                            {t('flow.example.subtitle')}
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        {/* Flow Editor */}
                        <div className="bg-white rounded-2xl p-8 shadow-xl">
                            <h3 className="text-2xl font-bold text-gray-900 mb-6">Flow Editor View</h3>

                            <div className="space-y-6">
                                {/* Trigger */}
                                <div className="border-2 border-gray-200 rounded-xl p-6">
                                    <div className="flex items-center space-x-2 mb-3">
                                        <Play className="w-5 h-5 text-emerald-600" />
                                        <span className="font-bold text-gray-900">Trigger</span>
                                    </div>
                                    <p className="text-sm text-gray-600">Keyword: "pesan produk"</p>
                                </div>

                                <div className="flex justify-center">
                                    <div className="w-0.5 h-8 bg-emerald-400"></div>
                                </div>

                                {/* Message */}
                                <div className="border-2 border-gray-200 rounded-xl p-6">
                                    <div className="flex items-center space-x-2 mb-3">
                                        <MessageCircle className="w-5 h-5 text-emerald-600" />
                                        <span className="font-bold text-gray-900">Message</span>
                                    </div>
                                    <p className="text-sm text-gray-700 mb-4">
                                        Halo {'{'}name{'}'}! Mau pesan produk apa hari ini?
                                    </p>
                                    <div className="space-y-2">
                                        <button className="w-full py-2 px-4 bg-gray-100 hover:bg-gray-200 rounded-lg text-sm font-medium transition-colors">
                                            Produk A
                                        </button>
                                        <button className="w-full py-2 px-4 bg-gray-100 hover:bg-gray-200 rounded-lg text-sm font-medium transition-colors">
                                            Produk B
                                        </button>
                                        <button className="w-full py-2 px-4 bg-gray-100 hover:bg-gray-200 rounded-lg text-sm font-medium transition-colors">
                                            Lainnya
                                        </button>
                                    </div>
                                </div>

                                <div className="flex justify-center">
                                    <div className="w-0.5 h-8 bg-emerald-400"></div>
                                </div>

                                {/* Condition */}
                                <div className="border-2 border-gray-200 rounded-xl p-6">
                                    <div className="flex items-center space-x-2 mb-3">
                                        <svg className="w-5 h-5 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                                        </svg>
                                        <span className="font-bold text-gray-900">Condition</span>
                                    </div>
                                    <p className="text-sm text-gray-600">
                                        If pilihan = "Produk A" → Kirim detail
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* WhatsApp Preview */}
                        <div className="relative max-w-sm mx-auto">
                            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border-8 border-gray-900">
                                {/* WhatsApp Header */}
                                <div className="bg-teal-600 px-4 py-3 flex items-center space-x-3">
                                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                                        <Bot className="w-6 h-6 text-teal-600" />
                                    </div>
                                    <div className="flex-1">
                                        <div className="text-white font-semibold text-sm">
                                            {t('flow.example.botName')}
                                        </div>
                                        <div className="text-teal-100 text-xs">{t('flow.example.onlinePowered')}</div>
                                    </div>
                                </div>

                                {/* Chat Content */}
                                <div className="bg-[#ECE5DD] p-4 space-y-3 min-h-[500px]">
                                    <div className="flex justify-end">
                                        <div className="bg-[#DCF8C6] rounded-lg rounded-tr-none px-4 py-2 shadow max-w-[80%]">
                                            <p className="text-sm text-gray-800">pesan produk</p>
                                        </div>
                                    </div>

                                    <div className="flex justify-start">
                                        <div className="bg-white rounded-lg rounded-tl-none px-4 py-3 shadow max-w-[85%]">
                                            <p className="text-sm text-gray-800 mb-3">
                                                Halo! Mau pesan produk apa hari ini?
                                            </p>
                                            <div className="space-y-2">
                                                <button className="w-full py-2 px-3 bg-teal-500 hover:bg-teal-600 text-white rounded text-sm font-medium transition-colors">
                                                    Produk A
                                                </button>
                                                <button className="w-full py-2 px-3 bg-teal-500 hover:bg-teal-600 text-white rounded text-sm font-medium transition-colors">
                                                    Produk B
                                                </button>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex justify-end">
                                        <div className="bg-[#DCF8C6] rounded-lg rounded-tr-none px-4 py-2 shadow max-w-[80%]">
                                            <p className="text-sm text-gray-800">Produk A</p>
                                        </div>
                                    </div>

                                    <div className="flex justify-start">
                                        <div className="bg-white rounded-lg rounded-tl-none px-4 py-3 shadow max-w-[85%]">
                                            <div className="mb-2">
                                                <div className="w-full h-32 bg-gray-200 rounded flex items-center justify-center">
                                                    <ShoppingCart className="w-12 h-12 text-gray-400" />
                                                </div>
                                            </div>
                                            <p className="text-sm font-semibold text-gray-900 mb-1">
                                                {t('flow.example.productName')}
                                            </p>
                                            <p className="text-sm text-gray-600 mb-2">
                                                {t('flow.example.productPrice')}
                                            </p>
                                            <button className="w-full bg-teal-500 text-white py-2 rounded text-sm font-medium">
                                                {t('flow.example.orderNow')}
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Use Cases Section */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                            {t('flow.useCases.title')}
                        </h2>
                        <p className="text-xl text-gray-600">
                            {t('flow.useCases.subtitle')}
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {useCases.map((useCase, index) => {
                            const Icon = useCase.icon;
                            return (
                                <div
                                    key={index}
                                    className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all border border-gray-100"
                                >
                                    <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center mb-6">
                                        <Icon className="w-6 h-6 text-gray-700" />
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-4">
                                        {t(useCase.titleKey)}
                                    </h3>
                                    <ul className="space-y-3">
                                        {useCase.items.map((item, idx) => (
                                            <li key={idx} className="text-sm text-gray-600">
                                                {t(item)}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Why Flow Maker Section */}
            <section className="py-24 bg-gradient-to-br from-slate-900 via-gray-900 to-slate-900">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                            {t('flow.benefits.title')}
                        </h2>
                        <p className="text-xl text-gray-300">
                            {t('flow.benefits.subtitle')}
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {benefits.map((benefit, index) => {
                            return (
                                <div
                                    key={index}
                                    className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:bg-white/10 transition-all"
                                >
                                    <div className="text-4xl mb-4">{benefit.emoji}</div>
                                    <h3 className="text-xl font-bold text-white mb-3">
                                        {t(benefit.titleKey)}
                                    </h3>
                                    <p className="text-gray-300 leading-relaxed">
                                        {t(benefit.descKey)}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 bg-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                        {t('flow.cta.title')}
                    </h2>
                    <p className="text-xl text-gray-600 mb-8">
                        {t('flow.cta.subtitle')}
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-xl font-semibold transition-all shadow-lg shadow-emerald-600/30 flex items-center justify-center space-x-2">
                            <Zap className="w-5 h-5" />
                            <span>{t('flow.cta.startFree')}</span>
                        </button>
                        <button className="bg-gray-100 hover:bg-gray-200 text-gray-900 px-8 py-4 rounded-xl font-semibold transition-all">
                            {t('flow.cta.contactSales')}
                        </button>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
