import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { useForm } from "react-hook-form";
import { SectionTitle, Input, Label, ErrorMessage, LoadingMessage } from ".";

const Contact = () => {
  const form = useRef();
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = () => {
    setIsLoading(true);
    emailjs
      .sendForm(
        "service_g2xvauq",
        "template_3l9yric",
        form.current,
        "RpF9duGhyvF2VOw3U"
      )
      .then(
        (result) => {
          console.log(result.text);
          reset();
        },
        (error) => {
          console.log(error.text);
        }
      )
      .finally(() => setIsLoading(false));
  };

  return (
    <section id="contact" className="pt-[100px] mx-auto">
      <SectionTitle title="Contact me" />
      <form
        ref={form}
        onSubmit={handleSubmit(onSubmit)}
        className="mx-auto p-6 mt-10 rounded-xl max-w-3xl"
      >
        <div className="flex flex-col sm:flex-row sm:gap-8 md:justify-center">
          <div className="mt-4">
            <Label htmlFor="name">Your Name</Label>
            <Input
              register={register}
              type="text"
              placeholder="Enter your name"
              registerName="name"
              error={errors.name}
            />
            {errors.name?.type === "required" && (
              <ErrorMessage>Name is required.</ErrorMessage>
            )}
          </div>
          <div className="mt-4">
            <Label htmlFor="email">Email Address</Label>
            <Input
              register={register}
              type="text"
              placeholder="Enter your email"
              registerName="email"
              error={errors.email}
            />
            {errors.email?.type === "required" && (
              <ErrorMessage>Email is required.</ErrorMessage>
            )}
          </div>
        </div>
        <div className="mt-4">
          <div className="flex flex-col">
            <Label htmlFor="message">Your Message</Label>
            <textarea
              {...register("message", { required: true })}
              cols="7"
              rows="8"
              placeholder="send me a message..."
              className={`placeholder-slate-300 p-3 border-2 rounded-lg dark:bg-modal dark:text-white ${
                errors.message ? "border-rose-500" : "dark:border-main"
              }`}
            ></textarea>
            {errors.message?.type === "required" && (
              <ErrorMessage>Message is required.</ErrorMessage>
            )}
          </div>
        </div>
        <button
          type="submit"
          className="inline-flex items-center mt-5 bg-font text-white mx-auto w-full py-2 px-4 font-semibold  rounded-lg md:w-40 md:mx-0 disabled:opacity-50"
          disabled={isLoading}
        >
          {isLoading ? (
            <LoadingMessage>Sending...</LoadingMessage>
          ) : (
            "Send message"
          )}
        </button>
      </form>
    </section>
  );
};

export default Contact;
