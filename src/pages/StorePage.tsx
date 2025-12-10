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

                                    {/* Chat Content - Real WhatsApp Catalog */}
                                    <div className="bg-[#ECE5DD] p-4 space-y-3 min-h-[500px]">
                                        {/* Welcome Message */}
                                        <div className="flex justify-start">
                                            <div className="bg-white rounded-lg rounded-tl-none px-4 py-3 shadow max-w-[85%]">
                                                <p className="text-sm text-gray-800">
                                                    {t('store.mockup.greeting')} 👋
                                                </p>
                                            </div>
                                        </div>

                                        {/* Customer Request */}
                                        <div className="flex justify-end">
                                            <div className="bg-[#DCF8C6] rounded-lg rounded-tr-none px-4 py-2 shadow max-w-[80%]">
                                                <p className="text-sm text-gray-800">{t('store.mockup.customerMessage')}</p>
                                            </div>
                                        </div>

                                        {/* Product Detail Card (Like WhatsApp) */}
                                        <div className="flex justify-start">
                                            <div className="bg-white rounded-xl shadow-lg max-w-[85%] overflow-hidden">
                                                {/* Product Image - Animated */}
                                                <div className="relative h-40 bg-gradient-to-br from-amber-100 via-amber-200 to-orange-200 overflow-hidden">
                                                    {/* Animated Background Gradient */}
                                                    <div className="absolute inset-0 bg-gradient-to-br from-amber-300/50 via-orange-300/50 to-amber-400/50 animate-pulse"></div>

                                                    {/* Shimmer Effect */}
                                                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer"></div>

                                                    {/* Product Box Animation */}
                                                    <div className="absolute inset-0 flex items-center justify-center">
                                                        <div className="relative">
                                                            {/* Main Product Box */}
                                                            <div className="w-32 h-32 bg-gradient-to-br from-amber-600 via-amber-700 to-amber-900 rounded-lg shadow-2xl transform transition-all duration-500 hover:scale-105 hover:rotate-3">
                                                                {/* Shine Effect */}
                                                                <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-lg"></div>

                                                                {/* Floating Particles */}
                                                                <div className="absolute -top-2 -right-2 w-3 h-3 bg-amber-400 rounded-full animate-bounce"></div>
                                                                <div className="absolute -bottom-2 -left-2 w-2 h-2 bg-orange-400 rounded-full animate-ping"></div>

                                                                {/* Product Icon/Pattern */}
                                                                <div className="absolute inset-0 flex items-center justify-center">
                                                                    <div className="w-16 h-16 border-4 border-amber-300/30 rounded-lg animate-spin-slow"></div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* Product Info */}
                                                <div className="p-4">
                                                    <h3 className="font-bold text-gray-900 mb-1">
                                                        {t('store.mockup.productName')}
                                                    </h3>
                                                    <p className="text-xs text-gray-500 mb-3">
                                                        {t('store.mockup.productDesc')}
                                                    </p>
                                                    <button className="w-full bg-white border border-teal-600 text-teal-600 py-2.5 rounded-lg text-sm font-semibold mb-2 hover:bg-teal-50 transition-colors">
                                                        {t('store.mockup.messageBusiness')}
                                                    </button>
                                                    <button className="w-full bg-teal-600 text-white py-2.5 rounded-lg text-sm font-semibold hover:bg-teal-700 transition-colors">
                                                        {t('store.mockup.addToCart')}
                                                    </button>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Cart Summary Bubble (Like WhatsApp) */}
                                        <div className="flex justify-end">
                                            <div className="bg-[#D1F4CC] rounded-lg rounded-tr-none px-4 py-3 shadow max-w-[85%]">
                                                <div className="flex items-start space-x-3">
                                                    {/* Animated Product Thumbnail */}
                                                    <div className="relative w-12 h-12 rounded overflow-hidden flex-shrink-0">
                                                        <div className="absolute inset-0 bg-gradient-to-br from-amber-400 via-amber-600 to-amber-800 animate-pulse"></div>
                                                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer"></div>
                                                    </div>
                                                    <div className="flex-1">
                                                        <div className="flex items-center space-x-2 mb-1">
                                                            <ShoppingBag className="w-4 h-4" />
                                                            <span className="font-semibold text-sm">{t('store.mockup.cartItems')}</span>
                                                        </div>
                                                        <p className="text-base font-bold text-emerald-700">
                                                            {t('store.mockup.cartTotal')}
                                                        </p>
                                                        <button className="mt-2 text-sm text-teal-600 font-semibold">
                                                            {t('store.mockup.viewItems')}
                                                        </button>
                                                    </div>
                                                    <div className="text-xs text-gray-500">11:30</div>
                                                </div>
                                                <div className="flex items-center justify-end mt-1">
                                                    <svg className="w-4 h-4 text-blue-500" viewBox="0 0 16 15" fill="currentColor">
                                                        <path d="M15.01 3.316l-.478-.372a.365.365 0 0 0-.51.063L8.666 9.88a.32.32 0 0 1-.484.032l-.358-.325a.32.32 0 0 0-.484.032l-.378.483a.418.418 0 0 0 .036.54l1.32 1.267a.32.32 0 0 0 .484-.034l6.272-8.048a.366.366 0 0 0-.064-.512z" />
                                                        <path d="M4.45 12.184a.32.32 0 0 1-.484.032L.642 9.041a.418.418 0 0 1-.036-.54l.378-.483a.32.32 0 0 1 .484-.032l2.679 2.428 5.452-6.92a.365.365 0 0 1 .51-.063l.478.372a.366.366 0 0 1 .064.512L4.45 12.184z" />
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Store Confirmation */}
                                        <div className="flex justify-start">
                                            <div className="bg-white rounded-lg rounded-tl-none px-4 py-3 shadow max-w-[85%]">
                                                <p className="text-sm text-gray-800 mb-2">
                                                    {t('store.mockup.confirmMessage')}
                                                </p>
                                                <p className="text-sm text-gray-800">
                                                    {t('store.mockup.checkoutQuestion')}
                                                </p>
                                            </div>
                                        </div>

                                        {/* Customer Response Buttons */}
                                        <div className="flex justify-end">
                                            <div className="bg-[#DCF8C6] rounded-lg rounded-tr-none px-4 py-2 shadow">
                                                <p className="text-sm text-gray-800 font-semibold">{t('store.mockup.yesResponse')}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Booking System Card Overlay */}
                                {/* <div className="absolute -right-8 top-20 bg-blue-500 rounded-2xl p-4 shadow-xl max-w-[200px] hidden lg:block">
                                    <div className="text-white">
                                        <p className="text-sm font-semibold mb-2">{t('store.mockup.bookingTitle')}</p>
                                        <p className="text-xs opacity-90">{t('store.mockup.bookingAvailable')}</p>
                                    </div>
                                </div> */}
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
