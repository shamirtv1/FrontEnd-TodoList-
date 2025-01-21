"use client"
import { useMutation, useQuery } from "@tanstack/react-query";
import { authActions } from "..";
import { AuthTokens } from "@/interfaces/auth-token.interface";
import { getUserInfo } from "../services/actions";
import {  removeAccessToken, removeRefreshToken, setAccessToken, setRefreshToken, thereIsToken } from "@/helpers";
import { AxiosError } from "axios";
import { redirect } from "next/navigation";

export const useAuthTokenMutation = () => {

    const mutation = useMutation({
        mutationFn: authActions.authSigIn,
        onSuccess: (data: AuthTokens) => {
            setAccessToken(data.accessToken);
            setRefreshToken(data.refreshToken);
        }
    })

    const userInfoQuery = useQuery({
        queryKey: ['auth', 'whoami'],
        queryFn: async () => {
            try {
                const data = await getUserInfo();
                // store.setState((state) => {
                //     return { ...state, currentUser: data };
                // });
                return data;
            } catch (error) {
               if ((error as AxiosError).response?.status === 401) {
                    removeAccessToken();
                    removeRefreshToken();
                    return redirect("/auth/signin");
                }
            }
        },
        staleTime: 1000 * 60 * 30,
        enabled: thereIsToken(),
    });


    return {
        mutation, userInfoQuery
    }

}