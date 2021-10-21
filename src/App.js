import { useState } from 'react';
import './styles.css';
import Field from './components/field';
import Languages from './components/languages';
import Translate from './components/translate';

export default function App() {
  const [language, setlanguage] = useState('ru');
  const [text, setText] = useState('');

  return (
    <div>
      <Field />
      <Languages />
      <hr />
      <Translate />
    </div>
  );
}
