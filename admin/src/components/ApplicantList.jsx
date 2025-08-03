import React from 'react';
import { LogOut, Users } from 'lucide-react';
import ApplicantRow from './ApplicantRow';

function ApplicantList({ applicants, logout, error, onSelectApplicant }) {
    return (
        <div className="bg-gray-50 min-h-screen">
            <header className="flex justify-between items-center bg-white shadow-sm px-6 py-4 border-gray-200 border-b">
                <div className="flex items-center space-x-4">
                    <div className="flex justify-center items-center bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl w-10 h-10">
                        <Users className="w-6 h-6 text-white" />
                    </div>
                    <h1 className="font-bold text-gray-900 text-2xl">Applicant Entries</h1>
                </div>
                <button
                    onClick={logout}
                    className="flex items-center space-x-2 bg-red-500 hover:bg-red-600 px-4 py-2 rounded-lg text-white"
                >
                    <LogOut className="w-4 h-4" />
                    <span>Logout</span>
                </button>
            </header>

            <main className="p-6">
                {error && (
                    <div className="bg-red-50 mb-6 p-4 border border-red-200 rounded-lg text-red-700">
                        {error}
                    </div>
                )}

                <div className="bg-white shadow-sm border border-gray-200 rounded-xl overflow-hidden">
                    {applicants.length > 0 ? (
                        <table className="w-full">
                            <thead className="bg-gray-50 border-gray-200 border-b">
                                <tr>
                                    {['Name', 'Email', 'Skills', 'Applied At'].map(label => (
                                        <th key={label} className="px-6 py-4 font-medium text-gray-500 text-xs text-left uppercase tracking-wider">{label}</th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200">
                                {applicants.map(applicant => (
                                    <ApplicantRow key={applicant._id} applicant={applicant} onSelect={() => onSelectApplicant(applicant)} />
                                ))}
                            </tbody>
                        </table>
                    ) : (
                        <div className="py-12 text-center">
                            <Users className="mx-auto mb-4 w-12 h-12 text-gray-400" />
                            <h3 className="mb-2 font-medium text-gray-900 text-lg">No applicants found</h3>
                            <p className="text-gray-500">Applicant data will appear here once loaded.</p>
                        </div>
                    )}
                </div>
            </main>
        </div>
    );
}

export default ApplicantList;
