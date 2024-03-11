import React from "react";

type CheckAuthProps = {
  children: React.ReactNode;
};
export default function CheckAuth({ children }: CheckAuthProps) {
  const authToken = localStorage.getItem("authToken") || "";
  if (!authToken) {
    window.location.replace(
      process.env.REACT_APP_AUTH_APP_BASE_URL + `/auth/signin`
    );
  }
  return <div>{children}</div>;
}
