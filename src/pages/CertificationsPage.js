import React from "react";
import Certificate from "../components/certificate/Certificate";
import { certificates } from "../helpers/certificatesList";

const CertificationsPage = () => {
  return (
    <main className="content">
      <section className="certificate-list section">
        <div className="container">
          <h2
            className="certificate-list__title section__title title title_size_xl title_accent"
          >
            Certifications
          </h2>
          <ul className="certificate-list__wrap">
            {certificates.map((certificate, index) => {
              return (
                <Certificate
                  key={certificate.id}
                  title={certificate.title}
                  img={certificate.img}
                  url={certificate.url}
                  index={index}
                />
              );
            })}
          </ul>
        </div>
      </section>
    </main>
  );
};

export default CertificationsPage;