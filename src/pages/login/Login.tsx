import { Grid } from "@mui/material";
import React from "react";
import {
  LoginFormSection,
  LoginPageContainer,
  LogoImage,
  LogoSection,
  LogoText,
} from "../../styles/LoginPage.style";
import { ReactComponent as CompanyLogo } from "../../assets/logos/DummyLogo.svg";
import LoginForm from "../../components/loginComponents/LoginForm";

function Login() {
  return (
    <LoginPageContainer>
      <Grid container columns={2}>
        <Grid width={"50%"}>
          <LoginFormSection>
            <LoginForm />
          </LoginFormSection>
        </Grid>
        <Grid width={"50%"}>
          <LogoSection>
            <LogoImage>
              <CompanyLogo />
            </LogoImage>
            <LogoText>NEET</LogoText>
          </LogoSection>
        </Grid>
      </Grid>
    </LoginPageContainer>
  );
}

export default Login;
