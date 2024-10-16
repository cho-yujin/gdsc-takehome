export default function Footer() {
    return (
        <div className="grid grid-cols-3 gap-15 bg-footer-white h-56 w-full">
            <div className="flex flex-col items-center justify-center ml-10">
                <img className="h-[40px] mb-3" src={"assets/gdsc-logo.svg"} alt="GDSC logo"/>
                <p2 className="font-bold mb-2">Google Developer Student Clubs</p2>
                <p2>University of California, Davis</p2>
            </div>

            <div className="flex items-center justify-evenly">
                <div className="flex flex-col items-center justify-center">
                    <p1 className="font-bold mb-3">Links</p1>
                    <button className="p-0 mb-2 text-[18px] font-medium bg-transparent text-gdsc-grey hover:text-gdsc-blue hover:border-transparent hover:bg-transparent">About</button>
                    <button className="p-0 mb-2 text-[18px] font-medium bg-transparent text-gdsc-grey hover:text-gdsc-blue hover:border-transparent hover:bg-transparent">Apply</button>
                    <button className="p-0 mb-2 text-[18px] font-medium bg-transparent text-gdsc-grey hover:text-gdsc-blue hover:border-transparent hover:bg-transparent">Projects</button>
                </div>

                <div className="flex flex-col items-center justify-center">
                    <p1 className="font-bold mb-3">Students</p1>
                    <button className="p-0 mb-2 text-[18px] font-medium bg-transparent text-gdsc-grey hover:text-gdsc-blue hover:border-transparent hover:bg-transparent">FAQ</button>
                    <button className="p-0 mb-2 text-[18px] font-medium bg-transparent text-gdsc-grey hover:text-gdsc-blue hover:border-transparent hover:bg-transparent">Contact</button>
                    <button className="p-0 mb-2 text-[18px] font-medium bg-transparent text-gdsc-grey hover:text-gdsc-blue hover:border-transparent hover:bg-transparent">Newsletter</button>
                </div>
            </div>

            <div className="flex items-center justify-center gap-5 mr-10">
                <button className="bg-transparent hover:bg-transparent p-0 hover:border-transparent">
                    <img className="h-8" src={"assets/instagram.svg"} alt="Instagram logo"/>
                </button>
                <button className="bg-transparent hover:bg-transparent p-0 hover:border-transparent">
                    <img className="h-8" src={"assets/linkedin.svg"} alt="Instagram logo"/>
                </button>
                <button className="bg-transparent hover:bg-transparent p-0 hover:border-transparent">
                    <img className="h-8" src={"assets/youtube.svg"} alt="Instagram logo"/>
                </button>
                <button className="bg-transparent hover:bg-transparent p-0 hover:border-transparent">
                    <img className="h-8" src={"assets/discord.svg"} alt="Instagram logo"/>
                </button>
                <button className="bg-transparent hover:bg-transparent p-0 hover:border-transparent">
                    <img className="h-8" src={"assets/tiktok.svg"} alt="Instagram logo"/>
                </button>
            </div>
        </div>
    );
}