import React from 'react';

const ApplicantModal = ({ applicant, onClose }) => (
    <div className="z-50 fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 p-4">
        <div className="bg-white shadow-2xl rounded-xl w-full max-w-md max-h-[80vh] overflow-y-auto">
            <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                    <h3 className="font-semibold text-gray-900 text-lg">Applicant Motivation</h3>
                    <button onClick={onClose} className="text-gray-400 hover:text-gray-600 text-2xl leading-none">×</button>
                </div>
                <div className="space-y-3 text-center">
                    <div className="flex justify-center items-center bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full w-16 h-16 font-medium text-white text-lg">
                        {applicant.name?.split(' ').map(n => n[0]).join('').toUpperCase()}
                    </div>
                    <div>
                        <h4 className="font-semibold">{applicant.name}</h4>
                        <p className="text-gray-600">{applicant.email}</p>
                    </div>
                </div>
                <div className="mt-4 pt-4 border-t">
                    <h5 className="mb-2 font-medium text-gray-900">Motivation</h5>
                    <div className="bg-gray-50 p-4 rounded-lg text-gray-700 leading-relaxed">
                        {applicant.motivation || 'No motivation provided.'}
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default ApplicantModal;
