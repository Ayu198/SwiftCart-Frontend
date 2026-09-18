import { Button, Divider, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from "@mui/material"
import { colors } from "../../../data/filter/color"
import { useState } from "react"
import { prices } from "../../../data/filter/prices";
import { discounts } from "../../../data/filter/discount";
import { brands } from "../../../data/filter/brand";
import { useSearchParams } from "react-router-dom";

const FilterSection = () => {
  const [expandColor , setExpandColor] = useState(false);
  const [expandBrand , setExpandBrand] = useState(false);
  const [filterParams , setFilterParams] = useSearchParams();

  const updateFilterParams = (e:any) => {
    const name = e.target.name;
    const value = e.target.value;
    if(value) {
      filterParams.set(name , value);
    } else {
      filterParams.delete(name);
    }
    setFilterParams(filterParams);
  }
  const clearAllFilters = () => {
    filterParams.delete("color");
    filterParams.delete("price");
    filterParams.delete("discount");
    filterParams.delete("brand");
    setFilterParams(filterParams);
  }
  return (
    <div className="-z-50 space-y-5 bg-white">
      <div className="flex items-center justify-between px-9 h-[40px] lg:border-r">
        <p className="text-lg font-semibold">Filters</p>
        <Button onClick = {clearAllFilters} size="small" className="text-primary-500 hover:bg-primary-100 cursor-pointer font-semibold">
          Clear All
        </Button>
      </div>
      <Divider />
      <div className="px-9 space-y-6">
        <section>
          <FormControl>
            <FormLabel className="text-2xl font-semibold" id="color"
              sx={{
                fontSize: "16px",
                fontWeight: "bold",
                color: primary => primary.palette.text.primary,
                pb: "14px"
              }}>
              Color
            </FormLabel>
            <RadioGroup
              aria-labelledby="color"
              defaultValue=" "
              name="color"
              onChange = {updateFilterParams}
            >
              {colors.slice(0,expandColor?colors.length : 5).map((item) =>
                <FormControlLabel value={item.name.toLowerCase()} control={<Radio />}
                  label={
                    <div className="flex items-center gap-3">
                      <p>{item.name}</p>
                      <p style={{ backgroundColor: item.hex }}
                        className={`h-5 w-5 rounded-full ${item.name === "White" ? "border" : ""}`}></p>
                    </div>
                  } />
              )}
            </RadioGroup>
          </FormControl>
          <div>
            <Button
              variant="text"
              onClick={() => setExpandColor(!expandColor)}
              className="text-primary-500 hover:bg-primary-100 cursor-pointer font-semibold"
            >
              {expandColor ? "Show Less" : "Show More"}
            </Button>
          </div>
        </section>
        <Divider/>
        <section>
          <FormControl>
            <FormLabel
            sx = {{
              fontSize: "16px",
              fontWeight: "bold",
              pb: "14px",
              color: primary => primary.palette.text.primary
            }}
            className = "text-2xl font-semibold" id="price"
            >
              Price
            </FormLabel>
            <RadioGroup
            name = "price"
            onChange = {updateFilterParams}
            aria-labelledby = "price"
            defaultValue = ""
            >
              {
                prices.map((price) => (
                  <FormControlLabel
                  key = {price.name}
                  value = {`${price.min}-${price.max ?? ""}`}
                  control = {<Radio size = "small"/>}
                  label = {price.name}
                  />
                ))
              }
            </RadioGroup>
          </FormControl>
        </section>
        <Divider/>
        <section>
          <FormControl>
            <FormLabel
            sx = {{
              fontSize: "16px",
              fontWeight: "bold",
              pb: "14px",
              color: primary => primary.palette.text.primary
            }}
            className = "text-2xl font-semibold" id="discount"
            >
              Discount
            </FormLabel>
            <RadioGroup
            name = "discount"
            onChange = {updateFilterParams}
            aria-labelledby = "discount"
            defaultValue = " "
            >
              {
                discounts.map((discount) => (
                  <FormControlLabel
                  key = {discount.name}
                  value = {discount.value}
                  control = {<Radio size = "small"/>}
                  label = {discount.name}
                  />
                ))
              }
            </RadioGroup>
          </FormControl>
        </section>
        <Divider/>
        <section>
          <FormControl>
            <FormLabel
            sx = {{
              fontSize: "16px",
              fontWeight: "bold",
              pb: "14px",
              color: primary => primary.palette.text.primary
            }}
            className = "text-2xl font-semibold" id="brand"
            >
              Brand
            </FormLabel>
            <RadioGroup
            name = "brand"
            onChange = {updateFilterParams}
            aria-labelledby = "brand"
            defaultValue = " "
            >
              {
                brands.slice(0 , expandBrand?brands.length : 5).map((brand) => (
                  <FormControlLabel
                  key = {brand.name}
                  value = {brand.name}
                  control = {<Radio size = "small"/>}
                  label = {brand.name}
                  />
                ))
              }
            </RadioGroup>
          </FormControl>
          <div>
            <Button
              variant="text"
              onClick={() => setExpandBrand(!expandBrand)}
              className="text-primary-500 hover:bg-primary-100 cursor-pointer font-semibold"
            >
              {expandBrand ? "Show Less" : "Show More"}
            </Button>
          </div>
        </section>
      </div>
    </div>
  )
}

export default FilterSection