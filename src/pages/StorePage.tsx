import { ShoppingBag, Smartphone, MessageSquare, CreditCard, Package, Truck, Check, Zap } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function StorePage() {
    const { t } = useTranslation();

    const features = [
        {
            icon: ShoppingBag,
            titleKey: 'store.features.webStore.title',
            descKey: 'store.features.webStore.description'
        },
        {
            icon: Smartphone,
            titleKey: 'store.features.mobileOptimized.title',
            descKey: 'store.features.mobileOptimized.description'
        },
        {
            icon: MessageSquare,
            titleKey: 'store.features.orderViaWhatsApp.title',
            descKey: 'store.features.orderViaWhatsApp.description'
        },
        {
            icon: CreditCard,
            titleKey: 'store.features.paymentGateway.title',
            descKey: 'store.features.paymentGateway.description'
        },
        {
            icon: Package,
            titleKey: 'store.features.inventory.title',
            descKey: 'store.features.inventory.description'
        },
        {
            icon: Truck,
            titleKey: 'store.features.shipping.title',
            descKey: 'store.features.shipping.description'
        }
    ];

    return (
        <div className="min-h-screen bg-white">
            <Navbar />
            {/* Hero Section */}
            <section className="bg-gradient-to-br from-slate-900 via-gray-900 to-slate-900 py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="space-y-8">
                            <div className="inline-flex items-center space-x-2 bg-emerald-500/20 text-emerald-400 px-4 py-2 rounded-full text-sm font-medium border border-emerald-500/30">
                                <ShoppingBag className="w-4 h-4" />
                                <span>{t('store.hero.badge')}</span>
                            </div>

                            <h1 className="text-5xl lg:text-6xl font-bold text-white leading-tight">
                                {t('store.hero.title1')}
                                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-green-400">
                                    {t('store.hero.title2')}
                                </span>
                                {t('store.hero.title3')}
                            </h1>

                            <p className="text-xl text-gray-300 leading-relaxed">
                                {t('store.hero.description')}
                            </p>

                            <ul className="space-y-4">
                                {[1, 2, 3, 4].map((num) => (
                                    <li key={num} className="flex items-center space-x-3">
                                        <div className="w-6 h-6 bg-emerald-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                                            <Check className="w-4 h-4 text-emerald-400" />
                                        </div>
                                        <span className="text-gray-300">{t(`store.hero.feature${num}`)}</span>
                                    </li>
                                ))}
                            </ul>

                            <div className="flex flex-col sm:flex-row gap-4">
                                <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-xl font-semibold transition-all shadow-lg shadow-emerald-600/30">
                                    {t('store.hero.ctaFree')}
                                </button>
                                <button className="bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-xl font-semibold border-2 border-white/20 transition-all">
                                    {t('store.hero.ctaDemo')}
                                </button>
                            </div>
                        </div>

                        {/* WhatsApp Store Mockup */}
                        <div className="relative">
                            <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-green-500/20 rounded-3xl blur-3xl"></div>
                            <div className="relative max-w-sm mx-auto">
                                {/* Phone Frame */}
                                <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border-8 border-gray-900">
                                    {/* WhatsApp Header */}
                                    <div className="bg-teal-600 px-4 py-3 flex items-center space-x-3">
                                        <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                                            <ShoppingBag className="w-6 h-6 text-teal-600" />
                                        </div>
                                        <div className="flex-1">
                                            <div className="text-white font-semibold text-sm">
                                                {t('store.mockup.storeName')}
                                            </div>
                                            <div className="text-teal-100 text-xs">{t('store.mockup.online')}</div>
                                        </div>
                                    </div>

                                    {/* Chat Content */}
                                    <div className="bg-[#ECE5DD] p-4 space-y-3 min-h-[500px]">
                                        <div className="flex justify-start">
                                            <div className="bg-white rounded-lg rounded-tl-none px-4 py-3 shadow max-w-[85%]">
                                                <p className="text-sm text-gray-800 mb-2">
                                                    {t('store.mockup.greeting')}
                                                </p>
                                            </div>
                                        </div>

                                        <div className="flex justify-end">
                                            <div className="bg-[#DCF8C6] rounded-lg rounded-tr-none px-4 py-2 shadow max-w-[80%]">
                                                <p className="text-sm text-gray-800">{t('store.mockup.customerMessage')}</p>
                                            </div>
                                        </div>

                                        <div className="flex justify-start">
                                            <div className="bg-white rounded-lg rounded-tl-none px-4 py-3 shadow max-w-[85%]">
                                                <div className="bg-gray-50 rounded-lg p-3 mb-2">
                                                    <p className="text-sm font-semibold text-gray-900 mb-1">
                                                        {t('store.mockup.productName')}
                                                    </p>
                                                    <p className="text-lg font-bold text-emerald-600">
                                                        {t('store.mockup.productPrice')}
                                                    </p>
                                                </div>
                                                <button className="w-full bg-emerald-500 hover:bg-emerald-600 text-white py-2 rounded-lg text-sm font-medium transition-colors">
                                                    {t('store.mockup.orderButton')}
                                                </button>
                                            </div>
                                        </div>

                                        <div className="flex justify-end">
                                            <div className="bg-[#DCF8C6] rounded-lg rounded-tr-none px-4 py-2 shadow max-w-[80%]">
                                                <p className="text-sm text-gray-800">{t('store.mockup.orderConfirm')}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Booking System Card Overlay */}
                                <div className="absolute -right-8 top-20 bg-blue-500 rounded-2xl p-4 shadow-xl max-w-[200px] hidden lg:block">
                                    <div className="text-white">
                                        <p className="text-sm font-semibold mb-2">{t('store.mockup.bookingTitle')}</p>
                                        <p className="text-xs opacity-90">{t('store.mockup.bookingAvailable')}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Grid */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                            {t('store.featuresSection.title')}
                        </h2>
                        <p className="text-xl text-gray-600">
                            {t('store.featuresSection.subtitle')}
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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

            {/* Integrations Section */}
            <section className="py-24 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                            {t('store.integrations.title')}
                        </h2>
                        <p className="text-xl text-gray-600">
                            {t('store.integrations.subtitle')}
                        </p>
                    </div>

                    <div className="space-y-16">
                        {/* WhatsApp Business API */}
                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            <div className="order-2 lg:order-1">
                                <img
                                    src="https://images.unsplash.com/photo-1611746872915-64382b5c76da?w=600&h=400&fit=crop"
                                    alt="WhatsApp Business API"
                                    className="rounded-2xl shadow-2xl"
                                />
                            </div>
                            <div className="order-1 lg:order-2 space-y-6">
                                <h3 className="text-3xl font-bold text-gray-900">
                                    {t('store.integrations.whatsapp.title')}
                                </h3>
                                <p className="text-lg text-gray-600">
                                    {t('store.integrations.whatsapp.description')}
                                </p>
                                <ul className="space-y-4">
                                    {[1, 2, 3].map((num) => (
                                        <li key={num} className="flex items-start space-x-3">
                                            <div className="w-6 h-6 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                                                <Check className="w-4 h-4 text-emerald-600" />
                                            </div>
                                            <span className="text-gray-700">
                                                {t(`store.integrations.whatsapp.feature${num}`)}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* Payment Gateway */}
                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            <div className="space-y-6">
                                <h3 className="text-3xl font-bold text-gray-900">
                                    {t('store.integrations.payment.title')}
                                </h3>
                                <p className="text-lg text-gray-600">
                                    {t('store.integrations.payment.description')}
                                </p>
                                <ul className="space-y-4">
                                    {[1, 2, 3].map((num) => (
                                        <li key={num} className="flex items-start space-x-3">
                                            <div className="w-6 h-6 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                                                <Check className="w-4 h-4 text-emerald-600" />
                                            </div>
                                            <span className="text-gray-700">
                                                {t(`store.integrations.payment.feature${num}`)}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div>
                                <img
                                    src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=400&fit=crop"
                                    alt="Payment Gateway"
                                    className="rounded-2xl shadow-2xl"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Conversational Commerce Section */}
            <section className="py-24 bg-gradient-to-br from-slate-900 via-gray-900 to-slate-900">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                            {t('store.conversational.title')}
                        </h2>
                        <p className="text-xl text-gray-300">
                            {t('store.conversational.subtitle')}
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="relative max-w-md mx-auto">
                            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border-8 border-gray-800">
                                <div className="bg-teal-700 px-4 py-3 flex items-center space-x-3">
                                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                                        <ShoppingBag className="w-6 h-6 text-teal-700" />
                                    </div>
                                    <div>
                                        <div className="text-white font-semibold text-sm">
                                            {t('store.conversational.chatName')}
                                        </div>
                                        <div className="text-teal-200 text-xs">{t('store.conversational.onlineNow')}</div>
                                    </div>
                                </div>

                                <div className="bg-[#ECE5DD] p-4 space-y-3 min-h-[400px]">
                                    <div className="flex justify-end">
                                        <div className="bg-[#DCF8C6] rounded-lg rounded-tr-none px-4 py-2 shadow max-w-[80%]">
                                            <p className="text-sm text-gray-800">{t('store.conversational.message1')}</p>
                                        </div>
                                    </div>
                                    <div className="flex justify-start">
                                        <div className="bg-white rounded-lg rounded-tl-none px-4 py-2 shadow max-w-[80%]">
                                            <p className="text-sm text-gray-800">{t('store.conversational.message2')}</p>
                                        </div>
                                    </div>
                                    <div className="flex justify-end">
                                        <div className="bg-[#DCF8C6] rounded-lg rounded-tr-none px-4 py-2 shadow max-w-[80%]">
                                            <p className="text-sm text-gray-800">{t('store.conversational.message3')}</p>
                                        </div>
                                    </div>
                                    <div className="flex justify-start">
                                        <div className="bg-white rounded-lg rounded-tl-none px-4 py-2 shadow max-w-[80%]">
                                            <p className="text-sm text-gray-800">{t('store.conversational.message4')}</p>
                                        </div>
                                    </div>
                                    <div className="flex justify-end">
                                        <div className="bg-[#DCF8C6] rounded-lg rounded-tr-none px-4 py-2 shadow max-w-[80%]">
                                            <p className="text-sm text-gray-800">{t('store.conversational.message5')}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-6">
                            <h3 className="text-3xl font-bold text-white">
                                {t('store.conversational.whyPowerful')}
                            </h3>
                            <p className="text-lg text-gray-300">
                                {t('store.conversational.description')}
                            </p>
                            <ul className="space-y-4">
                                {[1, 2, 3, 4].map((num) => (
                                    <li key={num} className="flex items-start space-x-3">
                                        <div className="w-6 h-6 bg-emerald-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                                            <Check className="w-4 h-4 text-emerald-400" />
                                        </div>
                                        <div>
                                            <span className="text-white font-semibold">
                                                {t(`store.conversational.benefit${num}.title`)}
                                            </span>
                                            <span className="text-gray-400"> - {t(`store.conversational.benefit${num}.description`)}</span>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 bg-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                        {t('store.cta.title')}
                    </h2>
                    <p className="text-xl text-gray-600 mb-8">
                        {t('store.cta.subtitle')}
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-xl font-semibold transition-all shadow-lg shadow-emerald-600/30 flex items-center justify-center space-x-2">
                            <Zap className="w-5 h-5" />
                            <span>{t('store.cta.startFree')}</span>
                        </button>
                        <button className="bg-gray-100 hover:bg-gray-200 text-gray-900 px-8 py-4 rounded-xl font-semibold transition-all">
                            {t('store.cta.contactSales')}
                        </button>
                    </div>
                </div>
            </section >

            <Footer />
        </div >
    );
}
