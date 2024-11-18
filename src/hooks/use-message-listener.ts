import { useEffect } from "react";
import { usePayroll } from "../context/payroll-context";

function useMessageListener() {
  const { setUserData } = usePayroll();

  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      if (event.origin !== "https://sameh-lite.cotopia.social") return;

      try {
        const data = JSON.parse(event.data);
        const isAdmin = data.user.id === 6;

        setUserData({
          userName: data.user.username,
          userEmail: data.user.email,
          name: data.user.name,
          id: data.user.id,
          userAvatar: data.user.avatar.url,
          isAdmin,
        });

        localStorage.setItem("user-auth", event.data);
        console.log("Received data:", data);

      } catch (error) {
        console.error("Error parsing data:", error);
      }
    };

    window.addEventListener("message", handleMessage);

    return () => {
      window.removeEventListener("message", handleMessage);
    };
  }, [setUserData]);
}

export default useMessageListener;