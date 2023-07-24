const About = () => {
  return (
    <div className="flex flex-row justify-evenly gap-12 p-12 h-full bg-[#f3f1f0]">
      <div className="flex sm:hidden lg:visible">
        <img
          className="w-96 h-96 rounded-full"
          src="/img/bigLogo.webp"
          alt="bigLogo"
          width={1200}
          height={1200}
        />
      </div>
      <div className="flex flex-col gap-5 w-full max-w-sm">
        <h1 className="text-2xl font-bold">Our promise</h1>
        <p>
          Established in 1997, mcm Promotions has been unwavering in its commitment to offering
          unparalleled solutions for your company's branding requirements. With a steadfast focus on
          integrity, reliability, and a team of visionary branding experts, we take pride in
          delivering results that consistently surpass expectations.
        </p>
        <p>
          Our core offerings encompass premium vehicle grade decals and cutting-edge vehicle
          branding solutions, all of which are backed by our steadfast guarantee to exceed your
          expectations. Each order is meticulously handled from inception to completion by a
          dedicated representative, ensuring a personalized and seamless experience for our valued
          customers on every interaction.
        </p>
        <p>
          At mcm Promotions, we pledge the utmost in product excellence, competitive market-related
          pricing, industry-leading turnaround times, and bespoke solutions tailored to your exact
          needs. Our commitment to your satisfaction knows no bounds, and we guarantee a final
          product that not only aligns with your vision but also arrives at your doorstep,
          hassle-free.
        </p>
        <p>
          Discover the mcm Promotions advantage, and allow us to elevate your brand to unprecedented
          heights with our exceptional branding solutions. Contact us today to embark on a journey
          that will transform your company's image and drive success like never before.
        </p>
      </div>
    </div>
  );
};

export default About;
