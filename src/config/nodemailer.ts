import * as nodemailer from 'nodemailer';
import SMTPTransport from 'nodemailer/lib/smtp-transport';
import { SmtpConfig } from 'src/common';

export const createTransport = (smtpConfig: SmtpConfig ) => {
    return nodemailer.createTransport({
        host: smtpConfig.host,
        port: smtpConfig.port,
        secure: smtpConfig.secure || false,
        auth: smtpConfig.auth ? {
            user: smtpConfig.auth.user,
            pass: smtpConfig.auth.pass
        } : undefined
    } as unknown as SMTPTransport.Options) 
}