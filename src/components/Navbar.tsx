import { MessageCircle } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import LanguageSwitcher from './LanguageSwitcher';

export default function Navbar() {
    const { t } = useTranslation();

    const menuItems = [
        { key: 'home', href: '/' },
        { key: 'aiChat', href: '/ai-chat' },
        { key: 'store', href: '/store' },
        { key: 'broadcast', href: '/broadcast' },
        { key: 'flow', href: '/flow' },
        { key: 'features', href: '/#features' },
        { key: 'solutions', href: '/#solutions' },
        { key: 'pricing', href: '/#pricing' },
        { key: 'about', href: '#about' },
        { key: 'contact', href: '#contact' }
    ];

    return (
        <nav className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 border-b border-white/10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                <div className="flex items-center justify-between">
                    <Link to="/" className="flex items-center space-x-2">
                        <MessageCircle className="w-8 h-8 text-emerald-500" />
                        <span className="text-2xl font-bold text-white">CHARM</span>
                    </Link>

                    <div className="hidden lg:flex items-center space-x-8">
                        {menuItems.map((item) => (
                            item.href.startsWith('/') ? (
                                <Link
                                    key={item.key}
                                    to={item.href}
                                    className="text-gray-300 hover:text-emerald-400 transition-colors text-sm font-medium"
                                >
                                    {t(`nav.${item.key}`)}
                                </Link>
                            ) : (
                                <a
                                    key={item.key}
                                    href={item.href}
                                    className="text-gray-300 hover:text-emerald-400 transition-colors text-sm font-medium"
                                >
                                    {t(`nav.${item.key}`)}
                                </a>
                            )
                        ))}
                    </div>

                    <div className="flex items-center space-x-3">
                        <LanguageSwitcher />
                        <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-2.5 rounded-lg font-medium transition-all transform hover:scale-105 shadow-lg shadow-emerald-600/30">
                            {t('nav.getStarted')}
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
}
