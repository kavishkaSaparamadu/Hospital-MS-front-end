import { FaRegBell } from "react-icons/fa";
import user from "../../Images/avetar.png";
import { NavLink, useLocation, useNavigate } from "react-router-dom";

function TopNavBar() {
  const userName = localStorage.getItem("userName");
  const location = useLocation();
  const navigate = useNavigate();

  let profileLink;
  if (location.pathname.includes("/Doctor/")) {
    profileLink = "/Doctor/Profile";
  } else if (location.pathname.includes("/patient/")) {
    profileLink = "/Patient/Profile";
  } else if (location.pathname.includes("/pharmacist/")) {
    profileLink = "/Pharmacist/profile";
  } else if (location.pathname.includes("/admin/")) {
    profileLink = "/Admin/profile";
  }

  let notificationLink;
  if (location.pathname.includes("/admin/")) {
    notificationLink = "/admin/notifications";
  } else if (location.pathname.includes("/patient/")) {
    notificationLink = "/patient/notifications";
  } else if (location.pathname.includes("/Doctor/")) {
    notificationLink = "/doctor/notifications";
  }

  const handleBellClick = () => {
    navigate(notificationLink);
  };

  return (
    <div className="w-full p-4 text-black bg-white sticky flex flex-row gap-3 justify-between items-center shadow-md">
      <div></div>

      <div className="flex item-center relative flex-row gap-4 ">
        {/* Add onClick event to the bell icon */}
        <FaRegBell className="mt-[6px] size-6 cursor-pointer" onClick={handleBellClick} />
        <p>{userName}</p>
        <div className="profle size-12">
          <NavLink to={profileLink}>
            <img
              src={user}
              alt="user"
              className="w-8 bg-slate-300 cursor-pointer rounded-full p-1"
            ></img>
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default TopNavBar;
