import { Check, X, CheckCircle, ChevronDown, ChevronUp } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function PricingPage() {
    const { t } = useTranslation();
    const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');
    const [openFaq, setOpenFaq] = useState<number | null>(0);

    const pricingPlans = [
        {
            name: 'Starter',
            descKey: 'pricingPage.plans.starter.description',
            monthlyPrice: '199K',
            yearlyPrice: '159K',
            featuresKey: 'pricingPage.plans.starter.features',
            popular: false,
            cta: 'pricingPage.plans.cta.trial'
        },
        {
            name: 'Professional',
            descKey: 'pricingPage.plans.professional.description',
            monthlyPrice: '499K',
            yearlyPrice: '399K',
            featuresKey: 'pricingPage.plans.professional.features',
            popular: true,
            cta: 'pricingPage.plans.cta.trial'
        },
        {
            name: 'Business',
            descKey: 'pricingPage.plans.business.description',
            monthlyPrice: '999K',
            yearlyPrice: '799K',
            featuresKey: 'pricingPage.plans.business.features',
            popular: false,
            cta: 'pricingPage.plans.cta.trial'
        },
        {
            name: 'Enterprise',
            descKey: 'pricingPage.plans.enterprise.description',
            monthlyPrice: 'Custom',
            yearlyPrice: 'Custom',
            featuresKey: 'pricingPage.plans.enterprise.features',
            popular: false,
            cta: 'pricingPage.plans.cta.contact'
        }
    ];

    const comparisonFeatures = [
        { feature: 'pricingPage.comparison.whatsappNumber', starter: '1', professional: '3', business: '10', enterprise: 'Unlimited' },
        { feature: 'pricingPage.comparison.aiChat', starter: '500/bulan', professional: 'Unlimited', business: 'Unlimited', enterprise: 'Unlimited' },
        { feature: 'pricingPage.comparison.broadcast', starter: false, professional: '1K kontak', business: 'Unlimited', enterprise: 'Unlimited' },
        { feature: 'pricingPage.comparison.storeProducts', starter: '50', professional: 'Unlimited', business: 'Unlimited', enterprise: 'Unlimited' },
        { feature: 'pricingPage.comparison.userAgent', starter: '2', professional: '10', business: '25', enterprise: 'Unlimited' },
        { feature: 'pricingPage.comparison.apiAccess', starter: false, professional: true, business: true, enterprise: true },
        { feature: 'pricingPage.comparison.whiteLabel', starter: false, professional: false, business: true, enterprise: true },
        { feature: 'pricingPage.comparison.dedicatedSupport', starter: false, professional: false, business: true, enterprise: true }
    ];

    const faqs = [
        {
            questionKey: 'pricingPage.faq.q1.question',
            answerKey: 'pricingPage.faq.q1.answer'
        },
        {
            questionKey: 'pricingPage.faq.q2.question',
            answerKey: 'pricingPage.faq.q2.answer'
        },
        {
            questionKey: 'pricingPage.faq.q3.question',
            answerKey: 'pricingPage.faq.q3.answer'
        },
        {
            questionKey: 'pricingPage.faq.q4.question',
            answerKey: 'pricingPage.faq.q4.answer'
        },
        {
            questionKey: 'pricingPage.faq.q5.question',
            answerKey: 'pricingPage.faq.q5.answer'
        }
    ];

    return (
        <div className="min-h-screen bg-white">
            <Navbar />

            {/* Hero Section with Billing Toggle */}
            <section className="bg-gradient-to-br from-slate-900 via-gray-900 to-slate-900 py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div className="inline-flex items-center space-x-2 bg-emerald-500/20 text-emerald-400 px-6 py-3 rounded-full text-sm font-bold border border-emerald-500/30 mb-8">
                        <span>{t('pricingPage.hero.badge')}</span>
                    </div>

                    <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                        {t('pricingPage.hero.title')}
                    </h1>

                    <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
                        {t('pricingPage.hero.subtitle')}
                    </p>

                    {/* Billing Toggle */}
                    <div className="inline-flex items-center bg-slate-800 rounded-full p-1 border border-slate-700">
                        <button
                            onClick={() => setBillingCycle('monthly')}
                            className={`px-6 py-3 rounded-full font-semibold transition-all ${billingCycle === 'monthly'
                                ? 'bg-emerald-600 text-white shadow-lg'
                                : 'text-gray-400 hover:text-white'
                                }`}
                        >
                            {t('pricingPage.billing.monthly')}
                        </button>
                        <button
                            onClick={() => setBillingCycle('yearly')}
                            className={`px-6 py-3 rounded-full font-semibold transition-all flex items-center space-x-2 ${billingCycle === 'yearly'
                                ? 'bg-emerald-600 text-white shadow-lg'
                                : 'text-gray-400 hover:text-white'
                                }`}
                        >
                            <span>{t('pricingPage.billing.yearly')}</span>
                            <span className="bg-yellow-500 text-slate-900 px-2 py-1 rounded-full text-xs font-bold">
                                {t('pricingPage.billing.save')}
                            </span>
                        </button>
                    </div>
                </div>
            </section>

            {/* Pricing Cards */}
            <section className="py-24 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {pricingPlans.map((plan, index) => {
                            const features = t(plan.featuresKey, { returnObjects: true }) as string[];
                            const price = billingCycle === 'monthly' ? plan.monthlyPrice : plan.yearlyPrice;

                            return (
                                <div
                                    key={index}
                                    className={`bg-white rounded-2xl p-8 shadow-lg transition-all ${plan.popular
                                        ? 'border-2 border-emerald-500 transform scale-105 relative'
                                        : 'border border-gray-200'
                                        }`}
                                >
                                    {plan.popular && (
                                        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                                            <div className="bg-emerald-600 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg">
                                                ⭐ {t('pricingPage.plans.popular')}
                                            </div>
                                        </div>
                                    )}

                                    <div className="mb-6">
                                        <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                                        <p className="text-gray-600 text-sm">{t(plan.descKey)}</p>
                                    </div>

                                    <div className="mb-8">
                                        <div className="flex items-baseline">
                                            <span className="text-4xl font-bold text-gray-900">{price}</span>
                                            {price !== 'Custom' && (
                                                <span className="text-gray-600 ml-2">/bulan</span>
                                            )}
                                        </div>
                                    </div>

                                    <button
                                        className={`w-full py-3 px-6 rounded-xl font-semibold transition-all mb-8 ${plan.popular
                                            ? 'bg-emerald-600 hover:bg-emerald-700 text-white shadow-lg shadow-emerald-600/30'
                                            : 'bg-gray-100 hover:bg-gray-200 text-gray-900'
                                            }`}
                                    >
                                        {t(plan.cta)}
                                    </button>

                                    <ul className="space-y-4">
                                        {Array.isArray(features) && features.map((feature, idx) => (
                                            <li key={idx} className="flex items-start space-x-3">
                                                <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                                                <span className="text-gray-700 text-sm">{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            );
                        })}
                    </div>

                    <div className="mt-12 text-center">
                        <p className="text-gray-600 flex items-center justify-center space-x-2">
                            <CheckCircle className="w-5 h-5 text-emerald-600" />
                            <span>{t('pricingPage.plans.guarantee')}</span>
                        </p>
                    </div>
                </div>
            </section>

            {/* Feature Comparison Table */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center space-x-2 bg-emerald-100 text-emerald-700 px-6 py-3 rounded-full text-sm font-bold mb-6">
                            <span>{t('pricingPage.comparison.badge')}</span>
                        </div>
                        <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                            {t('pricingPage.comparison.title')}
                        </h2>
                        <p className="text-xl text-gray-600">
                            {t('pricingPage.comparison.subtitle')}
                        </p>
                    </div>

                    <div className="overflow-x-auto">
                        <table className="w-full bg-white rounded-2xl overflow-hidden shadow-xl">
                            <thead>
                                <tr className="bg-slate-900 text-white">
                                    <th className="px-6 py-4 text-left font-bold">{t('pricingPage.comparison.feature')}</th>
                                    <th className="px-6 py-4 text-center font-bold">Starter</th>
                                    <th className="px-6 py-4 text-center font-bold">Professional</th>
                                    <th className="px-6 py-4 text-center font-bold">Business</th>
                                    <th className="px-6 py-4 text-center font-bold">Enterprise</th>
                                </tr>
                            </thead>
                            <tbody>
                                {comparisonFeatures.map((row, index) => (
                                    <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                                        <td className="px-6 py-4 font-semibold text-gray-900">{t(row.feature)}</td>
                                        <td className="px-6 py-4 text-center">
                                            {row.starter === false ? (
                                                <X className="w-5 h-5 text-gray-400 mx-auto" />
                                            ) : row.starter === true ? (
                                                <Check className="w-5 h-5 text-emerald-600 mx-auto" />
                                            ) : (
                                                <span className="text-gray-700">{row.starter}</span>
                                            )}
                                        </td>
                                        <td className="px-6 py-4 text-center">
                                            {row.professional === false ? (
                                                <X className="w-5 h-5 text-gray-400 mx-auto" />
                                            ) : row.professional === true ? (
                                                <Check className="w-5 h-5 text-emerald-600 mx-auto" />
                                            ) : (
                                                <span className="text-gray-700 font-semibold">{row.professional}</span>
                                            )}
                                        </td>
                                        <td className="px-6 py-4 text-center">
                                            {row.business === false ? (
                                                <X className="w-5 h-5 text-gray-400 mx-auto" />
                                            ) : row.business === true ? (
                                                <Check className="w-5 h-5 text-emerald-600 mx-auto" />
                                            ) : (
                                                <span className="text-gray-700 font-semibold">{row.business}</span>
                                            )}
                                        </td>
                                        <td className="px-6 py-4 text-center">
                                            {row.enterprise === false ? (
                                                <X className="w-5 h-5 text-gray-400 mx-auto" />
                                            ) : row.enterprise === true ? (
                                                <Check className="w-5 h-5 text-emerald-600 mx-auto" />
                                            ) : (
                                                <span className="text-gray-700 font-semibold">{row.enterprise}</span>
                                            )}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-24 bg-gray-50">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center space-x-2 bg-emerald-100 text-emerald-700 px-6 py-3 rounded-full text-sm font-bold mb-6">
                            <span>❓ {t('pricingPage.faq.badge')}</span>
                        </div>
                        <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                            {t('pricingPage.faq.title')}
                        </h2>
                        <p className="text-xl text-gray-600">
                            {t('pricingPage.faq.subtitle')}
                        </p>
                    </div>

                    <div className="space-y-4">
                        {faqs.map((faq, index) => (
                            <div
                                key={index}
                                className={`bg-white rounded-2xl border-2 transition-all ${openFaq === index ? 'border-emerald-500' : 'border-gray-200'
                                    }`}
                            >
                                <button
                                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                                    className="w-full px-6 py-5 flex items-center justify-between text-left"
                                >
                                    <span className="font-bold text-gray-900 text-lg pr-8">
                                        {t(faq.questionKey)}
                                    </span>
                                    {openFaq === index ? (
                                        <ChevronUp className="w-6 h-6 text-emerald-600 flex-shrink-0" />
                                    ) : (
                                        <ChevronDown className="w-6 h-6 text-gray-400 flex-shrink-0" />
                                    )}
                                </button>
                                {openFaq === index && (
                                    <div className="px-6 pb-5">
                                        <p className="text-gray-600 leading-relaxed">
                                            {t(faq.answerKey)}
                                        </p>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Bottom CTA */}
            <section className="py-16 bg-gradient-to-br from-slate-900 via-gray-900 to-slate-900">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                        {t('pricingPage.bottomCta.title')}
                    </h2>
                    <p className="text-xl text-gray-300 mb-8">
                        {t('pricingPage.bottomCta.subtitle')}
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-xl font-semibold transition-all shadow-lg shadow-emerald-600/30">
                            {t('pricingPage.bottomCta.trial')}
                        </button>
                        <button className="bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-xl font-semibold border-2 border-white/20 transition-all">
                            {t('pricingPage.bottomCta.contact')}
                        </button>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
