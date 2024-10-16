

export default function Body() {
    return (
        <div>
            <div className="grid grid-cols-2 gap-10">
                <div className="flex flex-col justify-center max-w-[95%]">
                    <h4 className="mb-1">Build Real-World Products with the</h4>
                    <h1>UC Davis</h1>
                    <h1 className="mb-5">Product Cohort</h1>
                    <p1>This cohort focuses on collaborating with real-world startups to deliver a fully-functional product, simulating the experience of working in a professional environment.  </p1>
                    <div className="flex mt-14">
                        <button className="mr-10">Join our cohort</button>
                        <button className="bg-white text-gdsc-blue border-gdsc-blue hover:text-white hover:bg-gdsc-blue">Contact us</button>
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
                    <div>
                        <button className="bg-white text-gdsc-blue border-gdsc-blue hover:text-white hover:bg-gdsc-blue">View our projects</button>
                    </div>
                </div>
                <div className="flex w-[47%] justify-center">
                    <img className="object-contain" src={"assets/photo2.png"} alt="Illustration of circles and a diverse set of people"/>
                </div>
            </div>

            <div className="flex my-36 gap-14">
                <div className="flex flex-col w-[46%] min-w-[46%] justify-center gap-4">
                    <img className="object-contain" src={"assets/photo3.png"} alt="Illustration of circles and a diverse set of people"/>
                    <img className="object-contain" src={"assets/photo4.png"} alt="Illustration of circles and a diverse set of people"/>
                </div>
                <div>
                    <h2>Benefits of the Product Cohort</h2>
                        <div>
                            <h4>Hands-On Experience</h4>
                            <p1>This cohort gives you the chance to work in a real-world scenario with real deadlines, clients, and deliverables. By the end of the project, you’ll have a fully developed website to showcase in your portfolio.</p1>
                        </div>
                </div>
            </div>
        </div>
    );
}