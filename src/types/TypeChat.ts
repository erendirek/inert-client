export interface TypeChat {
    id: string;
    author_id: string;
    channel_id: string;
    content: string;
    created_at: string;
    edited_at: string | null;
    deleted: boolean;
    username: string;
    email: string;
}

export interface TypeChatReponse {
    messages: TypeChat[];
    channel_id: string;
}
