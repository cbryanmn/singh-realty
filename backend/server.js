const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const Property = require('./models/Property');
const FormSubmission = require('./models/FormSubmission');
require('dotenv').config();
const { body, validationResult } = require('express-validator');

const app = express();

// Middleware
app.use(cors());
app.use(express.json()); // for parsing application/json

// MongoDB Connection
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("MongoDB connected"))
    .catch(err => console.log(err));

// routes
app.get('/api/properties', async (req, res) => {
    try {
        let query = {};
        if (req.query.bedrooms) {
            query.bedrooms = req.query.bedrooms;
        }

        if (req.query.bathrooms) {
            query.bathrooms = req.query.bathrooms;
        }

        if (req.query.unitType) {
            query.unitType = req.query.unitType;
        }

        if (req.query.zipCode) {
            query.zipCode = req.query.zipCode;
        }

        if (req.query.groundFloor) {
            query.groundFloor = req.query.groundFloor === 'true';
        }

        if (req.query.amenities) {
            query.amenities = { $all: req.query.amenities.split(',') };
        }

        if (req.query.minSqft) {
            query.sqft = { ...query.sqft, $gte: parseInt(req.query.minSqft) };
        }

        if (req.query.maxSqft) {
            query.sqft = { ...query.sqft, $lte: parseInt(req.query.maxSqft) };
        }

        if (req.query.minRent) {
            query.rent = { $gte: parseInt(req.query.minRent) };
        }

        if (req.query.maxRent) {
            query.rent = query.rent || {};
            query.rent.$lte = parseInt(req.query.maxRent);
        }

        const properties = await Property.find(query);
        res.json(properties);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

app.post('/api/contact',
    // Validation and sanitization middleware
    body('name').trim().isLength({ min: 1 }).withMessage('Name is required.'),
    body('email').optional({ checkFalsy: true }).trim().isEmail().withMessage('Invalid email format.').normalizeEmail(),
    body('phone').optional({ checkFalsy: true }).trim().isMobilePhone().withMessage('Invalid phone number.'),
    body('contactMethod').isIn(['email', 'phone']).withMessage('Invalid contact method.'),
    body('email').if(body('contactMethod').equals('email')).notEmpty().withMessage('Email is required for the chosen contact method.'),
    body('phone').if(body('contactMethod').equals('phone')).notEmpty().withMessage('Phone number is required for the chosen contact method.'),
    body('propertyName').optional({ checkFalsy: true }).trim(),
    body('propertyAddress').optional({ checkFalsy: true }).trim(),
    body('propertyDetails').optional({ checkFalsy: true }).trim(),
    async (req, res) => {
        console.log(req.body);
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        try {
            const newSubmission = new FormSubmission(req.body);
            await newSubmission.save();
            res.status(200).json({ message: "Form submitted successfully" });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
);

app.post('/api/footer-contact',
    // Validation and sanitization middleware
    body('name').trim().isLength({ min: 1 }).withMessage('Name is required.'),
    body('phone').trim().isLength({ min: 1 }).withMessage('Phone number is required.'),
    body('email').trim().isLength({ min: 1 }).withMessage('Email address is required.'),
    async (req, res) => {
        console.log(req.body);
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        try {
            const newSubmission = new FormSubmission(req.body);
            await newSubmission.save();
            res.status(200).json({ message: "Form submitted successfully" });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
);

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
