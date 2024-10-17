export default function Footer() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-15 bg-footer-white py-8 md:h-56 w-full">
            <div className="flex flex-col items-center justify-center md:ml-10 mb-6 md:mb-0">
                <img className="h-[40px] mb-3" src={"assets/gdsc-logo.svg"} alt="GDSC logo"/>
                <p2 className="font-bold mb-2">Google Developer Student Clubs</p2>
                <p2>University of California, Davis</p2>
            </div>

            <div className="flex items-center justify-evenly mb-6 md:mb-0">
                <div className="flex flex-col items-center justify-center">
                    <p1 className="font-bold mb-3">Links</p1>
                    <a href="https://gdscucdavis.com/About">
                        <button className="p-0 mb-2 text-[18px] font-medium bg-transparent text-gdsc-grey hover:text-gdsc-blue hover:border-transparent hover:bg-transparent">About</button>
                    </a>
                    <a href="https://gdscucdavis.com/Apply">
                        <button className="p-0 mb-2 text-[18px] font-medium bg-transparent text-gdsc-grey hover:text-gdsc-blue hover:border-transparent hover:bg-transparent">Apply</button>
                    </a>
                    <a href="https://gdscucdavis.com/Projects">
                        <button className="p-0 mb-2 text-[18px] font-medium bg-transparent text-gdsc-grey hover:text-gdsc-blue hover:border-transparent hover:bg-transparent">Projects</button>
                    </a>
                </div>

                <div className="flex flex-col items-center justify-center">
                    <p1 className="font-bold mb-3">Students</p1>
                    <a href="https://gdscucdavis.com/FAQ">
                        <button className="p-0 mb-2 text-[18px] font-medium bg-transparent text-gdsc-grey hover:text-gdsc-blue hover:border-transparent hover:bg-transparent">FAQ</button>
                    </a>
                    <a href="https://gdscucdavis.com/Contact">
                        <button className="p-0 mb-2 text-[18px] font-medium bg-transparent text-gdsc-grey hover:text-gdsc-blue hover:border-transparent hover:bg-transparent">Contact</button>
                    </a>
                    <button className="p-0 mb-2 text-[18px] font-medium bg-transparent text-gdsc-grey hover:text-gdsc-blue hover:border-transparent hover:bg-transparent">Newsletter</button>
                </div>
            </div>

            <div className="flex items-center justify-center gap-5 md:mr-10">
                <a href="https://www.instagram.com/gdsc_ucdavis/" target="_blank">
                    <button className="bg-transparent hover:bg-transparent p-0 hover:border-transparent">
                        <img className="h-8" src={"assets/instagram.svg"} alt="Instagram logo"/>
                    </button>
                </a>
                <a href="https://www.linkedin.com/company/developer-student-club-uc-davis/mycompany/" target="_blank">
                    <button className="bg-transparent hover:bg-transparent p-0 hover:border-transparent">
                        <img className="h-8" src={"assets/linkedin.svg"} alt="Instagram logo"/>
                    </button>
                </a>
                <a href="https://www.youtube.com/@googledeveloperstudentclub4852" target="_blank">
                    <button className="bg-transparent hover:bg-transparent p-0 hover:border-transparent">
                        <img className="h-8" src={"assets/youtube.svg"} alt="Instagram logo"/>
                    </button>
                </a>
                <a href="https://discord.com/invite/xGtPE2dM" target="_blank">
                    <button className="bg-transparent hover:bg-transparent p-0 hover:border-transparent">
                        <img className="h-8" src={"assets/discord.svg"} alt="Instagram logo"/>
                    </button>
                </a>
                <a href="https://www.tiktok.com/@gdsc_ucdavis" target="_blank">
                    <button className="bg-transparent hover:bg-transparent p-0 hover:border-transparent">
                        <img className="h-8" src={"assets/tiktok.svg"} alt="Instagram logo"/>
                    </button>
                </a>
            </div>
        </div>
    );
}