

// Form error
export const errorHelper = (formik, value)=>({
    error:(formik.errors[value]&& formik.touched[value]),
    helperText: (formik.errors && formik.touched[value]) && formik.errors[value],
});
