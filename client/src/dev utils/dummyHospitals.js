const axios = require('axios');

const hospitals = [
    {
        hospitalName: "City Health Center",
        registrationNumber: "REG123456789",
        hospitalType: "General",
        numberOfBeds: 150,
        accreditationDetails: "ISO 9001:2015",
        ownership: "Government",
        incorporationDate: "2005-03-25",
        address: "123 Main Street",
        city: "Delhi",
        state: "Delhi",
        postalCode: "110001",
        contactNumber: "+91-9876543210",
        email: "info@cityhealthcenter.com",
        emergencyContact: "+91-9876543211",
        ownerName: "Dr. Anil Sharma",
        directorIDProof: "AAB123456C",
        taxID: "TAX567890123",
        certificateOfIncorporation: "/uploads/city_health_cert.pdf",
        insuranceDetails: "Covered under National Insurance Scheme",
        departments: "Cardiology, Neurology, Pediatrics",
        staffCount: 120,
        operationalHours: "24/7",
        patientCapacity: 200,
        website: "http://cityhealthcenter.com"
    },
    {
        hospitalName: "Sunrise Multi-specialty Hospital",
        registrationNumber: "REG987654321",
        hospitalType: "Multi-specialty",
        numberOfBeds: 250,
        accreditationDetails: "JCI Accredited",
        ownership: "Private",
        incorporationDate: "2010-11-05",
        address: "456 Sunrise Avenue",
        city: "Mumbai",
        state: "Maharashtra",
        postalCode: "400001",
        contactNumber: "+91-9988776655",
        email: "contact@sunrisehospital.com",
        emergencyContact: "+91-9988776656",
        ownerName: "Mr. Rajesh Kapoor",
        directorIDProof: "PAN0987654321",
        taxID: "TAX432109876",
        certificateOfIncorporation: "/uploads/sunrise_hospital_cert.pdf",
        insuranceDetails: "Private Insurance Plans",
        departments: "Orthopedics, Cardiology, Oncology, Gastroenterology",
        staffCount: 200,
        operationalHours: "24/7",
        patientCapacity: 300,
        website: "http://sunrisehospital.com"
    },
    {
        hospitalName: "Green Cross Clinic",
        registrationNumber: "REG456789123",
        hospitalType: "Clinic",
        numberOfBeds: 30,
        accreditationDetails: "NA",
        ownership: "Trust",
        incorporationDate: "2015-06-15",
        address: "789 Greenway Road",
        city: "Bangalore",
        state: "Karnataka",
        postalCode: "560001",
        contactNumber: "+91-7766554433",
        email: "admin@greencrossclinic.org",
        emergencyContact: "+91-7766554434",
        ownerName: "Ms. Kavita Menon",
        directorIDProof: "AADHAR0987123456",
        taxID: "TAX098712345",
        certificateOfIncorporation: "/uploads/green_cross_clinic_cert.pdf",
        insuranceDetails: "Trust-managed healthcare fund",
        departments: "General Medicine, Pediatrics, Dentistry",
        staffCount: 40,
        operationalHours: "08:00 AM - 08:00 PM",
        patientCapacity: 50,
        website: "http://greencrossclinic.org"
    },
    {
        hospitalName: "Apollo Research Center",
        registrationNumber: "REG654321987",
        hospitalType: "Research Center",
        numberOfBeds: 100,
        accreditationDetails: "ISO 27001:2013",
        ownership: "Private",
        incorporationDate: "2018-01-10",
        address: "101 Apollo Street",
        city: "Chennai",
        state: "Tamil Nadu",
        postalCode: "600001",
        contactNumber: "+91-8888881234",
        email: "research@apollo.org",
        emergencyContact: "+91-8888885678",
        ownerName: "Dr. Anita Rao",
        directorIDProof: "PAN6543217890",
        taxID: "TAX654321987",
        certificateOfIncorporation: "/uploads/apollo_research_cert.pdf",
        insuranceDetails: "Research insurance scheme",
        departments: "Oncology Research, Clinical Trials, Bioinformatics",
        staffCount: 80,
        operationalHours: "09:00 AM - 06:00 PM",
        patientCapacity: 120,
        website: "http://apollo.org"
    }
];

// Function to send POST requests
const registerHospital = async (hospital) => {
    try {
        const response = await axios.post(
            'http://localhost:3001/hospitalRegistration', hospital
        );
        console.log(`Hospital ${hospital.hospitalName} registered successfully:`, response.data);
    } catch (error) {
        console.error(`Error registering hospital ${hospital.hospitalName}:`, error.message);
    }
};

// Register all hospitals
const registerAllHospitals = async () => {
    for (const hospital of hospitals) {
        await registerHospital(hospital);
    }
};

registerAllHospitals();
