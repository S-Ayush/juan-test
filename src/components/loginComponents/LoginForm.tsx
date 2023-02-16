import React, { ChangeEvent, useEffect, useState } from "react";
import {
  Form,
  Header,
  LoginDisplay,
  LoginFormHeader,
  SubHeader,
  InputDiv,
  LoginActionButtons,
  LoginError,
} from "../../styles/LoginForm.style";
import { StyledButton, StyledTextField } from "../../styles/global.style";
import { useFormik } from "formik";
import { useNavigate } from "react-router";
import RouteDefinitions from "../../router/RouteDefinition";
import LoginServices from "../../services/loginServices";

function LoginForm() {
  const [isCredentialValid, setIsCredentialValid] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  function validate(values: { [key: string]: string }) {
    const errors: { [key: string]: string } = {};
    if (!values.userName) {
      errors.userName = "Required";
    }
    if (!values.password) {
      errors.password = "Required";
    }
    return errors;
  }
  const formik = useFormik({
    initialValues: {
      userName: "",
      password: "",
    },
    validate,
    onSubmit: (values) => {
      setIsLoading(true);
      LoginServices.loginUser(values.userName, values.password)
        .then((res) => {
          console.log(res);
          setIsLoading(false);
          if (values.userName === "admin123" && values.password === "123") {
            navigate(RouteDefinitions.ROUTE_DASHBOARD);
            localStorage.setItem("user", JSON.stringify(values));
          } else {
            setIsCredentialValid(false);
          }
        })
        .catch((err) => {
          setIsLoading(false);
        });
    },
  });

  const handleChange = (e: ChangeEvent) => {
    setIsCredentialValid(true);
    formik.handleChange(e);
  };

  return (
    <LoginDisplay className={`${!isCredentialValid && "error"}`}>
      <LoginFormHeader>
        <Header>Login</Header>
        <SubHeader>Enter your credential below to login</SubHeader>
      </LoginFormHeader>
      <Form onSubmit={formik.handleSubmit}>
        <InputDiv>
          <StyledTextField
            id="outlined-basic"
            label="User Name"
            type="text"
            name="userName"
            variant="outlined"
            value={formik.values.userName}
            onChange={handleChange}
            helperText={formik.errors.userName}
            error={!formik.values.userName && !!formik.errors.userName}
          />
        </InputDiv>
        <InputDiv>
          <StyledTextField
            id="outlined-basic"
            label="Password"
            type="password"
            name="password"
            variant="outlined"
            value={formik.values.password}
            onChange={handleChange}
            helperText={formik.errors.password}
            error={!formik.values.password && !!formik.errors.password}
          />
        </InputDiv>
        <LoginActionButtons>
          <StyledButton variant="outlined" onClick={formik.handleReset}>
            Clear
          </StyledButton>
          <StyledButton variant="contained" type="submit">
            Login
          </StyledButton>
        </LoginActionButtons>
        <LoginError>{!isCredentialValid && "Invalid Credentials!"}</LoginError>
      </Form>
    </LoginDisplay>
  );
}

export default LoginForm;
