"use client";
import UserProfileLoader from "../components/data/fetch-data";
import { PayrollProvider } from "../context/payroll-context";

export default function Home() {
  return (
    <PayrollProvider>
      <UserProfileLoader />
    </PayrollProvider>
  );
}
