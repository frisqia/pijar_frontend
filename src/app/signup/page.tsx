"use client";

import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { toast, Toaster } from "sonner";
import { LockClosedIcon, LockOpenIcon } from "@heroicons/react/24/solid";

interface SignUpFormValues {
  fullName: string;
  email: string;
  password: string;
}

export default function SignUp() {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const validationSchema = Yup.object({
    fullName: Yup.string()
      .required("Nama Lengkap wajib diisi")
      .min(3, "Nama harus minimal 3 karakter"),
    email: Yup.string()
      .email("Email tidak valid")
      .required("Email wajib diisi"),
    password: Yup.string()
      .required("Kata sandi wajib diisi")
      .min(6, "Kata sandi harus minimal 6 karakter")
      .matches(/[0-9]/, "Kata sandi harus mengandung angka")
      .matches(
        /[a-z]/,
        "Kata sandi harus mengandung setidaknya satu huruf kecil"
      )
      .matches(
        /[A-Z]/,
        "Kata sandi harus mengandung setidaknya satu huruf besar"
      ),
  });

  const initialValues: SignUpFormValues = {
    fullName: "",
    email: "",
    password: "",
  };

  const handleSubmit = (
    values: SignUpFormValues,
    {
      setSubmitting,
      resetForm,
    }: {
      setSubmitting: (isSubmitting: boolean) => void;
      resetForm: () => void;
    }
  ) => {
    console.log("Form data:", values);
    toast.success("Pendaftaran berhasil! 🎉", {
      description: "Selamat datang di platform kami!",
    });
    setSubmitting(false);
    resetForm();
  };

  return (
    <div className="min-h-screen  bg-blue-900 flex items-center justify-center px-4 py-12 md:py-20">
      <Toaster position="bottom-center" richColors />
      <div className="flex flex-col lg:flex-row w-full max-w-5xl rounded-lg overflow-hidden shadow-lg">
        <div className="bg-yellow-600 text-white flex flex-col justify-center items-center lg:items-start px-8 py-12 lg:w-2/6">
          <h2 className="text-3xl font-caveat leading-snug mb-6 text-center lg:text-left">
            Ruang Belajar Anda, <br /> Dimanapun dan Kapanpun
          </h2>
          <img
            src="/image.png"
            alt="Robot"
            className="w-40 h-40 lg:w-64 lg:h-64 mt-6 ml-6"
          />
        </div>

        <div className="bg-white flex-1 p-8">
          <h2 className="text-2xl font-bold text-center mb-6">Buat Akun</h2>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting }) => (
              <Form>
                <div className="mb-4">
                  <label className="block text-gray-700 font-medium mb-2">
                    Nama Lengkap
                  </label>
                  <Field
                    type="text"
                    name="fullName"
                    placeholder="Nama Lengkap"
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  />
                  <ErrorMessage
                    name="fullName"
                    component="div"
                    className="text-red-500 text-sm mt-1"
                  />
                </div>

                <div className="mb-4">
                  <label className="block text-gray-700 font-medium mb-2">
                    Email
                  </label>
                  <Field
                    type="email"
                    name="email"
                    placeholder="Email"
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="text-red-500 text-sm mt-1"
                  />
                </div>

                <div className="mb-6">
                  <label className="block text-gray-700 font-medium mb-2">
                    Kata Sandi
                  </label>
                  <div className="relative w-full">
                    <Field
                      type={passwordVisible ? "text" : "password"}
                      name="password"
                      placeholder="Kata Sandi"
                      className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                    />
                    <button
                      type="button"
                      className="absolute right-4 top-1/2 transform -translate-y-1/2"
                      onClick={() => setPasswordVisible(!passwordVisible)} 
                    >
                      {passwordVisible ? (
                        <LockOpenIcon className="w-6 h-6 text-gray-600" />
                      ) : (
                        <LockClosedIcon className="w-6 h-6 text-gray-600" />
                      )}
                    </button>
                  </div>
        
                  <ErrorMessage
                    name="password"
                    component="div"
                    className="text-red-500 text-sm mt-1"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-yellow-500 text-white font-bold py-2 rounded-lg hover:bg-yellow-600 transition"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Mengirim..." : "Daftar"}
                </button>
              </Form>
            )}
          </Formik>

          <p className="text-center text-gray-600 mt-4">
            Sudah punya akun?{" "}
            <a href="#" className="text-blue-500 font-medium hover:underline">
              Masuk
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
