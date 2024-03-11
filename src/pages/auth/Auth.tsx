import styled from "@emotion/styled";
import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import AuthHeader from "../../components/pageComponents/authComponents/AuthHeader";
const AuthPage = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 10px;
  height: 100vh;
  gap: 20px;
  .auth-root {
    display: flex;
    align-items: center;
    justify-content: space-between;
   
  }
  .image-root{
    flex-direction:column;
    gap:20px;
    width: 30%;
    font-size:20px;
    font-weight:600;

  }
  .form-root {
    width: 40%;
  }
  .image-logo {
  display: flex;
    align-items: center;
    justify-content: center;
    width: 350px;
    height: 350px;
    border-radius: 50%;
    overflow-hidden;
    background-color:#E16120;
  }
  .image-logo img {
    width:50%;
  }

`;
export default function Auth() {
  const location = useLocation();
  const pathElements = location.pathname
    .split("/")
    .filter((elem) => elem !== ""); // Split and filter out empty strings
  const lastPathElement = pathElements[pathElements.length - 1] || "";

  return (
    <>
      <AuthHeader lastPathElement={lastPathElement} />
      <AuthPage>
        <div className="image-root auth-root">
          <p className="image-logo">
            <img src="/yummlywhite.svg" alt="" />
          </p>
          <p>
            <p style={{ textAlign: "center" }}>
              A culinary journey of flavors and creativity with our diverse
              collection of food recipes
            </p>
          </p>
        </div>
        <div className="form-root auth-root">
          <Outlet />
        </div>
      </AuthPage>
    </>
  );
}
