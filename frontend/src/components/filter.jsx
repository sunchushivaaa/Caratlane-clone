import { Box, Checkbox,} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
const Filter = () => {
    // DO NOT CHANGE THE ORDER of the category filters: ie. Analog, Digital, Chronograph in the UI
    const [serachparams, setsearchparams] = useSearchParams()
    const data = serachparams.getAll("category")
    const [filterarr, setfilterarr] = useState(data || [])

    console.log(serachparams)
    const handelChange = (e) => {
        const newarr = [...filterarr]
        if (newarr.includes(e.target.value)) {
            newarr.splice(newarr.indexOf(e.target.value), 1)
        }
        else {
            newarr.push(e.target.value)
        }
        setfilterarr(newarr)
    }

    useEffect(() => {
        const param = {
            category: filterarr
        }
        setsearchparams(param)
    }, [filterarr, serachparams])
    return (
        <Box width="100%" display={["none","none","block","block"]}>
            <h3>Filters</h3>
            <h2 >Category</h2>
            <Box data-testid="filter-category" width="100%" textAlign="left" border="1px solid red" paddingLeft="5%">
                <Box>
                    <Checkbox type="checkbox" value="Bracelet" checked={filterarr.includes("Bracelet")} onChange={handelChange} />
                    <label>Bracelet</label>
                </Box>
                <Box>
                    <Checkbox type="checkbox" value="Mangalsutra" checked={filterarr.includes("Mangalsutra")} onChange={handelChange} />
                    <label>Mangalsutra</label>
                </Box>
                <Box>
                    <Checkbox type="checkbox" value="Rings" checked={filterarr.includes("Rings")} onChange={handelChange} />
                    <label>Rings</label>
                </Box>
            </Box>
         
        </Box>
    );
};

export default Filter;
