'use client';


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
          src="https://hc-cdn.hel1.your-objectstorage.com/s/v3/aa816c3d41fbb84d9442e80d4ed2300c16023e44_img_1118.png"
          alt="Main"
          className="w-full max-w-lg rounded-2xl shadow-lg object-cover"
        />

        {/* Pulsing Link */}
        <a
          href="https://forms.hackclub.com/ts"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 text-4xl font-semibold underline underline-offset-4 hover:text-blue-800 transition-colors duration-200"
          style={{
            animation: 'pulse-scale 1.5s ease-in-out infinite',
          }}
        >
          SUBMIT YOUR PROJECT
        </a>

        {/* Description */}
        <h1 className="text-black text-3xl text-center">
          The Longer you spend, the long I'll spend drawing and the worse it will be
        </h1>
        <p className="text-black text-2xl text-center">
          I just know you have a Hackatime project that you have not submitted to any program yet...
        </p>
      </div>

      {/* Portfolio */}
      <h1 className="text-black text-3xl mb-4">My (@CAN's) Portfolio:</h1>
      <div className="flex gap-6 mb-8 flex-wrap justify-center">
        <div className="flex flex-col items-center">
          <img
            src="https://hc-cdn.hel1.your-objectstorage.com/s/v3/49e069e2f9001ca9cd75777dbc991dd1bd3698e5_img_1117.png"
            alt="Small 1"
            className="w-32 rounded-xl shadow-md object-cover"
          />
          <p className="mt-2 text-sm text-gray-700">@Aarav J</p>
        </div>

        <div className="flex flex-col items-center">
          <img
            src="https://hc-cdn.hel1.your-objectstorage.com/s/v3/38e4db8b881bf5008bbe604e501dd4016422b914_img_1116.png"
            alt="Small 2"
            className="w-32 rounded-xl shadow-md object-cover"
          />
          <p className="mt-2 text-sm text-gray-700">@reem</p>
        </div>

        <div className="flex flex-col items-center">
          <img
            src="https://hc-cdn.hel1.your-objectstorage.com/s/v3/84771fbffec1033aa9ca4e5c6244f69bc5e6e7ea_img_1114.png"
            alt="Small 3"
            className="w-32 rounded-xl shadow-md object-cover"
          />
          <p className="mt-2 text-sm text-gray-700">@crn</p>
        </div>

        <div className="flex flex-col items-center">
          <img
            src="https://hc-cdn.hel1.your-objectstorage.com/s/v3/1b9cf437a46c0f51f4189b26806a532068cc0475_img_1120.png"
            alt="Small 4"
            className="w-32 rounded-xl shadow-md object-cover"
          />
          <p className="mt-2 text-sm text-gray-700">@Euan Ripper</p>
        </div>

        <div className="flex flex-col items-center">
          <img
            src="https://hc-cdn.hel1.your-objectstorage.com/s/v3/3b84bd20c0e55d6348328f87c6a4ac5f48075a95_img_1119.png"
            alt="Small 5"
            className="w-32 rounded-xl shadow-md object-cover"
          />
          <p className="mt-2 text-sm text-gray-700">@samuel</p>
        </div>

        <div className="flex flex-col items-center">
          <img
            src="https://hc-cdn.hel1.your-objectstorage.com/s/v3/921d87a38b9e1bb4a531a9d0775cd5f1ea67d58a_img_1111.png"
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
        <li>Questions: ask @CAN</li>
      </ul>
    </main>
  );
}
