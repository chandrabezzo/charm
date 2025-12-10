import { Users, Rocket, Shield, Handshake, TrendingUp, Heart, Clock, Globe, Building, Award, Send, CheckCircle } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function AboutPage() {
    const { t } = useTranslation();

    const values = [
        {
            icon: Users,
            titleKey: 'aboutPage.values.customerFirst.title',
            descKey: 'aboutPage.values.customerFirst.description',
            color: 'bg-emerald-500'
        },
        {
            icon: Rocket,
            titleKey: 'aboutPage.values.innovation.title',
            descKey: 'aboutPage.values.innovation.description',
            color: 'bg-emerald-500'
        },
        {
            icon: Shield,
            titleKey: 'aboutPage.values.trust.title',
            descKey: 'aboutPage.values.trust.description',
            color: 'bg-emerald-500'
        },
        {
            icon: Handshake,
            titleKey: 'aboutPage.values.partnership.title',
            descKey: 'aboutPage.values.partnership.description',
            color: 'bg-emerald-500'
        },
        {
            icon: TrendingUp,
            titleKey: 'aboutPage.values.resultOriented.title',
            descKey: 'aboutPage.values.resultOriented.description',
            color: 'bg-emerald-500'
        },
        {
            icon: Heart,
            titleKey: 'aboutPage.values.madeForIndonesia.title',
            descKey: 'aboutPage.values.madeForIndonesia.description',
            color: 'bg-emerald-500'
        }
    ];

    const team = [
        {
            name: 'M. Ammar Fauzan',
            initials: 'MAF',
            role: 'aboutPage.team.cofounderCEO',
            color: 'bg-emerald-500'
        },
        {
            name: 'Chandra Abdul Fattah',
            initials: 'CAF',
            role: 'aboutPage.team.cofounderCTO',
            color: 'bg-blue-500'
        },
        {
            name: 'Reza Nurhakim',
            initials: 'RN',
            role: 'aboutPage.team.headProduct',
            color: 'bg-emerald-500'
        },
        {
            name: 'M. Dhafin Rizqullah',
            initials: 'MDR',
            role: 'aboutPage.team.headCustomerSuccess',
            color: 'bg-blue-500'
        }
    ];

    const stats = [
        {
            icon: Users,
            value: '10K+',
            labelKey: 'aboutPage.stats.activeUsers',
            color: 'text-emerald-600'
        },
        {
            icon: Send,
            value: '50M+',
            labelKey: 'aboutPage.stats.messagesSent',
            color: 'text-emerald-600'
        },
        {
            icon: TrendingUp,
            value: '300%',
            labelKey: 'aboutPage.stats.avgRevenue',
            color: 'text-emerald-600'
        },
        {
            icon: Award,
            value: '98%',
            labelKey: 'aboutPage.stats.satisfaction',
            color: 'text-emerald-600'
        },
        {
            icon: Clock,
            value: '24/7',
            labelKey: 'aboutPage.stats.support',
            color: 'text-emerald-600'
        },
        {
            icon: Globe,
            value: '50+',
            labelKey: 'aboutPage.stats.cities',
            color: 'text-emerald-600'
        },
        {
            icon: Building,
            value: '15+',
            labelKey: 'aboutPage.stats.industries',
            color: 'text-emerald-600'
        },
        {
            icon: Award,
            value: '5+',
            labelKey: 'aboutPage.stats.yearsExcellence',
            color: 'text-emerald-600'
        }
    ];

    return (
        <div className="min-h-screen bg-white">
            <Navbar />

            {/* Hero - Our Story */}
            <section className="py-24 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                            {t('aboutPage.story.title')}
                        </h1>
                        <div className="w-24 h-1 bg-emerald-500 mx-auto mb-6"></div>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            {t('aboutPage.story.subtitle')}
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6">
                            <h2 className="text-3xl font-bold text-gray-900">
                                {t('aboutPage.story.section1.title')}
                            </h2>

                            <p className="text-gray-600 leading-relaxed">
                                {t('aboutPage.story.section1.paragraph1')}
                            </p>

                            <p className="text-gray-600 leading-relaxed">
                                {t('aboutPage.story.section1.paragraph2')}
                            </p>

                            <p className="text-gray-600 leading-relaxed">
                                {t('aboutPage.story.section1.paragraph3')}
                            </p>
                        </div>

                        <div className="relative">
                            <div className="rounded-2xl overflow-hidden shadow-2xl">
                                <img
                                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop"
                                    alt="Team meeting"
                                    className="w-full h-96 object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Company Values */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                            {t('aboutPage.values.title')}
                        </h2>
                        <div className="w-24 h-1 bg-emerald-500 mx-auto mb-6"></div>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            {t('aboutPage.values.subtitle')}
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {values.map((value, index) => {
                            const Icon = value.icon;
                            return (
                                <div
                                    key={index}
                                    className={`bg-white rounded-2xl p-8 shadow-lg transition-all hover:shadow-xl ${value.highlight ? 'border-2 border-emerald-500' : 'border border-gray-200'
                                        }`}
                                >
                                    <div className={`w-16 h-16 ${value.color} rounded-2xl flex items-center justify-center mb-6`}>
                                        <Icon className="w-8 h-8 text-white" />
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                                        {t(value.titleKey)}
                                    </h3>
                                    <p className="text-gray-600 leading-relaxed">
                                        {t(value.descKey)}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section className="py-24 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                            {t('aboutPage.team.title')}
                        </h2>
                        <div className="w-24 h-1 bg-emerald-500 mx-auto mb-6"></div>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            {t('aboutPage.team.subtitle')}
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {team.map((member, index) => (
                            <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-lg transition-all hover:shadow-xl">
                                <div className={`h-64 ${member.color} flex items-center justify-center`}>
                                    <span className="text-6xl font-bold text-white">{member.initials}</span>
                                </div>
                                <div className="p-6 text-center">
                                    <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                                    <p className="text-gray-600 mb-4">{t(member.role)}</p>
                                    <div className="flex justify-center space-x-4">
                                        <a href="#" className="text-emerald-600 hover:text-emerald-700">
                                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                                            </svg>
                                        </a>
                                        <a href="#" className="text-blue-400 hover:text-blue-500">
                                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Meta Business Partner */}
            <section className="py-24 bg-gradient-to-br from-slate-900 via-gray-900 to-slate-900">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                                {t('aboutPage.partnership.title1')} <span className="text-emerald-400">{t('aboutPage.partnership.title2')}</span>
                            </h2>
                            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                                {t('aboutPage.partnership.description')}
                            </p>

                            <div className="flex flex-wrap gap-4 mb-8">
                                <div className="flex items-center space-x-2 bg-emerald-500/20 border border-emerald-500/30 rounded-full px-6 py-3">
                                    <CheckCircle className="w-5 h-5 text-emerald-400" />
                                    <span className="text-white font-semibold">{t('aboutPage.partnership.badge1')}</span>
                                </div>
                                <div className="flex items-center space-x-2 bg-emerald-500/20 border border-emerald-500/30 rounded-full px-6 py-3">
                                    <CheckCircle className="w-5 h-5 text-emerald-400" />
                                    <span className="text-white font-semibold">{t('aboutPage.partnership.badge2')}</span>
                                </div>
                                <div className="flex items-center space-x-2 bg-emerald-500/20 border border-emerald-500/30 rounded-full px-6 py-3">
                                    <Users className="w-5 h-5 text-emerald-400" />
                                    <span className="text-white font-semibold">{t('aboutPage.partnership.badge3')}</span>
                                </div>
                            </div>
                        </div>

                        <div className="relative">
                            <div className="rounded-2xl overflow-hidden shadow-2xl">
                                <img
                                    src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop"
                                    alt="Team collaboration"
                                    className="w-full h-96 object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Statistics */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                            {t('aboutPage.stats.title')}
                        </h2>
                        <div className="w-24 h-1 bg-emerald-500 mx-auto mb-6"></div>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            {t('aboutPage.stats.subtitle')}
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {stats.map((stat, index) => {
                            const Icon = stat.icon;
                            return (
                                <div
                                    key={index}
                                    className="bg-gray-50 rounded-2xl p-8 text-center hover:shadow-lg transition-all"
                                >
                                    <div className="w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                                        <Icon className={`w-8 h-8 ${stat.color}`} />
                                    </div>
                                    <div className="text-4xl font-bold text-emerald-600 mb-2">{stat.value}</div>
                                    <div className="text-gray-600 font-medium">{t(stat.labelKey)}</div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Bottom CTA */}
            <section className="py-16 bg-gradient-to-br from-emerald-500 to-green-600">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                        {t('aboutPage.cta.title')}
                    </h2>
                    <p className="text-xl text-emerald-50 mb-8">
                        {t('aboutPage.cta.subtitle')}
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button className="bg-white hover:bg-gray-100 text-emerald-600 px-8 py-4 rounded-xl font-semibold transition-all shadow-lg">
                            {t('aboutPage.cta.button1')}
                        </button>
                        <button className="bg-emerald-700 hover:bg-emerald-800 text-white px-8 py-4 rounded-xl font-semibold border-2 border-white/20 transition-all">
                            {t('aboutPage.cta.button2')}
                        </button>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
