import React, { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { CiLogout } from "react-icons/ci";
import ArrowImg from "../../Images/arrow.png";
import Logo from "../../Images/regbg.png";
import { AuthContext } from "../../pages/context/AuthContext";

function SideNavBar({ data, open, setOpen, userRole }) {
    const [activeLink, setActiveLink] = useState(null);
    const { dispatch } = useContext(AuthContext);

    const handleNavLinkClick = (index) => {
        setActiveLink(index === activeLink ? null : index);
    };

    const handleLogout = () => {
        dispatch({ type: "LOGOUT" });
        localStorage.removeItem("userName");
        localStorage.removeItem("userId");
    };

    return (
        <div
            className={`${
                open ? "w-[260px]" : "w-[100px]"
            } duration-300 h-screen p-5 pt-4 bg-blue-950 relative`}
        >
            <img
                src={ArrowImg}
                alt="Toggle Sidebar"
                className={`absolute cursor-pointer rounded-full -right-3 top-3 w-7 border-2 ${
                    !open && "rotate-180"
                }`}
                onClick={() => setOpen(!open)}
            />
            <div className="flex items-center gap-x-4">
                <img
                    src={Logo}
                    alt="Logo"
                    className={`cursor-pointer mb-0 pb-0 duration-300 rounded-full ${
                        !open && "mb-7"
                    }`}
                />
            </div>
            <div className="text-white mt-4 mb-2">
                {open && <span>{userRole}</span>}
            </div>
            <div className="pt-2">
                {data.map((link, index) => (
                    <NavLink
                        key={index}
                        to={link.path}
                        exact
                        onClick={() => handleNavLinkClick(index)}
                        className={`text-black text-m flex items-center gap-x-7 cursor-pointer p-2 hover:bg-blue-300 hover:text-white border border-black rounded-md my-10 ${
                            !open && "p-4 mt-17 pl-5"
                        } ${activeLink === index ? "bg-blue-700 text-white" : "bg-blue-400"}`}
                    >
                        <span className={`${!open && "hidden"} origin-left duration-200`}>
                            {link.title}
                        </span>
                    </NavLink>
                ))}
            </div>
            <div className="flex justify-center pt-5">
                <NavLink to="/login" className="flex items-center gap-x-2">
                    <CiLogout
                        onClick={handleLogout}
                        className="text-black text-[30px] scale-150 font-bold"
                    />
                    {open && <span className="text-white">Logout</span>}
                </NavLink>
            </div>
        </div>
    );
}

export default SideNavBar;
