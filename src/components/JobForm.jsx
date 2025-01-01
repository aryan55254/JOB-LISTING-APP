import React from 'react'

function JobForm() {
  return (
    <>
    <form>
        <h2>Job Details</h2>
        <label htmlFor="title">Job Title</label>
        <input id = " title" name = 'title' type='text' placeholder='e.g. react developer'></input>
        {/*htmlfor is used to link label with its id in input and name is used for storing data with keys*/}
        <label htmlFor='type'>Type</label>
        <select id='type' name = 'type' >
          <option value = 'option 1'>Full-Time</option>
          <option value ='option 2'>Part-Time</option>
        </select>
        <label htmlFor="description">Job Description</label>
        <input id = "description" name = 'description' type='text' placeholder='type thedescription of the role'></input>
        <label htmlFor="location">Job Location</label>
        <input id = "location" name = 'location' type='text' placeholder='e.g. Noida,U.P.'></input>
        <label htmlFor="Salary">Per Month Salary</label>
        <input id = "Salary" name = 'Salary' type='text' placeholder='eg.40k-50k'></input>
        <h2>Company details</h2>
        <label htmlFor="name">Company Name</label>
        <input id = "name" name = 'name' type='text' placeholder='Name of the company'></input>
        <label htmlFor="c-description">Company Description</label>
        <input id = "c-description" name = 'c-description' type='text' placeholder='Description of the company'></input>
        <label htmlFor="email">Company Email</label>
        <input id = "email" name = 'email' type='text' placeholder='Email of the company'></input>
    </form>
    </>
  )
}

export default JobForm