"use client";
import { useEffect, useCallback } from "react";
import { usePayroll } from "../context/payroll-context";
import { getStoredUserData, saveUserDataToSession } from "../utils/session";
import { setTokenCookie } from "../utils/cookies";
import authService from "../service/auth-service";
import paymentService from "../service/payment-service";
import contractsService from "../service/contract-service";

export default function useAuthFetch() {
  const { setError, setLoading, setUserData, setUserPayment, setUserContract } =
    usePayroll();
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
        id: userData.id,
        userAvatar: userData.avatar && userData.avatar.url,
        isAdmin,
      });
      setTokenCookie(userData.token);

      if (isAdmin) {
        console.log("User is an admin");
      } else {
        console.log("User is not an admin");
      }

      const paymentsData = await paymentService.fetchPayments(userData.token);
      setUserPayment(paymentsData);

      const contractsData = await contractsService.fetchContracts(userData.token);
      setUserContract(contractsData);

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
