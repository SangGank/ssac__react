// ../:상위폴더
// ./ : 현재폴더

import './App.css';
import TodoHeader from './component/TodoHeader';
import TodoItem from './component/TodoItem';
import TodoList from './component/TodoList';
import TodoMain from './component/TodoMain';
import TodoStatus from './component/TodoStatus';
import TodoFooter from './component/TodoFooter';
function App() {
  return ( 
    <>
    <TodoHeader />
    <TodoMain>
      <TodoList>
        <TodoItem />
      </TodoList>
      <TodoStatus />
    </TodoMain>
    <TodoFooter />
    </>
  );
}

export default App;
