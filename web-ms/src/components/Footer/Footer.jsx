import './Footer.css'

const Footer = () => {
    return  (
        <div className="footer">
            <img className='logo' src="https://res.cloudinary.com/dcycbjbne/image/upload/v1674140861/portfolio/favicon_abc5j2.png" alt="logo" />
            <p className='footerPhrase'>Think. Design. Make it real.</p>
            <div className='ssmmIcons'>
                <a href="https://www.linkedin.com/in/martasalvadorberenguer/"><img src="https://res.cloudinary.com/dcycbjbne/image/upload/v1674140780/portfolio/icons8-linkedin-circled-50_siv9ip.png" alt="linkedin" /></a>
                <a href="https://github.com/martasalvador"><img src="https://res.cloudinary.com/dcycbjbne/image/upload/v1674140780/portfolio/icons8-github-50_wsubf7.png" alt="github" /></a>
                <a href="/contact"><img src="https://res.cloudinary.com/dcycbjbne/image/upload/v1674140780/portfolio/icons8-circled-envelope-50_xq9fey.png" alt="email" /></a>
            </div>
            <p>Handcrafted by me © 2023</p>
        </div>
    )
}
 
export default Footer