import { Dispatch, ReactNode, SetStateAction } from "react";

export interface PayrollContextType {
  userData: UserDataContextType | null;
  setUserData: Dispatch<SetStateAction<UserDataContextType | null>>;
  userPayment: PaymentDataContextType[] | null;
  setUserPayment: Dispatch<SetStateAction<PaymentDataContextType[] | null>>;
  userContract: ContractDataContextType[] | null;
  setUserContract: Dispatch<SetStateAction<ContractDataContextType[] | null>>;
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
  id: number;
  isAdmin: boolean;
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

export interface ContractDataContextType {
  id: number;
  type: string;
  amount: number;
  currency: string;
  start_at: string;
  end_at: string;
  auto_renewal: number;
  renewal_count: number;
  renew_time_period_type: string;
  renew_time_period: number;
  renew_notice: number;
  user_status: string;
  contractor_status: string;
  min_hours: number;
  max_hours: number;
  payment_method: "binance";
  payment_address: string;
  payment_period: string;
  role: string;
  user_sign_status: number;
  contractor_sign_status: number;
  user_id: number;
  created_at: string;
  updated_at: string;
}
