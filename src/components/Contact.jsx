import { useForm } from "react-hook-form";
import { SectionTitle, Input, Label, ErrorMessage } from ".";

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = () => console.log("submitted");

  return (
    <section className="pt-[100px] mx-auto">
      <SectionTitle title="Contact me" />
      <form
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
              className={`placeholder-slate-300 p-3 border-2 rounded-lg dark:bg-modal ${errors.message ? "border-rose-500" : "dark:border-main"}`}
            ></textarea>
            {errors.message?.type === "required" && (
              <ErrorMessage>Message is required.</ErrorMessage>
            )}
          </div>
        </div>
        <button
          className="mt-5 bg-font text-white mx-auto block w-full py-3 rounded-lg md:w-40 md:mx-0"
          type="submit"
        >
          Send message
        </button>
      </form>
    </section>
  );
};

export default Contact;
