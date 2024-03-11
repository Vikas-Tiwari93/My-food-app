import styled from "@emotion/styled";
import { Button } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
const AuthHead = styled.div`
  width: 90%;
  height: 50px;
  padding: 20px;
  display: flex;
  justify-content: end;
  position: fixed;
  span {
    height: 40px;
    display: flex;
    gap: 20px;
  }
`;

type AuthHeaderProps = {
  lastPathElement: String;
};
export default function AuthHeader({ lastPathElement }: AuthHeaderProps) {
  const navigate = useNavigate();
  return (
    <AuthHead>
      <span>
        <Button variant="text" color="primary">
          FAQ's
        </Button>

        {lastPathElement === "signup" ? (
          <Button
            variant="contained"
            color="primary"
            onClick={() => navigate("/auth/signin")}
          >
            Sign in
          </Button>
        ) : (
          <Button
            variant="contained"
            color="primary"
            onClick={() => navigate("/auth/signup")}
          >
            Sign up
          </Button>
        )}
      </span>
    </AuthHead>
  );
}
