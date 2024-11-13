import { Dispatch, ReactNode, SetStateAction } from "react";

export interface PayrollContextType {
  userData: UserDataContextType | null;
  setUserData: Dispatch<SetStateAction<UserDataContextType | null>>;
  userPayment: PaymentDataContextType[] | null;
  setUserPayment: Dispatch<SetStateAction<PaymentDataContextType[] | null>>;
  loading: boolean;
  setLoading: Dispatch<SetStateAction<boolean>>;
  error: string | null;
  setError: Dispatch<SetStateAction<string | null>>;
}

export interface PayrollProviderProps {
  children: ReactNode;
}

export interface UserDataContextType {
  userName: string;
  userEmail: string;
  name: string;
  userAvatar: string;
}

export interface PaymentDataContextType {
  amount: number;
  bonus: number;
  contract_id: number;
  created_at: string;
  id: number;
  round: number;
  status: string;
  total_hours: number;
  type: string;
  updated_at: string;
  user_id: number;
}