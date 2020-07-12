import React from "react";
import {
  Box,
  Card,
  CardContent,
  Button,
  FormHelperText,
  FormControl,
  InputLabel,
  Input,
} from "@material-ui/core";
import { useFormik } from "formik";
import * as Yup from "yup";
import useStyle from "./style";
const LoginComponent = () => {
  const classes = useStyle();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .required("Email is Required")
        .email("Invalid Email address"),
      password: Yup.string().required("Password is Required").min(4),
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <Box>
      <Card>
        <CardContent>
          <form
            className={classes.root}
            noValidate
            autoComplete="off"
            onSubmit={formik.handleSubmit}
          >
            <FormControl error={formik.touched.email && formik.errors.email}>
              <InputLabel htmlFor="component-error">Email</InputLabel>
              <Input
                name="email"
                type="email"
                onChange={formik.handleChange}
                value={formik.values.email}
                onBlur={formik.handleBlur}
              />
              {formik.touched.email && formik.errors.email && (
                <FormHelperText>{formik.errors.email}</FormHelperText>
              )}
            </FormControl>
            <FormControl
              error={formik.touched.password && formik.errors.password}
            >
              <InputLabel htmlFor="component-error">Password</InputLabel>
              <Input
                name="password"
                type="password"
                onChange={formik.handleChange}
                value={formik.values.password}
                onBlur={formik.handleBlur}
              />
              {formik.touched.password && formik.errors.password && (
                <FormHelperText>{formik.errors.password}</FormHelperText>
              )}
            </FormControl>
            <Button
              variant="contained"
              color="primary"
              type="submit"
              disabled={!formik.isValid}
            >
              Submit
            </Button>
          </form>
        </CardContent>
      </Card>
    </Box>
  );
};

export default LoginComponent;
