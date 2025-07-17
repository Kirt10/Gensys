
import { ContactForm } from "@/components/contact/ContactForm";
import { ContactInfo } from "@/components/contact/ContactInfo";
import { CallToAction } from "@/components/contact/CallToAction";
import { ContactHeader } from "@/components/contact/ContactHeader";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <ContactHeader />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <ContactForm />

            <div className="space-y-8">
              <ContactInfo />
              <CallToAction />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
