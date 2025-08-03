import React, { useState, useEffect } from 'react';
import { User, Lock, LogOut, Users, Mail, Calendar, Code } from 'lucide-react';

function App() {
  const [token, setToken] = useState(() => {
    return localStorage.getItem('adminToken') || '';
  });
  const [creds, setCreds] = useState({ username: '', password: '' });
  const [applicants, setApplicants] = useState([]);
  const [error, setError] = useState(null);
  const [selectedApplicant, setSelectedApplicant] = useState(null);

  useEffect(() => {
    if (token) {
      localStorage.setItem('adminToken', token);
      fetchApplicants();
    } else {
      localStorage.removeItem('adminToken');
    }
  }, [token]);

  const login = async () => {
    try {
      const res = await fetch('http://localhost:5000/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(creds)
      });
      const data = await res.json();
      setToken(data.token);
      setError(null);
    } catch {
      setError('Login failed');
    }
  };

  const fetchApplicants = async () => {
    try {
      const res = await fetch('http://localhost:5000/api/applicants', {
        headers: { Authorization: `Bearer ${token}` }
      });
      const data = await res.json();
      setApplicants(data.applicants);
      setError(null);
    } catch {
      setError('Could not fetch applicants');
    }
  };

  const logout = () => {
    setToken('');
    setApplicants([]);
    setSelectedApplicant(null);
  };

  if (!token) {
    return (
      <div className="flex justify-center items-center bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 p-4 min-h-screen">
        <div className="w-full max-w-md">
          <h1 className='mb-8 font-bold text-white text-4xl text-center'>Basti Ki Pathshala Foundation</h1>
          <div className="bg-white/10 shadow-2xl backdrop-blur-lg p-8 border border-white/20 rounded-2xl">
            <div className="mb-8 text-center">
              <div className="flex justify-center items-center bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-4 rounded-2xl w-16 h-16">
                <User className="w-8 h-8 text-white" />
              </div>
              <h1 className="mb-2 font-bold text-white text-3xl">Admin Login</h1>
              <p className="text-white/70">Sign in to access the dashboard</p>
            </div>

            {error && (
              <div className="bg-red-500/20 mb-6 p-4 border border-red-500/30 rounded-xl text-red-200 text-sm">
                {error}
              </div>
            )}

            <div className="space-y-4">
              <div className="relative">
                <User className="top-1/2 left-3 absolute w-5 h-5 text-white/50 -translate-y-1/2 transform" />
                <input
                  type="text"
                  placeholder="Username"
                  value={creds.username}
                  onChange={e => setCreds(c => ({ ...c, username: e.target.value }))}
                  className="bg-white/10 py-3 pr-4 pl-12 border border-white/20 focus:border-transparent rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 w-full text-white transition-all placeholder-white/50"
                />
              </div>

              <div className="relative">
                <Lock className="top-1/2 left-3 absolute w-5 h-5 text-white/50 -translate-y-1/2 transform" />
                <input
                  type="password"
                  placeholder="Password"
                  value={creds.password}
                  onChange={e => setCreds(c => ({ ...c, password: e.target.value }))}
                  onKeyDown={e => e.key === 'Enter' && login()}
                  className="bg-white/10 py-3 pr-4 pl-12 border border-white/20 focus:border-transparent rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 w-full text-white transition-all placeholder-white/50"
                />
              </div>

              <button
                onClick={login}
                className="bg-gradient-to-r from-blue-600 hover:from-blue-700 to-purple-600 hover:to-purple-700 py-3 rounded-xl w-full font-semibold text-white hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 transform"
              >
                Login
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen">
      <header className="bg-white shadow-sm border-gray-200 border-b">
        <div className="px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-4">
              <div className="flex justify-center items-center bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl w-10 h-10">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h1 className="font-bold text-gray-900 text-2xl">Applicant Entries</h1>
            </div>
            <button
              onClick={logout}
              className="flex items-center space-x-2 bg-red-500 hover:bg-red-600 px-4 py-2 rounded-lg text-white transition-colors"
            >
              <LogOut className="w-4 h-4" />
              <span>Logout</span>
            </button>
          </div>
        </div>
      </header>

      <main className="p-6">
        {error && (
          <div className="bg-red-50 mb-6 p-4 border border-red-200 rounded-lg text-red-700">
            {error}
          </div>
        )}

        <div className="bg-white shadow-sm border border-gray-200 rounded-xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-gray-200 border-b">
                <tr>
                  <th className="px-6 py-4 font-medium text-gray-500 text-xs text-left uppercase tracking-wider">
                    Name
                  </th>
                  <th className="px-6 py-4 font-medium text-gray-500 text-xs text-left uppercase tracking-wider">
                    Email
                  </th>
                  <th className="px-6 py-4 font-medium text-gray-500 text-xs text-left uppercase tracking-wider">
                    Skills
                  </th>
                  <th className="px-6 py-4 font-medium text-gray-500 text-xs text-left uppercase tracking-wider">
                    Applied At
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {applicants.map(a => (
                  <tr
                    key={a._id}
                    className="hover:bg-gray-50 transition-colors cursor-pointer"
                    onClick={() => setSelectedApplicant(a)}
                  >
                    <td className="px-6 py-4">
                      <div className="flex items-center space-x-3">
                        <div className="flex justify-center items-center bg-gradient-to-r from-blue-500 to-purple-600 rounded-full w-10 h-10">
                          <span className="font-medium text-white text-sm">
                            {a.name ? a.name.split(' ').map(n => n[0]).join('').toUpperCase() : '?'}
                          </span>
                        </div>
                        <div className="font-medium text-gray-900">{a.name}</div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center space-x-2 text-gray-600">
                        <Mail className="w-4 h-4" />
                        <span>{a.email}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex flex-wrap gap-1">
                        {a.skills && a.skills.length > 0 ? (
                          a.skills.map((skill, index) => (
                            <span
                              key={index}
                              className="inline-flex items-center bg-blue-100 px-2 py-1 rounded-full font-medium text-blue-800 text-xs"
                            >
                              <Code className="mr-1 w-3 h-3" />
                              {skill}
                            </span>
                          ))
                        ) : (
                          <span className="text-gray-400 text-sm">No skills listed</span>
                        )}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center space-x-2 text-gray-600">
                        <Calendar className="w-4 h-4" />
                        <div>
                          <div className="font-medium text-sm">
                            {new Date(a.appliedAt).toLocaleDateString()}
                          </div>
                          <div className="text-gray-400 text-xs">
                            {new Date(a.appliedAt).toLocaleTimeString()}
                          </div>
                        </div>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {applicants.length === 0 && (
            <div className="py-12 text-center">
              <Users className="mx-auto mb-4 w-12 h-12 text-gray-400" />
              <h3 className="mb-2 font-medium text-gray-900 text-lg">No applicants found</h3>
              <p className="text-gray-500">Applicant data will appear here once loaded.</p>
            </div>
          )}
        </div>
      </main>

      {selectedApplicant && (
        <div className="z-50 fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 p-4">
          <div className="bg-white shadow-2xl rounded-xl w-full max-w-md max-h-[80vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-semibold text-gray-900 text-lg">Applicant Motivation</h3>
                <button
                  onClick={() => setSelectedApplicant(null)}
                  className="text-gray-400 hover:text-gray-600 text-2xl leading-none transition-colors"
                >
                  ×
                </button>
              </div>

              <div className="space-y-4">
                <div className="text-center">
                  <div className="flex justify-center items-center bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-3 rounded-full w-16 h-16">
                    <span className="font-medium text-white text-lg">
                      {selectedApplicant.name ? selectedApplicant.name.split(' ').map(n => n[0]).join('').toUpperCase() : '?'}
                    </span>
                  </div>
                  <h4 className="font-semibold text-gray-900">{selectedApplicant.name}</h4>
                  <p className="text-gray-600">{selectedApplicant.email}</p>
                </div>

                <div className="pt-4 border-t">
                  <h5 className="mb-3 font-medium text-gray-900">Motivation</h5>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-gray-700 leading-relaxed">
                      {selectedApplicant.motivation || 'No motivation provided.'}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;