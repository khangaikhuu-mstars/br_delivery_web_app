import './css/button.css'
import Button from './components/Button';

function App() {
  return (
     <div className="button">
       <Button class="nevtrehTabletView" type="НЭВТРЭХ"/>
      <Button class="loginTabletView" type="ҮРГЭЛЖЛҮҮЛЭХ"/>
      <Button class="loginTabletView" type="ХАДГАЛАХ"/>
      <Button class="signupTabletView" type="БҮРТГҮҮЛЭХ"/>
      <Button class="orderTabletView" type="САГСЛАХ"/>
     </div>
  );
}

export default App;
