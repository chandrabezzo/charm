import { ShoppingCart, Utensils, Heart, Home, GraduationCap, Briefcase, CheckCircle, Star, ArrowRight, MessageCircle, TrendingUp, Clock, Users } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function SolutionsPage() {
    const { t } = useTranslation();
    const [activeIndustry, setActiveIndustry] = useState('ecommerce');

    const industries = [
        {
            key: 'ecommerce',
            icon: ShoppingCart,
            badge: 'Populer',
            badgeColor: 'bg-emerald-600',
            imageUrl: '/images/ecommerce.jpg',
            stat1Value: '+60%',
            stat1Label: 'solutionsPage.industries.ecommerce.stat1',
            stat2Value: '3x',
            stat2Label: 'solutionsPage.industries.ecommerce.stat2'
        },
        {
            key: 'fnb',
            icon: Utensils,
            badge: 'Trending',
            badgeColor: 'bg-emerald-600',
            imageUrl: '/images/restaurant.jpg',
            stat1Value: '+80%',
            stat1Label: 'solutionsPage.industries.fnb.stat1',
            stat2Value: '50%',
            stat2Label: 'solutionsPage.industries.fnb.stat2'
        },
        {
            key: 'healthcare',
            icon: Heart,
            badge: 'Trusted',
            badgeColor: 'bg-emerald-600',
            imageUrl: '/images/clinic.jpg',
            stat1Value: '-40%',
            stat1Label: 'solutionsPage.industries.healthcare.stat1',
            stat2Value: '95%',
            stat2Label: 'solutionsPage.industries.healthcare.stat2'
        },
        {
            key: 'property',
            icon: Home,
            badge: 'ROI Tinggi',
            badgeColor: 'bg-emerald-600',
            imageUrl: '/images/property.jpg',
            stat1Value: '3x',
            stat1Label: 'solutionsPage.industries.property.stat1',
            stat2Value: '90%',
            stat2Label: 'solutionsPage.industries.property.stat2'
        },
        {
            key: 'education',
            icon: GraduationCap,
            badge: 'Best Choice',
            badgeColor: 'bg-emerald-600',
            imageUrl: '/images/education.jpg',
            stat1Value: '+120%',
            stat1Label: 'solutionsPage.industries.education.stat1',
            stat2Value: '85%',
            stat2Label: 'solutionsPage.industries.education.stat2'
        },
        {
            key: 'professional',
            icon: Briefcase,
            badge: 'Premium',
            badgeColor: 'bg-emerald-600',
            imageUrl: '/images/professional.jpg',
            stat1Value: '+200%',
            stat1Label: 'solutionsPage.industries.professional.stat1',
            stat2Value: '70%',
            stat2Label: 'solutionsPage.industries.professional.stat2'
        }
    ];

    const helpTabs = [
        { key: 'ecommerce', icon: ShoppingCart },
        { key: 'fnb', icon: Utensils },
        { key: 'healthcare', icon: Heart },
        { key: 'property', icon: Home },
        { key: 'education', icon: GraduationCap }
    ];

    const implementationSteps = [
        { number: 1, icon: Users, titleKey: 'solutionsPage.implementation.step1.title', descKey: 'solutionsPage.implementation.step1.desc' },
        { number: 2, icon: MessageCircle, titleKey: 'solutionsPage.implementation.step2.title', descKey: 'solutionsPage.implementation.step2.desc' },
        { number: 3, icon: TrendingUp, titleKey: 'solutionsPage.implementation.step3.title', descKey: 'solutionsPage.implementation.step3.desc' },
        { number: 4, icon: Clock, titleKey: 'solutionsPage.implementation.step4.title', descKey: 'solutionsPage.implementation.step4.desc' }
    ];

    const testimonials = [
        {
            initial: 'DS',
            name: 'Dian Sastro',
            title: 'solutionsPage.testimonials.testimonial1.title',
            quote: 'solutionsPage.testimonials.testimonial1.quote',
            rating: 5
        },
        {
            initial: 'AP',
            name: 'Andi Prasetyo',
            title: 'solutionsPage.testimonials.testimonial2.title',
            quote: 'solutionsPage.testimonials.testimonial2.quote',
            rating: 5
        },
        {
            initial: 'RW',
            name: 'Dr. Ratna Wulan',
            title: 'solutionsPage.testimonials.testimonial3.title',
            quote: 'solutionsPage.testimonials.testimonial3.quote',
            rating: 5
        }
    ];

    return (
        <div className="min-h-screen bg-white">
            <Navbar />

            {/* Hero Section */}
            <section className="bg-gradient-to-br from-slate-900 via-gray-900 to-slate-900 py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div className="inline-flex items-center space-x-2 bg-emerald-500/20 text-emerald-400 px-6 py-3 rounded-full text-sm font-bold border border-emerald-500/30 mb-8">
                        <span>{t('solutionsPage.hero.badge')}</span>
                    </div>

                    <h1 className="text-4xl lg:text-6xl font-bold mb-6">
                        <span className="text-white">{t('solutionsPage.hero.title1')} </span>
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-green-400">
                            {t('solutionsPage.hero.title2')}
                        </span>
                    </h1>

                    <p className="text-xl text-gray-300 max-w-4xl mx-auto">
                        {t('solutionsPage.hero.subtitle')}
                    </p>
                </div>
            </section>

            {/* Industry Selection Grid */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                            {t('solutionsPage.industries.title')}
                        </h2>
                        <p className="text-xl text-gray-600">
                            {t('solutionsPage.industries.subtitle')}
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {industries.map((industry, index) => {
                            const Icon = industry.icon;
                            const benefits = t(`solutionsPage.industries.${industry.key}.benefits`, { returnObjects: true }) as string[];

                            return (
                                <div
                                    key={index}
                                    className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all border border-gray-100 group"
                                >
                                    <div className="relative h-48 overflow-hidden">
                                        <img
                                            src={
                                                industry.key === 'ecommerce' ? 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=400&h=300&fit=crop' :
                                                    industry.key === 'fnb' ? 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=300&fit=crop' :
                                                        industry.key === 'healthcare' ? 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=400&h=300&fit=crop' :
                                                            industry.key === 'property' ? 'https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=400&h=300&fit=crop' :
                                                                industry.key === 'education' ? 'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=400&h=300&fit=crop' :
                                                                    'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=300&fit=crop'
                                            }
                                            alt={t(`solutionsPage.industries.${industry.key}.title`)}
                                            className="w-full h-full object-cover"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 to-green-500/20"></div>
                                        <div className={`absolute top-4 left-4 ${industry.badgeColor} text-white px-4 py-2 rounded-full text-sm font-bold flex items-center space-x-2`}>
                                            <Star className="w-4 h-4 fill-current" />
                                            <span>{industry.badge}</span>
                                        </div>
                                    </div>

                                    <div className="p-6">
                                        <div className="w-14 h-14 bg-emerald-100 rounded-2xl flex items-center justify-center mb-4">
                                            <Icon className="w-7 h-7 text-emerald-600" />
                                        </div>

                                        <h3 className="text-2xl font-bold text-gray-900 mb-3">
                                            {t(`solutionsPage.industries.${industry.key}.title`)}
                                        </h3>

                                        <p className="text-gray-600 mb-6 leading-relaxed">
                                            {t(`solutionsPage.industries.${industry.key}.description`)}
                                        </p>

                                        <ul className="space-y-3 mb-6">
                                            {Array.isArray(benefits) && benefits.map((benefit, idx) => (
                                                <li key={idx} className="flex items-start space-x-2">
                                                    <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                                                    <span className="text-gray-700 text-sm">{benefit}</span>
                                                </li>
                                            ))}
                                        </ul>

                                        <div className="grid grid-cols-2 gap-4 mb-6 p-4 bg-gray-50 rounded-xl">
                                            <div>
                                                <div className="text-2xl font-bold text-emerald-600">{industry.stat1Value}</div>
                                                <div className="text-xs text-gray-600">{t(industry.stat1Label)}</div>
                                            </div>
                                            <div>
                                                <div className="text-2xl font-bold text-emerald-600">{industry.stat2Value}</div>
                                                <div className="text-xs text-gray-600">{t(industry.stat2Label)}</div>
                                            </div>
                                        </div>

                                        <button className="text-emerald-600 hover:text-emerald-700 font-semibold flex items-center space-x-2 group">
                                            <span>{t('solutionsPage.industries.cta')}</span>
                                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                        </button>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* How It Helps Section */}
            <section className="py-24 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                            {t('solutionsPage.howItHelps.title')}
                        </h2>
                    </div>

                    <div className="mb-8 flex flex-wrap justify-center gap-4">
                        {helpTabs.map((tab) => {
                            const Icon = tab.icon;
                            return (
                                <button
                                    key={tab.key}
                                    onClick={() => setActiveIndustry(tab.key)}
                                    className={`flex items-center space-x-2 px-6 py-3 rounded-xl font-medium transition-all ${activeIndustry === tab.key
                                        ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-600/30'
                                        : 'bg-white text-gray-700 hover:bg-gray-100'
                                        }`}
                                >
                                    <Icon className="w-5 h-5" />
                                    <span>{t(`solutionsPage.howItHelps.tabs.${tab.key}`)}</span>
                                </button>
                            );
                        })}
                    </div>

                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6">
                            <h3 className="text-3xl font-bold text-gray-900">
                                {t(`solutionsPage.howItHelps.${activeIndustry}.mainTitle`)}
                            </h3>
                            <p className="text-lg text-gray-600">
                                {t(`solutionsPage.howItHelps.${activeIndustry}.description`)}
                            </p>

                            <div className="space-y-6">
                                {[1, 2, 3].map((num) => {
                                    const featureData = t(`solutionsPage.howItHelps.${activeIndustry}.feature${num}`, { returnObjects: true }) as any;
                                    return (
                                        <div key={num} className="flex space-x-4 p-4 bg-white rounded-xl border-l-4 border-emerald-500 shadow-sm">
                                            <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center flex-shrink-0">
                                                <ShoppingCart className="w-6 h-6 text-emerald-600" />
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-gray-900 mb-1">{featureData.title}</h4>
                                                <p className="text-sm text-gray-600">{featureData.description}</p>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>

                        <div className="relative">
                            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
                                <img
                                    src={
                                        activeIndustry === 'ecommerce' ? 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop' :
                                            activeIndustry === 'fnb' ? 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&h=400&fit=crop' :
                                                activeIndustry === 'healthcare' ? 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&h=400&fit=crop' :
                                                    activeIndustry === 'property' ? 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&h=400&fit=crop' :
                                                        'https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=600&h=400&fit=crop'
                                    }
                                    alt={t(`solutionsPage.howItHelps.${activeIndustry}.mainTitle`)}
                                    className="w-full h-96 object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Implementation Process */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                            {t('solutionsPage.implementation.title')}
                        </h2>
                        <p className="text-xl text-gray-600">
                            {t('solutionsPage.implementation.subtitle')}
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {implementationSteps.map((step) => {
                            return (
                                <div key={step.number} className="text-center">
                                    <div className="relative inline-block mb-6">
                                        <div className="w-20 h-20 bg-emerald-600 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                                            {step.number}
                                        </div>
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                                        {t(step.titleKey)}
                                    </h3>
                                    <p className="text-gray-600">
                                        {t(step.descKey)}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section className="py-24 bg-gradient-to-br from-slate-900 via-gray-900 to-slate-900">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                            {t('solutionsPage.testimonials.title')}
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {testimonials.map((testimonial, index) => (
                            <div
                                key={index}
                                className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10"
                            >
                                <div className="flex items-center space-x-4 mb-6">
                                    <div className="w-14 h-14 bg-emerald-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                                        {testimonial.initial}
                                    </div>
                                    <div>
                                        <h4 className="text-white font-bold">{testimonial.name}</h4>
                                        <p className="text-gray-400 text-sm">{t(testimonial.title)}</p>
                                    </div>
                                </div>

                                <p className="text-gray-300 mb-6 italic leading-relaxed">
                                    "{t(testimonial.quote)}"
                                </p>

                                <div className="flex space-x-1">
                                    {[...Array(testimonial.rating)].map((_, i) => (
                                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Bottom CTA */}
            <section className="py-16 bg-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                        {t('solutionsPage.bottomCta.title')}
                    </h2>
                    <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-xl font-semibold transition-all shadow-lg shadow-emerald-600/30">
                        {t('solutionsPage.bottomCta.cta')}
                    </button>
                </div>
            </section>

            <Footer />
        </div>
    );
}
