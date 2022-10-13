// DESCRIBES HOW THET LIST WILL STRUCTURE EACH OF THE CARD ITEMS.
import React from "react";
import { Stack } from "@mui/system";
import SportCardItem from "./SportCardItem";

export default function SportCardList(props) {
    return (
        <div>
        <Stack mt={5} ml={5} mr={5} mb={5} direction="row" justifyContent="flex-start" alignItems="flex-start" spacing={8}>
            <SportCardItem sport="Football"></SportCardItem>
            <SportCardItem sport="Football"></SportCardItem>
      </Stack>
      <Stack mt={5} ml={5} mr={5} mb={5} direction="row" justifyContent="flex-start" alignItems="flex-start" spacing={8}>
            <SportCardItem sport="Football"></SportCardItem>
            <SportCardItem sport="Football"></SportCardItem>
      </Stack>
      <Stack mt={5} ml={5} mr={5} mb={5} direction="row" justifyContent="flex-start" alignItems="flex-start" spacing={8}>
            <SportCardItem sport="Football"></SportCardItem>
            <SportCardItem sport="Football"></SportCardItem>
      </Stack>
      </div>
    );
  }