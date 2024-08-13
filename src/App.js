import React from 'react';
import "./App.css";
import InputBlock from "./components/InputBlock";
import TodoBlock from "./components/todoBlock";
import "bootstrap/dist/css/bootstrap.min.css";

const App = ()=>{
  // useState() 훅을 이용해서 state 생성
  // Input 컴포넌트에서 데이터를 추가 하고
  // Ouput 컴포넌트에서 데이터를 접근 할 수 있다.
  const [todoListArr, setTodoList] = React.useState([
    {no:101, title:'운동하기', done:false},
    {no:102, title:'운동하기2', done:false},
    {no:103, title:'운동하기3', done:false}
  ]);
  const [noCnt, setNoCnt] = React.useState(104);

  function appendItem(title) {
    // setTodoList 함수를 이용해서 데이터 갱신
    // 스프리드 연산자 사용하면 편리함.
    const newItem = {no:noCnt, title:title, done:false};
    setNoCnt(noCnt+1);
    setTodoList([...todoListArr, newItem]);
  }

  function handleCheck(curNo)  {
    setTodoList(todoListArr.map((item) => item.no === curNo ? {...item, done: !item.done } : item));
  }

  function deleteItem(curNo) {
    setTodoList(todoListArr.filter((item) => item.no !== curNo));
  }

  return (<div>
    <header className="mt-4 p-5 bg-light text-success rounded">
      <h1 className="fw-bold">Todo List</h1>
      <p>Write down your todo.</p>
    </header>
    {/* 입력 기능 */}
    <InputBlock appendItem={appendItem} />
    {/* 목록 출력 기능 - 추가된 속성은 props로 전달. */}
    <TodoBlock todoListArr={todoListArr} handleCheck={handleCheck} deleteItem={deleteItem}/>
  </div>);
};

export default App;