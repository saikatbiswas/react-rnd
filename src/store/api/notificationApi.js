import axiosInstance from "store/axiosInstance";

export const getNoticeFormTeacherList = (id)=>{
    // console.log(studentId)
    const studentId = new FormData();
    studentId.append('student_id', id)
    const data = axiosInstance.post(`users/noticeFromTeacher`,studentId);
    return data;
}