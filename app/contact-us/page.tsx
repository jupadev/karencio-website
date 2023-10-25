import React from "react";
import Header from "../partials/Header";

const ContactUs = () => (
  <article className="flex flex-col min-h-screen overflow-hidden">
    <Header />
    <main className="container mt-8 mx-auto px-4 max-w-6xl mx-auto">
      <div className="relative pt-32 pb-10 md:pt-40 md:pb-16">
        <h1 className="mb-4 text-2xl font-extrabold leading-none tracking-tight text-gray-900 dark:text-white">
          Contact us
        </h1>
        <div>We offer a free consultation for all new clients.</div>
        <div className="mt-2">Phone: +1 (415) 5087170</div>
        <div className="mt-2">Email: hello@karencio.com</div>
        <p className="mt-2">
          Address:
          <br />
          2201 MENAUL BLVD NE, STE A,
          <br />
          Albuquerque, NM 87107
        </p>
        <h2 className="mb-4 mt-8 text-xl font-bold">Business Hours</h2>
        <table className="table-auto text-left text-sm font-light">
          <tbody>
            <tr className="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600">
              <td className="whitespace-nowrap px-6 py-4">Monday</td>
              <td className="whitespace-nowrap px-6 py-4">8:30am - 5:00pm</td>
            </tr>

            <tr className="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600">
              <td className="whitespace-nowrap px-6 py-4">Tuesday</td>
              <td className="whitespace-nowrap px-6 py-4">8:30am - 5:00pm</td>
            </tr>

            <tr className="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600">
              <td className="whitespace-nowrap px-6 py-4">Wednesday</td>
              <td className="whitespace-nowrap px-6 py-4">8:30am - 5:00pm</td>
            </tr>

            <tr className="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600">
              <td className="whitespace-nowrap px-6 py-4">Thursday</td>
              <td className="whitespace-nowrap px-6 py-4">8:30am - 5:00pm</td>
            </tr>

            <tr className="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600">
              <td className="whitespace-nowrap px-6 py-4">Friday</td>
              <td className="whitespace-nowrap px-6 py-4">8:30am - 5:00pm</td>
            </tr>

            <tr className="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600">
              <td className="whitespace-nowrap px-6 py-4">Saturday</td>
              <td className="whitespace-nowrap px-6 py-4">Closed</td>
            </tr>

            <tr className="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600">
              <td className="whitespace-nowrap px-6 py-4">Sunday</td>
              <td className="whitespace-nowrap px-6 py-4">Closed</td>
            </tr>
          </tbody>
        </table>
      </div>
    </main>
  </article>
);

export default ContactUs;
