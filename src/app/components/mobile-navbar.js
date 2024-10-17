"use client";
import { useState } from "react";

export default function MobileNavbar() {
    const [isOpen, setIsOpen] = useState(false);
    const toggleDropdown = () => {
        setIsOpen(!isOpen);
      };

    return(
        <div className="flex justify-between py-8 pb-12 pb-16">
            <div className="items-center justify-items-center">
                <img src={"assets/gdsc-logo.svg"} alt="GDSC logo"/>
            </div>

            <div className="items-center justify-items-center">
                <div onClick={toggleDropdown} className="bg-transparent hover:bg-transparent p-0 hover:border-transparent">
                    {isOpen ? (
                        <>
                            <img className="w-[25px]" src={"assets/close-x.svg"} alt="Close X"/>
                            <div className="bg-footer-white p-8 absolute top-20 left-0 w-full">
                                <div className="flex flex-col gap-2 items-center">
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
                        </>
                    ) : (
                        <img className="w-[25px]" src={"assets/mobile-navbar.svg"} alt="Navbar Icon"/>
                    )
                    }
                </div>
            </div>
        </div>
    );
}