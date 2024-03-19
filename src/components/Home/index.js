import {Link, Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'
import {MdHome} from 'react-icons/md'
import {BsPersonFill} from 'react-icons/bs'
import TopStatus from '../TopStatus'

import './index.css'

const Home = () => {
  const accessToken = Cookies.get('token')

  if (accessToken === undefined) {
    return <Redirect to="/login" />
  }

  return (
    <div className="home-container">
      <div className="home-responsive-container">
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
        <div className="productivity-dashboard-head">
          <p className="dashboard-head">Employee Productivity Dashboard</p>
        </div>
        <div className="productivity-dashboard-wrapper">
          <div className="productive-content">
            <div className="productive-day-percentage">
              <p className="productive-text">Productivity on Monday</p>
              <p className="percentage">92%</p>
            </div>
            <div className="productive-monday" />
          </div>
          <div className="productive-content">
            <div className="productive-day-percentage">
              <p className="productive-text">Productivity on Tuesday</p>
              <p className="percentage">4%</p>
            </div>
            <div className="percentage-tuesday" />
          </div>
          <div className="productive-content">
            <div className="productive-day-percentage">
              <p className="productive-text">Productivity on Wednesday</p>
              <p className="percentage">122%</p>
            </div>
            <div className="percentage-wednesday" />
          </div>
          <div className="productive-content">
            <div className="productive-day-percentage">
              <p className="productive-text">Productivity on Thursday</p>
              <p className="percentage">93%</p>
            </div>
            <div className="percentage-thursday" />
          </div>
          <div className="productive-content">
            <div className="productive-day-percentage">
              <p className="productive-text">Productivity on Friday</p>
              <p className="percentage">89%</p>
            </div>
            <div className="percentage-friday" />
          </div>
          <div className="productive-content">
            <div className="productive-day-percentage">
              <p className="productive-text">Productivity on Saturday</p>
              <p className="percentage">98%</p>
            </div>
            <div className="percentage-saturday" />
          </div>
        </div>
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
export default Home
