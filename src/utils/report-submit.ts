import axios from "axios";
import {
  sendEmailToDeveloper,
  sendEmailToUser,
} from "@/src/service/email-service";
import { toast } from "sonner";
import { UserData } from "@/src/utils/session";

interface FormData {
  title: string;
  description: string;
}

const sendDeveloperEmail = async (
  title: string,
  description: string,
  username: string,
  email: string
) => {
  try {
    await sendEmailToDeveloper(title, description, username, email);
  } catch (err: unknown) {
    if (err instanceof Error) {
      throw new Error(`Failed to send email to developer: ${err.message}`);
    } else {
      throw new Error("Failed to send email to developer.");
    }
  }
};

const sendUserEmail = async (
  username: string,
  email: string,
  description: string
) => {
  try {
    await sendEmailToUser(username, email, description);
  } catch (err: unknown) {
    if (err instanceof Error) {
      throw new Error(`Failed to send email to user: ${err.message}`);
    } else {
      throw new Error("Failed to send email to user.");
    }
  }
};

const saveMessageToFirebase = async (
  username: string,
  formattedDate: string
) => {
  try {
    await axios.post(
      `${process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL}/messages.json`,
      {
        messages: {
          date: formattedDate,
          message: `Hello ${username}, cotopia support has received your issue.`,
        },
      }
    );
  } catch (err: unknown) {
    if (err instanceof Error) {
      throw new Error(`Failed to save message to Firebase: ${err.message}`);
    } else {
      throw new Error("Failed to save message to Firebase.");
    }
  }
};

export const handleSubmitReport = async (
  e: React.FormEvent<HTMLFormElement>,
  formData: FormData,
  userData: UserData | null,
  formattedDate: string,
  setLoading: React.Dispatch<React.SetStateAction<boolean>>,
  setError: React.Dispatch<React.SetStateAction<string | null>>
) => {
  e.preventDefault();
  if (!userData) {
    setError("User data not found in session.");
    return;
  }
  const { username, email } = userData;
  const { title, description } = formData;
  setLoading(true);
  setError(null);
  try {
    await sendDeveloperEmail(title, description, username, email);
    await sendUserEmail(username, email, description);
    await saveMessageToFirebase(username, formattedDate);

    toast.success("Issue submitted successfully!");
  } catch (err: unknown) {
    if (err instanceof Error) {
      setError(err.message);
    } else {
      setError("Unexpected error occurred");
    }
  } finally {
    setLoading(false);
  }
};