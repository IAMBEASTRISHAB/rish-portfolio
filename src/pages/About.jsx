export default function About() {
  return (
    <main className="max-w-400 mx-auto px-4 md:px-8 lg:px-10 py-30 text-white">
      <section className="">
        {/* Page Title */}
        <h1 className="text-[60px] md:text-[80px] lg:text-[100px] leading-tight mb-8 md:mb-16 lg:mb-30">
          Bio
        </h1>

        {/* Two column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-12 lg:gap-24">
          {/* Left: About text */}
          <div className="max-w-auto">
            <p className="text-[18px] md:text-[20px] leading-[122%] flex flex-col gap-y-4 md:gap-y-5">
              <span>
                I'm Rishab, a web designer and UI/UX designer based in West Bengal,
                creating beautiful and useful digital products that solve real
                world problems.
              </span>
              <span>
                I love football and fitness. I fluently speak English, Hindi &
                Bengali.
              </span>
              <span>
                I practice critical thinking when creating. I believe it's
                important to apply the rules of logic to achieve the desired
                outcome especially in this noisy world.
              </span>
            </p>
          </div>

          {/* Right: Contact */}
          <div className="flex flex-col gap-2 lg:items-end lg:text-right">
            {/* Email */}
            <a
              href="mailto:Rishab60006@gmail.com"
              className="flex items-center gap-2 group"
            >
              <span className="text-[18px] md:text-[20px] group-hover:opacity-70 transition-opacity">
                Rishab60006@gmail.com
              </span>
              <span className="text-[22px] md:text-[26px] group-hover:opacity-70 transition-opacity">
                ↗
              </span>
            </a>

            {/* WhatsApp */}
            <a
              href="https://wa.me/917810972979"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 group"
            >
              <span className="text-[18px] md:text-[20px] group-hover:opacity-70 transition-opacity">
                78109 72979—WhatsApp
              </span>
              <span className="text-[22px] md:text-[26px] group-hover:opacity-70 transition-opacity">
                ↗
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="mt-20 md:mt-20 lg:mt-30">
        {/* Services Title */}
        <h2 className="text-[60px] md:text-[80px] lg:text-[100px] leading-tight mb-8 md:mb-16 lg:mb-30">
          Services
        </h2>

        {/* Service Items */}
        <div className="flex flex-col">
          <div className="border-t-[3px] border-white pt-6.5 pb-6.5">
            <h3 className="text-[18px] md:text-[20px]">Web Design</h3>
          </div>

          <div className="border-t-[3px] border-white pt-6.5 pb-6.5">
            <h3 className="text-[18px] md:text-[20px]">UI/UX Design</h3>
          </div>

          <div className="border-t-[3px] border-white pt-6.5 pb-6.5">
            <h3 className="text-[18px] md:text-[20px]">No Code Development</h3>
          </div>
        </div>
      </section>
    </main>
  );
}
