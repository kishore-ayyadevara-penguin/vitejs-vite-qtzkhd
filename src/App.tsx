import { useState } from 'react';
import { FiSearch, FiCalendar, FiEdit2, FiRefreshCcw } from 'react-icons/fi';

interface Authorization {
  icdCode: string;
  memberName: string;
  service: string;
  submissionDate: string;
  status: 'Pending' | 'Approved' | 'Denied';
}

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  
  const authorizations: Authorization[] = [
    { icdCode: 'A213421', memberName: 'John Doe', service: 'MRI Brain Scan', submissionDate: '2024-10-14', status: 'Pending' },
    { icdCode: '4356145', memberName: 'William Peterson', service: 'CT Scan - Chest', submissionDate: '2024-10-14', status: 'Pending' },
    { icdCode: '352465', memberName: 'John Doe', service: 'MRI Brain Scan', submissionDate: '2024-10-14', status: 'Approved' },
    { icdCode: '564277', memberName: 'Bob Johnson', service: 'Physical Therapy', submissionDate: '2024-10-08', status: 'Denied' },
  ];

  const stats = {
    pending: 24,
    approved: 43,
    denied: 12,
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <h1 className="text-2xl font-bold text-gray-900">PenguinAI</h1>
            <span className="text-gray-400">|</span>
            <span className="text-gray-500">XD</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-gray-700">William Jones</span>
            <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-900">Authorization Status</h2>
          <button className="bg-gray-800 text-white px-4 py-2 rounded-md flex items-center space-x-2">
            <span>Add New Case</span>
            <span className="text-xl">+</span>
          </button>
        </div>

        <div className="bg-white rounded-lg shadow p-6 mb-6">
          <h3 className="text-lg font-semibold mb-4">Summary</h3>
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-[#C4B298] text-white p-4 rounded-lg">
              <h4 className="text-lg">Pending Authorizations</h4>
              <p className="text-4xl font-bold">{stats.pending}</p>
            </div>
            <div className="bg-[#617B64] text-white p-4 rounded-lg">
              <h4 className="text-lg">Approved Authorizations</h4>
              <p className="text-4xl font-bold">{stats.approved}</p>
            </div>
            <div className="bg-[#A15C5C] text-white p-4 rounded-lg">
              <h4 className="text-lg">Denied Authorizations</h4>
              <p className="text-4xl font-bold">{stats.denied}</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold mb-4">Authorization List</h3>
          <div className="flex flex-col md:flex-row justify-between items-center mb-4 space-y-4 md:space-y-0">
            <div className="relative flex-1 max-w-xl">
              <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Member Name or Auth ID or Case No."
                className="pl-10 pr-4 py-2 border rounded-md w-full"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-[#617B64] text-white px-4 py-1 rounded-md">
                Search
              </button>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <FiCalendar className="text-gray-400" />
                <span className="text-gray-600">Submission Date</span>
              </div>
              <select className="border rounded-md px-3 py-2">
                <option>Status</option>
                <option>Pending</option>
                <option>Approved</option>
                <option>Denied</option>
              </select>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="min-w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ICD code</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Member Name</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Service</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Submission date</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {authorizations.map((auth) => (
                  <tr key={auth.icdCode}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{auth.icdCode}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{auth.memberName}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{auth.service}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{auth.submissionDate}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 py-1 text-sm rounded-md ${
                        auth.status === 'Pending' ? 'bg-[#C4B298] text-white' :
                        auth.status === 'Approved' ? 'bg-[#617B64] text-white' :
                        'bg-[#A15C5C] text-white'
                      }`}>
                        {auth.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {auth.status === 'Pending' && (
                        <button className="text-[#C4B298] hover:text-[#a69578] flex items-center space-x-1">
                          <FiEdit2 />
                          <span>Modify</span>
                        </button>
                      )}
                      {auth.status === 'Denied' && (
                        <button className="text-[#A15C5C] hover:text-[#8a4f4f] flex items-center space-x-1">
                          <FiRefreshCcw />
                          <span>Reappeal</span>
                        </button>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;