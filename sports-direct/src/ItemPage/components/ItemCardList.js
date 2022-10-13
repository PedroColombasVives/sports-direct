import React from "react";
import { Stack } from "@mui/system";
import ItemCardItem from "./ItemCardItem";

export default function ItemCardList(props) {
    return (
        <div>
        <Stack mt={5} ml={5} mr={5} mb={5} direction="row" justifyContent="flex-start" alignItems="flex-start" spacing={8}>
            <ItemCardItem></ItemCardItem>
            <ItemCardItem></ItemCardItem>
            <ItemCardItem></ItemCardItem>
      </Stack>
      <Stack mt={5} ml={5} mr={5} mb={5} direction="row" justifyContent="flex-start" alignItems="flex-start" spacing={8}>
            <ItemCardItem></ItemCardItem>
            <ItemCardItem></ItemCardItem>
            <ItemCardItem></ItemCardItem>
      </Stack>
      <Stack mt={5} ml={5} mr={5} mb={5} direction="row" justifyContent="flex-start" alignItems="flex-start" spacing={8}>
            <ItemCardItem></ItemCardItem>
            <ItemCardItem></ItemCardItem>
            <ItemCardItem></ItemCardItem>
      </Stack>
      </div>
    );
  }