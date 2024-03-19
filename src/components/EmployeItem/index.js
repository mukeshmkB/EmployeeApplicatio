import './index.css'

const EmployeItem = ({employeDetails}) => {
  const {empId, name, dob, role, indent} = employeDetails
  const spacer = indent ? 'offset-left' : ''
  return (
    <li className={`employee-item-container ${spacer}`}>
      <div className="id-body">
        <p>
          EMP ID : <span className="id">{empId}</span>
        </p>
        <div className="employe-id">
          <p>{empId}</p>
        </div>
      </div>
      <p className="employe-name">
        Name <span className="colon">:</span>{' '}
        <span className="name">{name}</span>
      </p>
      <p className="employe-dob">
        DOB <span className="colon">:</span> <span className="dob">{dob}</span>
      </p>
      <p className="employe-role">
        Role <span className="colon">:</span>{' '}
        <span className="role">{role}</span>
      </p>
    </li>
  )
}
export default EmployeItem
