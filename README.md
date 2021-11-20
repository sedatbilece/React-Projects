# React-Projects


Bu repo temel bilgiler ve  mini react projeleri için oluşturulmuştur .
Daha kapsamlı projeler için ayrı repolar oluşturulacaktır.











# React içeririsine Tailwind kurulumu için

projeyi oluştur  
>>   npx create-react-app "projeadi"

--------------------------------------------------------------------------

içine git
>>  cd my-project


--------------------------------------------------------------------------


tailwindcss kur
>> npm install -D tailwindcss@npm:@tailwindcss/postcss7-compat postcss@^7 autoprefixer@^9


--------------------------------------------------------------------------

craco yükle
>>  npm install @craco/craco


--------------------------------------------------------------------------

package.json içinde değiştir
"scripts": {
    "start": "craco --openssl-legacy-provider start",
     "build": "craco build",
     "test": "craco test",
    "eject": "react-scripts eject"
  },


--------------------------------------------------------------------------

craco.config.js oluştur içeriği aşağıda
module.exports = {
  style: {
    postcss: {
      plugins: [
        require('tailwindcss'),
        require('autoprefixer'),
      ],
    },
  },
}

--------------------------------------------------------------------------

tailwind.config.js oluştur
>>  npx tailwindcss-cli@latest init


--------------------------------------------------------------------------

tailwind.config.js içinde şununla değiştir
purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],

--------------------------------------------------------------------------

projenin style.css ine şunları ekle
/* ./src/index.css */
@tailwind base;
@tailwind components;
@tailwind utilities;

--------------------------------------------------------------------------

componenti yazdığın yere şunu ekle
// src/index.js
import './index.css';
