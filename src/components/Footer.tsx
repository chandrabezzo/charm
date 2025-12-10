import { MessageCircle, Mail, MapPin, Phone } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

export default function Footer() {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  const productLinks = [
    { labelKey: 'footer.product.features', href: '/features' },
    { labelKey: 'footer.product.aiChat', href: '/ai-chat' },
    { labelKey: 'footer.product.store', href: '/store' },
    { labelKey: 'footer.product.broadcast', href: '/broadcast' },
    { labelKey: 'footer.product.pricing', href: '/pricing' }
  ];

  const companyLinks = [
    { labelKey: 'footer.company.about', href: '/about' },
    { labelKey: 'footer.company.solutions', href: '/solutions' },
    { labelKey: 'footer.company.contact', href: '/contact' }
  ];

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <Link to="/" className="flex items-center space-x-2 mb-6">
              <MessageCircle className="w-8 h-8 text-emerald-500" />
              <span className="text-2xl font-bold text-white">CHARM</span>
            </Link>
            <p className="text-gray-400 leading-relaxed mb-6">
              {t('footer.description')}
            </p>

            {/* Meta Business Partner Badge */}
            <div className="mb-6 inline-flex items-center space-x-3 bg-gradient-to-r from-blue-600 to-blue-700 px-4 py-3 rounded-lg border border-blue-500">
              <svg className="w-6 h-6 text-white" viewBox="0 0 36 36" fill="currentColor">
                <path d="M20.3 12.3l-3.7 3.7-3.7-3.7-1.4 1.4 3.7 3.7-3.7 3.7 1.4 1.4 3.7-3.7 3.7 3.7 1.4-1.4-3.7-3.7 3.7-3.7-1.4-1.4z" />
                <circle cx="18" cy="18" r="16" fill="none" stroke="currentColor" strokeWidth="2" />
              </svg>
              <div>
                <div className="text-xs text-blue-100 font-medium">Official Partner</div>
                <div className="text-sm text-white font-bold">Meta Business</div>
              </div>
            </div>

            <div className="flex space-x-4">
              {['twitter', 'facebook', 'linkedin', 'instagram'].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="w-10 h-10 bg-gray-800 hover:bg-emerald-600 rounded-lg flex items-center justify-center transition-colors"
                >
                  <span className="sr-only">{social}</span>
                  <div className="w-5 h-5 bg-gray-400 rounded"></div>
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold text-lg mb-6">{t('footer.product.title')}</h3>
            <ul className="space-y-3">
              {productLinks.map((item, index) => (
                <li key={index}>
                  <Link to={item.href} className="hover:text-emerald-400 transition-colors">
                    {t(item.labelKey)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold text-lg mb-6">{t('footer.company.title')}</h3>
            <ul className="space-y-3">
              {companyLinks.map((item, index) => (
                <li key={index}>
                  <Link to={item.href} className="hover:text-emerald-400 transition-colors">
                    {t(item.labelKey)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold text-lg mb-6">{t('footer.contact.title')}</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                <a href="mailto:hello@charm.com" className="hover:text-emerald-400">hello@charm.com</a>
              </li>
              <li className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                <a href="tel:+15551234567" className="hover:text-emerald-400">+1 (555) 123-4567</a>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                <span>123 Business Avenue<br />San Francisco, CA 94105</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              {currentYear} {t('footer.legal.rights')}
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="hover:text-emerald-400 transition-colors">
                {t('footer.legal.privacy')}
              </a>
              <a href="#" className="hover:text-emerald-400 transition-colors">
                {t('footer.legal.terms')}
              </a>
              <a href="#" className="hover:text-emerald-400 transition-colors">
                {t('footer.legal.cookies')}
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
