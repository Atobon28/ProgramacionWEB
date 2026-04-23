import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addNote, deleteNote } from "../store/slices/NotesSlice";
import type { RootState } from "../types/storeType";

export const CreateNote = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const dispatch = useDispatch();
  const notes = useSelector((state: RootState) => state.notesReducer.notesList);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (title.trim() === "" || description.trim() === "") {
      return;
    }

    dispatch(
      addNote({
        title: title,
        description: description,
      })
    );

    setTitle("");
    setDescription("");
  };

  const handleDelete = (id: string) => {
    dispatch(deleteNote(id));
  };

  return (
    <div className="notes-page">
      <aside className="info-box">
        <h2>Información</h2>
        <p>
          <strong>Total de notas:</strong> {notes.length}
        </p>
        <p>
          <strong>Última nota agregada:</strong>{" "}
          {notes.length > 0 ? notes[notes.length - 1].title : "No hay notas"}
        </p>
      </aside>

      <main className="notes-container">
        <h1>Gestor de Notas</h1>

        <form className="notes-form" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Título"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <textarea
            placeholder="Descripción"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />

          <button type="submit">Agregar nota</button>
        </form>

        <section className="notes-list">
          {notes.length === 0 ? (
            <p>No hay notas guardadas.</p>
          ) : (
            notes.map((note) => (
              <article className="note-card" key={note.id}>
                <h3>{note.title}</h3>
                <p>{note.description}</p>
                <button onClick={() => handleDelete(note.id)}>Eliminar</button>
              </article>
            ))
          )}
        </section>
      </main>
    </div>
  );
};