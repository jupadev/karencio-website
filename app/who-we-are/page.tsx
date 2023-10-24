import React from 'react';
import Header from '../partials/Header';

const WhoWeArePage = () => (
  <article className="flex flex-col min-h-screen overflow-hidden">
    <Header />
    <main className="container mt-8 mx-auto px-4">
      <div className="relative pt-32 pb-10 md:pt-40 md:pb-16">
        <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Who We Are: Unleashing Creativity, Driving Innovation</h1>

        <p className="mb-3 text-gray-500 dark:text-gray-400">{`Welcome to the beating heart of Karencio Dev, where passion meets expertise, and a dynamic team comes together to redefine the digital landscape. Here's a glimpse into how we operate and why choosing us means choosing a partner dedicated to your success:`}</p>
        <section class="flex flex-wrap justify-center">
          <div class="w-6/12 sm:w-4/12 px-4">
            <img alt="Company owner" src="/images/perfil-jpv.jpeg" class="shadow-lg rounded-full max-w-full h-auto align-middle border-none" />
          </div>
          <p>Juan Pablo Vargas, CEO</p>
          <span>Consultant IT Specialist</span>
        </section>
        <section>
          <h2 className="text-2xl font-extrabold dark:text-white">1. A Collective of Visionaries:</h2>
          <p className="mb-3 text-gray-500 dark:text-gray-400">{`At Karencio Dev, we are more than a team; we are a collective of visionaries driven by a shared passion for pushing boundaries. Our diverse backgrounds and skill sets converge to bring fresh perspectives to every project, ensuring a melting pot of creativity and innovation.`}</p>

          <h2 className="text-2xl font-extrabold dark:text-white">2. Client-Centric to the Core:</h2>
          <p className="mb-3 text-gray-500 dark:text-gray-400">{`Your success is our success. That's why our client-centric approach is not just a philosophy but a way of life at Karencio Dev. We listen intently to your needs, collaborate transparently, and remain committed to delivering solutions that align with your goals.`}</p>

          <h2 className="text-2xl font-extrabold dark:text-white">3. Commitment to Excellence:</h2>
          <p className="mb-3 text-gray-500 dark:text-gray-400">{`Excellence is not just a goal; it's a standard we uphold in every aspect of our work. From the initial consultation to the final launch, we set the bar high and strive for nothing less than exceptional. Our commitment to excellence is the driving force behind our innovative solutions.`}</p>

          <h2 className="text-2xl font-extrabold dark:text-white">4. Open Communication and Transparency:</h2>
          <p className="mb-3 text-gray-500 dark:text-gray-400">{`User experience is at the forefront of our design philosophy. We meticulously craft interfaces that are not only aesthetically pleasing but also intuitive and user-friendly. From navigation to functionality, we prioritize the end-user, delivering an experience that keeps them engaged.`}</p>

          <h2 className="text-2xl font-extrabold dark:text-white">5. Continuous Learning and Adaptability:</h2>
          <p className="mb-3 text-gray-500 dark:text-gray-400">{`In the dynamic world of technology, standing still is not an option. At Karencio Dev, we embrace a culture of continuous learning and adaptability. Our team is always on the pulse of industry trends, ensuring that our solutions are not just current but cutting-edge.`}</p>

          <h2 className="text-2xl font-extrabold dark:text-white">6. Fun, Creativity, and Flexibility:</h2>
          <p className="mb-3 text-gray-500 dark:text-gray-400">{`Work doesn't have to be mundane; it can be a celebration of creativity and collaboration. Our workplace is infused with a spirit of fun and camaraderie. We believe that a positive, engaging environment is the breeding ground for the most innovative ideas.`}</p>

          <h3 className="text-xl font-extrabold dark:text-white">Join Us on the Journey:</h3>
          <p className="mb-3 text-gray-500 dark:text-gray-400">{`At Karencio Dev, we're not just building websites; we're shaping experiences and driving digital transformation. If you're looking for a team that's as invested in your success as you are, you've found it. Join us on the journey to redefine digital excellence. [Meet the Team] and discover the faces behind the innovation.`}</p>
        </section>
      </div>
    </main>
  </article>);

export default WhoWeArePage;