import mongoose from 'mongoose';
const menSchema = new mongoose.Schema({
    emailAddress: {
        type: String,
        required: true,
        unique: true,
        trim: true,                 
    },
    password: {
        type: String,
        required: true,
        minlength: 6,              
    },
    confirmPassword: {
        type: String,
        required: true,
        minlength: 6,              
    },
    firstName: {
        type: String,
        required: true,
        trim: true,                 
    },
    lastName: {
        type: String,
        required: true,
        trim: true,                 
    },
    phoneNumber: {
        type: String,
        required: true,
        match: /^[0-9]{3}-[0-9]{3}-[0-9]{4}$/, // Format: 123-456-7890
    },
    company: {
        type: String,
        required: true,
        trim: true,                 
    }
});

const Men = mongoose.model('Men', menSchema);
export default Men;