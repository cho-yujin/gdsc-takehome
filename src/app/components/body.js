

export default function Body() {
    return (
        <div>
            <div className="grid grid-cols-2 gap-10">
                <div className="flex flex-col justify-center max-w-[95%]">
                    <h4 className="mb-1">Build Real-World Products with the</h4>
                    <h1 className="">UC Davis</h1>
                    <h1 className="mb-5">Product Cohort</h1>
                    <p1>This cohort focuses on collaborating with real-world startups to deliver a fully-functional product, simulating the experience of working in a professional environment.  </p1>
                    <div className="flex mt-14">
                        <a href="https://gdscucdavis.com/Apply">
                            <button className="mr-8">Join our cohort</button>
                        </a>
                        <a href="https://gdscucdavis.com/Contact">
                            <button className="bg-white text-gdsc-blue border-gdsc-blue hover:text-white hover:bg-gdsc-blue">Contact us</button>
                        </a>
                    </div>
                </div>
                <div className="items-center justify-items-center">
                    <img src={"assets/photo1.png"} alt="Group picture of GDSC members"/>
                </div>
            </div>

            <div className="flex mt-36 gap-12">
                <div className="w-[53%] flex flex-col justify-center">
                    <h2 className="mb-6">Why join the Product Cohort?</h2>
                    <h4 className="mb-5">Because we turn your skills into tangible results!</h4>
                    <p1 className="mb-7">Do you want to take your development/design skills to the next level? Are you ready to collaborate with a startup and create a product that makes an impact? The UC Davis Google Developer Student Club’s Product Cohort is the opportunity you've been waiting for.</p1>
                    <p1 className="mb-8">In this hands-on cohort, you won’t just learn—you’ll do. You will join a small, dynamic team tasked with building a functional website for an innovative startup. Together, you’ll experience the thrill and challenges of working in  a fast-paced, real-world environment.</p1>
                    <a href="https://gdscucdavis.com/Projects">
                        <button className="bg-white text-gdsc-blue border-gdsc-blue hover:text-white hover:bg-gdsc-blue">View our projects</button>
                    </a>
                </div>
                <div className="flex w-[47%] justify-center">
                    <img className="object-contain" src={"assets/photo2.png"} alt="Illustration of circles and a diverse set of people"/>
                </div>
            </div>

            <div className="flex my-36 gap-14">
                <div className="flex flex-col w-[46%] min-w-[46%] justify-center gap-6">
                    <img className="object-contain" src={"assets/photo3.png"} alt="Two GDSC members doing the GDSC hand sign"/>
                    <img className="object-contain" src={"assets/photo4.png"} alt="GDSC womens' panel"/>
                </div>
                <div className="flex flex-col justify-center">
                    <h2 className="mb-6">Benefits of the Product Cohort</h2>
                    
                    <div className="flex gap-4 items-center mb-2">
                        <img className="object-contain" src={"assets/yellow-icon.svg"} alt="Yellow GDSC icon"/>
                        <h3>Hands-On Experience</h3>
                    </div>
                    <p1>This cohort gives you the chance to work in a real-world scenario with real deadlines, clients, and deliverables. By the end of the project, you’ll have a fully developed website to showcase in your portfolio.</p1>

                    <div className="flex gap-4 items-center mt-6 mb-2">
                        <img className="object-contain" src={"assets/blue-icon.svg"} alt="Blue mentorship icon"/>
                        <h3>Mentorship That Matters</h3>
                    </div>
                    <p1>With guidance from experienced product managers who know the ins and outs of launching professional websites, you’ll navigate through the complexities of client communication and team dynamics.</p1>


                    <div className="flex gap-4 items-center mt-6 mb-2">
                        <img className="object-contain" src={"assets/green-icon.svg"} alt="Green networking icon"/>
                        <h3>A Professional Network</h3>
                    </div>
                    <p1>Working with a startup means you’re not just gaining experience—you’re building relationships. The connections you make in our cohort could open doors to internships or even startup ventures of your own.</p1>

                    <div className="flex mt-9">
                    <a href="https://gdscucdavis.com/Apply">
                            <button className="mr-8">Join our cohort</button>
                        </a>
                        <a href="https://gdscucdavis.com/Contact">
                            <button className="bg-white text-gdsc-blue border-gdsc-blue hover:text-white hover:bg-gdsc-blue">Contact us</button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}