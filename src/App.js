import React from 'react';
import './App.css';
import './i18n'; 
import { useTranslation } from 'react-i18next';

function App() {
  const { t, i18n } = useTranslation();

  const handleLanguageChange = (event) => {
    i18n.changeLanguage(event.target.value);
  };

  return (
    <div className="App" style={{ padding: '50px', textAlign: 'center', fontFamily: 'Arial, sans-serif', backgroundColor: '#f4f7f6', minHeight: '100vh' }}>
      <header className="App-header" style={{ backgroundColor: 'white', padding: '40px', borderRadius: '15px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)', display: 'inline-block' }}>
        
        {/* CHECK THIS LINE: It must use t('welcome') */}
        <h1 style={{ color: '#333', marginBottom: '10px' }}>{t('welcome')}</h1>
        
        <p style={{ fontSize: '1.2rem', margin: '20px 0', color: '#666' }}>
          {t('instruction')}
        </p>
        
        <div style={{ marginBottom: '20px' }}>
          <button 
            onClick={() => window.speechSynthesis.speak(new SpeechSynthesisUtterance(t('instruction')))}
            style={{ padding: '12px 24px', backgroundColor: '#34C759', color: 'white', border: 'none', borderRadius: '8px', cursor: 'pointer', fontWeight: 'bold' }}
          >
            Play Audio Instruction
          </button>
        </div>

        <div>
          <label style={{ marginRight: '10px', fontWeight: 'bold' }}>{t('button_text')}: </label>
          <select onChange={handleLanguageChange} value={i18n.language} style={{ padding: '10px', borderRadius: '8px', border: '2px solid #007AFF' }}>
            <option value="en">English</option>
            <option value="es">Español (Spanish)</option>
            <option value="fr">Français (French)</option>
            <option value="hi">हिन्दी (Hindi)</option>
            <option value="zh">中文 (Chinese)</option>
            <option value="ko">한국어 (Korean)</option>
            <option value="ne">नेपाली (Nepali)</option>
          </select>
        </div>
      </header>
    </div>
  );
}

export default App;