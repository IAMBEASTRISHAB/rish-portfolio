export default function Contact() {
  return (
    <main className="max-w-400 mx-auto px-4 md:px-8 lg:px-10 pt-30 pb-60 text-white">
      <section>
        {/* Page Title */}
        <h1 className="text-[60px] md:text-[80px] lg:text-[100px] leading-tight mb-8 md:mb-16 lg:mb-30">
          Contact
        </h1>

        {/* Contact Items */}
        <div className="flex flex-col mb-10 md:mb-15 lg:mb-20">
          {/* Email */}
          <a
            href="mailto:Rishab60006@gmail.com"
            className="border-t-[3px] border-white pt-6.5 pb-6.5 flex justify-between items-center group"
          >
            <h3 className="text-[18px] md:text-[20px] group-hover:opacity-70 transition-opacity">
              Rishab60006@gmail.com
            </h3>
            <span className="text-[22px] md:text-[26px] group-hover:opacity-70 transition-opacity">
              ↗
            </span>
          </a>

          {/* WhatsApp */}
          <a
            href="https://wa.me/917810972979"
            target="_blank"
            rel="noopener noreferrer"
            className="border-t-[3px] border-white pt-6.5 pb-6.5 flex justify-between items-center group"
          >
            <h3 className="text-[18px] md:text-[20px] group-hover:opacity-70 transition-opacity">
              78109 72979—WhatsApp
            </h3>
            <span className="text-[22px] md:text-[26px] group-hover:opacity-70 transition-opacity">
              ↗
            </span>
          </a>

          {/* Book Strategy Session */}
          <a
            href="#"
            className="border-t-[3px] border-white pt-6.5 pb-6.5 flex justify-between items-center group"
          >
            <h3 className="text-[18px] md:text-[20px] group-hover:opacity-70 transition-opacity">
              Book a Strategy Session
            </h3>
            <span className="text-[22px] md:text-[26px] group-hover:opacity-70 transition-opacity">
              ↗
            </span>
          </a>
        </div>

        {/* Reply Text */}
        <p className="text-[18px] md:text-[20px]">
          You can expect a reply within 24 hours.
        </p>
      </section>
    </main>
  );
}
