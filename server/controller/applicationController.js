import Applicant from '../module/Applicant.js';

const submitForm = async (req, res) => {
    try {
        const { name, email, skills, motivation } = req.body;
        const newApplicant = new Applicant({ name, email, skills, motivation });
        await newApplicant.save();
        return res.status(201).json({ message: 'Application submitted successfully', applicant: newApplicant });
    } catch (error) {
        console.error('Error in submitForm:', error);
        return res.status(400).json({ message: error.message });
    }
};

const getDetails = async (req, res) => {
    try {
        const applicants = await Applicant.find().sort({ appliedAt: -1 });
        return res.status(200).json({ message: 'Applicants fetched successfully', applicants });
    } catch (error) {
        console.error('Error in getDetails:', error);
        return res.status(500).json({ message: error.message });
    }
};

export { submitForm, getDetails }