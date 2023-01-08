import './App.css';
import Hello from './component/Hello';
import Welcome from './component/Welcome';
import styles from './App.module.css';

function App() {
  const name = "Moon";
  const naver = {
    name : "네이버",
    url: "https://naver.com",
  };
  return (
    <div>
      {/* 동일한 컴포넌트라 하더라도 달리 관리된다. */}
      <Hello /> 
      <Hello />
      <Hello />
    </div>
  );
}

export default App;
