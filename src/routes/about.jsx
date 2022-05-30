export default function About(props) {
  return (
    <main>
      <div classNames="h-screen w-screen flex flex-col justify-between">
        <div classNames="font-header text-center">
          <h1 classNames="font-display text-7xl mt-12 mb-6">StudeeCloud</h1>
        </div>

        <div classNames="flex justify-center font-header text-2xl mb-8">
          <span classNames="">developed by&nbsp;</span>
          <a href="https://github.com/l-m-meyer">lisa meyer</a>,&nbsp;
          <a href="https://github.com/KehanYe">kehan fu</a>
          <span>, and&nbsp;</span>
          <a href="https://github.com/gonzonieto">gonzo nieto</a>
        </div>

        <div classNames="flex mb-14">
          <h3 classNames="w-1/2 mr-10 flex justify-end items-center text-3xl text-center">
            <strong>STACK</strong>
            <img src="/icons/microchip.svg" classNames="w-9 ml-3" />
          </h3>
          <div classNames="text-2xl w-1/2">
            <h4>FRONT END</h4>
            <p classNames="mb-8">React — Tailwind — Howler.js</p>

            <h4>BACK END</h4>
            <p>Node.js — Express — PostgreSQL — Twilio API</p>
          </div>
        </div>

        <div classNames="flex">
          <h3 classNames="flex justify-end w-1/2 flex items-center mr-10 text-3xl text-center">
            <strong>ROADMAP</strong>
            <img src="/icons/road.svg" classNames="w-9 ml-3" />
          </h3>
          <div classNames="w-1/2 text-2xl">
            <p>Screen sharing</p>
            <p>Four-way calls</p>
            <p>User profile customization</p>
            <p>Customize avatars, save preferred settings</p>
            <p>Dark mode and other theme options</p>
          </div>
        </div>

        <span classNames="my-4 font-header text-center text-3xl">
          try out studeecloud
        </span>
        <a
          href="https://app.studee.cloud/login.html"
          classNames="font-accent text-center text-3xl"
        >
          app.studee.cloud/login.html
        </a>

        <div classNames="mt-auto mb-5 font-accent">
          <ul classNames="flex justify-evenly text-3xl list-disc">
            <li classNames="flex">
              <img src="/icons/circle-envelope.svg" classNames="w-8 mr-2" />
              <a href="mailto:hi@studee.cloud">hi@studee.cloud</a>
            </li>
            <li classNames="flex">
              <img src="/icons/github.svg" classNames="w-8 mr-2" />
              <a href="https://github.com/gonzonieto/studeecloud-client">
                github.com/studeecloud
              </a>
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
}
