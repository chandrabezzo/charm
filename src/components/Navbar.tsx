import { MessageCircle, Menu, X } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import LanguageSwitcher from './LanguageSwitcher';

export default function Navbar() {
    const { t } = useTranslation();
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const menuItems = [
        { key: 'home', href: '/' },
        // { key: 'home', href: '/' },
        // { key: 'aiChat', href: '/ai-chat' },
        // { key: 'store', href: '/store' },
        { key: 'broadcast', href: '/broadcast' },
        { key: 'flow', href: '/flow' },
        { key: 'features', href: '/features' },
        { key: 'solutions', href: '/solutions' },
        { key: 'pricing', href: '/pricing' },
        { key: 'about', href: '/about' },
        { key: 'contact', href: '/contact' }
    ];

    const handleMobileLinkClick = () => {
        setMobileMenuOpen(false);
    };

    return (
        <nav className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 border-b border-white/10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                <div className="flex items-center justify-between">
                    <Link to="/" className="flex items-center space-x-2 z-50">
                        <MessageCircle className="w-8 h-8 text-emerald-500" />
                        <span className="text-2xl font-bold text-white">CHARM</span>
                    </Link>

                    {/* Desktop Menu */}
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
                        <button className="hidden sm:block bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-2.5 rounded-lg font-medium transition-all transform hover:scale-105 shadow-lg shadow-emerald-600/30">
                            {t('nav.getStarted')}
                        </button>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            className="lg:hidden text-white p-2 hover:bg-gray-800 rounded-lg transition-colors z-50"
                            aria-label="Toggle menu"
                        >
                            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            {mobileMenuOpen && (
                <div
                    className="fixed inset-0 bg-black/50 z-40 lg:hidden"
                    onClick={() => setMobileMenuOpen(false)}
                />
            )}

            {/* Mobile Menu Drawer */}
            <div className={`fixed top-0 right-0 bottom-0 w-80 bg-gray-900 z-40 transform transition-transform duration-300 ease-in-out lg:hidden ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
                }`}>
                <div className="flex flex-col h-full pt-20 px-6 pb-6 overflow-y-auto">
                    <div className="flex flex-col space-y-1">
                        {menuItems.map((item) => (
                            <Link
                                key={item.key}
                                to={item.href}
                                onClick={handleMobileLinkClick}
                                className="text-gray-300 hover:text-emerald-400 hover:bg-gray-800 px-4 py-3 rounded-lg transition-all text-base font-medium"
                            >
                                {t(`nav.${item.key}`)}
                            </Link>
                        ))}
                    </div>

                    <div className="mt-6 pt-6 border-t border-gray-800">
                        <button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-lg font-medium transition-all shadow-lg shadow-emerald-600/30">
                            {t('nav.getStarted')}
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
}
