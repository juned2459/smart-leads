import { useEffect, useState } from "react";
import InputForm from "./components/InputForm";
import LeadsTable from "./components/LeadsTable";
import { getAllLeads, processNames } from "./api";
import { toast } from 'react-toastify';

export default function App() {
  const [leads, setLeads] = useState([]);
  const [filter, setFilter] = useState("All");
  const filterButtons = ["All", "Verified", "To Check"];

  const loadData = async () => {
    const data = await getAllLeads();
    setLeads(data);
  };

  const handleLeadSubmit = async (names) => {
    const resp = await processNames(names);
    if (resp.success) {
      toast.success("Names processed successfully");
      await loadData();
    }
  };

  const filteredData = filter === "All" ? leads : leads.filter((lead) => lead.status === filter);

  useEffect(() => {
    loadData();
  }, []);

  return (
    <div className="max-w-4xl mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold mb-6 text-center">
        Smart Lead Automation
      </h1>

      <InputForm onSubmit={handleLeadSubmit} />

      <div className="flex gap-3 mt-6 justify-center">
        {filterButtons.map((btn) => (
          <button
            key={btn}
            className={`px-4 py-2 rounded-lg border shadow transition ${
              filter === btn
                ? "bg-blue-600 text-white"
                : "bg-white hover:bg-gray-100"
            }`}
            onClick={() => setFilter(btn)}
          >
            {btn}
          </button>
        ))}
      </div>

      <LeadsTable data={filteredData} />
    </div>
  );
}
