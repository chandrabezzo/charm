import { MapPin, Train, ParkingCircle, Clock, Building, Phone, MessageCircle, Mail, Headphones, Handshake, Send } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useState, FormEvent } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function ContactPage() {
    const { t } = useTranslation();
    const [formData, setFormData] = useState({
        fullName: '',
        company: '',
        email: '',
        whatsapp: '',
        subject: '',
        message: ''
    });

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();

        // Create WhatsApp message from form data
        const whatsappMessage = `*Pesan Baru dari Website CHARM*%0A%0A` +
            `*Nama:* ${formData.fullName}%0A` +
            `*Perusahaan:* ${formData.company}%0A` +
            `*Email:* ${formData.email}%0A` +
            `*WhatsApp:* ${formData.whatsapp}%0A` +
            `*Subjek:* ${formData.subject}%0A%0A` +
            `*Pesan:*%0A${formData.message}`;

        // Redirect to WhatsApp
        window.open(`https://wa.me/6285183119529?text=${whatsappMessage}`, '_blank');
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <div className="min-h-screen bg-white">
            <Navbar />

            {/* Hero Section */}
            <section className="bg-gradient-to-br from-slate-900 via-gray-900 to-slate-900 py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div className="inline-flex items-center space-x-2 bg-emerald-500/20 text-emerald-400 px-6 py-3 rounded-full text-sm font-bold border border-emerald-500/30 mb-8">
                        <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></span>
                        <span>{t('contactPage.hero.badge')}</span>
                    </div>

                    <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                        {t('contactPage.hero.title')}
                    </h1>

                    <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
                        {t('contactPage.hero.subtitle')}
                    </p>

                    {/* Quick Contact Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                            href="https://wa.me/6285183119529"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center space-x-3 bg-slate-800 hover:bg-slate-700 text-white px-8 py-4 rounded-xl font-semibold border border-slate-700 transition-all"
                        >
                            <MessageCircle className="w-5 h-5 text-emerald-400" />
                            <div className="text-left">
                                <div className="text-sm text-gray-400">WhatsApp</div>
                                <div className="font-bold">{t('contactPage.hero.whatsappAction')}</div>
                            </div>
                        </a>

                        <a
                            href="tel:+02230003593"
                            className="flex items-center justify-center space-x-3 bg-slate-800 hover:bg-slate-700 text-white px-8 py-4 rounded-xl font-semibold border border-slate-700 transition-all"
                        >
                            <Phone className="w-5 h-5 text-emerald-400" />
                            <div className="text-left">
                                <div className="text-sm text-gray-400">Telepon</div>
                                <div className="font-bold">(022) 3000-3593</div>
                            </div>
                        </a>

                        <a
                            href="mailto:hello@charm.com"
                            className="flex items-center justify-center space-x-3 bg-slate-800 hover:bg-slate-700 text-white px-8 py-4 rounded-xl font-semibold border border-slate-700 transition-all"
                        >
                            <Mail className="w-5 h-5 text-emerald-400" />
                            <div className="text-left">
                                <div className="text-sm text-gray-400">Email</div>
                                <div className="font-bold">hello@charm.com</div>
                            </div>
                        </a>
                    </div>
                </div>
            </section>

            {/* Form + Contact Info Section */}
            <section className="py-24 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-12">
                        {/* Contact Form */}
                        <div className="bg-white rounded-2xl p-8 shadow-lg">
                            <div className="border-t-4 border-emerald-500 -mt-8 mb-8"></div>

                            <h2 className="text-3xl font-bold text-gray-900 mb-4">
                                {t('contactPage.form.title')}
                            </h2>
                            <p className="text-gray-600 mb-8">
                                {t('contactPage.form.subtitle')}
                            </p>

                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-semibold text-gray-900 mb-2">
                                            {t('contactPage.form.fullName')} <span className="text-red-500">*</span>
                                        </label>
                                        <input
                                            type="text"
                                            name="fullName"
                                            value={formData.fullName}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-semibold text-gray-900 mb-2">
                                            {t('contactPage.form.company')}
                                        </label>
                                        <input
                                            type="text"
                                            name="company"
                                            value={formData.company}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                                        />
                                    </div>
                                </div>

                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-semibold text-gray-900 mb-2">
                                            Email <span className="text-red-500">*</span>
                                        </label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-semibold text-gray-900 mb-2">
                                            {t('contactPage.form.whatsapp')} <span className="text-red-500">*</span>
                                        </label>
                                        <input
                                            type="tel"
                                            name="whatsapp"
                                            value={formData.whatsapp}
                                            onChange={handleChange}
                                            placeholder="+62"
                                            required
                                            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-semibold text-gray-900 mb-2">
                                        {t('contactPage.form.subject')}
                                    </label>
                                    <select
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                                    >
                                        <option value="">{t('contactPage.form.selectSubject')}</option>
                                        <option value="Demo Produk">{t('contactPage.form.subjects.demo')}</option>
                                        <option value="Konsultasi">{t('contactPage.form.subjects.consultation')}</option>
                                        <option value="Partnership">{t('contactPage.form.subjects.partnership')}</option>
                                        <option value="Support">{t('contactPage.form.subjects.support')}</option>
                                        <option value="Lainnya">{t('contactPage.form.subjects.other')}</option>
                                    </select>
                                </div>

                                <div>
                                    <label className="block text-sm font-semibold text-gray-900 mb-2">
                                        {t('contactPage.form.message')} <span className="text-red-500">*</span>
                                    </label>
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        rows={5}
                                        placeholder={t('contactPage.form.messagePlaceholder')}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent resize-none"
                                    ></textarea>
                                </div>

                                <button
                                    type="submit"
                                    className="w-full bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-xl font-semibold transition-all shadow-lg shadow-emerald-600/30 flex items-center justify-center space-x-2"
                                >
                                    <Send className="w-5 h-5" />
                                    <span>{t('contactPage.form.submit')}</span>
                                </button>
                            </form>
                        </div>

                        {/* Contact Info Cards */}
                        <div className="space-y-6">
                            {/* Office Card */}
                            <div className="bg-white rounded-2xl p-8 shadow-lg">
                                <div className="w-14 h-14 bg-emerald-100 rounded-2xl flex items-center justify-center mb-4">
                                    <Building className="w-7 h-7 text-emerald-600" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-4">
                                    {t('contactPage.info.office.title')}
                                </h3>
                                <div className="space-y-3 text-gray-600">
                                    <div className="flex items-start space-x-3">
                                        <MapPin className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-1" />
                                        <span>{t('contactPage.info.office.address')}</span>
                                    </div>
                                    <div className="flex items-center space-x-3">
                                        <Clock className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                                        <span>{t('contactPage.info.office.hours')}</span>
                                    </div>
                                </div>
                            </div>

                            {/* Customer Support Card */}
                            <div className="bg-white rounded-2xl p-8 shadow-lg">
                                <div className="w-14 h-14 bg-emerald-100 rounded-2xl flex items-center justify-center mb-4">
                                    <Headphones className="w-7 h-7 text-emerald-600" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-4">
                                    {t('contactPage.info.support.title')}
                                </h3>
                                <div className="space-y-3">
                                    <div className="flex items-center space-x-3 text-gray-600">
                                        <Phone className="w-5 h-5 text-gray-400" />
                                        <span>(022) 3000-3593</span>
                                    </div>
                                    <div className="flex items-center space-x-3">
                                        <MessageCircle className="w-5 h-5 text-emerald-600" />
                                        <a href="https://wa.me/6285183119529" target="_blank" rel="noopener noreferrer" className="text-emerald-600 hover:text-emerald-700 font-semibold">
                                            +62 8518-3119-529
                                        </a>
                                    </div>
                                    <div className="flex items-center space-x-3 text-gray-600">
                                        <Mail className="w-5 h-5 text-gray-400" />
                                        <a href="mailto:support@charm.com" className="hover:text-emerald-600">
                                            support@charm.com
                                        </a>
                                    </div>
                                </div>
                            </div>

                            {/* Sales & Partnership Card */}
                            <div className="bg-white rounded-2xl p-8 shadow-lg">
                                <div className="w-14 h-14 bg-emerald-100 rounded-2xl flex items-center justify-center mb-4">
                                    <Handshake className="w-7 h-7 text-emerald-600" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-4">
                                    {t('contactPage.info.sales.title')}
                                </h3>
                                <div className="space-y-3 text-gray-600">
                                    <div className="flex items-center space-x-3">
                                        <Mail className="w-5 h-5 text-gray-400" />
                                        <a href="mailto:sales@charm.com" className="hover:text-emerald-600">
                                            sales@charm.com
                                        </a>
                                    </div>
                                    <div className="flex items-center space-x-3">
                                        <Mail className="w-5 h-5 text-gray-400" />
                                        <a href="mailto:partner@charm.com" className="hover:text-emerald-600">
                                            partner@charm.com
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Office Location Section */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center space-x-2 bg-emerald-100 text-emerald-700 px-6 py-3 rounded-full text-sm font-bold mb-6">
                            <MapPin className="w-4 h-4" />
                            <span>{t('contactPage.location.badge')}</span>
                        </div>
                        <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                            {t('contactPage.location.title')}
                        </h2>
                        <p className="text-xl text-gray-600">
                            {t('contactPage.location.subtitle')}
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-12">
                        {/* Office Details */}
                        <div className="bg-gray-50 rounded-2xl p-8">
                            <h3 className="text-2xl font-bold text-gray-900 mb-8">
                                {t('contactPage.location.hq')}
                            </h3>

                            <div className="space-y-6">
                                <div className="flex items-start space-x-4">
                                    <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center flex-shrink-0">
                                        <MapPin className="w-6 h-6 text-emerald-600" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-900 mb-2">{t('contactPage.location.details.addressTitle')}</h4>
                                        <p className="text-gray-600">
                                            Jl. Dago No.138, Lebakgede, Kecamatan Coblong, Kota Bandung, Jawa Barat 40132
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4">
                                    <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center flex-shrink-0">
                                        <Train className="w-6 h-6 text-emerald-600" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-900 mb-2">{t('contactPage.location.details.transportTitle')}</h4>
                                        <p className="text-gray-600">
                                            {t('contactPage.location.details.transport1')}<br />
                                            {t('contactPage.location.details.transport2')}
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4">
                                    <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center flex-shrink-0">
                                        <ParkingCircle className="w-6 h-6 text-emerald-600" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-900 mb-2">{t('contactPage.location.details.parkingTitle')}</h4>
                                        <p className="text-gray-600">
                                            {t('contactPage.location.details.parkingDesc')}
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4">
                                    <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center flex-shrink-0">
                                        <Clock className="w-6 h-6 text-emerald-600" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-900 mb-2">{t('contactPage.location.details.hoursTitle')}</h4>
                                        <p className="text-gray-600">
                                            {t('contactPage.location.details.weekdays')}<br />
                                            {t('contactPage.location.details.saturday')}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Map */}
                        <div className="relative">
                            <a
                                href="https://www.google.com/maps/place/Evermos+Technology/@-6.8886722,107.4614529,12z/data=!4m10!1m2!2m1!1sEvermos+138!3m6!1s0x2e68e7000b2fd7b7:0xdccd5b002b2a2ea1!8m2!3d-6.8886722!4d107.6138882!15sCgtFdmVybW9zIDEzOJIBEGNvcnBvcmF0ZV9vZmZpY2XgAQA!16s%2Fg%2F11y6f5d67f!5m1!1e1?entry=ttu&g_ep=EgoyMDI1MTIwNy4wIKXMDSoASAFQAw%3D%3D"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block relative group"
                            >
                                <div className="bg-gray-200 rounded-2xl overflow-hidden h-full min-h-[500px] relative">
                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.798!2d107.6138882!3d-6.8886722!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e7000b2fd7b7%3A0xdccd5b002b2a2ea1!2sEvermos%20Technology!5e0!3m2!1sen!2sid!4v1234567890"
                                        width="100%"
                                        height="500"
                                        style={{ border: 0 }}
                                        allowFullScreen
                                        loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"
                                        className="rounded-2xl"
                                    ></iframe>
                                    <div className="absolute inset-0 bg-emerald-600/0 group-hover:bg-emerald-600/10 transition-all flex items-center justify-center">
                                        <div className="bg-white px-6 py-3 rounded-xl shadow-lg opacity-0 group-hover:opacity-100 transition-all transform group-hover:scale-105">
                                            <span className="text-emerald-600 font-semibold">{t('contactPage.location.openMaps')}</span>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
