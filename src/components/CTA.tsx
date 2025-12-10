import { ArrowRight, Check } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function CTA() {
  const { t } = useTranslation();

  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 to-emerald-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
            <div className="grid lg:grid-cols-2">
              <div className="p-12 lg:p-16">
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                  {t('cta.title')}
                </h2>
                <p className="text-lg text-gray-600 mb-8">
                  {t('cta.subtitle')}
                </p>

                <ul className="space-y-4 mb-10">
                  {[
                    'cta.benefits.noCredit',
                    'cta.benefits.freeTrial',
                    'cta.benefits.cancelAnytime',
                    'cta.benefits.fullAccess'
                  ].map((key, index) => (
                    <li key={index} className="flex items-center space-x-3">
                      <div className="w-6 h-6 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <Check className="w-4 h-4 text-emerald-600" />
                      </div>
                      <span className="text-gray-700">{t(key)}</span>
                    </li>
                  ))}
                </ul>

                <button className="group w-full bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white px-8 py-4 rounded-xl font-semibold transition-all transform hover:scale-105 shadow-xl shadow-emerald-600/30 flex items-center justify-center space-x-2">
                  <span>{t('cta.button')}</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>

                <p className="text-sm text-gray-500 mt-4 text-center">
                  {t('cta.note')}
                </p>
              </div>

              <div className="bg-gradient-to-br from-emerald-600 to-blue-600 p-12 lg:p-16 text-white flex items-center">
                <div className="space-y-8">
                  <div>
                    <div className="text-5xl font-bold mb-2">10,000+</div>
                    <div className="text-emerald-100 text-lg">{t('cta.stats.activeBusinesses')}</div>
                  </div>
                  <div className="border-t border-white/20 pt-8">
                    <div className="text-5xl font-bold mb-2">{t('currency.monthlyProcessed')}</div>
                    <div className="text-emerald-100 text-lg">{t('cta.stats.monthlyTransactions')}</div>
                  </div>
                  <div className="border-t border-white/20 pt-8">
                    <div className="text-5xl font-bold mb-2">4.9/5</div>
                    <div className="text-emerald-100 text-lg">{t('cta.stats.avgRating')}</div>
                  </div>

                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 mt-8">
                    <p className="text-sm leading-relaxed">
                      "{t('cta.testimonial.text')}"
                    </p>
                    <div className="mt-4 flex items-center space-x-3">
                      <div className="w-10 h-10 bg-white/20 rounded-full"></div>
                      <div>
                        <div className="font-semibold text-sm">{t('cta.testimonial.author')}</div>
                        <div className="text-emerald-100 text-xs">{t('cta.testimonial.position')}</div>
                      </div>
                    </div>
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
