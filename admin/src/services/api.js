export async function loginAdmin(creds) {
    const res = await fetch('http://localhost:5000/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(creds),
    });

    if (!res.ok) throw new Error('Login failed');
    return await res.json();
}

export async function fetchApplicantsAPI(token) {
    const res = await fetch('http://localhost:5000/api/applicants', {
        headers: { Authorization: `Bearer ${token}` },
    });

    if (!res.ok) throw new Error('Fetch applicants failed');
    return await res.json();
}
