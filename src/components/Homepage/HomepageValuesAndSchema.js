import * as yup from 'yup'

export const RegisterSchema = yup.object({
    email: yup.string().email('Please use a valid Email').required('Email is required'),
    password: yup.string().min(8).required('Password is required'),
    confirmPassword: yup.string()
        .oneOf([yup.ref('password'), null], 'Passwords must match')
        .required('Password confirmation is required')
})

export const RegisterValues = {
    email: '',
    password: '',
    confirmPassword: ''
}

export const LoginSchema = yup.object({
    LoginEmail: yup.string().email('Please use a valid Email').required('Email is required'),
    LoginPassword: yup.string().min(8).required('Password is required')
})

export const LoginValues = {
    LoginEmail: '',
    LoginPassword: ''
}