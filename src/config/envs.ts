import 'dotenv/config';
import {number, z} from 'zod';

export const envSchema = z.object({
    PORT: z.string().min(1, "PORT REQUIRED").transform(Number),
}).passthrough();

const envParsed = envSchema.safeParse(process.env);

if(!envParsed.success){
    console.log('Config validation error: ', envParsed.error.format());
    throw new Error("Invalid environment varables");
}

export const  envs = {
    port:  envParsed.data.PORT
}