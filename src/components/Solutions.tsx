import { Store, Building2, Briefcase, Home, Users } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';

const industries = [
    { key: 'ecommerce', icon: Store },
    { key: 'fnb', icon: Briefcase },
    { key: 'retail', icon: Building2 },
    { key: 'property', icon: Home }
];

import { Check } from 'lucide-react';

export default function Solutions() {
    const { t } = useTranslation();
    const [activeIndustry, setActiveIndustry] = useState('ecommerce');

    return (
        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-12">
                    <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                        {t('solutions.title')}
                    </h2>
                    <p className="text-xl text-gray-600">
                        {t('solutions.subtitle')}
                    </p>
                </div>

                {/* Industry Tabs */}
                <div className="flex justify-center mb-12 overflow-x-auto pb-4">
                    <div className="inline-flex bg-gray-100 rounded-xl p-1 space-x-2">
                        {industries.map((industry) => {
                            const Icon = industry.icon;
                            return (
                                <button
                                    key={industry.key}
                                    onClick={() => setActiveIndustry(industry.key)}
                                    className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all whitespace-nowrap ${activeIndustry === industry.key
                                        ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-600/30'
                                        : 'text-gray-700 hover:bg-white'
                                        }`}
                                >
                                    <Icon className="w-4 h-4" />
                                    <span>{t(`solutions.industries.${industry.key}`)}</span>
                                </button>
                            );
                        })}
                    </div>
                </div>

                {/* Content */}
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <h3 className="text-3xl font-bold text-gray-900">
                            {t(`solutions.content.${activeIndustry}.title`)}
                        </h3>
                        <p className="text-lg text-gray-600 leading-relaxed">
                            {t(`solutions.content.${activeIndustry}.description`)}
                        </p>

                        <ul className="space-y-4">
                            {[1, 2].map((num) => (
                                <li key={num} className="flex items-start space-x-3">
                                    <div className="w-6 h-6 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                                        <Check className="w-4 h-4 text-emerald-600" />
                                    </div>
                                    <span className="text-gray-700">
                                        {t(`solutions.content.${activeIndustry}.feature${num}`)}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* WhatsApp Demo Mockup */}
                    <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-r from-emerald-400/20 to-green-400/20 rounded-3xl blur-3xl"></div>
                        <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden border-8 border-gray-900 max-w-sm mx-auto">
                            {/* Phone Header */}
                            <div className="bg-teal-600 px-6 py-4 flex items-center space-x-3">
                                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                                    <Users className="w-6 h-6 text-teal-600" />
                                </div>
                                <div className="flex-1">
                                    <div className="text-white font-semibold text-sm">
                                        {t('solutions.demo.assistantName')}
                                    </div>
                                    <div className="text-teal-100 text-xs">
                                        {t('solutions.demo.onlinePowered')}
                                    </div>
                                </div>
                            </div>

                            {/* Chat Messages */}
                            <div className="bg-[#ECE5DD] p-4 space-y-3 min-h-[400px]">
                                <div className="flex justify-start">
                                    <div className="bg-white rounded-lg rounded-tl-none px-4 py-2 shadow max-w-[80%]">
                                        <p className="text-sm text-gray-800">
                                            {t('solutions.demo.message1')}
                                        </p>
                                    </div>
                                </div>

                                <div className="flex justify-end">
                                    <div className="bg-[#DCF8C6] rounded-lg rounded-tr-none px-4 py-2 shadow max-w-[80%]">
                                        <p className="text-sm text-gray-800">
                                            {t('solutions.demo.message2')}
                                        </p>
                                    </div>
                                </div>

                                <div className="flex justify-start">
                                    <div className="bg-white rounded-lg rounded-tl-none px-4 py-3 shadow max-w-[80%]">
                                        <p className="text-sm text-gray-800 mb-2">
                                            {t('solutions.demo.message3')}
                                        </p>
                                        <div className="bg-emerald-500 text-white px-3 py-2 rounded text-xs text-center font-medium">
                                            {t('solutions.demo.cta')}
                                        </div>
                                    </div>
                                </div>

                                <div className="flex justify-end">
                                    <div className="bg-[#DCF8C6] rounded-lg rounded-tr-none px-4 py-2 shadow max-w-[80%]">
                                        <p className="text-sm text-gray-800">
                                            {t('solutions.demo.message4')}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
