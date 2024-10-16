export default function Navbar() {
    return (
        <div className="flex justify-between py-8 pb-16">
                <div className="items-center justify-items-center">
                    <img src={"assets/gdsc-logo.svg"} alt="GDSC logo"/>
                </div>
            <div className="flex gap-2">
                <button className="px-0 py-3 mx-3 font-medium bg-transparent text-gdsc-grey text-gdsc-blue hover:border-transparent">About</button>
                <button className="px-0 py-3 mx-3 font-medium bg-transparent text-gdsc-grey text-gdsc-blue hover:border-transparent">Projects</button>
                <button className="px-0 py-3 mx-3 font-medium bg-transparent text-gdsc-grey text-gdsc-blue hover:border-transparent">FAQ</button>
                <button className="px-0 py-3 mx-3 mr-6 font-medium bg-transparent text-gdsc-grey text-gdsc-blue hover:border-transparent">Contact</button>
                <button className="px-5 py-3 font-medium">Join</button>
            </div>
        </div>
    );
}