"use client";
import UserProfileLoader from "../components/data/fetch-data";
import useMessageListener from "../hooks/use-message-listener";

export default function Home() {
  useMessageListener()

  return (
    <UserProfileLoader />
  );
}