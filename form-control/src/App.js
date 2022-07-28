import './App.css';
import {useState} from 'react';



function App() {

const [name, setName] = useState('');
const [description, setDescription] = useState('');
const [gender, setGender] = useState('');
const [categories,setCategories]=useState([]);
const [rules,setRules]=useState(0);
  return (
    <div className="App">

          <h2>Name: {name}</h2>
      <input value={name}  onChange={ e => setName(e.target.value)}/>
     <hr></hr>

     <h2>Desc : {description}</h2>
      <textarea value={description}  onChange={ e => setDescription(e.target.value)}> </textarea>

<hr></hr>
        <h2>Gender :{gender}</h2>
       <select value={gender} onChange={e => setGender(e.target.value)}>
          <option value="">seç</option>
          <option value='1'>Erkek</option>
          <option value='2'>Kadın</option>
          
       </select>
       <hr></hr>

        <h2>Categories :{categories}</h2>
        <select multiple={true} value={categories} onChange={e => setCategories([...e.target.selectedOptions].map(option=>option.value))} >
          <option value="">seç</option>
          <option value='1'>php</option>
          <option value='2'>react</option>
          <option value='3'>js</option>
          <option value='4'>c</option>
          </select>   
<hr></hr>

            <input type='checkbox' checked={rules} onChange={e => setRules(e.target.checked)}/>
            kabul ettim
            <br></br>
            <button disabled={!rules}>devam et</button>
    </div>
  );
}

export default App;
