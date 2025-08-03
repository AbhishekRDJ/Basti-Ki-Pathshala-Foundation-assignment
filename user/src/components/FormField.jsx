import React from 'react';
import * as Icons from 'lucide-react';

const FormField = ({
    label,
    name,
    value,
    onChange,
    icon,
    placeholder,
    helper,
    textarea = false,
    type = 'text',
}) => {
    const Icon = Icons[icon];

    return (
        <div className="space-y-2">
            <label className="block font-medium text-gray-700 text-sm">{label}</label>
            <div className="relative">
                <Icon className="top-1/2 left-3 absolute w-5 h-5 text-gray-400 -translate-y-1/2 transform" />
                {textarea ? (
                    <textarea
                        name={name}
                        value={value}
                        onChange={onChange}
                        placeholder={placeholder}
                        rows="4"
                        className="bg-gray-50 focus:bg-white py-3 pr-4 pl-12 border border-gray-200 rounded-xl outline-none focus:ring-2 focus:ring-blue-500 w-full resize-none"
                    />
                ) : (
                    <input
                        type={type}
                        name={name}
                        value={value}
                        onChange={onChange}
                        placeholder={placeholder}
                        className="bg-gray-50 focus:bg-white py-3 pr-4 pl-12 border border-gray-200 rounded-xl outline-none focus:ring-2 focus:ring-blue-500 w-full"
                    />
                )}
            </div>
            {helper && <p className="text-gray-500 text-xs">{helper}</p>}
        </div>
    );
};

export default FormField;
