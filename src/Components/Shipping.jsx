/* eslint-disable react/prop-types */
import {
  Button,
  Container,
  Grid,
  Typography,
  TextField,
  Box,
} from "@mui/material";
import { useState } from "react";
import { useUsersContext } from "../Providers/UserProvider";

const INITIAL_FORM_STATE = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  addressLine1: "",
  city: "",
  state: "",
  country: "",
  zipCode: "",
};

export const Shipping = ({ handleNext }) => {
  const [formValues, setFormValues] = useState(INITIAL_FORM_STATE);
  const { setUser } = useUsersContext();

  const onChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  const handleNextClick = (e) => {
    e.preventDefault();
    setUser(formValues);
    handleNext();
  };

  return (
    <Grid container>
      <Grid item xs={12}>
        <Container maxWidth="md">
          <Box
            component="form"
            onSubmit={(e) => handleNextClick(e)}
            className="shipping-form"
          >
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Typography sx={{ fontSize: "1.25rem", marginBottom: "0" }}>
                  Your details
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <TextField
                  name="firstName"
                  label="First Name"
                  onChange={onChange}
                  value={formValues.firstName}
                  fullWidth
                  variant="standard"
                  required
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  name="lastName"
                  label="Last Name"
                  onChange={onChange}
                  value={formValues.lastName}
                  fullWidth
                  variant="standard"
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  name="email"
                  label="Email"
                  onChange={onChange}
                  value={formValues.email}
                  fullWidth
                  variant="standard"
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  name="phone"
                  label="Phone"
                  onChange={onChange}
                  value={formValues.phone}
                  fullWidth
                  variant="standard"
                  required
                />
              </Grid>
              <hr />
              <Grid item xs={12}>
                <Typography sx={{ fontSize: "1.25rem", marginBottom: "0" }}>
                  Address
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  name="addressLine1"
                  label="Address Line 1"
                  onChange={onChange}
                  value={formValues.addressLine1}
                  fullWidth
                  variant="standard"
                  required
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  name="city"
                  label="City"
                  onChange={onChange}
                  value={formValues.city}
                  fullWidth
                  variant="standard"
                  required
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  name="state"
                  label="State"
                  onChange={onChange}
                  value={formValues.state}
                  fullWidth
                  variant="standard"
                  required
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  name="country"
                  label="Country"
                  onChange={onChange}
                  value={formValues.country}
                  fullWidth
                  variant="standard"
                  required
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  name="zipCode"
                  label="Zip Code"
                  onChange={onChange}
                  value={formValues.zipCode}
                  fullWidth
                  variant="standard"
                  required
                />
              </Grid>

              <Grid item xs={12}>
                <Button
                  fullWidth
                  type="submit"
                  variant="contained"
                  color="primary"
                >
                  Next
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Grid>
    </Grid>
  );
};
