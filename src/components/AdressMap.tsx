const AddressMap = () => {
  console.log(screen.width - 100);

  return (
    <div className="flex sm:max-w-sm md:max-w-md lg:max-w-lg">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1248.6738201690016!2d28.640790650484302!3d-26.161373019653244!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e952d63c0ca51c9%3A0x82b332c865fc1ad5!2sSSW%20Safety%20Wear!5e0!3m2!1sen!2snl!4v1701121308964!5m2!1sen!2snl"
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
