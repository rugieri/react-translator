import { useState } from 'react';
import './styles.css';
import Field from './components/field';
import Languages from './components/languages';
import Translate from './components/translate';

export default function App() {
  const [language, setLanguage] = useState('ru');
  const [text, setText] = useState('');

  return (
    <div>
      <Field label="Enter English" onChange={setText} value={text} />
      <Languages language={language} onlanguageChange={setLanguage} />
      <hr />
      <Translate text={text} language={language} />
    </div>
  );
}
