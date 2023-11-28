"use client";
import Link from "next/link";
import { useState } from "react";

// Define the FormData type
type FormData = {
  userName: string;
  password: string;
  referral: string;
  phoneNumber: string;
  otp: string;
};

const SignupPage = () => {
  // Initial form data and errors
  const initialFormData: FormData = {
    userName: "",
    password: "",
    referral: "null",
    phoneNumber: "",
    otp: "",
  };

  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [errors, setErrors] = useState<Record<keyof FormData, string>>({
    userName: "",
    password: "",
    referral: "",
    phoneNumber: "",
    otp: "",
  });

  // Checkbox state and validation
  const [isChecked, setIsChecked] = useState(false);
  const [checkboxError, setCheckboxError] = useState("");

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
    setCheckboxError("");
  };

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
    if (!isChecked) {
      setCheckboxError("You must agree to the terms and conditions");
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  // Form submission function
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (validateForm()) {
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
                  Create your account
                </h3>
                <p className="mb-11 text-center text-base font-medium text-body-color">
                  It’s totally free and super easy
                </p>
                <form>
                  <div className="mb-8">
                    <label
                      htmlFor="userName"
                      className="mb-3 block text-sm text-dark dark:text-white"
                    >
                      User Name
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
                      <p className="text-sm text-red-500 mt-1">
                        {errors.userName}
                      </p>
                    )}
                  </div>
                  <div className="mb-8">
                    <label
                      htmlFor="password"
                      className="mb-3 block text-sm text-dark dark:text-white"
                    >
                      Password
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
                  <div className="mb-8">
                    <label
                      htmlFor="referral"
                      className="mb-3 block text-sm text-dark dark:text-white"
                    >
                      Referral code (optional)
                    </label>
                    <input
                      type="text"
                      name="referral"
                      placeholder="Enter your referral code"
                      value={formData.referral}
                      onChange={(e) =>
                        setFormData({ ...formData, referral: e.target.value })
                      }
                      className="border-stroke dark:text-body-color-dark dark:shadow-two w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none"
                    />
                  </div>
                  <div className="mb-8">
                    <label
                      htmlFor="phoneNumber"
                      className="mb-3 block text-sm text-dark dark:text-white"
                    >
                      Mobile No.
                    </label>
                    <input
                      type="text"
                      name="phoneNumber"
                      placeholder="Enter your mobile no."
                      value={formData.phoneNumber}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          phoneNumber: e.target.value,
                        })
                      }
                      className="border-stroke dark:text-body-color-dark dark:shadow-two w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none"
                    />
                    {errors.phoneNumber && (
                      <p className="text-sm text-red-500 mt-1">
                        {errors.phoneNumber}
                      </p>
                    )}
                  </div>
                  <div className="mb-8">
                    <label
                      htmlFor="otp"
                      className="mb-3 block text-sm text-dark dark:text-white"
                    >
                      Enter verification code
                    </label>
                    <div className="flex">
                      <input
                        type="text"
                        name="otp"
                        placeholder="Enter your verification code"
                        value={formData.otp}
                        onChange={(e) =>
                          setFormData({ ...formData, otp: e.target.value })
                        }
                        className="border-stroke dark:text-body-color-dark dark:shadow-two w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none"
                      />
                      <button
                        onClick={() => {}}
                        className="mt-4 md:mt-0 ml-0 md:ml-2 px-6 py-3 flex items-center justify-center bg-primary text-white rounded-sm"
                      >
                        Send OTP
                      </button>
                    </div>
                    {errors.otp && (
                      <p className="text-sm text-red-500 mt-1">{errors.otp}</p>
                    )}
                  </div>
                  <div className="mb-8 flex">
                    <label
                      htmlFor="checkboxLabel"
                      className="flex cursor-pointer select-none text-sm font-medium text-body-color"
                    >
                      <div className="relative">
                        <input
                          type="checkbox"
                          id="checkboxLabel"
                          checked={isChecked}
                          onChange={handleCheckboxChange}
                          className="sr-only"
                        />
                        <div className="box mr-4 mt-1 flex h-5 w-5 items-center justify-center rounded border border-body-color border-opacity-20 dark:border-white dark:border-opacity-10">
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
                      <span>
                        By creating an account, you agree to the
                        <Link href="/terms">
                          <span className="text-primary hover:underline">
                            Terms and Conditions
                          </span>
                        </Link>
                        , and our
                        <Link href="/privacy">
                          <span className="text-primary hover:underline">
                            Privacy Policy
                          </span>
                        </Link>
                      </span>
                    </label>
                    {checkboxError && (
                      <p className="text-sm text-red-500 ml-7">
                        {checkboxError}
                      </p>
                    )}
                  </div>
                  <div className="mb-6">
                    <button
                      onClick={handleSubmit}
                      className="shadow-submit dark:shadow-submit-dark flex w-full items-center justify-center rounded-sm bg-primary px-9 py-4 text-base font-medium text-white duration-300 hover:bg-primary/90"
                    >
                      Sign up
                    </button>
                  </div>
                </form>
                <p className="text-center text-base font-medium text-body-color">
                  Already using Startup?{" "}
                  <Link href="/signin" className="text-primary hover:underline">
                    Sign in
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

export default SignupPage;
