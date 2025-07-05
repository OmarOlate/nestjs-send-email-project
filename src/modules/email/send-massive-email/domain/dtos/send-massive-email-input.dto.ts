export type SendMassiveEmailInputDto = Readonly<{
    from: string;
    to?: string[];
    bcc?: string[];
    subject: string;
    html: string;
    text?: string;
}>