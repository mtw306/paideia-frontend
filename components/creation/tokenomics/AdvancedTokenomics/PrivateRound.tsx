import { Box, Button, InputAdornment, TextField, AlertTitle } from "@mui/material";
import * as React from "react";
import { ITokenHolder, ITokenomics } from "../../../../lib/creation/Api";
import { IData } from "../../../../lib/utilities";
import DeleteIcon from "@mui/icons-material/Delete";
import { CapsInfo, Header, LearnMore } from "../../utilities/HeaderComponents";
import BalanceInput from "../../utilities/BalanceInput";
import PercentageInput from "../../utilities/PercentageInput";
import VestingSchedule, { IVestingSchedule } from "./VestingSchedule";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import AddIcon from "@mui/icons-material/Add";
import FileUploadIcon from "@mui/icons-material/FileUpload";
import WalletSelector from "../../governance/WalletSelector";
import Alert from "@mui/material/Alert";
import { currencyFormatter } from "../../../utilities/currency";

export interface IPrivateRoundInfo {
  distributionName: string;
  balance: number;
  percentage: number;
  tokenPrice: number;
  startDate: Date;
  endDate: Date;
  tokenHolders: ITokenHolder[];
  vesting: boolean;
  initialDistribution: number;
  emissionStartDate: number;
  emissionStartDateUnits: string;
  frequency: string;
  emissionLength: number;
  emissionLengthUnits: string;
}

