import { Users, TrendingUp, Headphones, Sparkles } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const stats = [
    {
        icon: Users,
        valueKey: 'stats.activeUsers.value',
        labelKey: 'stats.activeUsers.label',
        color: 'emerald'
    },
    {
        icon: TrendingUp,
        valueKey: 'stats.growth.value',
        labelKey: 'stats.growth.label',
        color: 'green'
    },
    {
        icon: Headphones,
        valueKey: 'stats.support.value',
        labelKey: 'stats.support.label',
        color: 'blue'
    },
    {
        icon: Sparkles,
        valueKey: 'stats.features.value',
        labelKey: 'stats.features.label',
        color: 'purple'
    }
];

const colorClasses = {
    emerald: 'from-emerald-500 to-emerald-600',
    green: 'from-green-500 to-green-600',
    blue: 'from-blue-500 to-blue-600',
    purple: 'from-purple-500 to-purple-600'
};

export default function Stats() {
    const { t } = useTranslation();

    return (
        <section className="py-16 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                    {stats.map((stat, index) => {
                        const Icon = stat.icon;
                        return (
                            <div
                                key={index}
                                className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300"
                            >
                                <div className={`w-12 h-12 bg-gradient-to-br ${colorClasses[stat.color as keyof typeof colorClasses]} rounded-xl flex items-center justify-center mb-4 shadow-lg`}>
                                    <Icon className="w-6 h-6 text-white" />
                                </div>
                                <div className="text-3xl font-bold text-white mb-1">
                                    {t(stat.valueKey)}
                                </div>
                                <div className="text-gray-400 text-sm">
                                    {t(stat.labelKey)}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
