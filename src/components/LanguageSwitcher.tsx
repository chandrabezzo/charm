import { useTranslation } from 'react-i18next';
import { Languages } from 'lucide-react';

export default function LanguageSwitcher() {
    const { i18n } = useTranslation();

    const toggleLanguage = () => {
        const newLang = i18n.language === 'id' ? 'en' : 'id';
        i18n.changeLanguage(newLang);
    };

    return (
        <button
            onClick={toggleLanguage}
            className="flex items-center space-x-2 px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-gray-700 hover:text-emerald-600 transition-all border border-gray-200"
            aria-label="Switch language"
        >
            <Languages className="w-4 h-4" />
            <span className="text-sm font-medium">
                {i18n.language === 'id' ? 'EN' : 'ID'}
            </span>
        </button>
    );
}
