import PaymentDetails from "./payment-details";
import UserEmail from "./user-email";
import UserName from "./user-name";
import UserGreetingHeader from "./user-greeting-header";
import UserAvatar from "./user-avatar";

export default function UserProfile() {
    return (
        <main className="flex-1 h-screen p-4 flex flex-col gap-y-8">
            <UserGreetingHeader />
            <UserAvatar />
            <UserName />
            <PaymentDetails />
            <UserEmail />
        </main>
    )
}