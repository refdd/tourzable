import React from "react";
import { useFormContext, Controller } from "react-hook-form";
import { Input, TextField, Grid } from "@mui/material";

function CustomTextField({
  name,
  label,
  required,
  type,
  textErroe,
  erroStatus,
}) {
  const { control } = useFormContext();
  const isError = false;

  return (
    <Grid item xs={12} sm={6}>
      <Controller
        name={name}
        control={control}
        defaultValue=""
        render={({ field }) => (
          <TextField
            error={erroStatus}
            helperText={textErroe}
            type={type}
            {...field}
            label={label}
            fullWidth
            required={required}
            variant="standard"
            id="outlined-required"
          />
        )}
      />
    </Grid>
  );
}

export default CustomTextField;
