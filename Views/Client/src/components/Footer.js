import React from "react";
import ReactDOM from "react-dom";
import Link from "@material-ui/core/Link";

export default function Footer() {
  return (
    <div className="footer">
      <p className="text-footer">
        Copyright ©{" "}
        <Link color="inherit" href="/">
          iShoes
        </Link>{" "}
        {new Date().getFullYear()}
        {"."}
      </p>
    </div>
  );
}

