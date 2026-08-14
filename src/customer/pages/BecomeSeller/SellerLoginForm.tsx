import { TextField } from "@mui/material"
import { useFormik } from "formik"

const SellerLoginForm = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      otp: ""
    },
    onSubmit: (values) => {
      console.log("values: ", values)
    }
  });
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
          <div className = "flex flex-col gap-3">
            <p className = "font-medium text-sm opacity-60">Enter Otp sent to your email</p>
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
      </div>
    </div>
  )
}

export default SellerLoginForm