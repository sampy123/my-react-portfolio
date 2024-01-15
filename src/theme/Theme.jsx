import Modal from "../components/modal"
import BackgroundColor from "./BackgroundColor"
import { primaryColors, backgroundColors } from "./data"
import PrimaryColor from "./PrimaryColor"
import './Theme.css'

const Theme = () => {
  return (
    <Modal className="theme__modal">
        <h3>Customize your Theme</h3>
        <small>Change the primary and background color to your preference</small>
        <div className="theme__primary-wrapper">
            <h5>Primary Color</h5>
            <div className="theme__primary-colors">
            {
                primaryColors.map(pColor => <PrimaryColor key={pColor.className} className={pColor.className}/>)
            }
            </div>
        </div>
        <div className="theme__background-wrapper">
            <h5>Background Color</h5>
            <div className="theme__background-colors">
                {
                    backgroundColors.map(bgColor => <BackgroundColor key={bgColor.className} className={bgColor.className}/>)
                }
            </div>
        </div>
    </Modal>
  )
}

export default Theme