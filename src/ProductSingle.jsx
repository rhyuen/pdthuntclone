import React from "react";
import styled from "styled-components";
import productData from "./productdata.json";

const Root = ({match}) => {    
    const single = productData.data.filter(pdt => pdt.name === match.params.name)[0];
    const longerDescription = (single.fullDescription) ? single.fullDescription: "No longer description was filled out.";

    return (
        <div>
            <h1>{single.name}</h1>
            <p>{single.description}</p>
            <p>{longerDescription}</p>
            <p>{single.count}</p>
            <p>{single.category}</p>
            <p>Individual product page with a name on it. for react router clicking.</p>
        </div>
    );
};

export default Root;