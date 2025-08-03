import React, { useState, useEffect } from 'react';
import AdminLogin from '../components/AdminLogin';
import ApplicantList from '../components/ApplicantList';
import ApplicantModal from '../components/ApplicantModal';
import { fetchApplicantsAPI, loginAdmin } from '../services/api';

function AdminDashboard() {
    const [token, setToken] = useState(() => localStorage.getItem('adminToken') || '');
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
            const data = await loginAdmin(creds);
            setToken(data.token);
            setError(null);
        } catch {
            setError('Login failed');
        }
    };

    const fetchApplicants = async () => {
        try {
            const data = await fetchApplicantsAPI(token);
            setApplicants(data.applicants || []);
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
            <AdminLogin creds={creds} setCreds={setCreds} login={login} error={error} />
        );
    }

    return (
        <>
            <ApplicantList
                applicants={applicants}
                logout={logout}
                error={error}
                onSelectApplicant={setSelectedApplicant}
            />
            {selectedApplicant && (
                <ApplicantModal
                    applicant={selectedApplicant}
                    onClose={() => setSelectedApplicant(null)}
                />
            )}
        </>
    );
}

export default AdminDashboard;
