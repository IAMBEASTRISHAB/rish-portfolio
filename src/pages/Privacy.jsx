export default function Privacy() {
  return (
    <main className="max-w-400 mx-auto px-4 md:px-8 lg:px-10 pt-30 pb-60 text-white">
      <section>
        <h1 className="text-[60px] md:text-[80px] lg:text-[100px] leading-tight mb-8 md:mb-16 lg:mb-30">
          Privacy Policy
        </h1>

        <div className="flex flex-col gap-10 md:gap-14 max-w-200">

          <p className="text-[14px] md:text-[16px] text-white/50">
            Last Updated: February 2026
          </p>

          <p className="text-[18px] md:text-[20px] leading-[150%]">
            This Privacy Policy explains how information is handled on this website. This website is a personal portfolio operated by Rishab, intended solely to showcase professional work, projects, and experience.
          </p>

          {/* Section 1 */}
          <div>
            <h2 className="text-[22px] md:text-[26px] font-medium mb-4">
              1. Information Collection
            </h2>
            <p className="text-[16px] md:text-[18px] leading-[160%] text-white/70">
              This website does not collect, store, process, or request any personal information from visitors. There are no contact forms, user accounts, newsletters, or email subscriptions. No personal data is intentionally collected. Visitors may browse this website anonymously.
            </p>
          </div>

          {/* Section 2 */}
          <div>
            <h2 className="text-[22px] md:text-[26px] font-medium mb-4">
              2. Cookies and Tracking Technologies
            </h2>
            <p className="text-[16px] md:text-[18px] leading-[160%] text-white/70">
              This website does not use cookies for analytics, advertising, behavioral tracking, or user profiling. No third-party tracking scripts are intentionally implemented.
            </p>
          </div>

          {/* Section 3 */}
          <div>
            <h2 className="text-[22px] md:text-[26px] font-medium mb-4">
              3. Hosting and Technical Data
            </h2>
            <p className="text-[16px] md:text-[18px] leading-[160%] text-white/70">
              This website is hosted on Vercel. As part of standard web hosting and security operations, the hosting provider may automatically process certain technical information such as IP address, browser type, device information, and basic server logs. This data is processed by the hosting provider for infrastructure, performance, and security purposes. The website owner does not access, store, or use this information. For more information, please refer to{" "}
              <a
                href="https://vercel.com/legal/privacy-policy"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:opacity-70 transition-opacity"
              >
                Vercel's Privacy Policy
              </a>.
            </p>
          </div>

          {/* Section 4 */}
          <div>
            <h2 className="text-[22px] md:text-[26px] font-medium mb-4">
              4. Third-Party Services
            </h2>
            <p className="text-[16px] md:text-[18px] leading-[160%] text-white/70">
              No third-party services are used on this website that intentionally collect personal user data. If third-party tools, analytics services, or contact forms are added in the future, this Privacy Policy will be updated accordingly.
            </p>
          </div>

          {/* Section 5 */}
          <div>
            <h2 className="text-[22px] md:text-[26px] font-medium mb-4">
              5. Data Sharing
            </h2>
            <p className="text-[16px] md:text-[18px] leading-[160%] text-white/70">
              Since no personal data is collected, no personal data is sold, rented, traded, or shared with third parties.
            </p>
          </div>

          {/* Section 6 */}
          <div>
            <h2 className="text-[22px] md:text-[26px] font-medium mb-4">
              6. Data Security
            </h2>
            <p className="text-[16px] md:text-[18px] leading-[160%] text-white/70">
              While no personal data is collected, reasonable technical measures are maintained through the hosting provider to ensure site security and integrity.
            </p>
          </div>

          {/* Section 7 */}
          <div className="pb-6">
            <h2 className="text-[22px] md:text-[26px] font-medium mb-4">
              7. Changes to This Policy
            </h2>
            <p className="text-[16px] md:text-[18px] leading-[160%] text-white/70">
              This Privacy Policy may be updated if the website's functionality changes. Any updates will be reflected by revising the "Last Updated" date at the top of this page.
            </p>
          </div>

        </div>
      </section>
    </main>
  );
}
