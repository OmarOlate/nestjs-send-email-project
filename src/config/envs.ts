import 'dotenv/config';
import {number, z} from 'zod';

export const envSchema = z.object({
    PORT: z.string().min(1, "PORT REQUIRED").transform(Number),
    REDIS_HOST: z.string().min(1, "REDIS_HOST is required"),
    REDIS_PORT: z.string().min(1, "REDIS_PORT is required").transform(Number),
    REDIS_PASSWORD: z.string().optional(),
}).passthrough();

const envParsed = envSchema.safeParse(process.env);

if(!envParsed.success){
    console.log('Config validation error: ', envParsed.error.format());
    throw new Error("Invalid environment varables");
}

export const  envs = {
    port:  envParsed.data.PORT,
    REDIS_HOST: envParsed.data.REDIS_HOST,
    REDIS_PORT:  envParsed.data.REDIS_PORT,
    REDIS_PASSWORD: envParsed.data.REDIS_PASSWORD
}