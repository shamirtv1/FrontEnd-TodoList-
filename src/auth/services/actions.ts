import { sleep } from "@/helpers";
import TodoListApi from "@/apis/todoListApi";
import { AuthTokens } from "@/interfaces/auth-token.interface";
import { AuthUser } from "@/interfaces/auth-user.interface";
import { AuthSignUp } from "@/interfaces";



export const authSigIn = async (objeto: { email: string, password: string  }): Promise<AuthTokens> => {
    await sleep(2);
    const { data } = await TodoListApi.post<AuthTokens>('/auth/signin', objeto);
    return data
}

export const authSignUn = async (objeto: Partial<AuthSignUp>): Promise<AuthSignUp> => {
    await sleep(2);
    const { data } = await TodoListApi.post<AuthSignUp>('/auth/signup', objeto);
    return data
}


export const getUserInfo = async (): Promise<AuthUser> => {

    const { data } = await TodoListApi.get<AuthUser>('/auth/whoami');
    
    return data
}