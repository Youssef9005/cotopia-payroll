import emailjs from "emailjs-com";

export const sendEmailToDeveloperAdvance = async (
  amount: number,
  reason: string,
  fromName: string,
  fromEmail: string
) => {
  try {
    await emailjs.send(
      "service_d3ow91u",
      "template_advance_to_developer",
      {
        to_name: "Youssef Sameh",
        to_email: "youssefsamehdev@gmail.com",
        from_name: fromName,
        from_email: fromEmail,
        subject: `Advance Request: ${amount}`,
        message: `User ${fromName} has requested an advance of ${amount} for the following reason: ${reason}`,
      },
      "AB-yw9vj-twR9x0bF"
    );
  } catch (error: unknown) {
    if (error instanceof Error) {
      throw new Error(`Error in sending email to developer: ${error.message}`);
    } else {
      throw new Error("Unknown error in sending email to developer");
    }
  }
};

export const sendEmailToUserAdvance = async (
  userName: string,
  userEmail: string,
  amount: number,
  reason: string
) => {
  try {
    await emailjs.send(
      "service_d3ow91u",
      "template_advance_to_user",
      {
        to_name: userName,
        to_email: userEmail,
        subject: "Your advance request has been received.",
        message: `Hello ${userName}, your request for an advance of ${amount} has been received for the reason: ${reason}.`,
      },
      "AB-yw9vj-twR9x0bF"
    );
  } catch (error: unknown) {
    if (error instanceof Error) {
      throw new Error(`Error in sending email to user: ${error.message}`);
    } else {
      throw new Error("Unknown error in sending email to user");
    }
  }
};