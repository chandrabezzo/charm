import { MessageCircle, ArrowRight, Play } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import LanguageSwitcher from './LanguageSwitcher';

export default function Hero() {
  const { t } = useTranslation();

  const menuItems = [
    { key: 'home', href: '/' },
    { key: 'aiChat', href: '/ai-chat' },
    { key: 'store', href: '/store' },
    { key: 'broadcast', href: '/broadcast' },
    { key: 'flow', href: '/flow' },
    { key: 'features', href: '/features' },
    { key: 'solutions', href: '/solutions' },
    { key: 'pricing', href: '#pricing' },
    { key: 'about', href: '#about' },
    { key: 'contact', href: '#contact' }
  ];

  return (
    <div className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

      <nav className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 border-b border-white/10">
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
      </nav>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="text-5xl lg:text-6xl font-bold text-white leading-tight">
              {t('hero.title')}
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-green-400">
                {t('hero.titleHighlight')}
              </span>
            </h1>

            <p className="text-xl text-gray-300 leading-relaxed">
              {t('hero.description')}
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="group bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-xl font-semibold transition-all transform hover:scale-105 shadow-xl shadow-emerald-600/30 flex items-center justify-center space-x-2">
                <span>{t('hero.startTrial')}</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-xl font-semibold border-2 border-white/20 transition-all flex items-center justify-center space-x-2">
                <Play className="w-5 h-5" />
                <span>{t('hero.watchDemo')}</span>
              </button>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 pt-8">
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">
                <div className="text-3xl font-bold text-emerald-400">10K+</div>
                <div className="text-sm text-gray-400">{t('hero.stats.activeBusinesses')}</div>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">
                <div className="text-3xl font-bold text-green-400">300%</div>
                <div className="text-sm text-gray-400">{t('hero.stats.growth')}</div>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">
                <div className="text-3xl font-bold text-blue-400">24/7</div>
                <div className="text-sm text-gray-400">{t('hero.stats.support')}</div>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">
                <div className="text-3xl font-bold text-purple-400">50+</div>
                <div className="text-sm text-gray-400">{t('hero.stats.features')}</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-green-500/20 rounded-3xl blur-3xl"></div>
            <div className="relative bg-gradient-to-br from-emerald-500/10 to-green-500/10 backdrop-blur-xl rounded-3xl shadow-2xl p-8 border border-white/20">
              <div className="space-y-6">
                <div className="flex items-center space-x-3 bg-emerald-500/20 p-4 rounded-xl border border-emerald-500/30">
                  <div className="bg-emerald-600 rounded-lg p-2">
                    <MessageCircle className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="text-sm font-medium text-white">{t('hero.dashboard.whatsappConnected')}</div>
                    <div className="text-xs text-emerald-200">{t('hero.dashboard.businessProfileActive')}</div>
                  </div>
                  <div className="w-3 h-3 bg-emerald-400 rounded-full animate-pulse"></div>
                </div>

                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 space-y-4 border border-white/10">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-300">{t('hero.dashboard.todayRevenue')}</span>
                    <span className="text-2xl font-bold text-white">{t('currency.todayRevenue')}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-300">{t('hero.dashboard.activeOrders')}</span>
                    <span className="text-2xl font-bold text-white">234</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-300">{t('hero.dashboard.conversionRate')}</span>
                    <span className="text-2xl font-bold text-emerald-400">45%</span>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-3">
                  <div className="bg-blue-500/20 p-4 rounded-lg text-center border border-blue-500/30">
                    <div className="text-lg font-bold text-blue-300">89</div>
                    <div className="text-xs text-gray-300">{t('hero.dashboard.products')}</div>
                  </div>
                  <div className="bg-emerald-500/20 p-4 rounded-lg text-center border border-emerald-500/30">
                    <div className="text-lg font-bold text-emerald-300">1.2k</div>
                    <div className="text-xs text-gray-300">{t('hero.dashboard.customers')}</div>
                  </div>
                  <div className="bg-orange-500/20 p-4 rounded-lg text-center border border-orange-500/30">
                    <div className="text-lg font-bold text-orange-300">24/7</div>
                    <div className="text-xs text-gray-300">{t('hero.dashboard.support')}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
