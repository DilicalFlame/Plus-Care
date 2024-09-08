import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

const HospitalRegistrationForm = () => {
    
  const validationSchema = Yup.object({
    hospitalName: Yup.string().required('Hospital Name is required'),
    registrationNumber: Yup.string().required('Registration Number is required'),
    hospitalType: Yup.string().required('Type of Hospital is required'),
    numberOfBeds: Yup.number().required('Number of Beds is required'),
    accreditationDetails: Yup.string(),
    ownership: Yup.string().required('Ownership is required'),
    incorporationDate: Yup.date().required('Incorporation Date is required'),
    address: Yup.string().required('Address is required'),
    city: Yup.string().required('City is required'),
    state: Yup.string().required('State is required'),
    postalCode: Yup.string().required('Postal Code is required'),
    contactNumber: Yup.string().required('Contact Number is required'),
    email: Yup.string().email('Invalid email format').required('Email is required'),
    emergencyContact: Yup.string(),
    ownerName: Yup.string().required('Owner Name is required'),
    directorIDProof: Yup.string().required('ID Proof is required'),
    taxID: Yup.string().required('Tax ID is required'),
    certificateOfIncorporation: Yup.mixed().required('Certificate of Incorporation is required'),
    insuranceDetails: Yup.string(),
    departments: Yup.string().required('Departments are required'),
    staffCount: Yup.number().required('Number of Staff is required'),
    operationalHours: Yup.string().required('Operational Hours are required'),
    patientCapacity: Yup.number().required('Patient Capacity is required'),
    website: Yup.string().url('Invalid URL'),
  });

  // Initial values for the form
  const initialValues = {
    hospitalName: '',
    registrationNumber: '',
    hospitalType: '',
    numberOfBeds: '',
    accreditationDetails: '',
    ownership: '',
    incorporationDate: '',
    address: '',
    city: '',
    state: '',
    postalCode: '',
    contactNumber: '',
    email: '',
    emergencyContact: '',
    ownerName: '',
    directorIDProof: '',
    taxID: '',
    certificateOfIncorporation: null,
    insuranceDetails: '',
    departments: '',
    staffCount: '',
    operationalHours: '',
    patientCapacity: '',
    website: '',
  };

  const handleSubmit = (values) => {
    axios.post('http://localhost:3001/hospitalRegistration', values);
    console.log('Form Values:', values);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ setFieldValue }) => (
        <Form>
          {/* Hospital Information */}
          <div>
            <label>Hospital Name:</label>
            <Field name="hospitalName" />
            <ErrorMessage name="hospitalName" />
          </div>

          <div>
            <label>Registration Number:</label>
            <Field name="registrationNumber" />
            <ErrorMessage name="registrationNumber" />
          </div>

          <div>
            <label>Hospital Type:</label>
            <Field name="hospitalType" as="select">
              <option value="">Select</option>
              <option value="General">General</option>
              <option value="Multi-specialty">Multi-specialty</option>
              <option value="Clinic">Clinic</option>
              <option value="Research Center">Research Center</option>
            </Field>
            <ErrorMessage name="hospitalType" />
          </div>

          <div>
            <label>Number of Beds:</label>
            <Field name="numberOfBeds" type="number" />
            <ErrorMessage name="numberOfBeds" />
          </div>

          <div>
            <label>Accreditation Details:</label>
            <Field name="accreditationDetails" />
            <ErrorMessage name="accreditationDetails" />
          </div>

          <div>
            <label>Ownership:</label>
            <Field name="ownership" as="select">
              <option value="">Select</option>
              <option value="Government">Government</option>
              <option value="Private">Private</option>
              <option value="Trust">Trust</option>
            </Field>
            <ErrorMessage name="ownership" />
          </div>

          <div>
            <label>Incorporation Date:</label>
            <Field name="incorporationDate" type="date" />
            <ErrorMessage name="incorporationDate" />
          </div>

          {/* Location Details */}
          <div>
            <label>Address:</label>
            <Field name="address" />
            <ErrorMessage name="address" />
          </div>

          <div>
            <label>City:</label>
            <Field name="city" />
            <ErrorMessage name="city" />
          </div>

          <div>
            <label>State:</label>
            <Field name="state" />
            <ErrorMessage name="state" />
          </div>

          <div>
            <label>Postal Code:</label>
            <Field name="postalCode" />
            <ErrorMessage name="postalCode" />
          </div>

          {/* Contact Information */}
          <div>
            <label>Contact Number:</label>
            <Field name="contactNumber" />
            <ErrorMessage name="contactNumber" />
          </div>

          <div>
            <label>Email:</label>
            <Field name="email" type="email" />
            <ErrorMessage name="email" />
          </div>

          <div>
            <label>Emergency Contact Number:</label>
            <Field name="emergencyContact" />
            <ErrorMessage name="emergencyContact" />
          </div>

          {/* Ownership Information */}
          <div>
            <label>Owner Name:</label>
            <Field name="ownerName" />
            <ErrorMessage name="ownerName" />
          </div>

          <div>
            <label>Director's ID Proof:</label>
            <Field name="directorIDProof" />
            <ErrorMessage name="directorIDProof" />
          </div>

          <div>
            <label>Tax ID:</label>
            <Field name="taxID" />
            <ErrorMessage name="taxID" />
          </div>

          {/* File Uploads */}
          <div>
            <label>Certificate of Incorporation:</label>
            <input
              name="certificateOfIncorporation"
              type="file"
              onChange={(event) => {
                setFieldValue('certificateOfIncorporation', event.currentTarget.files[0]);
              }}
            />
            <ErrorMessage name="certificateOfIncorporation" />
          </div>

          <div>
            <label>Insurance Details:</label>
            <Field name="insuranceDetails" />
            <ErrorMessage name="insuranceDetails" />
          </div>

          {/* Operational Information */}
          <div>
            <label>Departments Available:</label>
            <Field name="departments" />
            <ErrorMessage name="departments" />
          </div>

          <div>
            <label>Number of Staff:</label>
            <Field name="staffCount" type="number" />
            <ErrorMessage name="staffCount" />
          </div>

          <div>
            <label>Operational Hours:</label>
            <Field name="operationalHours" />
            <ErrorMessage name="operationalHours" />
          </div>

          <div>
            <label>Patient Capacity:</label>
            <Field name="patientCapacity" type="number" />
            <ErrorMessage name="patientCapacity" />
          </div>

          {/* Optional Digital Information */}
          <div>
            <label>Website URL:</label>
            <Field name="website" />
            <ErrorMessage name="website" />
          </div>

          <button type="submit">Register Hospital</button>
        </Form>
      )}
    </Formik>
  );
};

export default HospitalRegistrationForm;
