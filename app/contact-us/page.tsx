"use client";

import React from "react";
import { useForm } from "react-hook-form";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";

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
    console.log(data);
    try {
      // Example API call - replace with your real endpoint
      await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      reset();
      alert("Message sent successfully!");
    } catch (error) {
      console.error(error);
      alert("Something went wrong. Please try again later.");
    }
  };

  return (
  <div className=" min-h-screen py-20">
      <main className=" border  border-gray-300 max-w-5xl shadow-lg mx-auto  flex flex-col md:flex-row overflow-hidden rounded-sm">
      {/* Left column */}
      <aside className="w-full md:w-1/2 bg-[#013334] text-white p-10 md:p-12 flex flex-col justify-between">
        <div>
          <h2 className="text-3xl  font-semibold mb-3 leading-tight font-sans">
            যোগাযোগ / Contact Information
          </h2>

          <p className="text-gray-200 text-base md:text-lg leading-relaxed mb-6 max-w-prose">
            We appreciate your feedback, suggestions, and inquiries. Please feel free
            to reach out to us through any of the following methods:
          </p>

          <div className="space-y-6 text-sm md:text-base">
            <div>
              <h3 className="font-medium text-yellow-300 mb-1">General Inquiries</h3>
              <p className="text-gray-200">
                Email:{" "}
                <a
                  href="mailto:info@banglaversity.com"
                  className="text-yellow-300 underline"
                >
                  info@banglaversity.com
                </a>
              </p>
              <p className="text-gray-200 mt-1">Response Time: Within 24–48 hours</p>
            </div>

            <div>
              <h3 className="font-medium text-yellow-300 mb-1">Business Partnerships</h3>
              <p className="text-gray-200">
                Email:{" "}
                <a
                  href="mailto:partnerships@banglaversity.com"
                  className="text-yellow-300 underline"
                >
                  partnerships@banglaversity.com
                </a>
              </p>
              <p className="text-gray-200 mt-1">For collaboration opportunities</p>
            </div>

            <div>
              <h3 className="font-medium text-yellow-300 mb-1">Social Media</h3>
              <p className="text-gray-200">Facebook, Twitter, Instagram, LinkedIn & more</p>
            </div>
          </div>
        </div>

        {/* Social icons row (added) */}
        <div className="mt-8">
          <p className="text-gray-200 mb-3 text-sm md:text-base">Follow us</p>
          <div className="flex gap-4 items-center">
            <a
              href="#facebook"
              aria-label="Facebook"
              className="flex items-center justify-center w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 transition focus:outline-none focus:ring-2 focus:ring-[#013334]"
            >
              <FaFacebookF className="w-4 h-4" />
            </a>

            <a
              href="#twitter"
              aria-label="Twitter"
              className="flex items-center justify-center w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 transition focus:outline-none focus:ring-2 focus:ring-[#013334]"
            >
              <FaTwitter className="w-4 h-4" />
            </a>

            <a
              href="#instagram"
              aria-label="Instagram"
              className="flex items-center justify-center w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 transition focus:outline-none focus:ring-2 focus:ring-[#013334]"
            >
              <FaInstagram className="w-4 h-4" />
            </a>

            <a
              href="#linkedin"
              aria-label="LinkedIn"
              className="flex items-center justify-center w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 transition focus:outline-none focus:ring-2 focus:ring-[#013334]"
            >
              <FaLinkedinIn className="w-4 h-4" />
            </a>

            <a
              href="#youtube"
              aria-label="YouTube"
              className="flex items-center justify-center w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 transition focus:outline-none focus:ring-2 focus:ring-yellow-300"
            >
              <FaYoutube className="w-4 h-4" />
            </a>
          </div>
        </div>
      </aside>

      {/* Right column (form) */}
      <section className="w-full md:w-1/2 bg-white p-8 md:p-12 flex flex-col justify-center">
        <div className="max-w-xl w-full">
          <h2 className="text-2xl  md:text-3xl font-bold text-gray-900 mb-1 font-sans">
            Send us a message
          </h2>
          <p className="text-gray-600 mb-6 leading-relaxed text-sm md:text-base">
            You can reach us anytime via{" "}
            <a
              href="mailto:info@banglaversity.com"
              className="text-[#013334] underline"
            >
              info@banglaversity.com
            </a>
          </p>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            {/* name */}
            <div>
              <label className="sr-only" htmlFor="name">
                Name
              </label>
              <input
                id="name"
                {...register("name", { required: "Name is required" })}
                placeholder="Enter your name"
                className={`w-full p-3 border rounded-md text-sm md:text-base font-medium leading-relaxed focus:outline-none focus:ring-2 ${
                  errors.name ? "border-red-500 focus:ring-red-300" : "border-gray-200 focus:ring-[#013334]"
                }`}
                aria-invalid={errors.name ? "true" : "false"}
              />
              {errors.name && (
                <p role="alert" className="text-red-600 text-sm mt-1">
                  {errors.name.message}
                </p>
              )}
            </div>

            {/* email */}
            <div>
              <label className="sr-only" htmlFor="email">
                Email
              </label>
              <input
                id="email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Enter a valid email address",
                  },
                })}
                placeholder="Enter a valid email address"
                className={`w-full p-3 border rounded-md text-sm md:text-base font-medium leading-relaxed focus:outline-none focus:ring-2 ${
                  errors.email ? "border-red-500 focus:ring-red-300" : "border-gray-200 focus:ring-[#013334]"
                }`}
                aria-invalid={errors.email ? "true" : "false"}
              />
              {errors.email && (
                <p role="alert" className="text-red-600 text-sm mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* phone */}
            <div>
              <label className="sr-only" htmlFor="phone">
                Phone
              </label>
              <input
                id="phone"
                {...register("phone", {
                  required: "Phone number is required",
                  pattern: {
                    value: /^[0-9+\-\s()]{6,20}$/,
                    message: "Enter a valid phone number",
                  },
                })}
                placeholder="Enter your phone (e.g. +8801XXXXXXXXX)"
                className={`w-full p-3 border rounded-md text-sm md:text-base font-medium leading-relaxed focus:outline-none focus:ring-2 ${
                  errors.phone ? "border-red-500 focus:ring-red-300" : "border-gray-200 focus:ring-[#013334]"
                }`}
                aria-invalid={errors.phone ? "true" : "false"}
              />
              {errors.phone && (
                <p role="alert" className="text-red-600 text-sm mt-1">
                  {errors.phone.message}
                </p>
              )}
            </div>

            {/* message */}
            <div>
              <label className="sr-only" htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                {...register("message", { required: "Message is required" })}
                rows={5}
                placeholder="How can we help?"
                className={`w-full p-3 border rounded-md text-sm md:text-base font-medium leading-relaxed focus:outline-none focus:ring-2 resize-none ${
                  errors.message ? "border-red-500 focus:ring-red-300" : "border-gray-200 focus:ring-[#013334]"
                }`}
                aria-invalid={errors.message ? "true" : "false"}
              />
              {errors.message && (
                <p role="alert" className="text-red-600 text-sm mt-1">
                  {errors.message.message}
                </p>
              )}
            </div>

            <div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 rounded-md font-semibold tracking-wide bg-[#013334] hover:bg-[#013334] text-white transition disabled:opacity-60 disabled:cursor-not-allowed focus:outline-none focus:ring-4 focus:ring-yellow-200"
                aria-busy={isSubmitting}
              >
                {isSubmitting ? "Submitting..." : "SUBMIT"}
              </button>
            </div>
          </form>
        </div>
      </section>
    </main>
  </div>
  );
}













// "use client";

// import { useForm } from "react-hook-form";

// type FormData = {
//   name: string;
//   email: string;
//   phone: string;
//   message: string;
// };

// export default function ContactPage() {
//   const {
//     register,
//     handleSubmit,
//     formState: { errors, isSubmitting },
//     reset,
//   } = useForm<FormData>();

//   const onSubmit = async (data: FormData) => {
//     try {
//       console.log("Submitted Data:", data);
//       // You can later integrate API call here, for example:
//       // await fetch("/api/contact", { method: "POST", body: JSON.stringify(data) });
//       alert("Message sent successfully!");
//       reset();
//     } catch (err) {
//       console.error(err);
//       alert("Something went wrong. Please try again.");
//     }
//   };

//   return (
//     <main className="bg-[#e4e4e4] max-w-5xl shadow-lg mx-auto my-20 flex flex-col md:flex-row">
//       {/* Left Section */}
//       <section className="w-full md:w-1/2 bg-[#4B2E83] text-white p-10 flex flex-col justify-center">
//         <h2 className="text-3xl font-semibold mb-3">Contact Us</h2>
//         <p className="text-gray-200 mb-6">
//           We appreciate your feedback, suggestions, and inquiries. Please feel free to
//           reach out to us through any of the following methods:
//         </p>

//         <div className="space-y-5 text-sm">
//           <div>
//             <h3 className="font-semibold text-lg">General Inquiries</h3>
//             <p>Email: <span className="text-yellow-400">info@banglaversity.com</span></p>
//             <p>Response Time: Within 24–48 hours</p>
//           </div>

//           <div>
//             <h3 className="font-semibold text-lg">Business Partnerships</h3>
//             <p>Email: <span className="text-yellow-400">partnerships@banglaversity.com</span></p>
//             <p>For collaboration opportunities</p>
//           </div>

//           <div>
//             <h3 className="font-semibold text-lg">Social Media</h3>
//             <ul className="space-y-1">
//               <li>Facebook: facebook.com/banglaversity</li>
//               <li>Twitter: twitter.com/banglaversity</li>
//               <li>LinkedIn: linkedin.com/company/banglaversity</li>
//             </ul>
//           </div>
//         </div>
//       </section>

//       {/* Right Section */}
//       <section className="w-full md:w-1/2 bg-white  p-10 flex flex-col justify-center">
//         <h2 className="text-2xl font-bold mb-1 text-gray-800">Send us a message</h2>
//         <p className="text-gray-600 mb-6">
//           You can reach us anytime via{" "}
//           <a href="mailto:info@banglaversity.com" className="text-[#013334] underline">
//             info@banglaversity.com
//           </a>
//         </p>

//         <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
//           <div>
//             <input
//               {...register("name", { required: "Name is required" })}
//               placeholder="Enter your name"
//               className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 ${
//                 errors.name ? "border-red-500" : "focus:ring-yellow-400"
//               }`}
//             />
//             {errors.name && (
//               <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
//             )}
//           </div>

//           <div>
//             <input
//               {...register("email", {
//                 required: "Email is required",
//                 pattern: {
//                   value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
//                   message: "Enter a valid email address",
//                 },
//               })}
//               placeholder="Enter your email"
//               className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 ${
//                 errors.email ? "border-red-500" : "focus:ring-yellow-400"
//               }`}
//             />
//             {errors.email && (
//               <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
//             )}
//           </div>

//           <div>
//             <input
//               {...register("phone", {
//                 required: "Phone number is required",
//                 pattern: {
//                   value: /^[0-9+\-\s()]{6,20}$/,
//                   message: "Enter a valid phone number",
//                 },
//               })}
//               placeholder="Enter your phone (e.g. +8801XXXXXXXXX)"
//               className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 ${
//                 errors.phone ? "border-red-500" : "focus:ring-yellow-400"
//               }`}
//             />
//             {errors.phone && (
//               <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
//             )}
//           </div>

//           <div>
//             <textarea
//               {...register("message", { required: "Message is required" })}
//               rows={4}
//               placeholder="How can we help?"
//               className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 ${
//                 errors.message ? "border-red-500" : "focus:ring-yellow-400"
//               }`}
//             ></textarea>
//             {errors.message && (
//               <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
//             )}
//           </div>

//           <button
//             type="submit"
//             disabled={isSubmitting}
//             className="w-full bg-yellow-500 hover:bg-[#013334] text-white font-semibold py-3 rounded-lg transition duration-300 disabled:opacity-50"
//           >
//             {isSubmitting ? "Submitting..." : "SUBMIT"}
//           </button>
//         </form>
//       </section>
//     </main>
//   );
// }
