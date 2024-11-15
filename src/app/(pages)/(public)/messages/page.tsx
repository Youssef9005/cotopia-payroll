"use client";
import SectionHeader from "@/src/components/shared/section-header";
import axios from "axios";
import { useEffect, useState } from "react";

interface MessageData {
    message: string;
    date: string;
}

interface MessagesResponse {
    [key: string]: {
        [key: string]: MessageData;
    };
}

export default function Messages() {
    const [messages, setMessages] = useState<MessageData[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        async function fetchMessages() {
            setLoading(true);
            try {
                const response = await axios.get<MessagesResponse>(
                    `${process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL}/messages.json`
                );
                const data = response.data;
                const fetchedMessages = Object.values(data).flatMap(Object.values);
                setMessages(fetchedMessages);
            } catch (error) {
                setError("Error fetching messages, please try again later.");
                console.error("Error fetching messages:", error);
            } finally {
                setLoading(false);
            }
        }

        fetchMessages();
        return () => setMessages([]);
    }, []);

    return (
        <div className="w-full min-h-screen flex flex-col items-center justify-center p-5 gap-y-6">
            <SectionHeader title="All Messages" />
            {loading ? (
                <h1 className="text-base font-medium text-gray-500">Loading messages...</h1>
            ) : error ? (
                <h1 className="text-base font-medium text-red-500">{error}</h1>
            ) : messages.length > 0 ? (
                messages.map((messageData, index) => (
                    <div
                        key={index}
                        className="w-full p-5 bg-gray-300/80 dark:bg-gray-800 border border-gray-400 dark:border-gray-700 rounded-md flex items-center justify-between"
                    >
                        <h1 className="text-base font-medium">{messageData.message}</h1>
                        <p className="text-sm font-medium text-gray-800">{messageData.date}</p>
                    </div>
                ))
            ) : (
                <h1 className="text-base font-medium text-gray-500">No messages to show</h1>
            )}
        </div>
    );
}