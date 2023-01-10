import { useState, useEffect } from "react";
import DeleteButton from "./components/DeleteButton";
import TodoDoneToggle from "./components/TodoDoneToggle";
import axios from "axios";

const App = () => {
  const [notes, setNotes] = useState([]);

  const getNotes = () => {
    axios.get("http://localhost:3001/notes").then((response) => {
      setNotes(response.data);
    });
  };

  useEffect(getNotes, [notes]);

  const completeTodo = (id) => {
    console.log(notes);

    const url = "http://localhost:3001/notes/";
    const note = notes.find((e) => e.id === id);
    const changeNote = { ...note, status: !note.status };
    axios.put(`${url}/${id}`).then((changeNote) => {
      setNotes(notes.map((e) => (e.id !== id ? e : changeNote)));
    });
  };

  return (
    <div>
      <h1>Notes</h1>
      {notes.map((note) => (
        <div key={note.id}>
          <ul>
            <li style={{ color: note.status ? "green" : "red" }}>{note.content}</li>
            <DeleteButton id={note.id} notes={notes} setNotes={setNotes} />{" "}
            <TodoDoneToggle key={note.id} note={note} completeTodo={() => completeTodo(note.id)} />
          </ul>
        </div>
      ))}
    </div>
  );
};

export default App;
