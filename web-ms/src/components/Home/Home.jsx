import { margin } from '@mui/system'
import './Home.css'

const Home = () => {
    return (  
        <>
        <section className='firstSection'>
            <div>
                <h1 className='devTitle'>Full Stack Developer</h1>
                <img className='dev1Image' src="https://images.unsplash.com/photo-1630476387426-52c6e0b14e50?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" alt="devImage" />
            </div>
            <div className='thirdColumn'>
                <img className='devIcon' src="https://res.cloudinary.com/dcycbjbne/image/upload/v1674131496/portfolio/devicon_pbj68v.png" alt="secondImage" />
                    <p className='devText'>ReactJS · JavaScript · HTML · CSS <br /> NodeJS · MongoDB · Express</p>
                <img className='dev2Image' src="https://images.unsplash.com/photo-1573495613179-848ffd29f962?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80" alt="devImage" />
            </div>
            
        </section>
            
            <h1 className='and'>&</h1>

        <section className='secondSection'>
            <div className='imageContainer'>
                    <div className='skillsDiv'>
                        <img className='uxuiImage1' src="https://images.unsplash.com/photo-1545235617-9465d2a55698?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" alt="firstImage" />
                        <div>
                            <p className='skills'><em>Design Thinking</em></p> <hr />
                            <p className='skills'><em>Atomic Design</em></p> <hr />
                            <p className='skills'><em>Design Sprint</em></p> <hr />
                            <p className='skills'><em>High & Low Fidelity</em></p> 
                        </div>
                    </div>
                    <br />
                    <img className='uxuiImage2' src="https://images.unsplash.com/photo-1576153192396-180ecef2a715?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80" alt="firstImage" />
            </div>
            <div className='titleDiv'>
                <h1 className='uxuiTitle'>UX/UI <br/> Designer</h1>
                <div className='uxuiQuote'>
                    <img className='eyeIcon' src="https://res.cloudinary.com/dcycbjbne/image/upload/v1673534893/portfolio/eye-icon_bs5cnv.png" alt="secondImage" />
                    <p className='devText'>Figma · Zeplin · Miro · Zeroheight · Marvel</p>
                </div>
            </div>
        </section>
            
        <section className='thirdSection'>
                <h1 className='myWorkTitle'>My work</h1>
                <div className='projectsContainer'>
                    <div className='divProject'>
                        <p className='projectText'>BUBBLE HACK</p>
                        <img className="projectsImg" src="https://htmlcolorcodes.com/assets/images/colors/light-gray-color-solid-background-1920x1080.png" alt="project" href="#"/>
                    </div>
                    <div className='divProject'>
                        <p className='projectText'>HORIZONS</p>
                        <img className="projectsImg" src="https://htmlcolorcodes.com/assets/images/colors/light-gray-color-solid-background-1920x1080.png" alt="project" href="#"/>
                    </div>
                    <div className='divProject'>
                        <p className='projectText'>FRIGO</p>
                        <img className="projectsImg" src="https://htmlcolorcodes.com/assets/images/colors/light-gray-color-solid-background-1920x1080.png" alt="project" href="#"/>
                    </div>
                    <div className='divProject'>
                        <p className='projectText'>MAD PLAN</p>
                        <img className="projectsImg" src="https://htmlcolorcodes.com/assets/images/colors/light-gray-color-solid-background-1920x1080.png" alt="project" href="#"/>
                    </div>
                    <div className='divProject'>
                        <p className='projectText'>BUBBLE HACK</p>
                        <img className="projectsImg" src="https://htmlcolorcodes.com/assets/images/colors/light-gray-color-solid-background-1920x1080.png" alt="project" href="#"/>
                    </div>
                    
                </div>
        </section>
        </>
    )
}
 
export default Home