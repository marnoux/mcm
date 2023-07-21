const About = () => {
  return (
    <div className="flex justify-evenly gap-12 p-12 h-full bg-[#f3f1f0]">
      <div className="flex">
        <img
          className="w-96 h-96 rounded-full"
          src="/img/bigLogo.webp"
          alt="bigLogo"
          width={1200}
          height={1200}
        />
      </div>
      <div className="flex flex-col gap-5 w-64">
        <h1 className="text-2xl font-bold">Our promise</h1>
        <p>
          Since 1997, mcm Promotions strove to deliver the best possible solution to your company`s
          branding needs. This is achieved through honest, reliable service and expertise by a team
          of innovative branding experts.
        </p>
        <p>
          We provide high quality vehicle grade decals, vehicle branding solutions and guaranteed to
          exceed your expectations.
        </p>
        <p>
          All orders is carefully handled from start to finish by a single representative. We want
          our customers to work with the same friendly person each time they order from us.
        </p>
        <p>
          We promise the highest quality products, market related costs, the fastest turnaround time
          and tailor made products to suit your every need. Delivered to your door.
        </p>
      </div>
    </div>
  );
};

export default About;
