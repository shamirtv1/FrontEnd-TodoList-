import { useMutation } from '@tanstack/react-query';
import { authActions } from '..';

export const useAuthSignUp = () => {

    const mutation = useMutation({
        mutationFn: authActions.authSignUn,
    })

    return {
        mutation
    }
}
