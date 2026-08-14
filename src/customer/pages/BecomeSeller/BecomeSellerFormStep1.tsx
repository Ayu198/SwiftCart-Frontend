import { Box, TextField } from "@mui/material"

const BecomeSellerFormStep1 = ({formik} : any) => {
  return (
    <Box>
        <p className="text-xl font-bold pb-9 text-center">Contact Details</p>
        <div className = "flex flex-col gap-9">
            <TextField
            fullWidth 
            name = "mobile"
            label = "mobile"
            value = {formik.values.mobile}
            onChange = {formik.handleChange}
            error = {formik.touched.mobile && Boolean(formik.errors.mobile)}
            helperText = {formik.touched.mobile && formik.errors.mobile}
            />

            <TextField
            fullWidth 
            name = "gstin"
            label = "gstin"
            value = {formik.values.gstin}
            onChange = {formik.handleChange}
            error = {formik.touched.gstin && Boolean(formik.errors.gstin)}
            helperText = {formik.touched.gstin && formik.errors.gstin}
            />
        </div>
    </Box>
  )
}

export default BecomeSellerFormStep1