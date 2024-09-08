module.exports = (sequelize, DataTypes) => {
    const Hospital = sequelize.define('hospitals', {
        uuid: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true
        },
        hospitalName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        registrationNumber: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        hospitalType: {
            type: DataTypes.ENUM('General', 'Multi-specialty', 'Clinic', 'Research Center'),
            allowNull: false,
        },
        numberOfBeds: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        accreditationDetails: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        ownership: {
            type: DataTypes.ENUM('Government', 'Private', 'Trust'),
            allowNull: false,
        },
        incorporationDate: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        address: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        city: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        state: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        postalCode: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        contactNumber: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true,
            },
        },
        emergencyContact: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        ownerName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        directorIDProof: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        taxID: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        certificateOfIncorporation: {
            type: DataTypes.STRING, // This will be the file path to the uploaded document
            allowNull: false,
        },
        insuranceDetails: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        departments: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        staffCount: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        operationalHours: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        patientCapacity: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        website: {
            type: DataTypes.STRING,
            allowNull: true,
            validate: {
                isUrl: true,
            },
        }
    }, {});

    return Hospital;
};
