import { TextField, Button } from '@mui/material';
import { useFormik } from 'formik';
import { sendLoginSignupOtp } from '../../../State/authSlice';
import { useAppDispatch } from '../../../State/Store';

const RegisterForm = () => {
    const dispatcher = useAppDispatch();
    const formik = useFormik({
        initialValues: {
            email: "",
            otp: "",
            fullName:""
        },
        onSubmit: (values) => {
        }
    });
    const handleSendOtp = () => {
        dispatcher(sendLoginSignupOtp({ email: formik.values.email }))
    }
    return (
        <div>
            <h1 className="text-center font-bold text-xl text-primary pb-8"> Register </h1>
            <div className="flex flex-col gap-9">
                <TextField
                    fullWidth
                    name="email"
                    label="Email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    error={formik.touched?.email && Boolean(formik.errors?.email)}
                    helperText={formik.touched?.email && formik.errors?.email}
                />
                {true &&
                    <div className="flex flex-col gap-3">
                        <p className="font-medium text-sm opacity-60">Enter Otp sent to your email</p>
                        <TextField
                            fullWidth
                            name="otp"
                            label="Otp"
                            value={formik.values.otp}
                            onChange={formik.handleChange}
                            error={formik.touched?.otp && Boolean(formik.errors?.otp)}
                            helperText={formik.touched?.otp && formik.errors?.otp}
                        />
                        <TextField
                            fullWidth
                            name="fullName"
                            label="Full Name"
                            value={formik.values.fullName}
                            onChange={formik.handleChange}
                            error={formik.touched?.fullName && Boolean(formik.errors?.fullName)}
                            helperText={formik.touched?.fullName && formik.errors?.fullName}
                        />
                    </div>}
                {false && <Button onClick={handleSendOtp} fullWidth variant="contained" sx={{ py: "11px" }}>
                    Send Otp
                </Button>}
                <Button onClick={() => formik.handleSubmit()} fullWidth variant="contained" sx={{ py: "11px" }}>
                    Signup
                </Button>
            </div>
        </div>
    )
}

export default RegisterForm