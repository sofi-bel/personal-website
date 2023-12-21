import React from "react";

const ContactsPage = () => {
  return (
    <main className="content">
      <section className="contact section" id="contacts">
        <div className="container">
          <h2 className="section__title title title_size_xl title_accent">
            Contact me
          </h2>
          <ul className="contact-list">
            <li className="contact-list__item">
              <h3 className="title title_size_lg">Location</h3>
              <p className="text text_size_md">Saint Petersburg, Russia</p>
            </li>
            <li className="contact-list__item">
              <h3 className="title title_size_lg">Phone</h3>
              <p className="text text_size_md">
                <a className="link" href="tel:+79138740336">+7 (913) 874-03-36</a>
              </p>
            </li>
            <li className="contact-list__item">
              <h3 className="title title_size_lg">Email</h3>
              <p className="text text_size_md">
                <a className="link" href="mailto:sofi.bel.job@icloud.com "
                >sofi.bel.job@icloud.com
                </a>
              </p>
            </li>
            <li className="contact-list__item">
              <h3 className="title title_size_lg">Telegram</h3>
              <p className="text text_size_md">
                <a className="link" href="https://t.me/sofi_13_bel">sofi_13_bel</a>
              </p>
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
};

export default ContactsPage;