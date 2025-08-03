export async function submitVolunteerApplication(payload) {
    const response = await fetch('http://localhost:5000/api/applicants', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
    });

    if (!response.ok) {
        throw new Error((await response.json()).message || 'Failed to submit');
    }

    return await response.json();
}
