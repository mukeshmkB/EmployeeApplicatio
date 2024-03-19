import {useState} from 'react'
import {Link} from 'react-router-dom'
import {MdHome, MdSearch} from 'react-icons/md'
import {BsPersonFill} from 'react-icons/bs'
import EmployeItem from '../EmployeItem'
import TopStatus from '../TopStatus'

import './index.css'

const Employee = () => {
  const employeeList = [
    {
      empId: 1,
      name: 'Arjun',
      dob: '16-11-2000',
      role: 'Software Engineer',
      indent: false,
    },
    {
      empId: 2,
      name: 'Mahesh',
      dob: '15-01-2000',
      role: 'Web Developer',
      indent: false,
    },
    {
      empId: 3,
      name: 'Emma',
      dob: '20-05-1995',
      role: 'Data Analyst',
      indent: false,
    },
    {
      empId: 4,
      name: 'David',
      dob: '30-12-1985',
      role: 'Marketing Specialist',
      indent: false,
    },
    {
      empId: 5,
      name: 'Ethan',
      dob: '05-08-1991',
      role: 'Financial Analyst',
      indent: false,
    },
    {
      empId: 6,
      name: 'Olivia',
      dob: '12-01-1994',
      role: 'Product Manager',
      indent: false,
    },
    {
      empId: 7,
      name: 'Ava',
      dob: '18-10-1996',
      role: 'Human Resources Manager',
      indent: false,
    },
    {
      empId: 8,
      name: 'Elijah',
      dob: '22-04-1987',
      role: 'Sales Representative',
      indent: false,
    },
  ]
  const [employeeName, setEmployeeName] = useState('')

  const changeEmployeName = event => {
    setEmployeeName(event.target.value)
  }

  const filteredEmployees = () => {
    const filteredData = employeeList.filter(eachEmployee =>
      eachEmployee.name.toLowerCase().includes(employeeName.toLowerCase()),
    )

    const updatedFilteredData = filteredData.map((employee, index) => {
      if (index % 2 !== 0) {
        return {...employee, indent: true}
      }
      return employee
    })

    return updatedFilteredData
  }

  const filteredEmployeeResult = filteredEmployees()

  return (
    <div className="employee-container">
      <div className="employee-responsive-container">
        <TopStatus />
        <img
          src="https://i.ibb.co/kK7dPY0/Group-46-2x.png"
          alt="Group-46-2x"
          className="contact-image"
        />
        <div className="content-wrapper">
          <img
            src="https://i.ibb.co/qrfhWHh/moptro-logo-3-2x.png"
            alt="moptro-logo-3-2x"
            className="moptro-image"
          />
          <div className="count-container" />
          <p className="count">4</p>
        </div>
        <div className="search-body">
          <input
            type="search"
            value={employeeName}
            placeholder="Search with name"
            onChange={changeEmployeName}
          />
          <MdSearch size={22} color="white" />
        </div>
        <ul className="employe-list-conatiner">
          {filteredEmployeeResult.map(eachEmploye => (
            <EmployeItem key={eachEmploye.empId} employeDetails={eachEmploye} />
          ))}
        </ul>
      </div>
      <div className="bottom-navbar">
        <Link to="/" className="link">
          <MdHome size={38} className="nav-icon" />
        </Link>
        <Link to="/employe" className="link">
          <BsPersonFill size={38} className="nav-icon" />
        </Link>
      </div>
    </div>
  )
}
export default Employee
