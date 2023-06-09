import { Motion } from "@motionone/solid";
import type { Component } from "solid-js";

const App: Component = () => {
  return (
    <div class="bg-zinc-900 min-h-screen">
      <div class="container mx-auto py-11">
        <NavItem />
        <FirstSection />
        <SecondSection />
        <ThirdSection />
        <FourthSection />
        <FifthSection />
        <Footer />
      </div>
    </div>
  );
};

const NavItem: Component = () => {
  return (
    <div>
      <div class="text-gray-100 flex gap-5 items-center">
        <img
          loading="lazy"
          class="w-16 h-16 rounded-full object-cover"
          src="/profile.png"
          alt="myprofile"
        />
        <p class="text-2xl font-semibold">Kusuma Sandi</p>
      </div>
      <div class="flex text-teal-600 md:text-lg gap-2 lg:gap-5 font-semibold pt-5">
        <a href="#" class="hover:underline">
          Home
        </a>
        <a href="https://github.com/mrspec7er" class="hover:underline">
          GitHub
        </a>
        <a href="mailto: wijayakusumasandi@gmail.com" class="hover:underline">
          Email
        </a>
        <a href="https://twitter.com/miracle8oys" class="hover:underline">
          Twitter
        </a>
        <a
          href="https://www.linkedin.com/in/kusuma-sandi-9646a1208"
          class="hover:underline"
        >
          LinkedIn
        </a>
      </div>
    </div>
  );
};

const FirstSection: Component = () => {
  return (
    <Motion 
    animate={{ opacity: [0, 1] }}
    transition={{ duration: 1, easing: "ease-in-out" }}>
    <div class="pt-5 max-w-3xl">
      <p class="md:text-3xl text-2xl font-bold text-gray-100">Hi, I'm Sandi</p>
      {/* <p class="pt-2 md:text-lg text-gray-300">
        I'm a <span class="font-semibold">backend developer</span> who
        passionate about{" "}
        <span class="font-semibold">
          software architecture, design pattern,
        </span>{" "}
        and every new stack or infrastructure that can help us achive more{" "}
        <span class="font-semibold">
          performance, efficiency and simplicity.
        </span>
      </p> */}
      <p class="pt-2 md:text-lg text-gray-300">
        I'm a <span class="font-semibold">software engineer</span>, currently
        word as a <span class="font-semibold">backend developer</span> but i
        still love to do frontend stuff especially with{" "}
        <span class="font-semibold">React </span>and{" "}
        <span class="font-semibold">Solid.js.</span> My goals is to bring
        agility, efficiency, and computational method to solve real world
        problem around us
        <span class="font-semibold">
          software architecture, design pattern,
        </span>{" "}
        and every new stack or infrastructure that can help us achive more{" "}
        <span class="font-semibold">
          performance, efficiency and simplicity.
        </span>
      </p>
    </div>
    </Motion>
  );
};

const SecondSection: Component = () => {
  return (
    <div>
      <p class="text-xl font-semibold text-gray-100 pt-5">
        My Educational Background :
      </p>
      <ul class="text-gray-300 list-disc pl-5 md:text-lg pt-2">
        <li>
          Bachelor of Computer Science -{" "}
          <span class="text-teal-600 hover:underline font-semibold">
            <a href="https://www.unud.ac.id/">Udayana University</a>
          </span>
        </li>
        <li>
          Fullstack Web Bootcamp -{" "}
          <span class="text-teal-600 hover:underline font-semibold">
            <a href="https://www.binaracademy.com/">Binar Academy</a>
          </span>
        </li>
      </ul>
    </div>
  );
};

