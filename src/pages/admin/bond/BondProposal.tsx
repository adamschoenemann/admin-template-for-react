import {
  Box,
  Button,
  createStyles,
  Grid,
  InputAdornment,
  makeStyles,
  MenuItem,
  TextField,
  Theme,
  Typography,
} from "@material-ui/core";
import { TextFieldProps } from "@material-ui/core/TextField";
import * as React from "react";
import "./App.css";
import "react-toastify/dist/ReactToastify.css";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      justifyContent: "center",
      alignitems: "center",
      marginBottom: theme.spacing(5),
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      display: "flex",
    },
    heading: {
      marginBottom: theme.spacing(1),
    },
    menu: {
      width: 200,
    },
    submit: {
      marginTop: theme.spacing(2),
    },
  }),
);

type CurrencyMap = {
  USD: "$";
  EUR: "€";
  BTC: "฿";
  JPY: "¥";
  DKK: "kr";
};
type Denom = CurrencyMap[keyof CurrencyMap];
type Domain = keyof CurrencyMap;

const currencyMap: CurrencyMap = {
  USD: "$",
  EUR: "€",
  BTC: "฿",
  JPY: "¥",
  DKK: "kr",
};

type Currency = { value: Domain; label: Denom };
const currencies: Currency[] = Object.entries(currencyMap).map(e => ({
  value: e[0] as Domain,
  label: e[1],
}));

const MyTextField: React.FC<TextFieldProps> = props => {
  const { InputLabelProps, label, helperText, ...fieldProps } = props;
  // const lblprops = { shrink: true, label, ...InputLabelProps };
  return (
    <>
      <Grid item sm={3} xs={12}>
        <label htmlFor={fieldProps.id}>{label}</label>
      </Grid>
      <Grid item sm={9} xs={12}>
        <TextField {...fieldProps} />
      </Grid>
    </>
  );
};

interface State {
  submitted: boolean;
  currency: Domain;
}

