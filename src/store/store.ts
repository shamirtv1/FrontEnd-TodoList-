import { ITask } from "@/interfaces";
import { AuthTokens } from "@/interfaces/auth-token.interface";
import { AuthUser } from "@/interfaces/auth-user.interface";
import { Store } from "@tanstack/react-store";

export const store = new Store({
    //tokens: undefined as AuthTokens | undefined,
    currentUser: undefined as AuthUser | undefined,
    isDateModalOpen: false as boolean,
    taskSelected: undefined as ITask | undefined
});