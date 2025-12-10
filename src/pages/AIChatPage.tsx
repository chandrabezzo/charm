import { Bot, MessageSquare, Zap, TrendingUp, CheckCircle, XCircle, Brain, Database, FileText, Shuffle, Target, ShoppingBag, Utensils, Building2, Stethoscope, Briefcase } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function AIChatPage() {
    const { t } = useTranslation();
    const [activeIndustry, setActiveIndustry] = useState('ecommerce');

    const industries = [
        { key: 'ecommerce', icon: ShoppingBag },
        { key: 'fnb', icon: Utensils },
        { key: 'clinic', icon: Stethoscope },
        { key: 'hotel', icon: Building2 },
        { key: 'professional', icon: Briefcase }
    ];

    const comparisonData = [
        {
            aspect: 'aiChat.comparison.operational',
            humanCS: '8-12 Jam/Hari',
            charmAI: '24/7 Non-stop',
            aiWins: true
        },
        {
            aspect: 'aiChat.comparison.capacity',
            humanCS: '1-3 Simultan',
            charmAI: 'Tanpa Batas',
            aiWins: true
        },
        {
            aspect: 'aiChat.comparison.response',
            humanCS: '2-10 Menit',
            charmAI: '< 1 Detik',
            aiWins: true
        },
        {
            aspect: 'aiChat.comparison.cost',
            humanCS: 'Rp 3-5 Juta',
            charmAI: 'Mulai dari 150 Ribu',
            aiWins: true
        },
        {
            aspect: 'aiChat.comparison.fatigue',
            humanCS: 'Ya',
            charmAI: 'Tidak Pernah',
            aiWins: true,
            humanBad: true
        },
        {
            aspect: 'aiChat.comparison.analytics',
            humanCS: 'Manual',
            charmAI: 'Otomatis & Real-time',
            aiWins: true,
            humanBad: true
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
                                <Brain className="w-4 h-4" />
                                <span>{t('aiChat.hero.badge')}</span>
                            </div>

                            <h1 className="text-5xl lg:text-6xl font-bold text-white leading-tight">
                                {t('aiChat.hero.title')}
                            </h1>

                            <p className="text-xl text-gray-300 leading-relaxed">
                                {t('aiChat.hero.description')}
                            </p>

                            <div className="grid grid-cols-2 gap-4">
                                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">
                                    <MessageSquare className="w-8 h-8 text-emerald-400 mb-2" />
                                    <h3 className="text-white font-semibold mb-1">{t('aiChat.hero.features.natural')}</h3>
                                    <p className="text-sm text-gray-400">{t('aiChat.hero.features.naturalDesc')}</p>
                                </div>
                                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">
                                    <Brain className="w-8 h-8 text-blue-400 mb-2" />
                                    <h3 className="text-white font-semibold mb-1">{t('aiChat.hero.features.memory')}</h3>
                                    <p className="text-sm text-gray-400">{t('aiChat.hero.features.memoryDesc')}</p>
                                </div>
                                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">
                                    <Zap className="w-8 h-8 text-yellow-400 mb-2" />
                                    <h3 className="text-white font-semibold mb-1">{t('aiChat.hero.features.instant')}</h3>
                                    <p className="text-sm text-gray-400">{t('aiChat.hero.features.instantDesc')}</p>
                                </div>
                                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">
                                    <TrendingUp className="w-8 h-8 text-green-400 mb-2" />
                                    <h3 className="text-white font-semibold mb-1">{t('aiChat.hero.features.smart')}</h3>
                                    <p className="text-sm text-gray-400">{t('aiChat.hero.features.smartDesc')}</p>
                                </div>
                            </div>

                            <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-xl font-semibold transition-all shadow-lg shadow-emerald-600/30">
                                {t('aiChat.hero.cta')}
                            </button>
                        </div>

                        {/* WhatsApp Mockup */}
                        <div className="relative max-w-sm mx-auto">
                            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border-8 border-gray-900">
                                {/* WhatsApp Header */}
                                <div className="bg-teal-600 px-4 py-3 flex items-center space-x-3">
                                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                                        <ShoppingBag className="w-6 h-6 text-teal-600" />
                                    </div>
                                    <div className="flex-1">
                                        <div className="text-white font-semibold text-sm">{t('aiChat.hero.mockup.storeName')}</div>
                                        <div className="text-teal-100 text-xs">{t('aiChat.hero.mockup.powered')}</div>
                                    </div>
                                </div>

                                {/* Chat Content */}
                                <div className="bg-[#ECE5DD] p-4 space-y-3 min-h-[500px]">
                                    <div className="flex justify-end">
                                        <div className="bg-[#DCF8C6] rounded-lg rounded-tr-none px-4 py-2 shadow max-w-[80%]">
                                            <p className="text-sm text-gray-800">{t('aiChat.hero.mockup.message1')}</p>
                                        </div>
                                    </div>

                                    <div className="flex justify-start">
                                        <div className="bg-white rounded-lg rounded-tl-none px-4 py-3 shadow max-w-[85%]">
                                            <div className="mb-2">
                                                <div className="w-full h-32 bg-gray-200 rounded flex items-center justify-center">
                                                    <svg className="w-12 h-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                                                    </svg>
                                                </div>
                                            </div>
                                            <p className="text-sm text-gray-800 mb-2">{t('aiChat.hero.mockup.message2')}</p>
                                            <button className="w-full bg-teal-500 text-white py-2 rounded text-sm font-medium">
                                                {t('aiChat.hero.mockup.orderButton')}
                                            </button>
                                        </div>
                                    </div>

                                    <div className="flex justify-end">
                                        <div className="bg-[#DCF8C6] rounded-lg rounded-tr-none px-4 py-2 shadow max-w-[80%]">
                                            <p className="text-sm text-gray-800">{t('aiChat.hero.mockup.message3')}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Comparison Table Section */}
            <section className="py-24 bg-white">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                            {t('aiChat.comparison.title')}
                        </h2>
                        <p className="text-xl text-gray-600">
                            {t('aiChat.comparison.subtitle')}
                        </p>
                    </div>

                    <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-200">
                        <div className="bg-slate-900 text-white px-6 py-4 grid grid-cols-3 gap-4 font-bold">
                            <div>{t('aiChat.comparison.aspect')}</div>
                            <div className="text-center">{t('aiChat.comparison.humanCS')}</div>
                            <div className="text-center">{t('aiChat.comparison.charmAI')}</div>
                        </div>

                        {comparisonData.map((row, index) => (
                            <div
                                key={index}
                                className={`px-6 py-5 grid grid-cols-3 gap-4 items-center ${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'
                                    }`}
                            >
                                <div className="font-semibold text-gray-900">{t(row.aspect)}</div>
                                <div className="text-center">
                                    <div className={`inline-flex items-center space-x-2 ${row.humanBad ? 'text-red-600' : 'text-gray-700'}`}>
                                        {row.humanBad && <XCircle className="w-5 h-5" />}
                                        <span>{row.humanCS}</span>
                                    </div>
                                </div>
                                <div className="text-center">
                                    <div className="inline-flex items-center space-x-2 text-emerald-600 font-semibold">
                                        <CheckCircle className="w-5 h-5" />
                                        <span>{row.charmAI}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Real-Time Learning Section */}
            <section className="py-24 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6">
                            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
                                {t('aiChat.learning.title1')}
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-green-500">
                                    {' '}{t('aiChat.learning.title2')}{' '}
                                </span>
                            </h2>
                            <p className="text-xl text-gray-600 leading-relaxed">
                                {t('aiChat.learning.description')}
                            </p>
                        </div>

                        {/* Terminal/Code Style Display */}
                        <div className="bg-slate-900 rounded-2xl p-6 shadow-2xl overflow-hidden">
                            <div className="flex items-center space-x-2 mb-4">
                                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                            </div>
                            <div className="font-mono text-sm space-y-3">
                                <div className="text-emerald-400">&gt; Latih AI: 'Toko kami buka jam 9 pagi - 5 sore.'</div>
                                <div className="text-gray-400">&gt; AI Memproses...</div>
                                <div className="text-blue-300">&gt; Selesai! AI sekarang tahu jam operasional Anda.</div>
                                <div className="text-emerald-400">&gt; Latih AI: 'Upload file: katalog-produk.pdf'</div>
                                <div className="text-gray-400">&gt; AI Membaca & Mempelajari 50 produk...</div>
                                <div className="text-blue-300">&gt; Selesai! AI siap menjawab pertanyaan tentang produk.</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3 Steps Activation Section */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                            {t('aiChat.steps.title')}
                        </h2>
                        <p className="text-xl text-gray-600">
                            {t('aiChat.steps.subtitle')}
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all border border-gray-100 text-center">
                            <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                                <span className="text-2xl font-bold text-emerald-600">1</span>
                            </div>
                            <div className="mb-4">
                                <Database className="w-12 h-12 text-gray-700 mx-auto mb-3" />
                                <h3 className="text-2xl font-bold text-gray-900 mb-3">{t('aiChat.steps.step1.title')}</h3>
                            </div>
                            <p className="text-gray-600 leading-relaxed">
                                {t('aiChat.steps.step1.description')}
                            </p>
                        </div>

                        <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all border border-gray-100 text-center">
                            <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                                <span className="text-2xl font-bold text-emerald-600">2</span>
                            </div>
                            <div className="mb-4">
                                <Brain className="w-12 h-12 text-gray-700 mx-auto mb-3" />
                                <h3 className="text-2xl font-bold text-gray-900 mb-3">{t('aiChat.steps.step2.title')}</h3>
                            </div>
                            <p className="text-gray-600 leading-relaxed">
                                {t('aiChat.steps.step2.description')}
                            </p>
                        </div>

                        <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all border border-gray-100 text-center">
                            <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                                <span className="text-2xl font-bold text-emerald-600">3</span>
                            </div>
                            <div className="mb-4">
                                <Zap className="w-12 h-12 text-gray-700 mx-auto mb-3" />
                                <h3 className="text-2xl font-bold text-gray-900 mb-3">{t('aiChat.steps.step3.title')}</h3>
                            </div>
                            <p className="text-gray-600 leading-relaxed">
                                {t('aiChat.steps.step3.description')}
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Industry Solutions Section */}
            <section className="py-24 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                            {t('aiChat.industries.title')}
                        </h2>
                        <p className="text-xl text-gray-600">
                            {t('aiChat.industries.subtitle')}
                        </p>
                    </div>

                    <div className="mb-8 flex flex-wrap justify-center gap-4">
                        {industries.map((industry) => {
                            const Icon = industry.icon;
                            return (
                                <button
                                    key={industry.key}
                                    onClick={() => setActiveIndustry(industry.key)}
                                    className={`flex items-center space-x-2 px-6 py-3 rounded-xl font-medium transition-all ${activeIndustry === industry.key
                                        ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-600/30'
                                        : 'bg-white text-gray-700 hover:bg-gray-100'
                                        }`}
                                >
                                    <Icon className="w-5 h-5" />
                                    <span>{t(`aiChat.industries.tabs.${industry.key}`)}</span>
                                </button>
                            );
                        })}
                    </div>

                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6">
                            <h3 className="text-3xl font-bold text-gray-900">
                                {t('aiChat.industries.followUp.title')}
                            </h3>
                            <p className="text-lg text-gray-600">
                                {t('aiChat.industries.followUp.description')}
                            </p>
                            <ul className="space-y-4">
                                <li className="flex items-start space-x-3">
                                    <CheckCircle className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-0.5" />
                                    <span className="text-gray-700">{t('aiChat.industries.followUp.benefit1')}</span>
                                </li>
                                <li className="flex items-start space-x-3">
                                    <CheckCircle className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-0.5" />
                                    <span className="text-gray-700">{t('aiChat.industries.followUp.benefit2')}</span>
                                </li>
                                <li className="flex items-start space-x-3">
                                    <CheckCircle className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-0.5" />
                                    <span className="text-gray-700">{t('aiChat.industries.followUp.benefit3')}</span>
                                </li>
                            </ul>
                        </div>

                        {/* WhatsApp Mockup */}
                        <div className="relative max-w-sm mx-auto">
                            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border-8 border-gray-900">
                                <div className="bg-teal-600 px-4 py-3 flex items-center space-x-3">
                                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                                        <ShoppingBag className="w-6 h-6 text-teal-600" />
                                    </div>
                                    <div className="flex-1">
                                        <div className="text-white font-semibold text-sm">{t('aiChat.industries.mockup.storeName')}</div>
                                        <div className="text-teal-100 text-xs">Online</div>
                                    </div>
                                </div>

                                <div className="bg-[#ECE5DD] p-4 space-y-3 min-h-[400px]">
                                    <div className="flex justify-end">
                                        <div className="bg-[#DCF8C6] rounded-lg rounded-tr-none px-4 py-2 shadow max-w-[80%]">
                                            <p className="text-sm text-gray-800">{t('aiChat.industries.mockup.message1')}</p>
                                        </div>
                                    </div>

                                    <div className="flex justify-start">
                                        <div className="bg-white rounded-lg rounded-tl-none px-4 py-3 shadow max-w-[85%]">
                                            <p className="text-sm text-gray-800">{t('aiChat.industries.mockup.message2')}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Beyond Chatbot Section */}
            <section className="py-24 bg-gradient-to-br from-slate-900 via-gray-900 to-slate-900">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                            {t('aiChat.beyond.title')}
                        </h2>
                        <p className="text-xl text-gray-300">
                            {t('aiChat.beyond.subtitle')}
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                            <FileText className="w-12 h-12 text-emerald-400 mb-6" />
                            <h3 className="text-xl font-bold text-white mb-3">
                                {t('aiChat.beyond.knowledge.title')}
                            </h3>
                            <p className="text-gray-300 leading-relaxed">
                                {t('aiChat.beyond.knowledge.description')}
                            </p>
                        </div>

                        <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                            <Brain className="w-12 h-12 text-blue-400 mb-6" />
                            <h3 className="text-xl font-bold text-white mb-3">
                                {t('aiChat.beyond.memory.title')}
                            </h3>
                            <p className="text-gray-300 leading-relaxed">
                                {t('aiChat.beyond.memory.description')}
                            </p>
                        </div>

                        <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                            <Shuffle className="w-12 h-12 text-purple-400 mb-6" />
                            <h3 className="text-xl font-bold text-white mb-3">
                                {t('aiChat.beyond.routing.title')}
                            </h3>
                            <p className="text-gray-300 leading-relaxed">
                                {t('aiChat.beyond.routing.description')}
                            </p>
                        </div>

                        <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                            <Target className="w-12 h-12 text-green-400 mb-6" />
                            <h3 className="text-xl font-bold text-white mb-3">
                                {t('aiChat.beyond.proactive.title')}
                            </h3>
                            <p className="text-gray-300 leading-relaxed">
                                {t('aiChat.beyond.proactive.description')}
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 bg-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                        {t('aiChat.cta.title')}
                    </h2>
                    <p className="text-xl text-gray-600 mb-8">
                        {t('aiChat.cta.subtitle')}
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-xl font-semibold transition-all shadow-lg shadow-emerald-600/30">
                            {t('aiChat.cta.startFree')}
                        </button>
                        <button className="bg-gray-100 hover:bg-gray-200 text-gray-900 px-8 py-4 rounded-xl font-semibold transition-all">
                            {t('aiChat.cta.contactSales')}
                        </button>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
