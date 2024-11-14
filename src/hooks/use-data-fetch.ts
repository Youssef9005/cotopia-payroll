"use client";
import { useEffect, useCallback } from "react";
import { usePayroll } from "../context/payroll-context";
import { getStoredUserData, saveUserDataToSession } from "../utils/session";
import { setTokenCookie } from "../utils/cookies";
import authService from "../service/auth-service";
// import paymentService from "../service/payment-service";

export default function useAuthFetch() {
  const { setError, setLoading, setUserData } = usePayroll();
  const adminId = 6;

  const fetchData = useCallback(async () => {
    setLoading(true);
    try {
      const userData =
        getStoredUserData() || (await authService.loginAndGetUserData());
      if (!userData) return;

      const isAdmin = userData.id === adminId;

      saveUserDataToSession(userData);
      setUserData({
        userName: userData.username,
        userEmail: userData.email,
        name: userData.name,
        userAvatar: userData.avatar && userData.avatar.url,
        isAdmin,
      });
      setTokenCookie(userData.token);

      if (isAdmin) {
        console.log("User is an admin");
      } else {
        console.log("User is not an admin");
      }

      // const paymentsData = await paymentService.fetchPayments(userData.token);
      // sessionStorage.setItem("user-payments", JSON.stringify(paymentsData));
      // setUserPayment(paymentsData.data.data);
    } catch (error: unknown) {
      setError(error instanceof Error ? error.message : "Unexpected error");
    } finally {
      setLoading(false);
    }
  }, [setError, setLoading, setUserData, adminId]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);
}
