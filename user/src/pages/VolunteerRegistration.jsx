import React, { useState } from 'react';
import Form from '../components/Form';
import StatusMessage from '../components/StatusMessage';
import { submitVolunteerApplication } from '../services/api';

function VolunteerRegistration() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        skills: '',
        motivation: ''
    });

    const [status, setStatus] = useState(null);

    const handleChange = e => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async e => {
        e.preventDefault();
        try {
            const payload = {
                ...formData,
                skills: formData.skills.split(',').map(s => s.trim()),
            };
            const res = await submitVolunteerApplication(payload);
            setStatus('✅ ' + res.message);
            setFormData({ name: '', email: '', skills: '', motivation: '' });
        } catch (err) {
            setStatus('❌ ' + (err.message || 'Submission failed'));
        }
    };

    return (
        <div className="bg-gradient-to-br from-gray-50 to-blue-50 min-h-screen">
            <div className="mx-auto px-4 py-12 max-w-2xl container">
                <div className="bg-white shadow-xl border border-gray-100 rounded-2xl overflow-hidden">
                    <div className="bg-gradient-to-r from-blue-600 to-indigo-600 px-8 py-6">
                        <h1 className="font-bold text-white text-2xl">Volunteer Registration</h1>
                        <p className="text-blue-100">Join our community and make a difference</p>
                    </div>
                    {status && <StatusMessage status={status} />}
                    <Form formData={formData} handleChange={handleChange} handleSubmit={handleSubmit} />
                    <div className="bg-gray-50 px-8 py-4 border-gray-100 border-t text-gray-600 text-sm text-center">
                        By submitting this form, you agree to join our volunteer community
                    </div>
                </div>
            </div>
        </div>
    );
}

export default VolunteerRegistration;
