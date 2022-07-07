import Todo from './components/Todo'

function App() {
  return (
    <div>
      <h1>My Todo</h1>
      <div className="todo_list">
        <Todo text="Learn React"/>
        <Todo text="Learn JavaScript"/>
        <Todo text="Learn Python"/>
      </div>
  </div>
  
  );
}

export default App;
