export default function LeadsTable({ data }) {
  return (
    <div className="bg-white mt-6 p-6 shadow rounded-lg overflow-x-auto">
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="border-b bg-gray-50">
            <th className="p-3">Name</th>
            <th className="p-3">Country</th>
            <th className="p-3">Confidence</th>
            <th className="p-3">Status</th>
            <th className="p-3">Synced</th>
          </tr>
        </thead>
        <tbody>
          {data.map((lead) => (
            <tr key={lead._id} className="border-b hover:bg-gray-50">
              <td className="p-3">{lead.name}</td>
              <td className="p-3">{lead.country}</td>
              <td className="p-3">{(lead.probability * 100).toFixed(1)}%</td>
              <td
                className={`p-3 font-semibold ${
                  lead.status === "Verified"
                    ? "text-green-600"
                    : "text-yellow-600"
                }`}
              >
                {lead.status}
              </td>
              <td className="p-3">{lead.synced ? "Yes" : "No"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
