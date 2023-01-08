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
      <Hello />
    </div>
  );
}

export default App;
