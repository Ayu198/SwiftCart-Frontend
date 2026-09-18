import { Button, TextField } from "@mui/material"
import { useFormik } from "formik"
import { useAppDispatch } from "../../../State/Store";
import { sendLoginSignupOtp} from "../../../State/authSlice";
import { sellerLogin } from "../../../State/seller/sellerAuthSlice";

const SellerLoginForm = () => {
  const dispatcher = useAppDispatch();
  const formik = useFormik({
    initialValues: {
      email: "",
      otp: ""
    },
    onSubmit: (values) => {
      console.log("values: ", values);
      dispatcher(sellerLogin(values));
    }
  });
  const handleSendOtp = () => {
    dispatcher(sendLoginSignupOtp({email:formik.values.email}))
  }
  return (
    <div>
      <h1 className="text-center font-bold text-primary pb-5 text-xl ">
        Login As Seller
      </h1>
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
          </div>}
        <Button onClick = {handleSendOtp} fullWidth variant="contained" sx={{ py: "11px" }}>
          Send Otp
        </Button>
        <Button onClick = {()=>formik.handleSubmit()} fullWidth variant="contained" sx={{ py: "11px" }}>
          Login
        </Button>
      </div>
    </div>
  )
}

export default SellerLoginForm