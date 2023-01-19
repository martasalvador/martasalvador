import NightlightIcon from '@mui/icons-material/Nightlight';

import './Navigation.css'

const Navigation = () => {
    return (
        <div className="navbar">
            <div className='navbarWrapper'>
                <div className="name">
                    {/* <img src="https://res.cloudinary.com/dcycbjbne/image/upload/v1674140861/portfolio/favicon_abc5j2.png" alt="logo" /> */}
                    <h2 style={{marginLeft: "20px"}}>Marta Salvador</h2>
                </div>
                <div className="links">
                    <a href="/about">About me</a>
                    <a href="#">UX/UI</a>
                    <a href="#">Web</a>
                </div>
                <div className="contact">
                    <a href="#">Contact</a>
                    <a href="#" className='icon'><NightlightIcon/></a>
                </div>
            </div>
        </div>
    )
}
 
export default Navigation