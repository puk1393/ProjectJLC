'use client'; /*Debido a que se utiliza useState*/

import { useCallback, useState } from "react";

interface FormValues {
  name: string;
  description: string;
}

export const useAddProjectForm = () => {
  const [values, setValues] = useState<FormValues>({
    name: "",
    description: "",
  });

  const [errors, setErrors] = useState<Partial<FormValues>>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = useCallback(() => {
    const newErrors: Partial<FormValues> = {};

    if (!values.name.trim()) {
      newErrors.name = "El nombre es requerido";
    }

    if (values.description.trim().length < 5) {
      newErrors.description = "Mínimo 5 caracteres";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }, [values]);

  const handleChange = useCallback(
    (field: keyof FormValues, value: string) => {
      setValues((prev) => ({
        ...prev,
        [field]: value,
      }));
    },
    []
  );

  const handleBlur = useCallback((field: keyof FormValues) => {
    setTouched((prev) => ({
      ...prev,
      [field]: true,
    }));
  }, []);

  const handleSubmit = useCallback(async (callback: () => void) => {
    setIsSubmitting(true);

    const isValid = validate();
    if (isValid) {
      await new Promise((r) => setTimeout(r, 1000));
      callback();
      setValues({ name: "", description: "" });
      setTouched({});
      setErrors({});
    }
    setIsSubmitting(false);
  }, [validate]);

  return {
    values,
    errors,
    touched,
    isSubmitting,
    handleChange,
    handleBlur,
    handleSubmit,
  };
};