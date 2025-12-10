import { MessageCircle, TrendingUp, ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './LanguageSwitcher';

export default function Hero() {
  const { t } = useTranslation();

  return (
    <div className="relative bg-gradient-to-br from-emerald-50 via-white to-blue-50 overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

      <nav className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <MessageCircle className="w-8 h-8 text-emerald-600" />
            <span className="text-2xl font-bold text-gray-900">CHARM</span>
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
            <div className="inline-flex items-center space-x-2 bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full text-sm font-medium">
              <TrendingUp className="w-4 h-4" />
              <span>{t('hero.badge')}</span>
            </div>

            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              {t('hero.title')}
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-blue-600">
                {t('hero.titleHighlight')}
              </span>
            </h1>

            <p className="text-xl text-gray-600 leading-relaxed">
              {t('hero.description')}
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="group bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-xl font-semibold transition-all transform hover:scale-105 shadow-xl shadow-emerald-600/30 flex items-center justify-center space-x-2">
                <span>{t('hero.startTrial')}</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="bg-white hover:bg-gray-50 text-gray-900 px-8 py-4 rounded-xl font-semibold border-2 border-gray-200 transition-all">
                {t('hero.watchDemo')}
              </button>
            </div>

            <div className="flex items-center space-x-8 pt-4">
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900">10k+</div>
                <div className="text-sm text-gray-600">{t('hero.stats.activeBusinesses')}</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900">500k+</div>
                <div className="text-sm text-gray-600">{t('hero.stats.dailyTransactions')}</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900">98%</div>
                <div className="text-sm text-gray-600">{t('hero.stats.satisfactionRate')}</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-blue-400 rounded-3xl blur-3xl opacity-20 animate-pulse"></div>
            <div className="relative bg-white rounded-3xl shadow-2xl p-8 border border-gray-100">
              <div className="space-y-6">
                <div className="flex items-center space-x-3 bg-emerald-50 p-4 rounded-xl">
                  <div className="bg-emerald-600 rounded-lg p-2">
                    <MessageCircle className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="text-sm font-medium text-gray-900">{t('hero.dashboard.whatsappConnected')}</div>
                    <div className="text-xs text-gray-600">{t('hero.dashboard.businessProfileActive')}</div>
                  </div>
                  <div className="w-3 h-3 bg-emerald-500 rounded-full animate-pulse"></div>
                </div>

                <div className="bg-gray-50 rounded-xl p-6 space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">{t('hero.dashboard.todayRevenue')}</span>
                    <span className="text-2xl font-bold text-gray-900">{t('currency.todayRevenue')}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">{t('hero.dashboard.activeOrders')}</span>
                    <span className="text-2xl font-bold text-gray-900">234</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">{t('hero.dashboard.conversionRate')}</span>
                    <span className="text-2xl font-bold text-emerald-600">45%</span>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-3">
                  <div className="bg-blue-50 p-4 rounded-lg text-center">
                    <div className="text-lg font-bold text-blue-600">89</div>
                    <div className="text-xs text-gray-600">{t('hero.dashboard.products')}</div>
                  </div>
                  <div className="bg-emerald-50 p-4 rounded-lg text-center">
                    <div className="text-lg font-bold text-emerald-600">1.2k</div>
                    <div className="text-xs text-gray-600">{t('hero.dashboard.customers')}</div>
                  </div>
                  <div className="bg-orange-50 p-4 rounded-lg text-center">
                    <div className="text-lg font-bold text-orange-600">24/7</div>
                    <div className="text-xs text-gray-600">{t('hero.dashboard.support')}</div>
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
