import React from "react";
import Contact from "../components/contact/Contact.jsx";
import { contacts } from "../helpers/contactsList";

const ContactsPage = () => {
  return (
    <main className="content">
      <section className="contact section" id="contacts">
        <div className="container">
          <h2 className="section__title title title_size_xl title_accent">
            Contact me
          </h2>
          <ul className="contact-list">
            {contacts.map((contact) => {
              return (
                <Contact
                  key={contact.id}
                  title={contact.title}
                  text={contact.text}
                  link={contact.link}
                  linkText={contact.linkText}
                />
              );
            })}
          </ul>
        </div>
      </section>
    </main>
  );
};

export default ContactsPage;