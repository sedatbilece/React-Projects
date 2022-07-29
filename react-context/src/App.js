import './App.css';
import {useState} from 'react';
import Home from './Home';
import SiteContext from './context/SiteContext';
import Api from './Api';
function App() {

  const [theme, setTheme] = useState('light');
  const [language, setLanguage] = useState('tr');

  const data={
    theme,
    setTheme,
    language,
    setLanguage
  }
  return (
   <div>
     <SiteContext.Provider value={data} >

<Home />
</SiteContext.Provider>

<hr></hr>
<h1>API İSTEK İŞLEMLERİ</h1>
<hr></hr>
<Api />
   </div>

  );
}

export default App;
