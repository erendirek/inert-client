export interface TypeChannel {
    id: string;
    name: string;
    server_id: string;
    created_at: string;
}

export interface TypeChannelReponse {
    channels: TypeChannel[];
    server_id: string;
}
