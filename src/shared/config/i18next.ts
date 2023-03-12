import i18n from 'i18next'
import detector from 'i18next-browser-languagedetector'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import Backend from 'i18next-http-backend'

i18n
    .use(Backend)
    .use(detector)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        fallbackLng: 'ru',
        debug: true,
        interpolation: {
            escapeValue: __IS_DEV__
        },
        backend: {
            loadPath: '/locales/{{lng}}/{{ns}}.json',
        }
    })

export default i18n