const ThirdSection: Component = () => {
  return (
    <Motion 
    animate={{ y: [0, 100, 50, 0], opacity: [0, 0.3, 0.6, 1] }}
    transition={{duration: 3, delay: 2}}
  >
    <div>
      <p class="md:text-2xl text-xl font-bold text-gray-100 pt-5">
        Stack I Use For Software Development{" "}
      </p>
      <div class="pt-3 lg:-mx-5 flex flex-wrap justify-center flex-col gap-3 md:flex-row">
        {/* <a
          href="https://www.fastify.io/"
          class="w-full lg:w-[32%] md:w-[49%] md:h-40 lg:h-40 h-max flex gap-3 flex-col px-3 py-5 items-center border-2 border-gray-700 rounded-lg md:flex-row hover:scale-105"
        >
          <img
            loading="lazy"
            class="object-cover w-48 h-auto rounded-t-lg md:w-20 md:rounded-none md:rounded-l-lg"
            src="/fastify.png"
            alt="stack-logo"
          />
          <div class="flex flex-col justify-between leading-normal">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-teal-600">
              Fastify
            </h5>
            <p class=" font-normal text-gray-700 dark:text-gray-400">
              Fast and low overhead web framework, for Node.js
            </p>
          </div>
        </a>
        */}
        <a
          href="https://expressjs.com/"
          class="w-full lg:w-[32%] md:w-[49%] md:h-40 lg:h-40 h-max flex gap-3 flex-col px-3 py-5 items-center border-2 border-gray-700 rounded-lg md:flex-row hover:scale-105"
        >
          <img
            loading="lazy"
            class="object-cover w-32 h-auto rounded-t-lg md:w-20 md:rounded-none md:rounded-l-lg"
            src="/express.png"
            alt="stack-logo"
          />
          <div class="flex flex-col justify-between leading-normal">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-teal-600">
              Express
            </h5>
            <p class=" font-normal text-gray-700 dark:text-gray-400">
              Fast, unopinionated, minimalist web framework for Node.js
            </p>
          </div>
        </a>
        <a
          href="https://nestjs.com/"
          class="w-full lg:w-[32%] md:w-[49%] md:h-40 lg:h-40 h-max flex gap-3 flex-col px-3 py-5 items-center border-2 border-gray-700 rounded-lg md:flex-row hover:scale-105"
        >
          <img
            loading="lazy"
            class="object-cover w-32 h-auto rounded-t-lg md:w-20 md:rounded-none md:rounded-l-lg"
            src="/nestjs.png"
            alt="stack-logo"
          />
          <div class="flex flex-col justify-between leading-normal">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-teal-600">
              Nestjs
            </h5>
            <p class=" font-normal text-gray-700 dark:text-gray-400">
              A progressive Node.js framework for building efficient, reliable
              and scalable server-side applications.
            </p>
          </div>
        </a>
        <a
          href="https://www.typescriptlang.org/"
          class="w-full lg:w-[32%] md:w-[49%] md:h-40 lg:h-40 h-max flex gap-3 flex-col px-3 py-5 items-center border-2 border-gray-700 rounded-lg md:flex-row hover:scale-105"
        >
          <img
            loading="lazy"
            class="object-cover w-28 h-auto rounded-t-lg md:w-20 md:rounded-none md:rounded-l-lg"
            src="/typescript.png"
            alt="stack-logo"
          />
          <div class="flex flex-col justify-between leading-normal">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-teal-600">
              Typescript
            </h5>
            <p class=" font-normal text-gray-700 dark:text-gray-400">
              Strongly typed programming language that builds on JavaScript,
              giving you better tooling at any scale.
            </p>
          </div>
        </a>
        <a
          href="https://aws.amazon.com/lambda/"
          class="w-full lg:w-[32%] md:w-[49%] md:h-40 lg:h-40 h-max flex gap-3 flex-col px-3 py-5 items-center border-2 border-gray-700 rounded-lg md:flex-row hover:scale-105"
        >
          <img
            loading="lazy"
            class="object-cover w-28 h-auto rounded-lg md:w-20"
            src="/lambda.png"
            alt="stack-logo"
          />
          <div class="flex flex-col justify-between leading-normal">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-teal-600">
              Lambda
            </h5>
            <p class=" font-normal text-gray-700 dark:text-gray-400">
              A serverless compute service that lets you run code without
              provisioning or managing servers
            </p>
          </div>
        </a>
        <a
          href="https://www.prisma.io/"
          class="w-full lg:w-[32%] md:w-[49%] md:h-40 lg:h-40 h-max flex gap-3 flex-col px-3 py-5 items-center border-2 border-gray-700 rounded-lg md:flex-row hover:scale-105"
        >
          <img
            loading="lazy"
            class="object-cover w-32 h-auto rounded-t-lg md:w-20 md:rounded-none md:rounded-l-lg"
            src="/prisma.png"
            alt="stack-logo"
          />
          <div class="flex flex-col justify-between leading-normal">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-teal-600">
              Prisma
            </h5>
            <p class=" font-normal text-gray-700 dark:text-gray-400">
              Next-generation Node.js and TypeScript ORM
            </p>
          </div>
        </a>
        <a
          href="https://www.solidjs.com/"
          class="w-full lg:w-[32%] md:w-[49%] md:h-40 lg:h-40 h-max flex gap-3 flex-col px-3 py-5 items-center border-2 border-gray-700 rounded-lg md:flex-row hover:scale-105"
        >
          <img
            loading="lazy"
            class="object-cover w-32 h-auto rounded-t-lg md:w-20 md:rounded-none md:rounded-l-lg"
            src="/solid.png"
            alt="stack-logo"
          />
          <div class="flex flex-col justify-between leading-normal">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-teal-600">
              Solid JS
            </h5>
            <p class=" font-normal text-gray-700 dark:text-gray-400">
              Simple and performant reactivity for building user interfaces.
            </p>
          </div>
        </a>
        <a
          href="https://react.dev/"
          class="w-full lg:w-[32%] md:w-[49%] md:h-40 lg:h-40 h-max flex gap-3 flex-col px-3 py-5 items-center border-2 border-gray-700 rounded-lg md:flex-row hover:scale-105"
        >
          <img
            loading="lazy"
            class="object-cover w-32 h-auto rounded-t-lg md:w-20 md:rounded-none md:rounded-l-lg"
            src="/react.png"
            alt="stack-logo"
          />
          <div class="flex flex-col justify-between leading-normal">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-teal-600">
              React
            </h5>
            <p class=" font-normal text-gray-700 dark:text-gray-400">
              React lets you build user interfaces out of individual pieces
              called components.
            </p>
          </div>
        </a>
        <a
          href="https://tailwindcss.com/"
          class="w-full lg:w-[32%] md:w-[49%] md:h-40 lg:h-40 h-max flex gap-3 flex-col px-3 py-5 items-center border-2 border-gray-700 rounded-lg md:flex-row hover:scale-105"
        >
          <img
            loading="lazy"
            class="object-cover w-32 h-auto rounded-t-lg md:w-20 md:rounded-none md:rounded-l-lg"
            src="/tailwind.png"
            alt="stack-logo"
          />
          <div class="flex flex-col justify-between leading-normal">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-teal-600">
              Tailwind
            </h5>
            <p class=" font-normal text-gray-700 dark:text-gray-400">
              A utility-first CSS framework packed with classes that can be
              composed to build any design, directly in your markup.
            </p>
          </div>
        </a>
        <a
          href="https://tanstack.com/query/v3/"
          class="w-full lg:w-[32%] md:w-[49%] md:h-40 lg:h-40 h-max flex gap-3 flex-col px-3 py-5 items-center border-2 border-gray-700 rounded-lg md:flex-row hover:scale-105"
        >
          <img
            loading="lazy"
            class="object-cover w-28 h-auto rounded-t-lg md:w-20 md:rounded-none md:rounded-l-lg"
            src="/tanstack.png"
            alt="stack-logo"
          />
          <div class="flex flex-col justify-between leading-normal">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-teal-600">
              TanStack Query
            </h5>
            <p class=" font-normal text-gray-700 dark:text-gray-400">
              Powerful asynchronous state management for TS/JS, React, Solid,
              Vue and Svelte
            </p>
          </div>
        </a>
        <a
          href="https://www.docker.com/"
          class="w-full lg:w-[32%] md:w-[49%] md:h-40 lg:h-40 h-max flex gap-3 flex-col px-3 py-5 items-center border-2 border-gray-700 rounded-lg md:flex-row hover:scale-105"
        >
          <img
            loading="lazy"
            class="object-cover w-32 h-auto rounded-t-lg md:w-20 md:rounded-none md:rounded-l-lg"
            src="/docker.png"
            alt="stack-logo"
          />
          <div class="flex flex-col justify-between leading-normal">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-teal-600">
              Docker
            </h5>
            <p class=" font-normal text-gray-700 dark:text-gray-400">
              OS-level virtualization to deliver software in packages containers
            </p>
          </div>
        </a>
        <a
          href="https://graphql.org/"
          class="w-full lg:w-[32%] md:w-[49%] md:h-40 lg:h-40 h-max flex gap-3 flex-col px-3 py-5 items-center border-2 border-gray-700 rounded-lg md:flex-row hover:scale-105"
        >
          <img
            loading="lazy"
            class="object-cover w-28 h-auto rounded-t-lg md:w-20 md:rounded-none md:rounded-l-lg"
            src="/graphql.png"
            alt="stack-logo"
          />
          <div class="flex flex-col justify-between leading-normal">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-teal-600">
              GraphQL
            </h5>
            <p class=" font-normal text-gray-700 dark:text-gray-400">
              A query language for APIs and a runtime for fulfilling those
              queries with your existing data.
            </p>
          </div>
        </a>
        {/* <a
          href="https://midtrans.com/"
          class="w-full lg:w-[32%] md:w-[49%] md:h-40 lg:h-40 h-max flex gap-3 flex-col px-3 py-5 items-center border-2 border-gray-700 rounded-lg md:flex-row hover:scale-105"
        >
          <img
            loading="lazy"
            class="object-cover w-32 h-auto rounded-t-lg md:w-20 md:rounded-none md:rounded-l-lg"
            src="/midtrans.png"
            alt="stack-logo"
          />
          <div class="flex flex-col justify-between leading-normal">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-teal-600">
              Midtrans
            </h5>
            <p class=" font-normal text-gray-700 dark:text-gray-400">
              Complete payment solutions tailored for your business
            </p>
          </div>
        </a> */}
      </div>
    </div>
    </Motion>
  );
};