const PrivateRound: React.FC<{
  data: IData<ITokenomics>;
  close: Function;
  c: number;
}> = (props) => {
  let data = props.data.data;
  let start = new Date();
  let end = new Date()
  end.setDate(end.getDate() + 30)
  const [value, setValue] = React.useState<IPrivateRoundInfo>({
    distributionName: "",
    balance: 0,
    percentage: 0,
    tokenPrice: undefined,
    startDate: start,
    endDate: end,
    tokenHolders: [],
    vesting: false,
    initialDistribution: 0,
    emissionStartDate: 0,
    emissionStartDateUnits: "weeks",
    frequency: "weekly",
    emissionLength: 0,
    emissionLengthUnits: "weeks",
  });

  React.useEffect(() => {
    /// add data to global context...
    let temp = [...data.distributions];
    temp[props.c] = { ...value };
    props.data.setData({
      ...data,
      distributions: temp,
    });
  }, [value]);

  return (
    <>
      <DeleteIcon
        sx={{
          position: "absolute",
          top: "1rem",
          right: "1rem",
          cursor: "pointer",
        }}
        color="error"
        onClick={() => props.close()}
      />

      <Box
        sx={{
          width: "100%",
          borderBottom: "1px solid",
          borderColor: "divider.main",
          mb: "1rem",
          pl: "1rem",
        }}
      >
        <Header
          title="Private Round"
          subtitle="Invite a select audience to contribute funds to your project at a specific token value."
        />
      </Box>
      <Box sx={{ width: "100%", pl: "1rem", pr: '1rem', borderBottom: '1px solid', borderColor: 'divider.main', mb: '1rem', pb: '1rem' }}>
        <CapsInfo title="General Information" />
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            width: "100%",
            mt: ".5rem",
            mb: ".5rem",
          }}
        >
          <TextField
            value={value.distributionName}
            sx={{ width: "50%", mr: ".5rem" }}
            onChange={(e: any) => {
              setValue({ ...value, distributionName: e.target.value });
            }}
            label="Distribution Name"
          />
          <BalanceInput
            total={data.tokenAmount}
            remaining={data.tokenRemaining}
            balance={value.balance}
            value={value}
            set={setValue}
          />
          <PercentageInput
            total={data.tokenAmount}
            remaining={data.tokenRemaining}
            percentage={value.percentage}
            value={value}
            set={setValue}
          />
        </Box>
      </Box>
      <Box sx={{ width: "100%", pl: "1rem", pr: '1rem' }}>
        <CapsInfo title="Configuration" />
        <TextField
          value={value.tokenPrice === undefined ? "" : value.tokenPrice}
          type="number"
          sx={{ width: "32.5%", mr: ".5rem" }}
          onChange={(e: any) => {
            setValue({ ...value, tokenPrice: parseFloat(e.target.value) });
          }}
          label="Token Price"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <Box sx={{ color: "primary.lightText" }}>USD</Box>
              </InputAdornment>
            ),
          }}
        />
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <DatePicker
            views={["day"]}
            label="Start date"
            value={value.startDate}
            InputAdornmentProps={{ position: 'start', variant: 'standard' }}
            onChange={(newValue) => {
              setValue({ ...value, startDate: newValue });
            }}
            renderInput={(params) => (
              <TextField {...params} helperText={null} sx={{ width: "32.5%", mr: '.5rem', svg: {color: 'primary.main'} }}/>
            )}
          />
          <DatePicker
            views={["day"]}
            label="End date"
            value={value.endDate}
            InputAdornmentProps={{ position: 'start', variant: 'standard' }}
            onChange={(newValue) => {
              setValue({ ...value, startDate: newValue });
            }}
            renderInput={(params) => (
              <TextField {...params} helperText={null} sx={{ width: "32.5%", svg: {color: 'primary.main'} }}/>
            )}
          />
        </LocalizationProvider>
      </Box>
      <Box sx={{ width: "100%", pl: "1rem", mt: "1rem", pr: "1rem" }}>
        <CapsInfo title="Configuration" />
        <LearnMore title="Token Holder Addresses" light />
        {value.tokenHolders.map((i: ITokenHolder, c: number) => {
          return (
            <Box
              sx={{ display: "flex", alignItems: "flex-start", height: "5rem" }}
            >
              <Box
                sx={{
                  width: "57%",
                  mr: ".5rem",
                  display: "flex",
                  alignItem: "flex-start",
                }}
              >
                <WalletSelector
                  id="tokenomics"
                  key={c + "tokenomics"}
                  data={i}
                  mt="0"
                  number={c}
                  set={(j: any) => {
                    let temp = [...value.tokenHolders];
                    if (j === undefined) {
                      temp.splice(c, 1);
                    } else {
                      temp[c] = { ...temp[c], ...j };
                    }
                    setValue({ ...value, tokenHolders: temp });
                  }}
                />
              </Box>
              <BalanceInput
                total={value.balance}
                remaining={data.tokenRemaining}
                balance={value.tokenHolders[c].balance}
                value={value.tokenHolders[c]}
                set={(newValue: any) => {
                  let temp = [...value.tokenHolders];
                  temp[c] = { ...newValue };
                  setValue({ ...value, tokenHolders: temp });
                }}
              />
              <PercentageInput
                total={value.balance}
                remaining={data.tokenRemaining}
                percentage={value.tokenHolders[c].percentage}
                value={value.tokenHolders[c]}
                set={(newValue: any) => {
                  let temp = [...value.tokenHolders];
                  temp[c] = { ...newValue };
                  setValue({ ...value, tokenHolders: temp });
                }}
              />
            </Box>
          );
        })}
        {data.tokenRemaining > 0 &&
          value.tokenHolders.map((i: any) => i.balance).indexOf(0) === -1 &&
          value.tokenHolders.map((i: any) => i.percentage).indexOf(0) ===
            -1 && (
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                mt: ".8rem",
              }}
            >
              <Button
                variant="text"
                sx={{ mr: 2 }}
                onClick={() => {
                  let temp = [...value.tokenHolders];
                  setValue({
                    ...value,

                    tokenHolders: temp.concat([
                      {
                        alias: "",
                        address: "",
                        img: "",
                        balance: 0,
                        percentage: 0,
                      },
                    ]),
                  });
                }}
              >
                Add Another <AddIcon />
              </Button>
              <Button variant="text">
                Add from file <FileUploadIcon />
              </Button>
            </Box>
          )}
      </Box>
      <VestingSchedule
        set={(data: IVestingSchedule) => setValue({ ...value, ...data })}
        value={value.vesting}
        id="private-round"
      />
      {value.tokenPrice !== undefined && value.balance !== 0 && <Alert severity="warning" color="warning" sx={{ mr: '1rem', ml: '1rem', mb: '1rem', width: '100%' }}>
          <AlertTitle sx={{ fontSize: ".9rem" }}>
            You are creating a private sale for {currencyFormatter(value.tokenPrice * value.balance)} USD
          </AlertTitle>
        </Alert>}
    </>
  );
};

export default PrivateRound;
