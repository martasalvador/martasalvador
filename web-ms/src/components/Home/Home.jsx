import './Home.css'

const Home = () => {
    return (  
        <>
        <section className='firstSection'>
            <div>
                <h1 className='titles'>UX/UI Designer</h1>
            </div>
            <div>
                <img className='uxuiImage' src="https://images.unsplash.com/photo-1576153192396-180ecef2a715?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80" alt="firstImage" />
            </div>
            <div>
                <img src="" alt="secondImage" />
                <p>Text</p>
            </div>
        </section>
            
            <h1>&</h1>

        <section className='secondSection'>
            <div>
                <img src="" alt="thirdImage" />
                <p>Text</p>
            </div>
            <div>
                <h1 className='titles'>Full Stack Developer</h1>
            </div>
        </section>
        </>
    )
}
 
export default Home