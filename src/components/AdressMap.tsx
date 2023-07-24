const AddressMap = () => {
  console.log(screen.width - 100);

  return (
    <div className="flex sm:max-w-sm md:max-w-md lg:max-w-lg">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3581.6192458436904!2d28.55175297625391!3d-26.143954877113792!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e9531a3557fba1d%3A0xef6be50983746929!2sMCM%20Promotions!5e0!3m2!1sen!2snl!4v1689927554950!5m2!1sen!2snl"
        width="650"
        height="450"
        style={{ boxShadow: '5px 10px 18px #888888:' }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};
export { AddressMap };
