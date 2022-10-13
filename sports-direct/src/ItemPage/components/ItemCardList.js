import React from "react";
import { Stack } from "@mui/system";
import Typography from '@mui/material/Typography';
import ItemCardItem from "./ItemCardItem";

export default function ItemCardList(props) {
    return (
        <div>
        <Typography mt={2} ml={6} variant="h6">{props.category1}</Typography>
        <Stack mt={1} ml={5} mr={5} mb={5} direction="row" justifyContent="flex-start" alignItems="flex-start" spacing={8}>
            <ItemCardItem itemName={props.itemName} itemPrice={props.price}></ItemCardItem>
            <ItemCardItem itemName={props.itemName} itemPrice={props.price}></ItemCardItem>
            <ItemCardItem itemName={props.itemName} itemPrice={props.price}></ItemCardItem>
      </Stack>
      <Typography mt={2} ml={6} variant="h6">{props.category2}</Typography>
      <Stack mt={2} ml={5} mr={5} mb={5} direction="row" justifyContent="flex-start" alignItems="flex-start" spacing={8}>
        <ItemCardItem itemName={props.itemName} itemPrice={props.price}></ItemCardItem>
        <ItemCardItem itemName={props.itemName} itemPrice={props.price}></ItemCardItem>
        <ItemCardItem itemName={props.itemName} itemPrice={props.price}></ItemCardItem>
      </Stack>
      <Typography mt={2} ml={6} variant="h6">{props.category3}</Typography>
      <Stack mt={2} ml={5} mr={5} mb={5} direction="row" justifyContent="flex-start" alignItems="flex-start" spacing={8}>
        <ItemCardItem itemName={props.itemName} itemPrice={props.price}></ItemCardItem>
        <ItemCardItem itemName={props.itemName} itemPrice={props.price}></ItemCardItem>
        <ItemCardItem itemName={props.itemName} itemPrice={props.price}></ItemCardItem>
      </Stack>
      </div>
    );
  }