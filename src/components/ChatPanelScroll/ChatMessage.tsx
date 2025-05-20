import React from "react";

interface ChatMessageState {
    message: string;
    author_name: string;
    created_at: string;
}

export default function ChatMessage(states: ChatMessageState) {
    const parseDate = (date_str: string): string => {
        const date = new Date(date_str);

        const day = String(date.getDate()).padStart(2, "0");
        const month = String(date.getMonth() + 1).padStart(2, "0"); // 0-indexli!
        const year = date.getFullYear();

        const hours = String(date.getHours()).padStart(2, "0");
        const minutes = String(date.getMinutes()).padStart(2, "0");

        const formatted = `${day}/${month}/${year}, ${hours}:${minutes}`;

        return formatted;
    };

    return (
        <div className="flex flex-col p-2">
            <div className="flex items-center gap-x-2">
                <p className="text-white-2 font-semibold">
                    {states.author_name}
                </p>
                <p className="text-white-2/50 text-xs font-thin">
                    {parseDate(states.created_at)}
                </p>
            </div>
            <p className="text-white-2/80 wrap-anywhere">{states.message}</p>
        </div>
    );
}
