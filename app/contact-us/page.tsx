"use client";

import { useForm } from "react-hook-form";

type FormData = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

export default function ContactPage() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    try {
      console.log("Submitted Data:", data);
      // You can later integrate API call here, for example:
      // await fetch("/api/contact", { method: "POST", body: JSON.stringify(data) });
      alert("Message sent successfully!");
      reset();
    } catch (err) {
      console.error(err);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <main className="bg-[#e4e4e4] max-w-5xl shadow-lg mx-auto my-20 flex flex-col md:flex-row">
      {/* Left Section */}
      <section className="w-full md:w-1/2 bg-[#4B2E83] text-white p-10 flex flex-col justify-center">
        <h2 className="text-3xl font-semibold mb-3">Contact Us</h2>
        <p className="text-gray-200 mb-6">
          We appreciate your feedback, suggestions, and inquiries. Please feel free to
          reach out to us through any of the following methods:
        </p>

        <div className="space-y-5 text-sm">
          <div>
            <h3 className="font-semibold text-lg">General Inquiries</h3>
            <p>Email: <span className="text-yellow-400">info@banglaversity.com</span></p>
            <p>Response Time: Within 24–48 hours</p>
          </div>

          <div>
            <h3 className="font-semibold text-lg">Business Partnerships</h3>
            <p>Email: <span className="text-yellow-400">partnerships@banglaversity.com</span></p>
            <p>For collaboration opportunities</p>
          </div>

          <div>
            <h3 className="font-semibold text-lg">Social Media</h3>
            <ul className="space-y-1">
              <li>Facebook: facebook.com/banglaversity</li>
              <li>Twitter: twitter.com/banglaversity</li>
              <li>LinkedIn: linkedin.com/company/banglaversity</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Right Section */}
      <section className="w-full md:w-1/2 bg-white  p-10 flex flex-col justify-center">
        <h2 className="text-2xl font-bold mb-1 text-gray-800">Send us a message</h2>
        <p className="text-gray-600 mb-6">
          You can reach us anytime via{" "}
          <a href="mailto:info@banglaversity.com" className="text-yellow-600 underline">
            info@banglaversity.com
          </a>
        </p>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          <div>
            <input
              {...register("name", { required: "Name is required" })}
              placeholder="Enter your name"
              className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 ${
                errors.name ? "border-red-500" : "focus:ring-yellow-400"
              }`}
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
            )}
          </div>

          <div>
            <input
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Enter a valid email address",
                },
              })}
              placeholder="Enter your email"
              className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 ${
                errors.email ? "border-red-500" : "focus:ring-yellow-400"
              }`}
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
            )}
          </div>

          <div>
            <input
              {...register("phone", {
                required: "Phone number is required",
                pattern: {
                  value: /^[0-9+\-\s()]{6,20}$/,
                  message: "Enter a valid phone number",
                },
              })}
              placeholder="Enter your phone (e.g. +8801XXXXXXXXX)"
              className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 ${
                errors.phone ? "border-red-500" : "focus:ring-yellow-400"
              }`}
            />
            {errors.phone && (
              <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
            )}
          </div>

          <div>
            <textarea
              {...register("message", { required: "Message is required" })}
              rows={4}
              placeholder="How can we help?"
              className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 ${
                errors.message ? "border-red-500" : "focus:ring-yellow-400"
              }`}
            ></textarea>
            {errors.message && (
              <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
            )}
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-3 rounded-lg transition duration-300 disabled:opacity-50"
          >
            {isSubmitting ? "Submitting..." : "SUBMIT"}
          </button>
        </form>
      </section>
    </main>
  );
}
