import './css/button.css'
import Button from './components/Button';

function App() {
  return (
     <div>
       <Button class="nevtrehMobileView" type="НЭВТРЭХ"/>
      <Button class="loginMobileView" type="ҮРГЭЛЖЛҮҮЛЭХ"/>
      <Button class="loginMobileView" type="ХАДГАЛАХ"/>
      <Button class="signupMobileView" type="БҮРТГҮҮЛЭХ"/>
      <Button class="orderMobileView" type="САГСЛАХ"/>
     </div>
  );
}

export default App;
