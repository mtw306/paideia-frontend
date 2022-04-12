import { Avatar, Box, IconButton, Paper, TextField } from "@mui/material";
import * as React from "react";
import SearchIcon from "@mui/icons-material/Search";
import InputAdornment from "@mui/material/InputAdornment";
import { walletStruct } from "../../../lib/creation/Constants";
import DeleteIcon from "@mui/icons-material/Delete";

const WalletSelector: React.FC<{
  data: {
    alias: string;
    address: string;
    img: string;
  };
  set: Function;
  number: number;
}> = (props) => {
  const [focused, setFocused] = React.useState<boolean>(false);
  const [search, setSearch] = React.useState<string>("");

  return (
    <Box
      sx={{ width: "100%", mt: "1rem", position: "relative" }}
      key={props.number + "-governance-address-textfield"}
      onBlur={() => setFocused(false)}
    >
      <TextField
        label="Wallet Address"
        sx={{ width: "100%" }}
        placeholder={
          props.data.alias === "" && "Search by name or wallet address"
        }
        helperText="Search by name or wallet address"
        onFocus={() => setFocused(true)}
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        FormHelperTextProps={{
          sx: {
            display: focused || props.data.alias !== "" ? "none" : "inherit",
          },
        }}
        InputProps={{
          readOnly: props.data.alias !== "",
          startAdornment: props.data.alias !== "" && (
            <InputAdornment
              position="end"
              sx={{ mt: 1, pt: 4, pb: 4, ml: "-.2rem" }}
            >
              <Avatar
                sx={{
                  fontSize: ".75rem",
                  mr: 1,
                  width: "2rem",
                  height: "2rem",
                }}
              >
                {props.data.img}
              </Avatar>
              <Box sx={{ color: "primary.text", fontSize: ".9rem" }}>
                <Box>{props.data.alias}</Box>
                <Box
                  sx={{
                    color: "primary.lightText",
                    fontSize: ".8rem",
                    mt: "-.3rem",
                  }}
                >
                  {props.data.address}
                </Box>
              </Box>
            </InputAdornment>
          ),
          endAdornment: (
            <InputAdornment position="end">
              {props.data.alias !== "" && (
                <DeleteIcon
                  style={{
                    fill: "red",
                    marginRight: ".4rem",
                    cursor: "pointer",
                  }}
                  onClick={() => {
                    setSearch("");
                    props.set(undefined);
                  }}
                />
              )}

              {props.data.alias === "" && (
                <SearchIcon style={{ fill: "primary.text" }} />
              )}
            </InputAdornment>
          ),
        }}
      />
      {focused && props.data.alias === "" && (
        <Paper
          sx={{
            maxHeight: "15rem",
            position: "absolute",
            zIndex: 100,
            width: "100%",
            display: "flex",
            flexDirection: "column",
            overflowY: "scroll",
          }}
          onMouseDown={(e) => e.preventDefault()}
        >
          {walletStruct
            .filter(
              (i: any) => i.address.includes(search) || i.alias.includes(search)
            )
            .map((i: any) => {
              return (
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    cursor: "pointer",
                    fontSize: ".9rem",
                    zIndex: 100,
                    p: 1,
                    backgroundColor: "backgroundColor.main",
                    color: "primary.text",
                    ":hover": {
                      backgroundColor: "darkHover.main",
                      color: "darkHover.text",
                    },
                  }}
                  key={`${i.address}-wallet-card`}
                  onClick={() => {
                    setFocused(false);
                    setSearch("");
                    props.set(i);
                  }}
                >
                  <Box sx={{ mr: 1 }}>
                    <Avatar sx={{ fontSize: ".75rem" }}>{i.img}</Avatar>
                  </Box>
                  <Box>
                    {i.alias} | {i.address}
                  </Box>
                </Box>
              );
            })}
        </Paper>
      )}
    </Box>
  );
};

export default WalletSelector;
