import React from 'react';
import { CheckCircle, XCircle } from 'lucide-react';

const StatusMessage = ({ status }) => {
    const isSuccess = status.includes('✅');
    const Icon = isSuccess ? CheckCircle : XCircle;

    return (
        <div className={`mx-8 mt-6 p-4 rounded-lg flex items-center space-x-3 
      ${isSuccess ? 'bg-green-50 border border-green-200 text-green-700'
                : 'bg-red-50 border border-red-200 text-red-700'}`}>
            <Icon className="w-5 h-5" />
            <span className="font-medium">{status}</span>
        </div>
    );
};

export default StatusMessage;
