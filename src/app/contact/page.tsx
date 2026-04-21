"use client";
import { useState } from "react";

export default function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
        website: "", // honeypot
    });
    const [status, setStatus] = useState<
        "idle" | "loading" | "success" | "error"
    >("idle");
    const [errorMsg, setErrorMsg] = useState("");

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    ) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("loading");
        setErrorMsg("");

        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });
            const data = await res.json();

            if (data.success) {
                setStatus("success");
                setFormData({ name: "", email: "", message: "", website: "" });
            } else {
                setStatus("error");
                setErrorMsg(data.error || "Something went wrong.");
            }
        } catch {
            setStatus("error");
            setErrorMsg("Network error. Please try again.");
        }
    };

    return (
        <section className="py-10 md:py-30">
            <div className="grid max-w-6xl grid-cols-1 px-6 mx-auto lg:px-8 md:grid-cols-2 md:divide-x">
                <div className="py-6 md:py-0 md:px-6">
                    <h1 className="text-4xl font-bold">Get in touch</h1>
                    <p className="pt-2 pb-4">
                        Fill in the form to start a conversation
                    </p>
                    <div className="space-y-4">
                        <p className="flex items-center">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                className="w-5 h-5 mr-2 sm:mr-6"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                                    clipRule="evenodd"
                                ></path>
                            </svg>
                            <span>
                                Road# 16A, House# 1B, Apartment# A3, Gulshan 1,
                                Dhaka 1212, Bangladesh
                            </span>
                        </p>
                        <p className="flex items-center">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                className="w-5 h-5 mr-2 sm:mr-6"
                            >
                                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
                            </svg>
                            <span>+8801713077179</span>
                        </p>
                        <p className="flex items-center">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                className="w-5 h-5 mr-2 sm:mr-6"
                            >
                                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                            </svg>
                            <span>tlc@tlcbd.com</span>
                        </p>
                    </div>
                </div>
                <form
                    onSubmit={handleSubmit}
                    className="flex flex-col py-6 space-y-6 md:py-0 md:px-6"
                >
                    <label className="block">
                        <span className="mb-1">Full name</span>
                        <input
                            type="text"
                            name="name"
                            required
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Your Full Name"
                            className="block w-full border-1 p-1 md:px-3 md:py-2 rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:dark:ring-violet-600 dark:bg-gray-100"
                        />
                    </label>
                    <label className="block">
                        <span className="mb-1">Email address</span>
                        <input
                            type="email"
                            name="email"
                            required
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Your Email Address"
                            className="block border-1 p-1 w-full md:px-3 md:py-2 rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:dark:ring-violet-600 dark:bg-gray-100"
                        />
                    </label>
                    <label className="block">
                        <span className="mb-1">Message</span>
                        <textarea
                            name="message"
                            required
                            value={formData.message}
                            onChange={handleChange}
                            placeholder="Write your message"
                            className="block w-full h-45 rounded-md border-1 p-1 md:px-3 md:py-4 focus:ring focus:ring-opacity-75 focus:dark:ring-violet-600 dark:bg-gray-100"
                        ></textarea>
                    </label>

                    {/* Honeypot — hidden from users, catches bots */}
                    <input
                        type="text"
                        name="website"
                        value={formData.website}
                        onChange={handleChange}
                        tabIndex={-1}
                        autoComplete="off"
                        style={{ position: "absolute", left: "-9999px" }}
                        aria-hidden="true"
                    />

                    <button
                        type="submit"
                        disabled={status === "loading"}
                        className="self-center px-8 py-3 text-lg rounded focus:ring hover:ring focus:ring-opacity-75 bg-blue-500 text-white disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                        {status === "loading" ? "Sending..." : "Submit"}
                    </button>

                    {status === "success" && (
                        <p className="text-center text-green-600 font-medium">
                            ✓ Message sent! We'll get back to you soon.
                        </p>
                    )}
                    {status === "error" && (
                        <p className="text-center text-red-600 font-medium">
                            {errorMsg}
                        </p>
                    )}
                </form>
            </div>
        </section>
    );
}
