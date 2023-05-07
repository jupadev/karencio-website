"use client";
import React, { FormEvent, useState } from "react";
import emailjs from "@emailjs/browser";

const {
  NEXT_PUBLIC_EMAIL_SERVICE_ID = "",
  NEXT_PUBLIC_EMAIL_APP_ID = "",
  NEXT_PUBLIC_EMAIL_TEMPLATE_ID = "",
} = process.env;

const Contact = () => {
  const [sending, setSending] = useState(false);
  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);
    const { elements } = e.currentTarget;
    const name = (elements.item(0) as HTMLInputElement).value;
    const email = (elements.item(1) as HTMLInputElement).value;
    const message = (elements.item(2) as HTMLInputElement).value;

    const templateParams = {
      fromName: name,
      fromEmail: email,
      message,
    };
    console.log("templateParams", templateParams);
    emailjs
      .send(
        NEXT_PUBLIC_EMAIL_SERVICE_ID,
        NEXT_PUBLIC_EMAIL_TEMPLATE_ID,
        templateParams,
        NEXT_PUBLIC_EMAIL_APP_ID
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
        },
        (err) => {
          console.log("FAILED...", err);
        }
      )
      .finally(() => {
        setSending(false);
      });
  };

  return (
    <main className="grow">
      <div className="relative max-w-6xl mx-auto">
        <div className="relative pt-32 pb-10 md:pt-40 md:pb-16">
          <h1>Contact page</h1>
          <form className="flex flex-col" onSubmit={submitHandler}>
            <div className="my-4 flex gap-3">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                className="text-gray-700 py-1 px-2 rounded"
                max={200}
                name="name"
              />
            </div>
            <div className="my-4 flex gap-3">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                className="text-gray-700 py-1 px-2 rounded"
                max={200}
                name="email"
              />
            </div>
            <div className="my-4 flex gap-3">
              <label htmlFor="message">Message</label>
              <textarea
                rows={10}
                className="text-gray-700 py-1 px-2 rounded"
                cols={40}
                maxLength={1000}
                name="message"
              />
            </div>
            <button
              className="mt-6 btn-sm text-white bg-purple-600 hover:bg-purple-700 w-fit disabled:bg-purple-300 disabled:text-gray-600"
              disabled={sending}
            >
              {sending ? "Sending ..." : "Send"}
            </button>
          </form>
        </div>
      </div>
    </main>
  );
};

export default Contact;
