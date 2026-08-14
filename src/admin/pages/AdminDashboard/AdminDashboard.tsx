import AdminRoutes from "../../../Routes/AdminRoutes"
import AdminDrawerList from "../../components/AdminDrawerList"

const AdminDashboard = () => {
  const toggleDrawer = () => {}
  return (
    <div>
        <div className = "hidden lg:block h-full">
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