const FourthSection: Component = () => {
  return (
    <div>
      <p class="text-xl font-semibold text-gray-100 pt-5">
        Portofolio Project :
      </p>
      <ul class="text-gray-300 list-disc pl-5 md:text-lg pt-2">
        <li>
          <span class="text-teal-600 hover:underline font-semibold">
            <a href="https://github.com/mrspec7er/inventory">Inventory App</a>
          </span>{" "}
          <span>
            - Boilerplate for creating fullstack app with state management,
            client-side caching, jwt-auth, fastify middleware, and react.js{" "}
          </span>
        </li>
        <li>
          <span class="text-teal-600 hover:underline font-semibold">
            <a href="https://github.com/mrspec7er/nest-graphql">
              Event Organizere Manager
            </a>
          </span>{" "}
          <span>
            - Teamwork project management tools for managing event organizer
            build with nest.js, graphql, and mongodb{" "}
          </span>
        </li>
      </ul>
    </div>
  );
};

const FifthSection: Component = () => {
  return (
    <Motion 
    animate={{ x: [0, 100, 50, 0], opacity: [0, 0.3, 0.6, 1] }}
    transition={{duration: 3,delay: 2}}
  >
    <div>
      <p class="text-xl font-semibold text-gray-100 pt-5">Skills :</p>
      <ul class="text-gray-300 list-disc pl-5 md:text-lg pt-2 grid md:grid-cols-3 grid-cols-2 gap-5 mx-11">
        <li>
          <span class="text-teal-600 hover:underline font-semibold text-base">
            <a href="/">Serverless Architecture</a>
          </span>{" "}
        </li>
        <li>
          <span class="text-teal-600 hover:underline font-semibold text-base">
            <a href="/">Clean Code Principles </a>
          </span>{" "}
        </li>
        <li>
          <span class="text-teal-600 hover:underline font-semibold text-base">
            <a href="/">Test Driven Development</a>
          </span>{" "}
        </li>
        <li>
          <span class="text-teal-600 hover:underline font-semibold text-base">
            <a href="/">Event Driven Arcitecture</a>
          </span>{" "}
        </li>
        <li>
          <span class="text-red-500 hover:underline font-semibold text-base">
            <a href="/">Functional Programming</a>
          </span>{" "}
        </li>
        <li>
          <span class="text-red-500 hover:underline font-semibold text-base">
            <a href="/">Websocket </a>
          </span>{" "}
        </li>
        <li>
          <span class="text-red-500 hover:underline font-semibold text-base">
            <a href="/">Message Broker</a>
          </span>{" "}
        </li>
      </ul>
    </div>
  </Motion>
  );
};

const Footer: Component = () => {
  return (
    <footer class="rounded-lg shadow md:m-5 mt-24">
      <div class="w-full max-w-screen-xl mx-auto p-2">
        <hr class="my-6 border-gray-500 sm:mx-auto lg:my-8" />
        <span class="block text-sm text-gray-500 sm:text-center">
          © 2023{" "}
          <a href="https://flowbite.com/" class="hover:underline">
            Mrspec7er™
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};

export default App;
