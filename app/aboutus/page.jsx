import Image from "next/image"

const AboutUs = () => {
    return (
        <>
            <div className="container">
                <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)' }}>
                    <div className="hero-overlay bg-opacity-60"></div>
                    <div className="hero-content text-center text-neutral-content">
                        <div className="max-w-md">
                            <h1 className="mb-5 text-5xl font-bold">Racine14 Tech</h1>
                            <p className="mb-5">We are here to make you happy...</p>
                            <button className="btn btn-primary">Our Mission</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <Image width={520} height={350} src="/cybersecurity-lock-768x446.jpg" className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-5xl font-bold">Box Office News!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
            <h3>About us</h3>

            <ul>
                <li>Who We Are: Leaders in Cybersecurity, Education, and Data Analysis</li>
                <li>About Our Company: Safeguarding, Teaching, Consulting, Analyzing</li>
                <li>Discover Our Mission: Securing, Educating, Consulting, Analyzing</li>
                <li>Learn About Us: Protecting, Instructing, Consulting, Analyzing</li>
                <li>Our Purpose: Fostering Cybersecurity, Education, and Data Insight</li>
                <li>Meet Our Team: Experts in Cybersecurity, Teaching, Consulting, Data Analysis</li>
                <li>About [Company Name]: Champions of Digital Security, Education, and Analytics</li>
                <li>Our Vision: Leading the Way in Cybersecurity, Education, and Data Solutions</li>
                <li>About Our Company: Empowering Clients through Cybersecurity, Education, and Data Expertise</li>
            </ul>
        </>
    )
}

export default AboutUs