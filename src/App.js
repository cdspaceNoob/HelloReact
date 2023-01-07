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
    <div className="App">
      {/* <h1 style={{
        color: "red",
        backgroundColor: "green",
      }}
      >
        Hello {name};
        <p>{2+3}</p>
        <a href={naver.url}>{naver.name}</a>
      </h1> */}
      <Hello />
      <div className='box'>app</div>
    </div>
  );
}

export default App;
