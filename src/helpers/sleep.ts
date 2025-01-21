import { constants } from "node:http2";

export const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms * 1000));