import NightlightIcon from '@mui/icons-material/Nightlight';

import './Navigation.css'

const Navigation = () => {
    return  (
        <div className="navbar">
            <div className="name">
                <h2>Marta Salvador</h2>
            </div>
            <div className="links">
                <a href="/about">About me</a>
                <a href="#">UX/UI</a>
                <a href="#">Development</a>
            </div>
            <div className="contact">
                <a href="#">Contact</a>
                <a href="#" className='icon'><NightlightIcon/></a>
            </div>
        </div>
    )
}
 
export default Navigation