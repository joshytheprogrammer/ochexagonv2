"use client";
import { useState } from "react";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { collection, addDoc } from "firebase/firestore";
import { firestore } from "../firebase/firebase";

import Input from "@components/Input";
import tick from '@assets/tick.svg'
import Image from "next/image";

const schema = yup.object({
  name: yup.string().required("Name is a required field"),
  email: yup
    .string()
    .required("Email is a required field")
    .email("Email is not valid"),
  message: yup.string(),
});

const Contact = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);

  const openModal = () => {
    setIsOpenModal(true);
  };

  const closeModal = () => {
    setIsOpenModal(false);
  };


  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    try {
      const currentDate = new Date();

      const modifiedData = {
        ...data,
        senderName: data.name,

        isRead: false,

        timestamp: currentDate,
      };

      delete modifiedData.name;

      modifiedData["messageSent"] = modifiedData.message;

      delete modifiedData.message;

      // Send the modified form data to Firestore
      await addDoc(collection(firestore, "messages"), modifiedData);
      console.log(
        "Message sent successfully and saved to Firestore:",
        modifiedData
      );

      // Clear the form fields
      reset();

      openModal();
      // Optionally, provide user feedback (e.g., show a success message)
    } catch (error) {
      console.error("Error sending message and saving to Firestore:", error);
      // Handle the error gracefully (e.g., show an error message to the user)
    }
  };

  return (
    <div className="lg:px-24 lg:pt-20 md:px-16 md px-8 py-12 flex lg:flex-row  justify-between flex-col">
      <div className="lg:w-2/5 w-full mr-12 mb-20" data-aos="fade-right">
        <p className="font text-lg">
          If you have any questions or comments, please contact us via email, or
          send us a message using the contact form.
        </p>

        <div>
          <h2 className="font text-2xl font-semibold pt-8 ">Email</h2>
          <span className="font text-lg">
            <a href="mailto:info@ochexagon.com">info@ochexagon.com</a>
          </span>
        </div>

        <div>
          <h2 className="font text-2xl font-semibold pt-8">Phone No</h2>
          <span className="font text-lg">
            <a href="tel:+2348030512882">+234-803-0512-882</a>
          </span>
        </div>
      </div>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="lg:w-3/5 w-full"
        data-aos="fade-left"
      >
        <h2 className="font sm:text-5xl text-3xl font-semibold mb-8 lg:mb-16">
          Send us a message
        </h2>
        <Input
          id="Username"
          label="Full Name"
          type="text"
          register={{ ...register("name") }}
          errorMessage={errors.name?.message}
        />
        <Input
          id="Email"
          label="Email"
          type="email"
          register={{ ...register("email") }}
          errorMessage={errors.email?.message}
        />

        <div className="flex flex-col mb-4">
          <label className="font text-xl mb-2">Message</label>
          <textarea
            name="message"
            id="Message"
            cols="30"
            rows="10"
            {...register("message")}
            className="border-2 w-full h-[180px] p-3 rounded-xl font focus:outline-none focus:border-slate-300 focus:ring-1 focus:ring-slate-300"
          ></textarea>
        </div>

        <input
          type="submit"
          className="block font text-xl w-full text-center p-3 background-primary cursor-pointer text-secondary rounded-xl"
        />
      </form>

      {isOpenModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50 background-transparent" onClick={closeModal} data-aos="zoom-in">
          <div className="bg-white px-4 py-8 lg:p-12 rounded-lg shadow-lg font w-[300px]  lg:w-[600px] flex flex-col items-center">
            <div className="background-primary flex items-center justify-center w-[80px] h-[80px] rounded-full">
              <Image 
               src={tick}
               width={40}
              />
            </div>
            <h2 className="lg:text-2xl font-semibold my-2 lg:my-6 text-center">
              Your message has been successfully submitted. We'll get back to
              you as soon as possible.
            </h2>
            <button className="block mt-4 p-2 background-primary text-white rounded-lg cursor-pointer w-full"  onClick={closeModal}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Contact;
