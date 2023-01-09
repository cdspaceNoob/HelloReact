import './App.css';
import Hello from './component/Hello';
import Welcome from './component/Welcome';
import styles from './App.module.css';
import Header from './component/Header';
import DayList from './component/DayList';
import Day from './component/Day';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import EmptyPage from './component/EmptyPage';

function App() {
  return (
    // 앱 전체를 BrowserRouter로 묶어준다.
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
          {/* path를 /day로 지정하면 여기에도 '/'가 있는 것으로 간주된다. exact를 root에 써서 해결한다.*/}
          {/* 콜론(:)을 써서 state로 받을 수 있다. 아래 path 중 ':day'는 state를 받아 세부 경로를 완성하는 역할을 하게 된다. */}
          {/* 여기서는 day라는 key로 url에 입력되는 value를 얻을 수 있게 되는 것이다. */}
          <Route path='/day/:day'>
            <Day />
          </Route>
          {/* path 없이 가장 아래쪽에 두면 위의 조건을 만족하는 path가 없을 시 작동한다. */}
          <Route>
            <EmptyPage />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
