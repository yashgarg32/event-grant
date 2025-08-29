import React, { useState } from "react";
import "./index.css"; // Ensure this line is present to import the main CSS file

function App() {
  const [proposals, setProposals] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const addProposal = () => {
    if (!title || !description) {
      alert("Please fill both fields!");
      return;
    }
    const newProposal = {
      id: proposals.length + 1,
      title,
      description,
      votes: 0,
    };
    setProposals([...proposals, newProposal]);
    setTitle("");
    setDescription("");
  };

  const voteProposal = (id) => {
    setProposals(
      proposals.map((p) => (p.id === id ? { ...p, votes: p.votes + 1 } : p))
    );
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8 font-sans text-gray-800">
      <h1 className="text-4xl font-bold text-center text-blue-700 mb-8">
        Grant DAO Dashboard
      </h1>

      <div className="max-w-xl mx-auto bg-white p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-blue-600">
          Submit a Proposal
        </h2>
        <input
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
          rows="4"
        />
        <button
          onClick={addProposal}
          className="w-full py-3 bg-blue-600 text-white font-bold rounded-md hover:bg-blue-700 transition-colors"
        >
          Submit
        </button>
      </div>

      <div className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4 text-blue-600">
          Existing Proposals
        </h2>
        {proposals.length === 0 ? (
          <p className="text-center text-gray-500 italic">No proposals yet.</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    ID
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Title
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Description
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Votes
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {proposals.map((p) => (
                  <tr key={p.id}>
                    <td className="px-6 py-4 whitespace-nowrap">{p.id}</td>
                    <td className="px-6 py-4 whitespace-nowrap">{p.title}</td>
                    <td className="px-6 py-4 max-w-sm overflow-hidden text-ellipsis">
                      {p.description}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">{p.votes}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <button
                        onClick={() => voteProposal(p.id)}
                        className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition-colors"
                      >
                        Vote
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;