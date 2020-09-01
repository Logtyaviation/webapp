import  * as yup from 'yup'

const TakeOffAndLandingSchema = yup.object({
    TakeOffDate:yup.string().required('Take Off date is required'),
    TakeOffTime:yup.string().required('Take Off time is required'),
    TakeOffAirport:yup.string().required('Take Off airport is required').min(3,'Enter ICAO or IATA code').max(4, 'Enter ICAO or IATA code'),
    TakeOffDayOrNight:yup.string().required('Please choose day or night'),
    TakeOffsAmount:yup.number().required('Please choose a whole number bigger than 0').integer('Can not be decimal').min(0, 'Can not be negative'),
    LandingDate:yup.string().required('Landing date is required'),
    LandingTime:yup.string().required('Landing time is required'),
    LandingAirport:yup.string().required('Landing airport is required').min(3,'Enter ICAO or IATA code').max(4,'Enter ICAO or IATA code'),
    LandingDayOrNight:yup.string().required('Please choose day or night'),
    LandingsAmount:yup.number().required('Please choose a whole number bigger than 0').integer('Can not be decimal').min(0, 'Can not be negative'),
})

const TakeOffAndLandingInitialValues = {
    TakeOffDate:'01/09/2020',
    TakeOffTime:'19:35',
    TakeOffAirport:'LEMD',
    TakeOffDayOrNight:'TakeOffByDay',
    TakeOffsAmount:'1',
    LandingDate:'01/09/2020',
    LandingTime:'20:50',
    LandingAirport:'LEPA',
    LandingDayOrNight:'LandingByNight',
    LandingsAmount:'1'
}


const TimeAllocationSchema = yup.object({
    TotalBlockTime:yup.string().required('Total block time is required'),
    TotalOrPartNightTime:yup.string(),
    NightTime:yup.string().when('TotalOrPartNightTime', {
        is:'PartNightTime',
        then: yup.string().required('Please enter the part time')
    }),
    TotalOrPartIFRTime:yup.string(),
    IFRTime:yup.string().when('TotalOrPartIFRTime', {
        is:'PartIFRTime',
        then: yup.string().required('Please enter the part time')
    }),
    TotalOrPartDualTime:yup.string(),
    DualTime:yup.string().when('TotalOrPartDualTime', {
        is:'PartDualTime',
        then: yup.string().required('Please enter the part time')
    }),
    TotalOrPartPICTime:yup.string(),
    PICTime:yup.string().when('TotalOrPartPICTime', {
        is:'PartPICTime',
        then: yup.string().required('Please enter the part time')
    }),
    TotalOrPartInstructorTime:yup.string(),
    InstructorTime:yup.string().when('TotalOrPartInstructorTime', {
        is:'PartInstructorTime',
        then: yup.string().required('Please enter the part time')
    }),
    TotalOrPartCopilotTime:yup.string(),
    CopilotTime:yup.string().when('TotalOrPartCopilotTime', {
        is:'PartCopilotTime',
        then: yup.string().required('Please enter the part time')
    }),
})

const TimeAllocationInitialValues = {
    TotalBlockTime:'01:15',
    TotalOrPartNightTime:'',
    NightTime:'',
    TotalOrPartIFRTime:'',
    IFRTime:'',
    TotalOrPartDualTime:'',
    DualTime:'',
    TotalOrPartPICTime:'',
    PICTime:'',
    TotalOrPartInstructorTime:'',
    InstructorTime:'',
    TotalOrPartCopilotTime:'',
    CopilotTime:'',
    PICUSTime:'',
}


const AircraftInformationSchema = yup.object({
    Registration:yup.string().required('Aircraft registration is required'),
    Type:yup.string().required('Aircraft type is required'),
    SEorME:yup.string().required('Please choose single or multi engine'),
    SPorMP:yup.string().required('Please choose single or multi pilot'),
})

const AircraftInformationInitialValues = {
    Registration:'EI-FTG',
    Type:'B737-800',
    SEorME:'SingleEngine',
    SPorMP:'SinglePilot',
}


const CrewInformationSchema = yup.object({
    Crew: yup.array().of(yup.object({
        FirstName: yup.string().required('Please enter the first name'),
        LastName: yup.string().required('Please enter the last name'),
        Rank: yup.string().required(),
        CustomRank: yup.string().when('Rank', {
            is: 'Custom',
            then: yup.string().required('Please enter the rank')
        })
    }).required()),
    PIC: yup.string().required('Please select one pilot in command')
})

const CrewInformationInitialValues = {
    Crew: [{
        FirstName: 'Elon',
        LastName: 'Musk',
        Rank: 'Captain',
        CustomRank:''
    }],
    PIC: ''
}

const RemarksSchema = yup.object({
        TextRemarks:yup.string().max(500, 'You can not write a remark so long!')
})

const RemarksInitialValues = {
    TextRemarks:'',
    RemarkLineCheck:'',
    RemarkAutoland:'',
    RemarkMonitoredApproach:'',
    RemarkGoAround:'',
    RemarkDiversion:'',
}


export {
    TakeOffAndLandingSchema,
    TimeAllocationSchema,
    AircraftInformationSchema,
    CrewInformationSchema,
    RemarksSchema,
    TakeOffAndLandingInitialValues,
    TimeAllocationInitialValues,
    AircraftInformationInitialValues,
    CrewInformationInitialValues,
    RemarksInitialValues
}
