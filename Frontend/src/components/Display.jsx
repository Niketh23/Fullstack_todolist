import { useState, useEffect } from "react";

const Display = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState("");
  const [alltodos, setAlltodos] = useState([]); // Ensure it's initialized as an array

  useEffect(() => {
    const fetchalltodos = async () => {
      try {
        const response = await fetch("http://localhost:3000/todos");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        
        // Log the data to see what is being returned
        console.log("Fetched alltodos:", data.AllTodos);

        // Ensure data is an array before setting it

        // setAlltodos(data);
        if (Array.isArray(data.AllTodos)) {
          setAlltodos(data.AllTodos);
        } else {
          setError("Fetched data is not an array.");
        }
      } catch (err) {
        setError("Failed to fetch alltodos. Please try again.");
      }
    };

    fetchalltodos();
  }, []);

  const addNewItem = async () => {
    if (!title || !description) {
      setError("Both title and description are required.");
      return;
    }

    try {
      const response = await fetch("http://localhost:3000/createTodo", {
        method: "POST",
        body: JSON.stringify({ title, description }),
        headers: { "Content-type": "application/json" },
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const newTodo = await response.json();
      setAlltodos((prevalltodos) => [...prevalltodos, newTodo]);
      alert("Todo added");
      setTitle("");
      setDescription("");
      setError("");
    } catch (error) {
      setError("Failed to add Todo. Please try again.");
    }
  };

  return (
    <div className="container mt-4">
      {error && <div className="alert alert-danger">{error}</div>}
      <div className="mb-3">
        <label htmlFor="title" className="form-label">Title</label>
        <input
          type="text"
          className="form-control"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="description" className="form-label">Description</label>
        <textarea
          className="form-control"
          id="description"
          rows="3"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
      </div>
      <button className="btn btn-primary" onClick={addNewItem}>Enter</button>
      <div className="mt-4">
        <h5>Todo List:</h5>
        <ul>
          {alltodos.map((todo) => (
            <li key={todo.id}>
              <strong>{todo.title}</strong>: {todo.description}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Display;
