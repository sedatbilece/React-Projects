import {useContext} from 'react'
import SiteContext from './context/SiteContext'



function SwitchLanguage() {

    const {language,setLanguage} =useContext(SiteContext);
    return (<div>
 Mevcut Dil : {language}
           <button onClick={ ()=> setLanguage(language==='tr'?'en':'tr') }>Dili değiştir</button>
    </div>)
}


export default SwitchLanguage;