import { Radio } from '@mui/material'

const AddressCard = () => {
    const handleChange = (event: any) => {
        console.log(event.target.value);
    }
    return (
        <div className='p-5 border border-gray-400 rounded-md flex'>
            <div>
                <Radio
                    checked={true}
                    onChange={handleChange}
                    value=""
                    name="radio-button"
                />
            </div>
            <div className="space-y-3 pt-3">
                <h1>Swift</h1>
                <p className="w-[420px]">
                    MadanPuri, Gali No. 09, Near Community Centre, Gurugram
                </p>
                <p>
                    <strong>Mobile:</strong> 9354547924
                </p>
            </div>
        </div>
    )
}

export default AddressCard