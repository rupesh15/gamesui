import Header from '../container/header';
import BackgroundImg from '../assets/red-black.jpg';
import People from '../assets/people.jpg'
import Footer from './footer'

const homePage = () => {
    return (
        <div>
            <div>
                <Header />
            </div>
            <div className='homeContainer'>
                <div style={{ backgroundImage: `url(${BackgroundImg})` }} className="back_images">
                    <img src={People} width="500" height="250" className='people_img' />
                    <div className='about_us'>
                        <h1>Who we are ?</h1>
                        <p>We are the designer who design website</p>
                    </div>
                </div>
            </div>
            <div className='About_us'>
                <label>About Us</label>
                <p className='para'>
                    I am Rupesh who developed this website. This website is made for practise perpose. This website consist of lot's of cool stuff. Like games name, year of launch, It's rating, price and esports played. It's also consist of esports organisation and its player. So, home this page looks cool and hope you all like it. Please add suggestion if you think something need to be modified or changes. Thank you for reading this.
                </p>
            </div>
            <Footer/>
        </div>
    )
}

export default homePage;   