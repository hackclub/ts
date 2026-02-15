'use client';

import img1120 from '@/img/IMG_1120.png';
import img1119 from '@/img/IMG_1119.png';
import img1118 from '@/img/IMG_1118.png';
import img1117 from '@/img/IMG_1117.png';
import img1116 from '@/img/IMG_1116.png';
import img1114 from '@/img/IMG_1114.png';
import img1111 from '@/img/IMG_1111.png';

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-8 bg-gray-50">
      {/* Global animation style */}
      <style jsx global>{`
        @keyframes pulse-scale {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.05);
          }
        }
      `}</style>

      <div className="mb-8 flex flex-col items-center gap-6">
        {/* Main Image */}
        <img
          src={img1118.src}
          alt="Main"
          className="w-full max-w-lg rounded-2xl shadow-lg object-cover"
        />

        <div className="text-red-800 text-2xl font-bold text-center">
          This event has ended! Thanks to everyone who participated.
        </div>

        <span
          className="text-gray-400 text-4xl font-semibold line-through cursor-not-allowed select-none"
          aria-disabled="true"
        >
          SUBMIT YOUR PROJECT
        </span>

        {/* Description */}
        <h1 className="text-black text-3xl text-center">
          The Longer you spend, the long I'll spend drawing and the worse it will be
        </h1>
        <p className="text-black text-2xl text-center">
          I just know you have a Hackatime project that you have not submitted to any program yet...
        </p>
      </div>

      {/* Portfolio */}
      <h1 className="text-black text-3xl mb-4">The Club so far: (@CAN's Portfolio)</h1>
      <div className="flex gap-6 mb-8 flex-wrap justify-center">
        <div className="flex flex-col items-center">
          <img
            src={img1117.src}
            alt="Small 1"
            className="w-32 rounded-xl shadow-md object-cover"
          />
          <p className="mt-2 text-sm text-gray-700">@Aarav J</p>
        </div>

        <div className="flex flex-col items-center">
          <img
            src={img1116.src}
            alt="Small 2"
            className="w-32 rounded-xl shadow-md object-cover"
          />
          <p className="mt-2 text-sm text-gray-700">@reem</p>
        </div>

        <div className="flex flex-col items-center">
          <img
            src={img1114.src}
            alt="Small 3"
            className="w-32 rounded-xl shadow-md object-cover"
          />
          <p className="mt-2 text-sm text-gray-700">@crn</p>
        </div>

        <div className="flex flex-col items-center">
          <img
            src={img1120.src}
            alt="Small 4"
            className="w-32 rounded-xl shadow-md object-cover"
          />
          <p className="mt-2 text-sm text-gray-700">@Euan Ripper</p>
        </div>

        <div className="flex flex-col items-center">
          <img
            src={img1119.src}
            alt="Small 5"
            className="w-32 rounded-xl shadow-md object-cover"
          />
          <p className="mt-2 text-sm text-gray-700">@samuel</p>
        </div>

        <div className="flex flex-col items-center">
          <img
            src={img1111.src}
            alt="Small 6"
            className="w-32 rounded-xl shadow-md object-cover"
          />
          <p className="mt-2 text-sm text-gray-700">@Ruby</p>
        </div>
      </div>

      {/* Rules */}
      <h1 className="text-black text-3xl mb-2">Rules:</h1>
      <ul className="text-black list-disc pl-6 space-y-1">
        <li>You need to log your project on Hackatime</li>
        <li>It can be a 30 second project or 10 hour project — it needs to be shipped</li>
        <li>You need to set the image as your Slack profile for at least a week</li>
        <li>You can't be mad if you don't like it — it's not personal</li>
        <li>You can submit as many projects as you like; you will get one drawing per project</li>
        <li>Please do double dip with summer-of-making</li>
        <li>You CAN use these for your NFT needs</li>
        <li>Questions: ask @CAN</li>
      </ul>
    </main>
  );
}
