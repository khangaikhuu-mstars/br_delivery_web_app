import './App.css';
import CategoryLabel from './components/CategoryLabel';
import Footer from './components/Footer';
import Slider from "./components/Slider";
import InfoPanel from './components/InfoPanel'
function App() {
  return (
    <div>
      <Slider />
      {/* <InfoPanel.js/>  */}
      <Footer /> 
      <CategoryLabel title='Хямдралтай'/>
      <CategoryLabel title='Үндсэн хоол'/>
      <CategoryLabel title='Салат ба зууш'/>
      <CategoryLabel title='амттан'/>
      
    </div>
  );
}
export default App;
