import Link from "next/link"

const Hero = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src="https://daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg" className="max-w-sm rounded-lg shadow-2xl" />
                <div>
                    <h1 className="text-5xl font-bold">Racine14 Tech solution</h1>
                    <p className="py-6">Cybersecurity and Education Innovator: Teaching, Consulting, Data Analytics</p>
                    <Link className="btn btn-primary" href="/login">Get Started</Link>
                </div>
            </div>
        </div>
    )
}

export default Hero