import React from "react";
import ItemCardList from "../components/ItemCardList";
import { Typography } from "@mui/material";

//get item categories
//get items
//get item pictures
//get item prices

export default function ItemCard(props) {
    return (
        <div>
            <Typography mt={2} ml={4} variant="h4" >You'll need...</Typography>
             <ItemCardList 
             category1="shoes" 
             category2="shirts" 
             category3="shorts"
             itemName="Name"
             price=" 0.00">
             </ItemCardList>
        </div>
    );
  }