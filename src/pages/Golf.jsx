import HoleInOne from '../assets/HoleInOnePrize.jpg';

export default function About() {
    return (
        <div>
            <section className="hero text-center">
                <div className="max-w-4xl mx-auto">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">Golf Tournament</h1>
                <p className="text-xl text-gray-100">Hosted by the Knights of Columbus</p>
                </div>
            </section>
            <section className="py-16">
                <div className="max-w-6xl mx-auto text-center font-bold text-2xl">
                    <h2>2026 Golf Tournament</h2>
                    <p>Friday October 2, 2026</p>
                    <p>Wedgewood Golf Course</p>
                    <p>3201 Stantonsburg Rd. SE</p>
                    <p>Wilson, NC 27893</p>
                </div>
                <div className="py-4 max-w-6xl mx-auto text-center font-bold text-xl">
                    <p>$75 per person; $300 per team</p>
                    <p>Cost includes: Golf cart, lunch, beverages, & prizes</p>
                    <p>Breakfast will be served at 7:30 a.m.</p>
                    <p>Lunch will be served at 12:00 p.m.</p>
                    
                </div>
                <div className="py-4 max-w-6xl mx-auto text-center font-bold text-xl">
                    <p>Tee Times will begin at <span className="text-decoration: underline">8:00 a.m.</span> & <span className="text-decoration: underline">1:00 p.m.</span></p>
                    <p>There will be a limit of 20 teams in each period.</p>
                </div>
                <div className="grid grid-cols-2 gap-10 text-center text-xl hero divide-x-4 divide-gold max-w-6xl mx-auto py-8">
                    <section className="left-column font-bold">How to become a Sponsor
                        <h1 className="m-4 text-decoration: underline">Corporate Sponsorship</h1>
                            <div className="grid grid-cols-2 gap-4">
                            <p>Diamond $5000</p>
                            <p>Platinum $2500</p>
                            <p>Gold $1000</p>
                            <p> Silver $500</p>
                            </div>
                            
                        <h2 className="m-4 text-decoration: underline ">Individual Sponsorship</h2>
                            <div className="grid grid-cols-2 gap-4">
                            <p>Platinum $300</p>
                            <p>Gold $200</p>
                            <p className="">Silver $100</p>
                            </div>
                            
                        <h3 className="m-4 text-decoration: underline">In Memory and In Honor Signs $50</h3>
                    </section>
                    <section className="right-column font-bold">Prizes
                        <div className="grid grid-cols-2 gap-4">
                            <p>1st Place: $300</p>
                            <p>2nd Place: $200</p>
                            <p>3rd Place: $100</p>
                        </div>
                        <div className="m-4 text-decoration: underline">
                            <p className="m-4">Closest to the Pin: $50</p>
                            <p className="m-4">Hole In One Prize
                                <img src={HoleInOne} alt="Hole In One Prize" className="max-w-full h-auto mx-auto" />
                            </p>
                            <p className="m-4">Sponsored by: Lee Chrysler Dodge Jeep Ram</p>
                            
                        </div>
                    </section>
                </div>
            </section>

        </div>
    )
}