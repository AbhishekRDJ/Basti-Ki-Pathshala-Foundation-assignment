import React from 'react';
import FormField from './FormField';
import { Send } from 'lucide-react';

const Form = ({ formData, handleChange, handleSubmit }) => (
    <form onSubmit={handleSubmit} className="space-y-6 p-8">
        <FormField
            label="Full Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            icon="User"
            placeholder="Enter your full name"
        />
        <FormField
            label="Email Address"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            icon="Mail"
            placeholder="Enter your email"
        />
        <FormField
            label="Skills & Expertise"
            name="skills"
            value={formData.skills}
            onChange={handleChange}
            icon="Code"
            placeholder="e.g., JavaScript, Design"
            helper="Separate multiple skills with commas"
        />
        <FormField
            label="Why do you want to join?"
            name="motivation"
            value={formData.motivation}
            onChange={handleChange}
            icon="MessageCircle"
            placeholder="Tell us your motivation..."
            textarea
        />
        <button
            type="submit"
            className="flex justify-center items-center space-x-2 bg-gradient-to-r from-blue-600 hover:from-blue-700 to-indigo-600 hover:to-indigo-700 shadow-lg px-6 py-3 rounded-xl w-full font-semibold text-white transition-all"
        >
            <Send className="w-5 h-5" />
            <span>Submit Application</span>
        </button>
    </form>
);

export default Form;
