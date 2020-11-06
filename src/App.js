import logo from './logo.svg';
import './App.css';
import TrangChu from './Pages/TrangChu';
import LienHe from './Pages/LienHe';
import { Route, Switch } from 'react-router-dom';
import GioiThieu from './Pages/GioiThieu';
import Header from './Components/Header';
import DangNhap from './Pages/DangNhap';
import Home from './Pages/Home';
import DangKy from './Pages/DangKy';
import DemoHOC from './HOC/DemoHOC';
import TodoListRFC from './Pages/TodoList/TodoListRFC';
import TodoList from './Pages/TodoList/TodoList';
import ToDoListRedux from './Pages/TodoList/ToDoListRedux';

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path='/trangchu' component={TrangChu} />
        <Route exact path='/lienhe' component={LienHe} />
        <Route exact path='/gioithieu' component={GioiThieu} />
        <Route exact path='/dangnhap' component={DangNhap} />
        <Route exact path='/dangky' component={DangKy} />
        <Route exact path='/demohoc' component={DemoHOC} />
        <Route exact path='/home' component={Home} />
        <Route exact path='/todolistrfc' component={TodoListRFC} />
        <Route exact path='/todolistrcc' component={TodoList} />
        <Route exact path='/todolistredux' component={ToDoListRedux} />
        <Route exact path='/' component={TrangChu} />
        <div></div>
      </Switch>
      {/* 
        <Route path='/lienhe'>
          <LienHe />
        </Route> */}
    </>
  );
}

export default App;
