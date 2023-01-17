import './Home.css'

const Home = () => {
    return (  
        <>
        <section className='firstSection'>
            <div>
                <h1 className='devTitle'>Full Stack</h1>
                <h1 className='devTitle'>Developer</h1>
            </div>
            <div>
                <img className='devImage' src="https://images.unsplash.com/photo-1618477388954-7852f32655ec?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80" alt="firstImage" />
            </div>
            
        </section>
            
            <h1>&</h1>

        <section className='secondSection'>
            <div className='imageContainer'>
                    <img className='uxuiImage1' src="https://images.unsplash.com/photo-1618477388954-7852f32655ec?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80" alt="firstImage" />
                    <br />
                    <img className='uxuiImage2' src="https://images.unsplash.com/photo-1618477388954-7852f32655ec?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80" alt="firstImage" />
                <p>Text</p>
            </div>
            <div>
                <h1 className='uxuiTitle'>UX/UI Designer</h1>
                <div className='thirdcolumn'>
                    <img className='eyeIcon' src="https://res.cloudinary.com/dcycbjbne/image/upload/v1673534893/portfolio/eye-icon_bs5cnv.png" alt="secondImage" />
                    <p className='designText'><em>Design Thinking</em></p> 
                    <p className='designText'><em>Atomic Design</em></p> 
                    <p className='designText'><em>Design Sprint</em></p> 
                    <p className='designText'><em>High & Low Fidelity</em></p> 
                    
                    <hr className='hr' />
                </div>
            </div>
        </section>
        </>
    )
}
 
export default Home