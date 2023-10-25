import React from 'react';
import Header from '../partials/Header';

const WhatWeDoPage = () => (
  <article className="flex flex-col min-h-screen overflow-hidden">
    <Header />
    <main className="container mt-8 mx-auto px-4 max-w-6xl mx-auto">
      <div className="relative pt-32 pb-10 md:pt-40 md:pb-16 ">
        <h1 className="mb-4 text-2xl font-extrabold leading-none tracking-tight text-gray-900 dark:text-white">What We Do: Crafting Digital Excellence</h1>

        <p className="mb-3 text-gray-500 dark:text-gray-400">{`Welcome to Karencio Dev, where innovation meets functionality, and digital aspirations become reality. As a leading web development company, we specialize in providing a spectrum of services that seamlessly blend creativity, technology, and strategic thinking. Here's a glimpse into what sets us apart:`}</p>

        <h2 className="text-2xl font-extrabold dark:text-white">1. Customized Web Development Solutions:</h2>
        <p className="mb-3 text-gray-500 dark:text-gray-400">{`At the core of our expertise lies the art of crafting tailor-made web development solutions. Whether you're a startup, a growing business, or an established enterprise, we deliver websites that not only meet your needs but exceed expectations. Our team thrives on turning unique ideas into engaging and high-performing online experiences.`}</p>

        <h2 className="text-2xl font-extrabold dark:text-white">2. Innovative Design That Captivates:</h2>
        <p className="mb-3 text-gray-500 dark:text-gray-400">{`We understand that first impressions matter. Our designers are not just experts; they are artists who transform visions into visually stunning realities. Our commitment to innovative design ensures that your website not only captures attention but also reflects your brand identity with clarity and distinction.`}</p>

        <h2 className="text-2xl font-extrabold dark:text-white">3. Cutting-Edge Technology Integration:</h2>
        <p className="mb-3 text-gray-500 dark:text-gray-400">{`In the ever-evolving digital landscape, staying ahead requires a commitment to the latest technologies. We pride ourselves on our ability to seamlessly integrate cutting-edge solutions, ensuring your website is not just current but also future-proof.`}</p>

        <h2 className="text-2xl font-extrabold dark:text-white">4. User-Centric Approach:</h2>
        <p className="mb-3 text-gray-500 dark:text-gray-400">{`User experience is at the forefront of our design philosophy. We meticulously craft interfaces that are not only aesthetically pleasing but also intuitive and user-friendly. From navigation to functionality, we prioritize the end-user, delivering an experience that keeps them engaged.`}</p>

        <h2 className="text-2xl font-extrabold dark:text-white">5. Agile Development Methodology:</h2>
        <p className="mb-3 text-gray-500 dark:text-gray-400">{`Time is of the essence, and we value yours. Our agile development methodology ensures efficient project delivery without compromising on quality. We adapt to changes swiftly, providing you with flexibility and peace of mind throughout the development process.`}</p>

        <h2 className="text-2xl font-extrabold dark:text-white">6. Responsive Across Devices:</h2>
        <p className="mb-3 text-gray-500 dark:text-gray-400">{`A seamless experience across devices is no longer a luxury; it's a necessity. We design and develop websites that are not only responsive but also optimized for various devices and browsers. Your audience can enjoy a consistent and engaging experience, no matter how they access your site.`}</p>

        <h3 className="text-xl font-extrabold dark:text-white">Ready to Transform Your Digital Presence?</h3>
        <p className="mb-3 text-gray-500 dark:text-gray-400">{`At Karencio Dev, we're not just building websites; we're shaping digital success stories. Whether you're starting from scratch or looking to revamp your online presence, our team is ready to turn your vision into a compelling reality. Let's embark on a journey to digital excellence together. [Contact Us] to get started.`}</p>
      </div>
    </main>
  </article>);

export default WhatWeDoPage;