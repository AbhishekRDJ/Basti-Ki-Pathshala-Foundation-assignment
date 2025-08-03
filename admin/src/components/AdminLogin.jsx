import React from 'react';
import { User, Lock } from 'lucide-react';

function AdminLogin({ creds, setCreds, login, error }) {
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
                                className="bg-white/10 py-3 pr-4 pl-12 border border-white/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 w-full text-white placeholder-white/50"
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
                                className="bg-white/10 py-3 pr-4 pl-12 border border-white/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 w-full text-white placeholder-white/50"
                            />
                        </div>

                        <button
                            onClick={login}
                            className="bg-gradient-to-r from-blue-600 hover:from-blue-700 to-purple-600 hover:to-purple-700 py-3 rounded-xl w-full font-semibold text-white transition-all"
                        >
                            Login
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AdminLogin;
