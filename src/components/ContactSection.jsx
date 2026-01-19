import ContactCard from "./ui-compo/ContactCard";

const ContactSection = () => (
  <section
    id="contact"
    className="min-h-screen flex flex-col items-center justify-center px-6"
  >
    <h2 className="text-red-500 font-bold text-5xl mb-10">
      Contact Us
    </h2>

    <ContactCard />

    <p className="mt-6 text-white/80 text-center">
      Feedback or issues?<br />
      Email: <span className="font-semibold">omkarchavan21k@gmail.com</span>
    </p>
  </section>
);

export default ContactSection;
