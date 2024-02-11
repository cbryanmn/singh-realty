const mongoose = require('mongoose');

const formSubmissionSchema = new mongoose.Schema({
    name: String,
    phone: String,
    email: String,
    contactMethod: {
        type: String,
        enum: ['email', 'phone'],
    },
    propertyName: String,
    propertyAddress: String,
    propertyDetails: String
});

const FormSubmission = mongoose.model('FormSubmission', formSubmissionSchema);

module.exports = FormSubmission;
