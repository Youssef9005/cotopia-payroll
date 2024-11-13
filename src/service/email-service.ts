import emailjs from "emailjs-com";

export const sendEmailToDeveloper = async (
  subject: string,
  message: string,
  fromName: string,
  fromEmail: string
) => {
  try {
    await emailjs.send(
      "service_d3ow91u",
      "template_w2liyxc",
      {
        to_name: "Youssef Sameh",
        to_email: "youssefsamehdev@gmail.com",
        from_name: fromName,
        from_email: fromEmail,
        subject: subject,
        message: message,
      },
      "AB-yw9vj-twR9x0bF"
    );
  } catch (error) {
    console.error("Error in sending email to developer:", error);
    throw new Error("Error in sending email to developer");
  }
};

export const sendEmailToUser = async (
  userName: string,
  userEmail: string,
  message: string
) => {
  try {
    await emailjs.send(
      "service_d3ow91u",
      "template_cq1h4oj",
      {
        to_name: userName,
        to_email: userEmail,
        message: message,
        subject: "We have received your issue.",
      },
      "AB-yw9vj-twR9x0bF"
    );
  } catch (error) {
    console.error("Error in sending email to user:", error);
    throw new Error("Error in sending email to user");
  }
};