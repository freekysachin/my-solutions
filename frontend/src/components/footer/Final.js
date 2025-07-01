import SubscriptionSection from "./Subscribe";

const Final = () => {
  return (
    <div
      className="w-full bg-cover bg-center flex flex-col items-center justify-center text-center pt-10"
      style={{ backgroundImage: "url('/assets/Rectangle.svg')" }}
    >
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 max-w-2xl">
        Learn more about our listing process, as well as our additional staging and design work.
      </h2>
      <button className="bg-white text-blue-600 mb-4 px-8 py-3 rounded shadow hover:bg-blue-600 hover:text-white transition">
        LEARN MORE
      </button>
      <SubscriptionSection />
      <div className="bg-gray-900 text-gray-400 px-4 w-full py-4 flex flex-col md:flex-row items-center justify-between">
          <p className="text-sm">All Rights Reserved 2025</p>
          <img src="/assets/logo.svg" alt="RealTrust Logo" className="h-6 my-2 md:my-0" />
          <div className="flex space-x-4">
            <a href="#" className="hover:text-white"><img src="/assets/Group-1.svg" alt="Twitter" className="h-6" /></a>
            <a href="#" className="hover:text-white"><img src="assets/Group.svg" alt="YouTube" className="h-6" /></a>
            <a href="#" className="hover:text-white"><img src="/assets/Frame.svg" alt="Facebook" className="h-6" /></a>
            <a href="#" className="hover:text-white"><img src="/assets/Linkedin.svg" alt="LinkedIn" className="h-6" /></a>
          </div>
        </div>
    </div>
  );
}

export default Final;