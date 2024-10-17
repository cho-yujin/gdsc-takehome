export default function Navbar() {
    return (
        <div className="flex justify-between py-8 pb-12 pb-16">
                <div className="items-center justify-items-center">
                    <img src={"assets/gdsc-logo.svg"} alt="GDSC logo"/>
                </div>
            <div className="flex gap-2">
                <a href="https://gdscucdavis.com/About">
                    <button className="px-0 py-3 mx-3 font-medium bg-transparent text-gdsc-grey text-gdsc-blue hover:border-transparent">About</button>
                </a>
                <a href="https://gdscucdavis.com/Projects">
                    <button className="px-0 py-3 mx-3 font-medium bg-transparent text-gdsc-grey text-gdsc-blue hover:border-transparent">Projects</button>
                </a>
                <a href="https://gdscucdavis.com/FAQ">
                    <button className="px-0 py-3 mx-3 font-medium bg-transparent text-gdsc-grey text-gdsc-blue hover:border-transparent">FAQ</button>
                </a>
                <a href="https://gdscucdavis.com/Contact">
                    <button className="px-0 py-3 mx-3 font-medium bg-transparent text-gdsc-grey text-gdsc-blue hover:border-transparent">Contact</button>
                </a>
                <a href="https://gdscucdavis.com/Apply">
                    <button className="px-5 py-3 font-medium">Join</button>
                </a>
            </div>
        </div>
    );
}