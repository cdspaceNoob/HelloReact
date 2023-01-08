import './App.css';
import Hello from './component/Hello';
import Welcome from './component/Welcome';
import styles from './App.module.css';
import Header from './component/Header';
import DayList from './component/DayList';
import Day from './component/Day';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <Header />
        {/* Switch의 외부는 모든 페이지에 공통적으로 노출.
        내부는 url에 따라 다르게 표시된다. */}
        <Switch>
          {/* / 는 첫페이지를 의미한다. */}
          <Route exact path="/">
            <DayList />
          </Route>
          {/* path를 /day로 지정하면 여기에도 '/'가 있는 것으로 간주된다. exact를 위쪽에 써서 해결한다.*/}
          <Route path="/day">
            <Day />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
