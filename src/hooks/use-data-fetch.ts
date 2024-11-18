"use client";
import { useEffect, useCallback } from "react";
import { usePayroll } from "../context/payroll-context";
import { getStoredUserData, saveUserDataToSession } from "../utils/session";
import { setTokenCookie } from "../utils/cookies";
import paymentService from "../service/payment-service";
import contractsService from "../service/contract-service";

export default function useAuthFetch() {
  const { setError, setLoading, setUserData, setUserPayment, setUserContract } =
    usePayroll();
  const adminId = 6;

  const fetchData = useCallback(async () => {
    setLoading(true);
    const userData = getStoredUserData();
    
    if (!userData) {
      setLoading(false);
      return;
    }

    try {
      const isAdmin = userData.user.id === adminId;

      saveUserDataToSession(userData);
      setUserData({
        userName: userData.user.username,
        userEmail: userData.user.email,
        name: userData.user.name,
        id: userData.user.id,
        userAvatar: userData.user.avatar.url,
        isAdmin,
      });
      setTokenCookie(userData.accessToken);

      const paymentsData = await paymentService.fetchPayments(userData.accessToken);
      setUserPayment(paymentsData);

      const contractsData = await contractsService.fetchContracts(userData.accessToken);
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