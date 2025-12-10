import { useState } from "react";

export default function InputForm({ onSubmit }) {
  const [names, setNames] = useState("");

  const handleSubmit = () => {
    const trimmed = names.trim();
    if (!trimmed) return;

    onSubmit(trimmed);
    setNames("");
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow mb-6">
      <label className="block font-semibold mb-2">
        Enter Names (comma separated)
      </label>

      <textarea
        rows={3}
        className="w-full p-3 border rounded-lg focus:ring focus:ring-blue-200"
        placeholder="Peter, Aditi, Ravi"
        value={names}
        onChange={(e) => setNames(e.target.value)}
      />

      <button
        className="mt-3 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
        onClick={handleSubmit}
      >
        Submit
      </button>
    </div>
  );
}
