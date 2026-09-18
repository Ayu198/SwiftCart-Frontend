import { Divider, ListItemIcon, ListItemText } from "@mui/material"
import { useLocation, useNavigate } from "react-router-dom";
import { useAppDispatch } from "../State/Store";
import { logout } from "../State/authSlice";

interface menuItem {
    name: string,
    path: string,
    icon: any,
    activeIcon: any
}
interface DrawerListProp {
    menu: menuItem[],
    menu2: menuItem[],
    toggleDrawer: () => void
}

const DrawerList = ({ menu, menu2, toggleDrawer }: DrawerListProp) => {
    const dispatch = useAppDispatch();
    const location = useLocation();
    const navigate = useNavigate();
    const handleLogout= () =>{
        dispatch(logout(navigate));
    }
    return (
        <div className="h-full">
            <div className="flex flex-col h-full w-[300px] border-r border-gray-300 py-5">

                <div className="space-y-2">
                    {menu.map((item, index) => (
                        <div
                            onClick={() => navigate(item.path)}
                            className="pr-9 cursor-pointer"
                            key={index}
                        >
                            <p
                                className={`${item.path === location.pathname
                                        ? "bg-primary text-white"
                                        : "text-primary"
                                    } flex items-center px-5 py-3 rounded-r-full`}
                            >
                                <ListItemIcon>
                                    {item.path === location.pathname
                                        ? item.activeIcon
                                        : item.icon}
                                </ListItemIcon>

                                <ListItemText primary={item.name} />
                            </p>
                        </div>
                    ))}
                </div>

                <div className="mt-auto">
                    <Divider />

                    <div className="space-y-2 mt-2">
                        {menu2.map((item, index) => (
                            <div
                                onClick={
                                    () => {
                                        navigate(item.path)
                                        if(item.path == "/") handleLogout()
                                    }
                                }
                                className="pr-9 cursor-pointer"
                                key={index}
                            >
                                <p
                                    className={`${item.path === location.pathname
                                            ? "bg-primary text-white"
                                            : "text-primary"
                                        } flex items-center px-5 py-3 rounded-r-full`}
                                >
                                    <ListItemIcon>
                                        {item.path === location.pathname
                                            ? item.activeIcon
                                            : item.icon}
                                    </ListItemIcon>

                                    <ListItemText primary={item.name} />
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </div>
    )
}

export default DrawerList