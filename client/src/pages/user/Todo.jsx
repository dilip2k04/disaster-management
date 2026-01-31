import { useEffect, useState } from "react";
import api from "../../api/axios";
import jsPDF from "jspdf";

export default function Todo() {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);

  /* ================= FETCH ================= */
  const fetchTodos = async () => {
    const res = await api.get("/todos");
    setTodos(res.data);
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  /* ================= CREATE ================= */
  const add = async () => {
    if (!text.trim()) return;

    await api.post("/todos", { title: text });
    setText("");
    fetchTodos();
  };

  /* ================= TOGGLE ================= */
  const toggle = async (t) => {
    await api.put(`/todos/${t._id}`, {
      completed: !t.completed
    });
    fetchTodos();
  };

  /* ================= DELETE ================= */
  const remove = async (id) => {
    await api.delete(`/todos/${id}`);
    fetchTodos();
  };

  /* ================= CLEAR COMPLETED ================= */
  const clearCompleted = async () => {
    const completed = todos.filter(t => t.completed);

    await Promise.all(
      completed.map(t => api.delete(`/todos/${t._id}`))
    );

    fetchTodos();
  };

  /* ================= CLEAR ALL ================= */
  const clearAll = async () => {
    if (!window.confirm("Delete all tasks?")) return;

    await Promise.all(
      todos.map(t => api.delete(`/todos/${t._id}`))
    );

    fetchTodos();
  };

  /* ================= PDF EXPORT ================= */
  const downloadPDF = () => {
    const doc = new jsPDF();

    doc.setFontSize(18);
    doc.text("Todo List", 20, 20);

    let y = 40;

    todos.forEach((t, i) => {
      doc.text(
        `${i + 1}. ${t.title} ${t.completed ? "✓" : ""}`,
        20,
        y
      );
      y += 10;
    });

    doc.save("todos.pdf");
  };

  /* ================= UI ================= */
  return (
    <div className="max-w-3xl mx-auto space-y-8">

      {/* HEADER */}
      <div>
        <h1 className="text-3xl font-bold text-gray-800">📝 Todo Manager</h1>
        <p className="text-gray-500 text-sm">
          Organize your daily tasks efficiently
        </p>
      </div>

      {/* ADD INPUT */}
      <div className="flex gap-3">
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && add()}
          placeholder="Add new task..."
          className="flex-1 border rounded-xl p-3 focus:ring-2 focus:ring-blue-500 outline-none"
        />

        <button
          onClick={add}
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 rounded-xl font-medium"
        >
          Add
        </button>
      </div>

      {/* ACTION BUTTONS */}
      <div className="flex gap-3 flex-wrap">

        <button
          onClick={downloadPDF}
          className="bg-green-600 text-white px-5 py-2 rounded-xl"
        >
          ⬇ Download PDF
        </button>

        <button
          onClick={clearCompleted}
          className="bg-yellow-500 text-white px-5 py-2 rounded-xl"
        >
          Clear Completed
        </button>

        <button
          onClick={clearAll}
          className="bg-red-600 text-white px-5 py-2 rounded-xl"
        >
          Clear All
        </button>

      </div>

      {/* LIST */}
      <div className="bg-white rounded-2xl shadow divide-y">

        {todos.length === 0 && (
          <p className="p-6 text-center text-gray-400">
            No tasks yet
          </p>
        )}

        {todos.map((t) => (
          <div
            key={t._id}
            className="flex items-center justify-between p-4 hover:bg-gray-50"
          >

            {/* LEFT SIDE */}
            <div className="flex items-center gap-3">

              {/* ⭐ CHECKBOX */}
              <input
                type="checkbox"
                checked={t.completed}
                onChange={() => toggle(t)}
                className="w-5 h-5 cursor-pointer"
              />

              <span
                className={`${
                  t.completed
                    ? "line-through text-gray-400"
                    : "text-gray-800"
                }`}
              >
                {t.title}
              </span>

            </div>

            {/* DELETE */}
            <button
              onClick={() => remove(t._id)}
              className="text-red-500 hover:text-red-700 text-sm"
            >
              Delete
            </button>

          </div>
        ))}
      </div>
    </div>
  );
}
