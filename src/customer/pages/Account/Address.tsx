import UserAddressCard from "./UserAddressCard"

const Address = () => {
  return (
    <div className = "space-y-3">
        {
            [1,1,1].map((_,index) => <UserAddressCard key = {index}/>)
        }
    </div>
  )
}

export default Address