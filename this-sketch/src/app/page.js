// app/page.js
export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-8 bg-gray-50">
      <div className="mb-8">
        <img
          src="https://hc-cdn.hel1.your-objectstorage.com/s/v3/aa816c3d41fbb84d9442e80d4ed2300c16023e44_img_1118.png"
          alt="Main"
          className="w-full max-w-lg rounded-2xl shadow-lg object-cover"
        />
        <a href="https://forms.hackclub.com/ts" target="_blank" className="text-blue-600 text-4xl">SUBMIT YOUR PROJECT</a>

        <h1 className="text-black text-3xl">The Longer you spend, the long i'll spend drawing and the worse it will be</h1>
        <p className="text-black text-2xl">I just know you have a Hackatime project that you have not submitted to any program yet....</p>


      </div>

      <h1 className="text-black text-3xl">My Portfolio:</h1>
      <div className="flex gap-6">

        <img
          src="https://hc-cdn.hel1.your-objectstorage.com/s/v3/49e069e2f9001ca9cd75777dbc991dd1bd3698e5_img_1117.png"
          alt="Small 1"
          className="w-32 rounded-xl shadow-md object-cover"
        />

        <img
          src="https://hc-cdn.hel1.your-objectstorage.com/s/v3/38e4db8b881bf5008bbe604e501dd4016422b914_img_1116.png"
          alt="Small 2"
          className="w-32 rounded-xl shadow-md object-cover"
        />
        <img
          src="https://hc-cdn.hel1.your-objectstorage.com/s/v3/84771fbffec1033aa9ca4e5c6244f69bc5e6e7ea_img_1114.png"
          alt="Small 3"
          className="w-32 rounded-xl shadow-md object-cover"
        />
      </div>
      <h1 className="text-black text-3xl">Rules:</h1>
      <ul className="text-black">
        <li>You need to log your project on Hackatime</li>
        <li>It can be a 30 second project or 10 hour project ts needs to be shipped</li>
        <li>You need to set the image as your slack profile for at least a week</li>
        <li>You can't be mad if you don't like it, its not personal</li>
      </ul>
    </main>
  );
}
