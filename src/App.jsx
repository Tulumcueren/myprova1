import { useState } from 'react'
import './App.css'
import Home from './Engineer/Home/Home';
import List from './Engineer/List/List';
import SectionGenerator from './Engineer/SectionGenerator/SectionGenerator';
import Settings from './Engineer/Settings/Settings';

function App() {
const [Section, setSection] = useState('Home');
  return (
    <div className="Main">
      <div className="title">Web App</div>
      <div className="BigContainer">
        <div className="NavBar">
          <SectionGenerator title={'Home'} onClick={()=>setSection('Home')} />
          <SectionGenerator title={'List'} onClick={()=>setSection('List')}/>
          <SectionGenerator title={'Settings'} onClick={()=>setSection('Settings')}/>
        </div>
        <div className="DataContainer">
          {Section === 'Home'?<Home/>: Section==='List'?<List/>:Section==='Settings'?<Settings/>:<Home/>}
        </div>
        
      </div>
    </div>
  )
}

export default App
