// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import React, { useState } from "react";
import dayjs, { Dayjs } from "dayjs";
import { DatePicker } from "@mui/x-date-pickers";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { TextField, Button, Box, Grid, Typography } from "@mui/material";

import BaseModal from "../Shared/BaseModal";
import {
  INExtendModalPost,
  INSettingFormErrors,
  INSettingFormValues,
} from "../Type";

function Settings() {
  const [showButton, setShowButton] = useState<boolean>(false);

  const [formValues, setFormValues] = useState<INSettingFormValues>({
    title: "",
    email: "",
    backgroundColor: "#f44336",
    activeDate: dayjs(),
  });

  const [formErrors, setFormErrors] = useState<INSettingFormErrors>({});

  const [extendModal, setExtendModal] = useState<INExtendModalPost>({
    open: false,
    content: "",
  });

  const handleDateChange = (newValue: Dayjs | null) => {
    setFormValues({
      ...formValues,
      activeDate: newValue,
    });
    setFormErrors({
      ...formErrors,
      activeDate: "",
    });
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    !showButton && setShowButton(true);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
    setFormErrors({
      ...formErrors,
      [name]: "",
    });
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    !showButton && setShowButton(true);
  };

  const validate = (): boolean => {
    // eslint-disable-next-line prefer-const
    let errors: INSettingFormErrors = {};

    // Validate title trống và nhỏ hơn 3 ký tự
    if (!formValues.title) {
      errors.title = "Title is required";
    } else if (formValues.title.length < 3) {
      errors.title = "Title must be at least 3 characters long";
    }

    // Validate email  Trống và sại format
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formValues.email) {
      errors.email = "Email is required";
    } else if (!emailPattern.test(formValues.email)) {
      errors.email = "Invalid email format";
    }

    if (!formValues.backgroundColor) {
      errors.backgroundColor = "Background Color is required";
    }

    if (!formValues.activeDate || !dayjs(formValues.activeDate).isValid()) {
      errors.activeDate = "Active date Color is required";
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent): void => {
    e.preventDefault();
    if (validate()) {
      const activeDate = (formValues?.activeDate || dayjs()).format(
        "MM/DD/YYYY"
      );
      const data = {
        ...formValues,
        activeDate,
      };
      handleUpdateModal(true, JSON.stringify(data));
    } else {
      handleUpdateModal(true, "Please fix the validation errors!");
    }
  };

  const handleUpdateModal = (status: boolean, content: string) => {
    setExtendModal({ open: status, content });
  };

  console.log("formErrors", formErrors);

  return (
    <>
      <Box>
        <Typography variant="h6" color="#115BB2">
          Settings
        </Typography>
        <Box m={4}>
          <form onSubmit={handleSubmit}>
            <Grid container spacing={4}>
              <Grid item xs={6}>
                <Typography variant="h6" color="#115BB2">
                  Title:
                </Typography>
                <TextField
                  fullWidth
                  name="title"
                  variant="outlined"
                  value={formValues.title}
                  error={!!formErrors.title}
                  onChange={handleInputChange}
                  helperText={formErrors.title}
                />
              </Grid>
              <Grid item xs={6}>
                <Typography variant="h6" color="#115BB2">
                  Email:
                </Typography>
                <TextField
                  fullWidth
                  name="email"
                  variant="outlined"
                  value={formValues.email}
                  error={!!formErrors.email}
                  onChange={handleInputChange}
                  helperText={formErrors.email}
                />
              </Grid>

              <Grid item xs={6}>
                <Typography variant="h6" color="#115BB2">
                  Background Color:
                </Typography>
                <TextField
                  fullWidth
                  type="color"
                  variant="outlined"
                  name="backgroundColor"
                  value={formValues.backgroundColor}
                  error={!!formErrors.backgroundColor}
                  helperText={formErrors.backgroundColor}
                  sx={{
                    position: "relative",
                    height: 56,
                    backgroundColor: formValues.backgroundColor,
                    "& .MuiOutlinedInput-root": {
                      height: "100%",
                    },
                    "& .MuiOutlinedInput-input": {
                      width: 56,
                      height: 56,
                      right: 0,
                      padding: 0,
                      position: "absolute",
                    },
                  }}
                  onChange={handleInputChange}
                />
              </Grid>

              <Grid item xs={6}>
                <Typography variant="h6" color="#115BB2">
                  Active date:
                </Typography>

                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker
                    name="activeDate"
                    sx={{
                      width: "100%",
                    }}
                    onChange={handleDateChange}
                    value={formValues.activeDate}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        error={!!formErrors.activeDate}
                        helperText={formErrors.activeDate}
                      />
                    )}
                  />
                </LocalizationProvider>
              </Grid>
              <Grid item xs={12}>
                {showButton && (
                  <Button color="primary" variant="contained" type="submit">
                    Save
                  </Button>
                )}
              </Grid>
            </Grid>
          </form>
        </Box>
      </Box>
      <BaseModal
        open={extendModal.open}
        content={extendModal.content}
        onClose={() => handleUpdateModal(false, "")}
      />
    </>
  );
}

export default Settings;
