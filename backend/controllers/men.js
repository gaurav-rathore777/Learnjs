import bcrypt from 'bcryptjs';
import Men from '../models/men.js'; // Adjust path based on your project structure

// Create a new user
export const createMen = async (req, res) => {
    try {
        const { emailAddress, password, confirmPassword, firstName, lastName, phoneNumber, company } = req.body;

        // Simple password match check
        if (password !== confirmPassword) {
            return res.status(400).json({ message: "Passwords do not match" });
        }

        const hashedPassword  = await bcrypt.hash(password, 10);
        const newMen = new Men({
            emailAddress,
            password : hashedPassword,
            confirmPassword : hashedPassword, // Store hashed password for consistency
            firstName,
            lastName,
            phoneNumber,
            company
        });

        await newMen.save();
        res.status(201).json(newMen);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Get all users
export const getAllMen = async (req, res) => {
    try {
        const men = await Men.find();
        res.status(200).json(men);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get a single user by ID
export const getMenById = async (req, res) => {
    try {
        const men = await Men.findById(req.params.id);
        if (!men) return res.status(404).json({ message: "User not found" });
        res.status(200).json(men);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Update user
export const updateMen = async (req, res) => {
    try {
        const updatedMen = await Men.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedMen) return res.status(404).json({ message: "User not found" });
        res.status(200).json(updatedMen);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Delete user
export const deleteMen = async (req, res) => {
    try {
        const deletedMen = await Men.findByIdAndDelete(req.params.id);
        if (!deletedMen) return res.status(404).json({ message: "User not found" });
        res.status(200).json({ message: "User deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
