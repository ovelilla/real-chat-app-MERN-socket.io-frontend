import { useState } from "react";

const useForm = (state = {}) => {
    const [values, setValues] = useState(state);
    const [errors, setErrors] = useState(
        Object.fromEntries(Object.keys(state).map((key) => [key, ""]))
    );

    const handleChange = ({ target }) => {
        const { name, value } = target;

        setValues({ ...values, [name]: value });
        setErrors({ ...errors, [name]: "" });
    };

    const setFormValue = (name, value) => {
        setValues({ ...values, [name]: value });
    };

    const setFormError = (name, value) => {
        setErrors({ ...errors, [name]: value });
    };

    const setFormValues = (newValues) => {
        setValues({ ...values, ...newValues });
    };

    const setFormErrors = (newErrors) => {
        setErrors({ ...errors, ...newErrors });
    };

    const resetForm = () => {
        setValues(state);
        setErrors(Object.fromEntries(Object.keys(state).map((key) => [key, ""])));
    };

    return {
        values,
        setValues,
        errors,
        setErrors,
        handleChange,
        setFormValue,
        setFormError,
        setFormValues,
        setFormErrors,
        resetForm,
    };
};

export default useForm;
