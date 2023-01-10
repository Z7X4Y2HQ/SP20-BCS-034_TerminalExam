import axios from "axios";

const DeleteButton = ({ id, notes, setNotes }) => {
  const url = "http://localhost:3001/notes/";

  const deleteNote = () => {
    axios.delete(`${url}/${id}`).then((response) => {
      setNotes(notes.filter((e) => e.id != id));
    });
  };

  return <button onClick={deleteNote}>delete</button>;
};

export default DeleteButton;
