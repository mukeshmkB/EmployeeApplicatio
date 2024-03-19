import {BsBatteryHalf} from 'react-icons/bs'
import {LiaSignalSolid} from 'react-icons/lia'
import {MdWifi} from 'react-icons/md'
import './index.css'

const TopStatus = () => (
  <div className="topStatusContainer">
    <p className="time-display">11:30</p>
    <div className="status-indicators-container">
      <LiaSignalSolid
        size={16}
        style={{color: '#ffffff', marginRight: '5px'}}
      />
      <MdWifi size={16} style={{color: '#ffffff', marginRight: '5px'}} />
      <BsBatteryHalf size={16} style={{color: '#ffffff', marginRight: '5px'}} />
    </div>
  </div>
)
export default TopStatus
