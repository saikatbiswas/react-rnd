import { CircularProgress } from '@mui/material';

// Form error
export const errorHelper = (formik, value)=>({
    error:(formik.errors[value]&& formik.touched[value]),
    helperText: (formik.errors && formik.touched[value]) && formik.errors[value],
});

export const Loader = ()=>{
    return(
        <div className='loader-container'>
            <CircularProgress />
        </div>
    )
}
