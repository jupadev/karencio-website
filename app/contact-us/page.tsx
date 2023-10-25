import React from 'react';
import Header from '../partials/Header';

const ContactUs = () => (
  <article className="flex flex-col min-h-screen overflow-hidden">
    <Header />
    <main className="container mt-8 mx-auto px-4">
      <div className="relative pt-32 pb-10 md:pt-40 md:pb-16">
        <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Contact us</h1>
        <div>
          We offer a free consultation for all new clients.
        </div>
        <div>
          Phone: +1 (415) 5087170
        </div>
        <div>
          Email: hello@karencio.com
        </div>
        <p>
          Address:<br/>
          2201 MENAUL BLVD NE, STE A,<br/>
          Albuquerque, NM 87107
        </p>
        <h2 className="mt-4">Business Hours</h2>
        <table className="table-auto">
          <tbody><tr>
            <td className="day font-weight-bold">Monday</td>
            <td className="opens">8:30am</td>
            <td>-</td>
            <td className="closes">5:00pm</td>
          </tr>

            <tr>
              <td className="day font-weight-bold">Tuesday</td>
              <td className="opens">8:30am</td>
              <td>-</td>
              <td className="closes">5:00pm</td>
            </tr>

            <tr>
              <td className="day font-weight-bold">Wednesday</td>
              <td className="opens">8:30am</td>
              <td>-</td>
              <td className="closes">5:00pm</td>
            </tr>

            <tr>
              <td className="day font-weight-bold">Thursday</td>
              <td className="opens">8:30am</td>
              <td>-</td>
              <td className="closes">5:00pm</td>
            </tr>

            <tr>
              <td className="day font-weight-bold">Friday</td>
              <td className="opens">8:30am</td>
              <td>-</td>
              <td className="closes">5:00pm</td>
            </tr>

            <tr>
              <td className="day font-weight-bold">Saturday</td>
              <td className="opens">Closed</td>
              <td>-</td>
              <td className="closes"></td>
            </tr>

            <tr>
              <td className="day font-weight-bold">Sunday</td>
              <td className="opens">Closed</td>
              <td>-</td>
              <td className="closes"></td>
            </tr>

          </tbody></table>

      </div>
    </main>
  </article>);

export default ContactUs;