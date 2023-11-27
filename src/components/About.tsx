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
          Welcome to SSW Signage and Branding! Formerly known as MCM Promotions, we are thrilled to
          unveil our rebranding and updated identity. Our journey continues with a new name and an
          unwavering commitment to providing you with exceptional signage and branding solutions.
        </p>
        <p>
          Since 1997, we have steadfastly provided top-tier branding solutions. With a focus on
          integrity and reliability, our expert team consistently exceeds expectations. Specializing
          in premium vehicle decals and cutting-edge branding, each order receives personalized
          attention. We ensure product excellence, competitive pricing, swift turnaround, and
          tailored solutions.
        </p>
        <p>
          Effective from the 1st of December 2023, our business will operate under the name SSW
          Signage and Branding. Alongside this change, our physical address will now be located at:
          <br />
          <i>Plot 1, Corner of Road 8 &amp; R555, Eloff AH, Mpumalanga, 2211</i>
        </p>
        <p>
          At SSW Signage and Branding, we remain dedicated to delivering high-quality solutions that
          exceed your expectations. Count on us for hassle-free, visionary branding that elevates
          your company&#39;s image and drives success. Reach out today to transform your brand with
          our exceptional solutions. We appreciate your ongoing support and look forward to
          continuing this journey together.
        </p>
      </div>
    </div>
  );
};

export default About;
