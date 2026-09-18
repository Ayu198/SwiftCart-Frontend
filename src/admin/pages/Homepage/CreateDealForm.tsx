import { Box, Button, FormControl, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material'
import { useFormik } from 'formik'
import React from 'react'
import { useAppDispatch, useAppSelector } from '../../../State/Store';
import { createDeal } from '../../../State/admin/dealSlice';

const CreateDealForm = () => {
  const dispatch = useAppDispatch();
  const {customer} = useAppSelector(store => store);
  const formik = useFormik({
    initialValues: {
      discount: 0,
      category: ""
    },
    onSubmit: (Values) => {
      console.log("values:", Values)
      const reqData = {
        discount:Values.discount,
        category : {
          id:Values.category
        }
      }
      dispatch(createDeal(reqData))
    }
  })
  return (
    <Box component={"form"} onSubmit={formik.handleSubmit} className="flex flex-col gap-4 w-[25vw] max-w-full">
      <Typography variant="h4" className="text-center text-primary">
        Create Deal
      </Typography>
      <TextField
        fullWidth
        name="discount"
        label="Discount"
        value={formik.values.discount}
        onChange={formik.handleChange}
        error={formik.touched.discount && Boolean(formik.errors.discount)}
        helperText={formik.touched.discount && formik.errors.discount}
      />
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Category</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={formik.values.category}
          label="Category"
          onChange={formik.handleChange}
        >
          {customer.homePageData?.dealCategories.map((item , index) => <MenuItem key = {index} value={item.id}>{item.name}</MenuItem> )}
        </Select>
      </FormControl>
      <Button fullWidth sx = {{py:".9rem"}} type = "submit" variant = "contained">
        Create Deal
      </Button>
    </Box>
  )
}

export default CreateDealForm