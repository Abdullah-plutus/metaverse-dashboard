import React from "react";
import { Box } from "@chakra-ui/react";
import { CDashboard, Layout } from "../../components";

export default function Dashboard() {
  return (
    <>
      <Layout pageTitle="Dashboard">
        <CDashboard />
      </Layout>
    </>
  );
}
