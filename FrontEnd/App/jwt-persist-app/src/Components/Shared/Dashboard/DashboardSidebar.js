import React, { useEffect,useState } from "react";
import { useStateAuthContext } from "../../../Contexts/ContextAuthProvider";
import { useStateContext } from "../../../Contexts/ContextProvider";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { FcStumbleupon } from "react-icons/fc";
import { MdOutlineCancel } from "react-icons/md";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import { AdminLinks, CustomerLinks} from "../../../Resources/Resources";
import useLogout from "../../../hooks/useLogout";

const DashboardSidebar = () => {

  const { activeMenu,setActiveMenu,screenSize,currentColor} = useStateContext();
  const navigate = useNavigate();
  const logout=useLogout();
  const {auth}=useStateAuthContext();
  const [linksToRender,setLinksToRender]=useState([]);
  const userRole = auth.roles ? auth.roles.find(role => role === 'admin'||role==='customer') : null;

  //console.log('User role in DashboardSidebar '+userRole);

  
 
  const handleCloseSideBar = () => {
   // console.log('User role in DashboardSidebar'+userRole);
    if (activeMenu && screenSize <= 900) {
      setActiveMenu(false);
    }
  };

  const handleMenuToggle = () => {
    setActiveMenu((prevActiveMenu) => !prevActiveMenu);
  };

  
  
  const handleLogout = async() => {
    await logout();
    navigate("/")
  };
  

  const activeLink =
    "flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg  text-white  text-md m-2";
  const normalLink =
    "flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-md text-gray-700 dark:text-gray-200 dark:hover:text-black hover:bg-light-gray m-2";


  useEffect(()=>{
    if (userRole === "admin") {
      setLinksToRender(AdminLinks);
    } else if (userRole === "customer") {
      setLinksToRender(CustomerLinks);
    }
  },[userRole])

  // Determine which links to render based on the user's role
 

  return (
    <div className="ml-3 h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10">
      {activeMenu && (
        <>
          <div className="flex justify-between items-center">
            <Link
              to="/dashboard"
              onClick={handleCloseSideBar}
              className="items-center gap-3 ml-3 mt-4 flex text-xl font-extrabold tracking-tight dark:text-white text-slate-900"
            >
              <FcStumbleupon /> <span>JWT-PERSISTENCE</span>
            </Link>

            <TooltipComponent content="Close" position="BottomCenter">
              <button
                type="button"
                onClick={handleMenuToggle}
                className="text-xl rounded-full p-3 hover:bg-light-gray mt-4 hidden"
              >
                <MdOutlineCancel />
              </button>
            </TooltipComponent>
          </div>

          <div className="mt-10">
            {linksToRender.map((item) => (
              <div key={item.title}>
                <p className="text-gray-400 dark:text-gray-400 m-3 mt-4 uppercase">
                  {item.title}
                </p>
                {item.links.map((link) => (
                  <NavLink
                    to={`/dashboard/${link.path}`}
                    key={link.path}
                    onClick={handleCloseSideBar}
                    style={({ isActive }) => ({
                      backgroundColor: isActive ? currentColor : "",
                    })}
                    className={({ isActive }) =>
                      isActive ? activeLink : normalLink
                    }
                  >
                    {link.icon}
                    <span className="capitalize">{link.name}</span>
                  </NavLink>
                ))}
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-8">
            <button
              onClick={handleLogout}
              className="px-4 py-2 bg-black text-white rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-opacity-75">
              Logout
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default DashboardSidebar;
