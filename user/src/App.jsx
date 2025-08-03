import React, { useState } from 'react';
import { User, Mail, Code, MessageCircle, Send, CheckCircle, XCircle } from 'lucide-react';

function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    skills: '',
    motivation: ''
  });
  const [status, setStatus] = useState(null);

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(f => ({ ...f, [name]: value }));
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const payload = {
        name: formData.name,
        email: formData.email,
        skills: formData.skills.split(',').map(s => s.trim()),
        motivation: formData.motivation
      };
      const res = await fetch('http://localhost:5000/api/applicants', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      const data = await res.json();
      setStatus('✅ ' + data.message);
      setFormData({ name: '', email: '', skills: '', motivation: '' });
    } catch (err) {
      setStatus('❌ ' + (err.response?.data?.message || err.message));
    }
  };

  return (
    <div className="bg-gradient-to-br from-gray-50 to-blue-50 min-h-screen">
      <div className="mx-auto px-4 py-12 container">
        <div className="mx-auto max-w-2xl">
          <div className="bg-white shadow-xl border border-gray-100 rounded-2xl overflow-hidden">
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 px-8 py-6">
              <div className="flex items-center space-x-3">
                <div className="flex justify-center items-center bg-white/20 rounded-xl w-12 h-12">
                  <User className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h1 className="font-bold text-white text-2xl">Volunteer Registration</h1>
                  <p className="text-blue-100">Join our community and make a difference</p>
                </div>
              </div>
            </div>

            {status && (
              <div className="mx-8 mt-6">
                <div className={`p-4 rounded-lg flex items-center space-x-3 ${status.includes('✅')
                    ? 'bg-green-50 border border-green-200 text-green-700'
                    : 'bg-red-50 border border-red-200 text-red-700'
                  }`}>
                  {status.includes('✅') ? (
                    <CheckCircle className="flex-shrink-0 w-5 h-5" />
                  ) : (
                    <XCircle className="flex-shrink-0 w-5 h-5" />
                  )}
                  <span className="font-medium">{status}</span>
                </div>
              </div>
            )}

            <div className="space-y-6 p-8">
              <div className="space-y-2">
                <label className="block font-medium text-gray-700 text-sm">
                  Full Name
                </label>
                <div className="relative">
                  <User className="top-1/2 left-3 absolute w-5 h-5 text-gray-400 -translate-y-1/2 transform" />
                  <input
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    required
                    className="bg-gray-50 focus:bg-white py-3 pr-4 pl-12 border border-gray-200 focus:border-blue-500 rounded-xl outline-none focus:ring-2 focus:ring-blue-500 w-full transition-all"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="block font-medium text-gray-700 text-sm">
                  Email Address
                </label>
                <div className="relative">
                  <Mail className="top-1/2 left-3 absolute w-5 h-5 text-gray-400 -translate-y-1/2 transform" />
                  <input
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email address"
                    required
                    className="bg-gray-50 focus:bg-white py-3 pr-4 pl-12 border border-gray-200 focus:border-blue-500 rounded-xl outline-none focus:ring-2 focus:ring-blue-500 w-full transition-all"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="block font-medium text-gray-700 text-sm">
                  Skills & Expertise
                </label>
                <div className="relative">
                  <Code className="top-3 left-3 absolute w-5 h-5 text-gray-400" />
                  <input
                    name="skills"
                    value={formData.skills}
                    onChange={handleChange}
                    placeholder="e.g., JavaScript, Design, Teaching (comma separated)"
                    className="bg-gray-50 focus:bg-white py-3 pr-4 pl-12 border border-gray-200 focus:border-blue-500 rounded-xl outline-none focus:ring-2 focus:ring-blue-500 w-full transition-all"
                  />
                </div>
                <p className="text-gray-500 text-xs">Separate multiple skills with commas</p>
              </div>

              <div className="space-y-2">
                <label className="block font-medium text-gray-700 text-sm">
                  Why do you want to join?
                </label>
                <div className="relative">
                  <MessageCircle className="top-3 left-3 absolute w-5 h-5 text-gray-400" />
                  <textarea
                    name="motivation"
                    value={formData.motivation}
                    onChange={handleChange}
                    placeholder="Tell us about your motivation and what you hope to contribute..."
                    rows="4"
                    className="bg-gray-50 focus:bg-white py-3 pr-4 pl-12 border border-gray-200 focus:border-blue-500 rounded-xl outline-none focus:ring-2 focus:ring-blue-500 w-full transition-all resize-none"
                  />
                </div>
              </div>

              <div className="pt-4">
                <button
                  onClick={handleSubmit}
                  className="flex justify-center items-center space-x-2 bg-gradient-to-r from-blue-600 hover:from-blue-700 to-indigo-600 hover:to-indigo-700 shadow-lg px-6 py-3 rounded-xl w-full font-semibold text-white hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 transform"
                >
                  <Send className="w-5 h-5" />
                  <span>Submit Application</span>
                </button>
              </div>
            </div>

            <div className="bg-gray-50 px-8 py-4 border-gray-100 border-t">
              <p className="text-gray-600 text-sm text-center">
                By submitting this form, you agree to join our volunteer community
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;