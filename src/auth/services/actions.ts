import { sleep } from "@/helpers";
import TodoListApi from "@/apis/todoListApi";
import { AuthTokens } from "@/interfaces/auth-token.interface";
import { AuthUser } from "@/interfaces/auth-user.interface";



export const authSigIn = async (objeto: { email: string, password: string  }): Promise<AuthTokens> => {
    
    await sleep(2);

    const { data } = await TodoListApi.post<AuthTokens>('/auth/signin', objeto);
    
    return data
}


export const getUserInfo = async (): Promise<AuthUser> => {

    const { data } = await TodoListApi.get<AuthUser>('/auth/whoami');
    
    return data
}