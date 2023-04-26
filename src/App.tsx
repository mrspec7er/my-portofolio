import type { Component } from "solid-js";

const App: Component = () => {
  return (
    <div class="bg-zinc-900 min-h-screen">
      <div class="container mx-auto py-11">
        <NavItem />
        <FirstSection />
        <SecondSection />
        <ThirdSection />
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
        <a href="https://www.linkedin.com/in/kusuma-sandi-9646a1208" class="hover:underline">
          LinkedIn
        </a>
      </div>
    </div>
  );
};

const FirstSection: Component = () => {
  return (
    <div class="pt-5 max-w-3xl">
      <p class="md:text-3xl text-2xl font-bold text-gray-100">Hi, I'm Sandi</p>
      <p class="pt-2 md:text-lg text-gray-300">
        I'm a freelance <span class="font-semibold">fullstack developer</span>{" "}
        who interested in{" "}
        <span class="font-semibold">
          software architecture, design pattern etc
        </span>
        . And i like to learn new technology that can help us achive more{" "}
        <span class="font-semibold">
          performance, efficiency and simplicity
        </span>
      </p>
    </div>
  );
};

const SecondSection: Component = () => {
  return (
    <div>
      <p class="text-xl font-semibold text-gray-100 pt-5">
        My educational background :
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
    <div>
      <p class="md:text-2xl text-xl font-bold text-gray-100 pt-5">
        Stack That I Use For Software Development{" "}
      </p>
      <div class="pt-3 lg:-mx-5 flex flex-wrap justify-center flex-col gap-3 md:flex-row">
        <a
          href="https://www.fastify.io/"
          class="w-full lg:w-[32%] md:w-[49%] md:h-40 lg:h-40 h-64 flex gap-3 flex-col px-3 py-5 items-center border-2 border-gray-700 rounded-lg md:flex-row hover:scale-105"
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
        <a
          href="https://expressjs.com/"
          class="w-full lg:w-[32%] md:w-[49%] md:h-40 lg:h-40 h-64 flex gap-3 flex-col px-3 py-5 items-center border-2 border-gray-700 rounded-lg md:flex-row hover:scale-105"
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
          href="https://www.typescriptlang.org/"
          class="w-full lg:w-[32%] md:w-[49%] md:h-40 lg:h-40 h-64 flex gap-3 flex-col px-3 py-5 items-center border-2 border-gray-700 rounded-lg md:flex-row hover:scale-105"
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
              Strongly typed programming language that builds on JavaScript.
            </p>
          </div>
        </a>
        <a
          href="https://www.prisma.io/"
          class="w-full lg:w-[32%] md:w-[49%] md:h-40 lg:h-40 h-64 flex gap-3 flex-col px-3 py-5 items-center border-2 border-gray-700 rounded-lg md:flex-row hover:scale-105"
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
          class="w-full lg:w-[32%] md:w-[49%] md:h-40 lg:h-40 h-64 flex gap-3 flex-col px-3 py-5 items-center border-2 border-gray-700 rounded-lg md:flex-row hover:scale-105"
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
          class="w-full lg:w-[32%] md:w-[49%] md:h-40 lg:h-40 h-64 flex gap-3 flex-col px-3 py-5 items-center border-2 border-gray-700 rounded-lg md:flex-row hover:scale-105"
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
              The library for web and native user interfaces
            </p>
          </div>
        </a>
        <a
          href="https://tailwindcss.com/"
          class="w-full lg:w-[32%] md:w-[49%] md:h-40 lg:h-40 h-64 flex gap-3 flex-col px-3 py-5 items-center border-2 border-gray-700 rounded-lg md:flex-row hover:scale-105"
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
              Rapidly build modern websites without ever leaving your HTML.
            </p>
          </div>
        </a>
        <a
          href="https://tanstack.com/query/v3/"
          class="w-full lg:w-[32%] md:w-[49%] md:h-40 lg:h-40 h-64 flex gap-3 flex-col px-3 py-5 items-center border-2 border-gray-700 rounded-lg md:flex-row hover:scale-105"
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
          class="w-full lg:w-[32%] md:w-[49%] md:h-40 lg:h-40 h-64 flex gap-3 flex-col px-3 py-5 items-center border-2 border-gray-700 rounded-lg md:flex-row hover:scale-105"
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
          href="https://supabase.com/"
          class="w-full lg:w-[32%] md:w-[49%] md:h-40 lg:h-40 h-64 flex gap-3 flex-col px-3 py-5 items-center border-2 border-gray-700 rounded-lg md:flex-row hover:scale-105"
        >
          <img
            loading="lazy"
            class="object-cover w-28 h-auto rounded-t-lg md:w-20 md:rounded-none md:rounded-l-lg"
            src="/supabase.png"
            alt="stack-logo"
          />
          <div class="flex flex-col justify-between leading-normal">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-teal-600">
              Supabase
            </h5>
            <p class=" font-normal text-gray-700 dark:text-gray-400">
              Backend service provider for Auth, Edge Functions, Realtime
              subscriptions, and Storage.
            </p>
          </div>
        </a>
        <a
          href="https://midtrans.com/"
          class="w-full lg:w-[32%] md:w-[49%] md:h-40 lg:h-40 h-64 flex gap-3 flex-col px-3 py-5 items-center border-2 border-gray-700 rounded-lg md:flex-row hover:scale-105"
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
        </a>
      </div>
    </div>
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
