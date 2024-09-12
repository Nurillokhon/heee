/** @format */
"use client";
import { SingleInput } from "@/components";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useLogin } from "@/hooks/useLogin";
import { toast, ToastContainer } from "react-toastify";

interface FormData {
  username: string;
  password: string;
}

const Page = () => {
  React.useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      router.replace("/main");
    }
  });
  const router = useRouter();
  const [formData, setFormData] = useState<FormData>({
    username: "",
    password: "",
  });
  const { mutateAsync } = useLogin();
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (formData.username && formData.password) {
      mutateAsync(formData)
        .then((data) => {
          localStorage.setItem("me", JSON.stringify(data));
          localStorage.setItem("token", data.token);
          router.replace("/");
        })
        .catch((error) => {
          toast.error(error?.response?.data?.message, {
            position: "top-right",
            bodyStyle: { fontSize: "12px", padding: "8px" },
            style: { maxWidth: "200px" },
          });
        });
    }
  };

  return (
    <>
      <div className="flex flex-col md:flex-row justify-between items-center min-h-screen">
        <div className="hidden md:block md:w-7/12 md:h-screen bg-red-950"></div>
        <div className="w-full md:w-5/12 lg:w-3/12 p-4 md:p-8 m-auto">
          <form onSubmit={handleSubmit} className="max-w-sm mx-auto">
            <h1 className="text-2xl md:text-3xl font-bold text-black mb-4 md:mb-6">
              Sign In
            </h1>
            <ToastContainer />

            <div className="mb-4">
              <label
                htmlFor="name"
                className="block mb-2 font-medium text-black"
              >
                Name
              </label>
              <SingleInput
                name="username"
                type="text"
                placeholder="Enter  name"
                value={formData.username}
                onChange={handleChange}
                className="w-full"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="password"
                className="block mb-2 font-medium text-black"
              >
                password
              </label>
              <SingleInput
                type="password"
                name="password"
                placeholder="Enter password"
                value={formData.password}
                onChange={handleChange}
                className="w-full"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Page;
