import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: { translation: { "welcome": "Welcome to STEMM Lab", "instruction": "Please select a sensor to begin your experiment.", "button_text": "Language" } },
  es: { translation: { "welcome": "Bienvenido al Laboratorio STEMM", "instruction": "Por favor, seleccione un sensor para comenzar su experimento.", "button_text": "Idioma" } },
  fr: { translation: { "welcome": "Bienvenue au Laboratoire STEMM", "instruction": "Veuillez sélectionner un capteur pour commencer votre expérience.", "button_text": "Langue" } },
  hi: { translation: { "welcome": "STEMM लैब में आपका स्वागत है", "instruction": "अपना प्रयोग शुरू करने के लिए कृपया एक सेंसर चुनें।", "button_text": "भाषा" } },
  zh: { translation: { "welcome": "欢迎来到 STEMM 实验室", "instruction": "请选择一个传感器开始您的实验。", "button_text": "语言" } },
  ko: { translation: { "welcome": "STEMM Lab에 오신 것을 환영합니다", "instruction": "실험을 시작하려면 센서를 선택하십시오.", "button_text": "언어" } },
  ne: { translation: { "welcome": "STEMM Lab मा स्वागत छ", "instruction": "आफ्नो प्रयोग सुरु गर्न कृपया एउटा सेन्सर चयन गर्नुहोस्।", "button_text": "भाषा" } }
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en",
  interpolation: { escapeValue: false }
});

export default i18n;