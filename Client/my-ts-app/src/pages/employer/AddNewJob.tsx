import React from 'react'
import PostJob from '../../Components/Employer/job/PostJob';
import EmployerHeader from '../../Components/Header/EmployerHeader';
function AddNewJob() {
  return (
    <div className="bg-foundItBg">
        <EmployerHeader/>
        <PostJob/>
    </div>
  )
}

export default AddNewJob;