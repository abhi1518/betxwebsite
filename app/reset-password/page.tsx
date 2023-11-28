"use client";
import { useState } from "react";
import { useRouter } from 'next/navigation';

// Define the FormData type
type FormData = {
    password: string;
    conformPassword: string;
};

const ResetPasswordPage = () => {
  const { push } = useRouter();
  // Initial form data and errors
  const initialFormData: FormData = {
    password: "",
    conformPassword: ""
  };

  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [errors, setErrors] = useState<Record<keyof FormData, string>>({
    password: "",
    conformPassword: ""
  });
  // Form validation function
  const validateForm = () => {
    let valid = true;
    const newErrors: Record<keyof FormData, string> = { ...errors };

    // Validate each form field
    for (const key in formData) {
      if (formData[key as keyof FormData].trim() === "") {
        newErrors[key as keyof FormData] = `${key} is required`;
        valid = false;
      } else {
        newErrors[key as keyof FormData] = "";
      }
    }
    setErrors(newErrors);
    return valid;
  };

  // Form submission function
  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (validateForm()) {
        push('/signin');
    } else {
      console.log("Form has validation errors");
    }
  };

  return (
    <>
      <section className="relative z-10 overflow-hidden pb-16 pt-36 md:pb-20 lg:pb-28 lg:pt-[180px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div className="shadow-three mx-auto max-w-[500px] rounded bg-white px-6 py-10 dark:bg-dark sm:p-[60px]">
                <h3 className="mb-3 text-center text-2xl font-bold text-black dark:text-white sm:text-3xl">
                  Reset your account password
                </h3>
                <form onSubmit={handleSubmit}>
                  <div className="mb-8 mt-10">
                    <label
                      htmlFor="phoneNumber"
                      className="mb-3 block text-sm text-dark dark:text-white"
                    >
                      Password
                    </label>
                    <input
                      type="text"
                      name="password"
                      placeholder="Enter your OTP"
                      value={formData.password}
                      onChange={(e) =>
                        setFormData({ ...formData, password: e.target.value })
                      }
                      className="border-stroke dark:text-body-color-dark dark:shadow-two w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none"
                    />
                    {errors.password && (
                      <p className="text-sm text-red-500 mt-1">{errors.password}</p>
                    )}
                  </div>
                  <div className="mb-8 mt-10">
                    <label
                      htmlFor="phoneNumber"
                      className="mb-3 block text-sm text-dark dark:text-white"
                    >
                      Conform Password
                    </label>
                    <input
                      type="text"
                      name="userName"
                      placeholder="Enter your conform password"
                      value={formData.conformPassword}
                      onChange={(e) =>
                        setFormData({ ...formData, conformPassword: e.target.value })
                      }
                      className="border-stroke dark:text-body-color-dark dark:shadow-two w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none"
                    />
                    {errors.conformPassword && (
                      <p className="text-sm text-red-500 mt-1">{errors.conformPassword}</p>
                    )}
                  </div>
                  <div className="mb-6">
                    <button
                      type="submit"
                      className="shadow-submit dark:shadow-submit-dark flex w-full items-center justify-center rounded-sm bg-primary px-9 py-4 text-base font-medium text-white duration-300 hover:bg-primary/90"
                    >
                      Proceed
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ResetPasswordPage;
