import { useEffect, useState } from "react";

export const useForm = (formInitial: any, initData: any = null) => {
    const [form, setForm] = useState<any>(formInitial);
    const [isValidForm, setIsValidForm] = useState<any>(false);

    const setInitialData = () => {
        if (initData !== null && typeof initData !== 'undefined') {
            let intiForm = { ...formInitial };

            for (var [key, value] of Object.entries(initData)) {
                intiForm[key].value = value;
            }

            setForm(intiForm);
            validForm(intiForm);
        }
    };

    useEffect(() => {
        setInitialData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const handleInputValue = (event: any) => {
        const { name, value } = event.target;
        let { msg: error } = form[name].validator(value);

        const setNewForm = (newForm: any) => {
            setForm(newForm);
            validForm(newForm);
        }

        setNewForm({
            ...form,
            [name]: {
                ...form[name],
                error,
                value
            }
        });
    };

    const validForm = (newForm: any) => {
        let isFormValid = true;
        let currentForm: any;
        if (newForm) {
            for (currentForm of Object.entries(newForm)) {
                isFormValid = currentForm[1].error === null;

                isFormValid = currentForm[1].required ? isFormValid && currentForm[1].value !== "" : isFormValid;

                if (!isFormValid)
                    break;
            }
        } else { 
            isFormValid = false;
        }

        setIsValidForm(isFormValid);
    }

    return {
        form,
        handleInputValue,
        isValidForm
    };
};