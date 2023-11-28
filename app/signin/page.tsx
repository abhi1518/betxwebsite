"use client";
import Link from "next/link";
import { useState } from "react";
import { loginUser } from '../../app';
import { useRouter } from 'next/navigation';

// Define the FormData type
type FormData = {
  userName: string;
  password: string;
};

const SigninPage = () => {
  const { push } = useRouter();
  // Initial form data and errors
  const initialFormData: FormData = {
    userName: "",
    password: "",
  };

  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [errors, setErrors] = useState<Record<keyof FormData, string>>({
    userName: "",
    password: "",
  });

  // Checkbox state and validation
  const [isChecked, setIsChecked] = useState(false);

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

    // Validate checkbox
    // if (!isChecked) {
    //   // Your checkbox validation logic goes here
    //   // For example, set an error if the checkbox is not checked
    //   // newErrors.checkbox = "You must agree to the terms and conditions";
    //   valid = false;
    // }

    setErrors(newErrors);
    return valid;
  };

  // Form submission function
  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (validateForm()) {
      try {
        const result = await loginUser(formData.userName, formData.password);
        console.log(result);
        if (result.sucess) {
          // Navigate to the desired page upon successful login
          push('/'); // Replace with your actual route
        } else {
          console.log('Login failed:', result.message);
        }
        // Continue with your logic based on the API response
      } catch (error) {
        console.error('Error in loginUser API:', error);
      }
      // Proceed with form submission
      // Your code here for successful form submission
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
                  Sign in to your account
                </h3>
                <p className="mb-11 text-center text-base font-medium text-body-color">
                  Login to your account for a faster checkout.
                </p>
                <form onSubmit={handleSubmit}>
                  <div className="mb-8">
                    <label
                      htmlFor="userName"
                      className="mb-3 block text-sm text-dark dark:text-white"
                    >
                      Your User Name
                    </label>
                    <input
                      type="text"
                      name="userName"
                      placeholder="Enter your user name"
                      value={formData.userName}
                      onChange={(e) =>
                        setFormData({ ...formData, userName: e.target.value })
                      }
                      className="border-stroke dark:text-body-color-dark dark:shadow-two w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none"
                    />
                    {errors.userName && (
                      <p className="text-sm text-red-500 mt-1">{errors.userName}</p>
                    )}
                  </div>
                  <div className="mb-8">
                    <label
                      htmlFor="password"
                      className="mb-3 block text-sm text-dark dark:text-white"
                    >
                      Your Password
                    </label>
                    <input
                      type="password"
                      name="password"
                      placeholder="Enter your password"
                      value={formData.password}
                      onChange={(e) =>
                        setFormData({ ...formData, password: e.target.value })
                      }
                      className="border-stroke dark:text-body-color-dark dark:shadow-two w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none"
                    />
                    {errors.password && (
                      <p className="text-sm text-red-500 mt-1">
                        {errors.password}
                      </p>
                    )}
                  </div>
                  <div className="mb-8 flex flex-col justify-between sm:flex-row sm:items-center">
                    <div className="mb-4 sm:mb-0">
                      <label
                        htmlFor="checkboxLabel"
                        className="flex cursor-pointer select-none items-center text-sm font-medium text-body-color"
                      >
                        <div className="relative">
                          <input
                            type="checkbox"
                            id="checkboxLabel"
                            checked={isChecked}
                            onChange={() => setIsChecked(!isChecked)}
                            className="sr-only"
                          />
                          <div className="box mr-4 flex h-5 w-5 items-center justify-center rounded border border-body-color border-opacity-20 dark:border-white dark:border-opacity-10">
                            <span className="opacity-0">
                              <svg
                                width="11"
                                height="8"
                                viewBox="0 0 11 8"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M10.0915 0.951972L10.0867 0.946075L10.0813 0.940568C9.90076 0.753564 9.61034 0.753146 9.42927 0.939309L4.16201 6.22962L1.58507 3.63469C1.40401 3.44841 1.11351 3.44879 0.932892 3.63584C0.755703 3.81933 0.755703 4.10875 0.932892 4.29224L0.932878 4.29225L0.934851 4.29424L3.58046 6.95832C3.73676 7.11955 3.94983 7.2 4.1473 7.2C4.36196 7.2 4.55963 7.11773 4.71406 6.9584L10.0468 1.60234C10.2436 1.4199 10.2421 1.1339 10.0915 0.951972ZM4.2327 6.30081L4.2317 6.2998C4.23206 6.30015 4.23237 6.30049 4.23269 6.30082L4.2327 6.30081Z"
                                  fill="#3056D3"
                                  stroke="#3056D3"
                                  strokeWidth="0.4"
                                />
                              </svg>
                            </span>
                          </div>
                        </div>
                        Keep me signed in
                      </label>
                    </div>
                    <div>
                      <Link
                        href="/reset-password-mobile"
                        className="text-sm font-medium text-primary hover:underline"
                      >
                        Forgot Password?
                      </Link>
                    </div>
                  </div>
                  <div className="mb-6">
                    <button
                      type="submit"
                      className="shadow-submit dark:shadow-submit-dark flex w-full items-center justify-center rounded-sm bg-primary px-9 py-4 text-base font-medium text-white duration-300 hover:bg-primary/90"
                    >
                      Sign in
                    </button>
                  </div>
                </form>
                <p className="text-center text-base font-medium text-body-color">
                  Don’t you have an account?{" "}
                  <Link href="/signup" className="text-primary hover:underline">
                    Sign up
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SigninPage;
