import toast, { Toaster } from 'react-hot-toast';

export const useToast = () => {
    const basicAlert = (msg) => {
        toast(msg);
    };
    const successAlert = (msg) => {
        toast.success(msg);
    };
    const errorAlert = (msg) => {
        toast.error(msg);
    };
    const warningAlert = (msg) => {
        toast(msg, {
            icon: '⚠️',
        });
    };

    return {
        basicAlert,
        successAlert,
        errorAlert,
        warningAlert
    };
};