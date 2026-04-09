import EmailLogo from "/gmail.svg";
import WhatsAppLogo from "/whatsapp.svg";
import MessangerLogo from "/messenger.svg";

const SocialContact = () => {

    const phoneNumber = "2348157925763";
    const whatsappWelcomeMessage = encodeURIComponent("Hello! I would like to get in touch with you.");
    const whatsappLink = `https://wa.me/${phoneNumber}?text=${whatsappWelcomeMessage}`;
    const messengerLink = `https://m.me/${phoneNumber}`;



  return (
    <div className="flex flex-col gap-6">

      <article className="bg-Satin-Deep-Black px-6 py-4 rounded-2xl">
        <h4 className="text-xl mb-4 text-[#4DB5FF]">Email</h4>
        <div className="max-w-fit">
          <a
            href="mailto:aderemibiodun@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2"
          >
            <p>Send an email </p> 
            <div className="p-1 bg-gray-200 rounded-full">
            <img src={EmailLogo} alt="Email" className="w-4 h-4" />
            </div>
          </a>
        </div>
      </article>

      <article className="bg-Satin-Deep-Black px-6 py-4 rounded-2xl">
        <h4 className="text-xl mb-4 text-[#4DB5FF]">WhatsApp</h4>
        <div className="max-w-fit">
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2"
          >
            <p>Let's chat </p> 
            <div className="p-1 bg-gray-200 rounded-full">
            <img src={WhatsAppLogo} alt="WhatsApp" className="w-4 h-4" />
            </div>
          </a>
        </div>
      </article>
      <article className="bg-Satin-Deep-Black px-6 py-4 rounded-2xl">
        <h4 className="text-xl mb-4 text-[#4DB5FF]">Messenger</h4>
        <div className="max-w-fit">
          <a
            href={messengerLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2"
          >
            <p>Let's chat </p> 
            <div className="p-1 bg-gray-200 rounded-full">
            <img src={MessangerLogo} alt="Messenger" className="w-4 h-4" />
            </div>
          </a>
        </div>
      </article>
    </div>
  );
};

export default SocialContact;
