import React from "react";
import ServerButton from "./ServerPanelScroll/ServerButton";

// const backend_url = import.meta.env.VITE_BACKEND_URL;

export default function ServersScroll() {
    return (
        <div className="px-1">
            <div>
                <ul>
                    <li>
                        <ServerButton />
                        <ServerButton />
                        <ServerButton />
                        <ServerButton />
                    </li>
                </ul>
            </div>
        </div>
    );
}
