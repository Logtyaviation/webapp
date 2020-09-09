import  * as yup from 'yup'

export const GeneralSchema = yup.object({
    HolderLastName: yup.string().required('Your last name is required'),
    HolderLastName2: yup.string(', type of entry incorrect, must be a string'),
    HolderFirstName: yup.string().required('Your first name is required'),
    HolderFirstName2: yup.string(', type of entry incorrect, must be a string'),
    HolderCompany:yup.string(),
    DateOfEntry:yup.date(),
    HolderRank:yup.string().required('Your rank is required'),
    HolderDayDOB:yup.number().min(1, 'Please enter a valid day number').max(31, 'Please enter a valid day number'),
    HolderMonthDOB:yup.number().min(1, 'Please enter a valid month number').max(12, 'Please enter a valid month number'),
    HolderYearDOB:yup.number().min(1920, 'You can not be that old and flying!').max(2020, 'Are you comming from the future ??'),
    email: yup.string().email('Please use a valid Email').required('Email is required'),
    password: yup.string().min(8).required('Password is required'),
    confirmPassword: yup.string()
        .oneOf([yup.ref('password'), null], 'Passwords must match')
        .required('Password confirmation is required')
})

export const GeneralInitialValues = {
    HolderLastName:'',
    HolderFirstName:'',
    HolderFirstName2:'',
    HolderLastName2:'',
    HolderCompany:'',
    DateOfEntry:'',
    HolderRank:'',
    HolderDayDOB:'',
    HolderMonthDOB:'',
    HolderYearDOB:'',
    email:'',
    password:'',
    confirmPassword:''
}

export const LicenseSchema = yup.object({
    LicenseStateOfIssue:yup.string(),
    LicenseNumber:yup.string(),
    LicenseDateOfIssue:yup.string(),
    LicenseExpirationDate:yup.string(),
    LicenseTitle:yup.string(),
    DateOfTitleInitialIssue:yup.date(),
    LicenseCountryCode:yup.string().length(2, 'Code must be 2 caracters'),
    LicenseELP:yup.number().min(1, 'Must be between 1 and 6').max(6, 'Must be between 1 and 6'),
    LicenseELPExpirationDate:yup.date(),
    LicenseRemarks:yup.string().max(500, 'Please write less than 500 caracters'),
    RatingList:yup.array().of(yup.object({
        RatingStyle:yup.string(),
        RatingName:yup.string(),
        RatingRemarks:yup.string(),
        RatingExpiration:yup.date()
    }))
})

export const LicenseInitialValues = {
    LicenseStateOfIssue:'',
    LicenseNumber:'',
    LicenseDateOfIssue:'',
    LicenseExpirationDate:'',
    LicenseTitle:'',
    DateOfTitleInitialIssue:'',
    LicenseCountryCode:'',
    LicenseELP:'',
    LicenseELPExpirationDate:'',
    LicenseRemarks:'',
    RatingList:[]
}

export const MedicalSchema = yup.object({
    Class1Expiration:yup.date(),
    Class2Expiration:yup.date(),
    LAPLExpiration:yup.date(),
    MedicalIssueDate:yup.date(),
    MedicalRestrictions:yup.string().max(500, 'You can not have so many restrictions!')
})

export const MedicalInitialValues = {
    Class1Expiration:'',
    Class2Expiration:'',
    LAPLExpiration:'',
    MedicalIssueDate:'',
    MedicalRestrictions:''
}
