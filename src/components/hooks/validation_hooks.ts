import { useState } from 'react';

export const useValidation = () => {
    const [nameError, setNameError] = useState<string>('');
    const [validationUrl, setValidationUrl] = useState<string>('');

    const validationName = (value: string): void => {
        if (value.length < 3) {
            setNameError('Name must be at least 3 characters.');
        } else if (value.length > 100) {
            setNameError('Name must be less than or equal to 100 characters.');
        } else {
            setNameError('');
        }
    };
    const chekIsValidationURL = (url: string) => {
        if (/^https?:\/\/.*\.(jpg|jpeg|png)$/i.test(url)) {
            setValidationUrl('');
        } else {
            setValidationUrl('Invalid URL');
        }
    };
    return { validationName, chekIsValidationURL, nameError, validationUrl };
};
