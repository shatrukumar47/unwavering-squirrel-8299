import React from "react";
import { Button, Stack } from "@chakra-ui/react";
import { ArrowForwardIcon, EmailIcon } from "@chakra-ui/icons";

const Home = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        background: "white",
      }}
    >
      <div
        id="banner-1"
        style={{
          background: "white",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems:"center"
        }}
      >
        <h1 style={{color:"white"}}>Join the Health Revolution. It’s Time.</h1>
        <Button
          rightIcon={<ArrowForwardIcon color="white" />}
          colorScheme="facebook"
          variant="outline"
          size="lg"
        >
          Getting Started...
        </Button>
      </div>
      <img
        src="https://img.freepik.com/free-vector/health-insurance-abstract-concept-vector-illustration-health-insurance-contract-medical-expenses-claim-application-form-agent-consultation-sign-document-emergency-coverage-abstract-metaphor_335657-1356.jpg?w=826&t=st=1686766024~exp=1686766624~hmac=d66f07ccb23916c560fc268cb455c005ea200f558abb57e63188031d439f7c5b"
        alt=""
      />
    </div>
  );
};

export default Home;
