const TodoDoneToggle = ({ note, completeTodo }) => {
  return (
    <div>
      <button onClick={completeTodo}>{note.status ? "Undone" : "Done"}</button>
    </div>
  );
};

export default TodoDoneToggle;
