import './Home.css'

const Home = () => {
    return (  
        <>
        <section className='firstSection'>
            <div>
                <h1 className='titles'>Full Stack</h1>
                <h1 className='titles'>Developer</h1>
            </div>
            <div>
                <img className='uxuiImage' src="https://images.unsplash.com/photo-1618477388954-7852f32655ec?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80" alt="firstImage" />
            </div>
            <div className='thirdcolumn'>
                <img className='eyeIcon' src="https://res.cloudinary.com/dcycbjbne/image/upload/v1673534893/portfolio/eye-icon_bs5cnv.png" alt="secondImage" />
                <p className='text'><em>'Design is everywhere.</em></p> 
                <p><em>From the dress you’re wearing to the smartphone you’re holding.'</em></p>
                <hr className='hr' />
                </div>
        </section>
            
            <h1>&</h1>

        <section className='secondSection'>
            <div>
                <img src="" alt="thirdImage" />
                <p>Text</p>
            </div>
            <div>
                <h1 className='titles'>UX/UI Designer</h1>
            </div>
        </section>
        </>
    )
}
 
export default Home