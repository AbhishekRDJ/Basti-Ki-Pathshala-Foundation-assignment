import mongoose from 'mongoose'

const applicationSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    skills: [String],
    motivation: String,
    appliedAt: { type: Date, default: Date.now }
})


export default mongoose.model('Applicant', applicationSchema);
