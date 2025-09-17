import React, { useState } from "react";
import { GoogleLogin } from "@react-oauth/google";
import { useAuth } from "../context/AuthContext";
import { useMutation } from "@tanstack/react-query";
import api from "../lib/axios";

import PopupModal from "../components/PopupModal";
import API from "../api";

export default function LoginPage() {
  const { login } = useAuth();

  const [modalState, setModalState] = useState({
    isOpen: false,
    status: "success",
    title: "",
    description: "",
    buttonTitle: "",
    onClick: () => {},
  });

  const closeModal = () => setModalState({ ...modalState, isOpen: false });

  const { mutate, isPending } = useMutation({
    mutationFn: API.auth.loginWithGoogle,
    onSuccess: (data) => {
      setModalState({
        isOpen: true,
        status: "success",
        title: "Sign Up Success",
        description:
          "Your account has been created successfully. Let's begin your journey to a healthier and happier mind.",
        buttonTitle: "Let's Start Your Journey",
        onClick: () => Login(data.token),
      });
    },
    onError: (error) => {
      setModalState({
        isOpen: true,
        status: "error",
        title: "Sign Up Failed",
        description:
          "We couldn't create your account this time. Don't worry, let's give it another try!",
        buttonTitle: "Let's Try Again",
        onClick: closeModal,
      });
    },
  });

  const handleGoogleSuccess = (credentialResponse) => {
    const googleIdToken = credentialResponse.credential;
    mutate(googleIdToken);
  };

  const handleGoogleError = () => {
    setModalState({
      isOpen: true,
      status: "error",
      title: "Sign Up Failed",
      description:
        "We couldn't create your account this time. Don't worry, let's give it another try!",
      buttonTitle: "Let's Try Again",
      onClick: closeModal,
    });
  };

  return (
    <div className='relative w-full h-screen flex flex-col lg:flex-row overflow-hidden'>
      {/* Background Decorations */}
      <div className='absolute -top-35 left-1/3 transform -translate-x-1/2 w-60 h-60 bg-brand-1 rounded-full opacity-40 -z-10'></div>
      <div className='absolute -bottom-35 -left-35 w-72 h-72 bg-brand-3 rounded-full opacity-50 -z-10'></div>

      {/* Left Section */}
      <div className='flex flex-col flex-1 w-full lg:w-1/2 px-6 sm:px-12 lg:px-16 py-4 lg:py-8'>
        {/* Logo */}
        <div className='flex justify-start mb-2'>
          <img
            src='src/assets/logo-moodin.png'
            alt='Mood.In Logo'
            className='h-7 sm:h-9'
          />
        </div>

        {/* Content Wrapper */}
        <div className='flex flex-col flex-1 justify-center items-center text-center lg:text-left'>
          {/* Tagline */}
          <div className='bg-brand-2 text-black font-medium rounded-full px-5 py-1.5 mb-4 sm:mb-6 text-sm'>
            Your safe space to reflect and grow.
          </div>

          {/* Login Card */}
          <div className='flex flex-col gap-2 justify-center bg-white shadow-lg rounded-2xl p-6 sm:p-8 w-full max-w-sm'>
            <div className='text-center'>
              <span className='text-2xl sm:text-3xl'>👋</span>
              <h2 className='text-xl font-semibold mt-1'>Welcome Back</h2>
              <p className='text-gray-500 text-sm mt-1 mb-2'>
                Sign in to continue your journey.
              </p>
            </div>
            <div className='w-full'>
              <GoogleLogin
                onSuccess={handleGoogleSuccess}
                onError={handleGoogleError}
                shape='pill'
                size='large'
                width='100%'
                useOneTap
                text='continue_with'
                theme='outline'
                logo_alignment='center'
                className='w-full'
              />
            </div>

            <p className='text-xs text-gray-400 text-center leading-relaxed mt-1'>
              By signing in, you agree to our{" "}
              <span className='underline cursor-pointer'>Terms of Service</span>{" "}
              and{" "}
              <span className='underline cursor-pointer'>Privacy Policy</span>
            </p>
          </div>
        </div>
      </div>

      <div className='hidden flex-1 lg:flex lg:p-6'>
        <img
          src='src/assets/image-login.webp'
          alt='Login Illustration'
          className='w-full full-w-lg h-auto object-contain lg:rounded-3xl'
          loading='lazy'
        />
      </div>

      {/* Popup Modal */}
      {modalState.isOpen && <PopupModal {...modalState} />}
    </div>
  );
}
