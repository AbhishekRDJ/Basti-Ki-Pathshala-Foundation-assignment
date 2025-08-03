import React from 'react';
import { Mail, Calendar, Code } from 'lucide-react';

const ApplicantRow = ({ applicant, onSelect }) => (
    <tr onClick={onSelect} className="hover:bg-gray-50 transition-colors cursor-pointer">
        <td className="px-6 py-4">
            <div className="flex items-center space-x-3">
                <div className="flex justify-center items-center bg-gradient-to-r from-blue-500 to-purple-600 rounded-full w-10 h-10 font-medium text-white text-sm">
                    {applicant.name?.split(' ').map(n => n[0]).join('').toUpperCase()}
                </div>
                <span className="font-medium text-gray-900">{applicant.name}</span>
            </div>
        </td>
        <td className="px-6 py-4">
            <div className="flex items-center space-x-2 text-gray-600">
                <Mail className="w-4 h-4" />
                <span>{applicant.email}</span>
            </div>
        </td>
        <td className="px-6 py-4">
            <div className="flex flex-wrap gap-1">
                {applicant.skills?.length > 0 ? applicant.skills.map((skill, i) => (
                    <span key={i} className="flex items-center bg-blue-100 px-2 py-1 rounded-full text-blue-800 text-xs">
                        <Code className="mr-1 w-3 h-3" />
                        {skill}
                    </span>
                )) : <span className="text-gray-400 text-sm">No skills listed</span>}
            </div>
        </td>
        <td className="px-6 py-4">
            <div className="text-gray-600 text-sm">
                <Calendar className="inline mr-1 w-4 h-4" />
                {new Date(applicant.appliedAt).toLocaleDateString()}<br />
                <span className="text-gray-400 text-xs">{new Date(applicant.appliedAt).toLocaleTimeString()}</span>
            </div>
        </td>
    </tr>
);

export default ApplicantRow;
