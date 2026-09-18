import { useEffect } from "react";
import AdminRoutes from "../../../Routes/AdminRoutes"
import { useAppDispatch } from "../../../State/Store";
import AdminDrawerList from "../../components/AdminDrawerList"
import { fetchHomeCategories } from "../../../State/admin/adminSlice";

const AdminDashboard = () => {
  const dispatch = useAppDispatch();
  const toggleDrawer = () => {}
  useEffect(() => {
    dispatch(fetchHomeCategories());
  },[])
  return (
    <div>
        <div className = "hidden lg:flex h-[calc(100vh-80px)]">
          <section className = "hidden lg:block h-full">
            <AdminDrawerList toggleDrawer = {toggleDrawer}/>
          </section>
          <section className = "p-10 w-full lg:w-[80%] overflow-y-auto">
            <AdminRoutes/>
          </section>
        </div>
    </div>
  )
}

export default AdminDashboard