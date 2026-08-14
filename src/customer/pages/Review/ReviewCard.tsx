import { Delete } from "@mui/icons-material"
import { Avatar, Box, Grid, IconButton, Rating } from "@mui/material"
import { red } from "@mui/material/colors"

const ReviewCard = () => {
  return (
    <div className = "flex justify-between">
        <Grid container spacing = {9}>
            <Grid size = {{xs:1}}>
                <Box>
                    <Avatar className = "text-white" sx={{width:56, height:56, bgcolor:"#9155FD"}}>
                        S
                    </Avatar>
                </Box>
            </Grid>
            <Grid size = {{xs:9}}>
                <div className = "space-y-2">
                    <div>
                        <p className = "font-semibold text-lg">
                            Swift
                        </p>
                        <p className = "opacity-70">
                            2026-07-24
                        </p>
                    </div>
                </div>
                <Rating
                readOnly
                value = {4}
                precision = {1}
                />
                <p>Value for Money, Great Product </p>
                <div>
                    <img className = "w-24 h-24 object-cover" src="https://rukminim2.flixcart.com/blobio/547/547/imr-202110/blobio-imr-202110_43dde4426b974a4c84b05914b64477a5.jpg?q=80"/>  
                </div>
            </Grid>
        </Grid>
        <div>
            <IconButton>
            <Delete sx = {{color:red[700]}}/>
        </IconButton>
        </div>
    </div>
  )
}

export default ReviewCard