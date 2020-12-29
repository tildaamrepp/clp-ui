import React from "react";
import { storiesOf } from "@storybook/react";
import { makeStyles } from "@material-ui/core/styles";
import {
  TextField,
  FormControlLabel,
  Checkbox,
  FormControl,
  FormLabel,
  InputLabel,
  Select,
  MenuItem,
  Radio,
  RadioGroup,
  Switch,
} from "@material-ui/core";
import { Container } from "../Helper.stories";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
  container: {
    display: "flex",
    flexWrap: "wrap",
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));
const InputField = () => {
  const classes = useStyles();
  const [state, setState] = React.useState({
    checkedB: true,
  });
  const [value, setValue] = React.useState("female");
  const [age, setAge] = React.useState("");
  const handleChangeRadio = (event) => {
    setValue(event.target.value);
  };

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  const handleChangeAge = (event) => {
    setAge(event.target.value);
  };
  return (
    <main className={classes.content}>
      <Container title="Input fields">
        <form className={classes.root} noValidate autoComplete="off">
          <FormControl component="fieldset">
            <TextField
              id="outlined-basic"
              label="Outlined"
              variant="outlined"
            />
          </FormControl>
          <FormControl component="fieldset">
            <TextField
              id="outlined-multiline-static"
              label="Multiline"
              multiline
              rows={4}
              defaultValue="Default Value"
              variant="outlined"
            />
          </FormControl>
          <FormLabel component="legend">Gender</FormLabel>
          <FormControl component="fieldset">
            <RadioGroup
              aria-label="gender"
              name="gender1"
              value={value}
              onChange={handleChangeRadio}
            >
              <FormControlLabel
                value="female"
                control={<Radio color="primary" />}
                label="Female"
              />
              <FormControlLabel
                value="male"
                control={<Radio color="primary" />}
                label="Male"
              />
              <FormControlLabel
                value="other"
                control={<Radio color="primary" />}
                label="Other"
              />
              <FormControlLabel
                value="disabled"
                disabled
                control={<Radio color="primary" />}
                label="(Disabled option)"
              />
            </RadioGroup>
          </FormControl>
          <FormControlLabel
            control={
              <Checkbox
                checked={state.checkedB}
                onChange={handleChange}
                name="checkedB"
                color="primary"
              />
            }
            label="Primary"
          />
          <FormControlLabel
            control={
              <Switch
                checked={state.checkedB}
                onChange={handleChange}
                name="checkedB"
                color="primary"
              />
            }
            label="Primary"
          />
          <TextField
            id="datetime-local"
            label="Next appointment"
            type="datetime-local"
            variant="outlined"
            defaultValue="2017-05-24T10:30"
            className={classes.textField}
            InputLabelProps={{
              shrink: true,
            }}
          />
          <FormControl variant="outlined" className={classes.formControl}>
            <InputLabel id="demo-simple-select-outlined-label">Age</InputLabel>
            <Select
              labelId="demo-simple-select-outlined-label"
              id="demo-simple-select-outlined"
              value={age}
              onChange={handleChangeAge}
              label="Age"
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
        </form>
      </Container>
    </main>
  );
};

const storyFunction = () => {
  return (
    <React.Fragment>
      <InputField />
    </React.Fragment>
  );
};
storiesOf("UI Components", module).add("Form", storyFunction, {});
