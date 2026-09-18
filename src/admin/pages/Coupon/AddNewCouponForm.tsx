import { useFormik } from 'formik'
import { Dayjs } from 'dayjs'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import Box from '@mui/material/Box';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Button, Grid, TextField } from '@mui/material';


interface CouponformValues {
  code: string,
  discountPercentage: number,
  validityStartDate: Dayjs | null,
  validityEndDate: Dayjs | null,
  minimumOrderValue: number
}

const AddNewCouponForm = () => {
  const formik = useFormik<CouponformValues>({
    initialValues: {
      code: "",
      discountPercentage: 0,
      validityStartDate: null,
      validityEndDate: null,
      minimumOrderValue: 0
    },
    onSubmit: (values) => {
      console.log("values: ", values)
      const formatedValues = {
        ...values,
        validityStartDate: values.validityStartDate?.toISOString(),
        validityEndDate: values.validityEndDate?.toISOString()
      }
      console.log("form submitted", values, formatedValues)
    }
  })
  return (
    <div>
      <h1 className = "text-2xl font-bold text-primary pb-5 text-center">Create New Coupon</h1>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Box component={"form"} onSubmit={formik.handleSubmit} sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid size={{ xs: 12, sm: 6 }}>
              <TextField
                fullWidth
                name="code"
                label="Coupon Code"
                value={formik.values.code}
                onChange={formik.handleChange}
                error={formik.touched.code && Boolean(formik.errors.code)}
                helperText={formik.touched.code && formik.errors.code}
              />
            </Grid>
            <Grid size={{ xs: 12, sm: 6 }}>
              <TextField
                fullWidth
                name="discountPercentage"
                label="Discount Percentage"
                value={formik.values.discountPercentage}
                onChange={formik.handleChange}
                error={formik.touched.discountPercentage && Boolean(formik.errors.discountPercentage)}
                helperText={formik.touched.discountPercentage && formik.errors.discountPercentage}
              />
            </Grid>
            <Grid size={{ xs: 12, sm: 6 }}>
              <DatePicker onChange = {formik.handleChange} name = "validityStartDate" sx = {{width : "100%"}}
              label = "Validity Start Date" value = {formik.values.validityStartDate}/>
            </Grid>
            <Grid size={{ xs: 12, sm: 6 }}>
              <DatePicker onChange = {formik.handleChange} name = "validityEndDate" sx = {{width : "100%"}}
              label = "Validity End Date" value = {formik.values.validityEndDate}/>
            </Grid>
            <Grid size={{ xs: 12}}>
              <TextField
                fullWidth
                name="minimumOrderValue"
                label="minimum Order Value"
                value={formik.values.minimumOrderValue}
                onChange={formik.handleChange}
                error={formik.touched.minimumOrderValue && Boolean(formik.errors.minimumOrderValue)}
                helperText={formik.touched.minimumOrderValue && formik.errors.minimumOrderValue}
              />
            </Grid>
            <Grid size={{ xs: 12}}>
              <Button variant = "contained" fullWidth sx = {{py:".8rem"}}>
                Create Coupon
              </Button>
            </Grid>
          </Grid>
        </Box>
      </LocalizationProvider>
    </div>
  )
}

export default AddNewCouponForm