const BondProposal: React.FC = () => {
  const classes = useStyles();

  const [state, setState] = React.useState<State>({
    submitted: false,
    currency: currencies[0].value,
  });
  const percent = <InputAdornment position="end">%</InputAdornment>;
  const currency = (
    <InputAdornment position="end">
      {currencyMap[state.currency]}
    </InputAdornment>
  );
  const onSubmit = () => {
    setState({ ...state, submitted: true });
  };

  return (
    <div className="term_sheet">
      <Box textAlign="center">
        <Typography variant="h2" className={classes.heading}>
          Bond Proposal
        </Typography>
      </Box>
      <form noValidate autoComplete="off">
        <Grid container>
          <MyTextField
            disabled={state.submitted}
            className={classes.textField}
            id="issuer"
            label="Issuer"
            placeholder="e.g. KfW"
          />
          <MyTextField
            disabled={state.submitted}
            className={classes.textField}
            id="guarantor"
            label="Guarantor"
            placeholder="e.g. Federal Republic of Germany"
          />
          <MyTextField
            disabled={state.submitted}
            className={classes.textField}
            id="apg"
            type="number"
            label="Aggreate Principal Amount"
            helperText="The total amount of the bond"
            placeholder="1,500,000,000"
            InputProps={{ endAdornment: currency }}
          />
          <MyTextField
            disabled={state.submitted}
            className={classes.textField}
            id="denomination"
            type="number"
            label="Denomination"
            placeholder="1,000"
            helperText={'The "slice" of the bond'}
            InputProps={{ endAdornment: currency }}
          />
          <MyTextField
            disabled={state.submitted}
            className={classes.textField}
            id="maturity"
            type="date"
            label="Maturity Date"
            helperText="Select the maturity date"
          />
          <MyTextField
            disabled={state.submitted}
            className={classes.textField}
            id="interest"
            label="Redemption Amount"
            type="number"
            placeholder="100"
            InputProps={{
              endAdornment: percent,
            }}
          />
          <MyTextField
            disabled={state.submitted}
            className={classes.textField}
            id="interest"
            label="Interest Rate"
            type="number"
            placeholder="1.75"
            InputProps={{
              endAdornment: percent,
            }}
          />
          <MyTextField
            disabled={state.submitted}
            className={classes.textField}
            id="date_of_pricing"
            type="date"
            label="Date of Pricing"
          />
          <MyTextField
            disabled={state.submitted}
            className={classes.textField}
            id="closing_date"
            type="date"
            label="Closing Date"
          />
          <MyTextField
            disabled={state.submitted}
            className={classes.textField}
            id="interest_payment_dates"
            label="Interest Payment Dates"
            placeholder="April 15 and October 15 in each year"
          />
          <MyTextField
            id="currency"
            disabled={state.submitted}
            select
            value={state.currency}
            label="Currency"
            className={classes.textField}
            onChange={evt =>
              setState({ ...state, currency: evt.target.value as Domain })
            }
            SelectProps={{
              MenuProps: {
                className: classes.menu,
              },
            }}
          >
            {currencies.map(option => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </MyTextField>
          <MyTextField
            disabled={state.submitted}
            className={classes.textField}
            id="issue_price"
            label="Price to Public/Issue Price"
            type="number"
            placeholder="99.743"
            InputProps={{
              endAdornment: percent,
            }}
          />
          <MyTextField
            disabled={state.submitted}
            className={classes.textField}
            id="underwriting_comissions"
            label="Underwriting Commissions"
            type="number"
            placeholder="0.125"
            InputProps={{
              endAdornment: percent,
            }}
          />
          <MyTextField
            disabled={state.submitted}
            className={classes.textField}
            id="proceeds_to_issuer"
            label="Proceeds to Issuer"
            type="number"
            placeholder="99.618"
            InputProps={{
              endAdornment: percent,
            }}
          />
          <MyTextField
            disabled={state.submitted}
            className={classes.textField}
            id="format"
            label="Format"
            placeholder="SEC-registered global notes"
          />
          <MyTextField
            disabled={state.submitted}
            className={classes.textField}
            id="listing"
            label="Listing"
            placeholder="Luxembourg Stock Exchange (regulated market)"
          />
          <MyTextField
            disabled={state.submitted}
            className={classes.textField}
            id="bussiness_day"
            label="Business Day"
            placeholder="New York"
          />
          <MyTextField
            disabled={state.submitted}
            className={classes.textField}
            id="bussiness_day_convention"
            label="Business Day Convention"
            placeholder="Following, unadjusted"
          />
          <MyTextField
            disabled={state.submitted}
            className={classes.textField}
            id="day_count_fraction"
            label="Day Count Fraction"
            placeholder="30/360"
          />
          <MyTextField
            disabled={state.submitted}
            className={classes.textField}
            id="jurisdiction"
            label="Governing Law/Jurisdiction"
            placeholder="German law; District Court Frankfurt am Main"
          />
          <MyTextField
            disabled={state.submitted}
            className={classes.textField}
            id="gross_up"
            label="Gross-Up"
            placeholder="No gross-up if tax deduction or withholding is imposed"
          />
          <MyTextField
            disabled={state.submitted}
            className={classes.textField}
            id="cross_default"
            label="Cross-Default"
            placeholder="none"
          />
          <MyTextField
            disabled={state.submitted}
            className={classes.textField}
            id="clearing_system"
            label="Clearing System"
            placeholder="DTC (deliverable through CBL and Euroclear"
          />
          <MyTextField
            disabled={state.submitted}
            className={classes.textField}
            id="isin"
            label="ISIN"
            placeholder="US500769GF56"
          />
          <MyTextField
            disabled={state.submitted}
            className={classes.textField}
            id="cusip"
            label="CUSIP"
            placeholder="500769GF5"
          />
          <div>
            <Button
              className={classes.submit}
              onClick={onSubmit}
              variant="contained"
              color="primary"
            >
              Submit Term Sheet
            </Button>
          </div>
        </Grid>
      </form>
    </div>
  );
};

export default BondProposal;
