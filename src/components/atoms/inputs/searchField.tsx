import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
// import useMediaQuery from "@mui/material/useMediaQuery";
import { Box, CircularProgress, SxProps, Typography } from "@mui/material";
import styled from "@emotion/styled";

import { Link } from "react-router-dom";
import React, { useState } from "react";
import useClickOutside from "../../../hooks/useClickOutside";
interface SearchType {
  placeholder?: string;
  sx?:SxProps; 
  padding?: string 
}


export const PaperBox = styled(Paper)({
	display:"flex",
    justifyContent:"center",
    alignItems:"center"
});


export default function SearchField({
  placeholder = "Search content..",
  sx,
  padding="0"
}: SearchType) {
  // ------ state
  const [search, setSearch] = useState("")
  // const matches = useMediaQuery("(min-width:700px)");

  // ---- For Data ------
  const data = [{id:1, username: "username"}]
  const isLoading = false


  // ------- open and close Search -------
  const [isInputFocused, setIsInputFocused] = React.useState(false);

  const inputRef = React.useRef(null); 
  const suggestionBoxRef = React.useRef(null); 

  useClickOutside(inputRef, () => setIsInputFocused(false));
  useClickOutside(suggestionBoxRef, () => setIsInputFocused(false));


  return (
    <Box sx={{ width: "100%", position: "relative", ...sx }}>
      <Paper
        component="form"
        sx={{
          p: "2px 4px",
          display: "flex",
          alignItems: "center",
          width:  "auto",
          boxShadow: "none",
          borderRadius: "5px",
          padding: padding,
          "& svg": {
            color: "#fff",
          },
          background:"#313131",
        }}
      >
        <InputBase
          sx={{
            ml: 1,
            flex: 1,
            color:"#fff",
            "input::placeholder": {
              color: "#fff",
              opacity: 1,
              fontWeight: 400,
            },
            "input": {
              height:"auto"
            }
          }}
          type="search"
          placeholder={placeholder}
          inputProps={{ "aria-label": "search google maps" }}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          ref={inputRef}
          onFocus={() => {
            setIsInputFocused(true);
          }}
        />
        <IconButton type="button" sx={{ p: "10px", color:"#fff" }} aria-label="search">
          <SearchIcon sx={{color:"#fff"}}/>
        </IconButton>
      </Paper>
      <Box
        sx={{
          boxShadow: "2px 2px 10px 0px rgba(0, 0, 0, 0.08)",
          padding: "15px",
          background: "#313131",
          position: "absolute",
          top: "60px",
          width: "100%",
          minHeight: "50px",
          maxHeight: "300px",
          borderRadius: "15px",
          overflow: "auto",
          display: isInputFocused ? "block" : "none",
          transition: "0.3s all",
          color:"#fff",
          zIndex:"1000"
        }}
        ref={suggestionBoxRef}
      >
        {isLoading && (
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <CircularProgress />
          </Box>
        )}
        {data?.map((client: {id:number, username: string}) => {
          return (
            <Box
              sx={{
                borderBottom: "0.5px solid #cfcfcf47",
                marginBottom: "5px",
                padding: "5px",
                textAlign: "left",
              }}
              key={client?.id}
            >
              <Link
                to={`clients/${client?.id}`}
                style={{ textDecoration: "none", color: "inherit" }}
                onClick={() => {
                  setIsInputFocused(false);
                }}
              >
                {client?.username == "" || client?.username == null
                  ? "-"
                  : client?.username}
              </Link>
            </Box>
          );
        })}

        {data?.length === 0 && (
          <Typography sx={{ textAlign: "left" }}>Not found</Typography>
        )}
      </Box>
    </Box>
  );
}
