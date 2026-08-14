import { FilterAlt } from "@mui/icons-material";
import { Box, Divider, FormControl, IconButton, InputLabel, MenuItem, Pagination, Select, useTheme, type SelectChangeEvent } from "@mui/material";
import { useMediaQuery } from "@mui/material";
import { useState } from "react";
import ProductCard from "./ProductCard";
import FilterSection from "./FilterSection";

const Product = () => {
    const theme = useTheme();
    const isLarge = useMediaQuery(theme.breakpoints.up('lg'));
    const [sort, setSort] = useState("price_low");
    const [page , setPage] = useState(1);

    const handlePageChange = (value: number) => {
        setPage(value);
    }

    const handleSortChange = (event: SelectChangeEvent) => {
        setSort(event.target.value);
    }
    return (
        <div className="-z-10 mt-10">
            <div>
                <h1 className="text-3xl text-center font-bold text-gray-700 pb-5 px-9 uppercase space-x-2">
                    Crop Tops
                </h1>
            </div>
            <div className="lg:flex">
                <section className="filter_section hidden lg:block w-[20%]">
                    <FilterSection />
                </section>
                <div className="w-full lg-w-[80%] space-y-5">
                    <div className="flex justify-between items-center px-9 h-[40px]">
                        <div className="relative w-[50%]">
                            {
                                !isLarge && (<IconButton>
                                    <FilterAlt />
                                </IconButton>)
                            }
                            {
                                !isLarge && (<Box>
                                    <FilterSection />
                                </Box>)
                            }
                        </div>
                        <FormControl size="small" sx={{ width: "200px" }}>
                            <InputLabel id="demo-simple-select-label">Sort</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={sort}
                                label="Sort"
                                onChange={handleSortChange}
                            >
                                <MenuItem value={"price_low"}>Price: Low - High</MenuItem>
                                <MenuItem value={"price_high"}>Price: High - Low</MenuItem>
                                <MenuItem value={"name"}>Name</MenuItem>
                            </Select>
                        </FormControl>
                    </div>
                    <Divider />
                    <section className="product_section mt-7 grid sm:grid-cols-2 md:grid-cols:3 lg:grid-cols-4 gap-y-5 px-5 justify-center">
                        {[1, 1, 1, 1, 1, 1, 1, 1, 11, 1, 1, 1, 1, 1, 1].map((index) => <ProductCard key={index} />)}
                    </section>
                    <div className = "flex justify-center py-10">
                        <Pagination
                            onChange={(_, value) => handlePageChange(value)}
                            count={10}
                            variant="outlined"
                            shape="rounded"
                            color = "primary"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Product