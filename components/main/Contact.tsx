"use client";
import React, { useState, FormEvent } from "react";

const Contact: React.FC = () => {
    const [emailSubmitted, setEmailSubmitted] = useState<boolean>(false);

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const target = e.target as typeof e.target & {
            email: { value: string };
            subject: { value: string };
            message: { value: string };
        };
        const data = {
            email: target.email.value,
            subject: target.subject.value,
            message: target.message.value,
        };
        const JSONdata = JSON.stringify(data);
        const endpoint = "/api/send";

        const options: RequestInit = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSONdata,
        };

        const response = await fetch(endpoint, options);
        const resData = await response.json();

        if (response.status === 200) {
            console.log("Message sent.");
            setEmailSubmitted(true);
        }
    };

    return (
        <div id="contact-me" className="flex justify-around items-center px-1">
            <section
                id="contact"
                className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative"
            >
                <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>

                <div className="z-10" >
                    <h5 className="text-xl font-bold text-white my-2">
                        Let&apos;s Connect
                    </h5>
                    <p className="text-[#ADB7BE] mb-4 max-w-md">
                        {" "}
                        I&apos;m currently looking for new opportunities, my inbox is always
                        open. Whether you have a question or just want to say hi, I&apos;ll
                        try my best to get back to you!
                    </p>
                </div>
                <div>
                    {emailSubmitted ? (
                        <p className="text-green-500 text-sm mt-2">
                            Email sent successfully!
                        </p>
                    ) : (
                        <form className="flex flex-col px-6" onSubmit={handleSubmit}>
                            <div className="mb-6">
                                <label
                                    htmlFor="email"
                                    className="text-white block mb-2 text-sm font-medium"
                                >
                                    Your email
                                </label>
                                <input
                                    name="email"
                                    type="email"
                                    id="email"
                                    required
                                    className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                                    placeholder="johndoe@email.com"
                                />
                            </div>
                            <div className="mb-6">
                                <label
                                    htmlFor="subject"
                                    className="text-white block text-sm mb-2 font-medium"
                                >
                                    Subject
                                </label>
                                <input
                                    name="subject"
                                    type="text"
                                    id="subject"
                                    required
                                    className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                                    placeholder="Cool Portfolio"
                                />
                            </div>
                            <div className="mb-6">
                                <label
                                    htmlFor="message"
                                    className="text-white block text-sm mb-2 font-medium"
                                >
                                    Message
                                </label>
                                <textarea
                                    name="message"
                                    id="message"
                                    className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                                    placeholder="I also am a fan of Naruto!"
                                />
                            </div>
                            <a className='py-2 button-primary text-center text-white cursor-pointer rounded-lg w-full'>
                                Send Message
                            </a>
                        </form>
                    )}
                </div>
            </section>
        </div>
    );
};

export default Contact;