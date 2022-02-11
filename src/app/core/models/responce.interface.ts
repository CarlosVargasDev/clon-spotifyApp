export interface ErrResponce {
    value: string;
    msg: string;
    param?: string;
    location?: string;
}

export interface Responce {
    ok: boolean;
    errors?: ErrResponce[];
}