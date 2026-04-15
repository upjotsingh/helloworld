"use client";

import { useState } from "react";
import Image from "next/image";
import { contactData } from "@/data/contact/data";
import styles from "./contact.module.css";

export default function QuoteSection() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitted(true);
    event.currentTarget.reset();
  };

  return (
    <section id="contact" className={styles.section}>
      <div className={styles.sectionContainer}>
        <div className={styles.contactGrid}>
          <div className={styles.contactCard}>
            <h2 className={styles.contactTitle}>{contactData.title}</h2>
            <p className={styles.contactDescription}>{contactData.description}</p>
            <form className={styles.formGrid} onSubmit={handleSubmit}>
              {contactData.fields.map((field) =>
                field.type === "textarea" ? (
                  <textarea
                    key={field.name}
                    name={field.name}
                    placeholder={field.placeholder}
                    className={styles.formTextarea}
                    required
                  />
                ) : (
                  <input
                    key={field.name}
                    type={field.type}
                    name={field.name}
                    placeholder={field.placeholder}
                    className={styles.formField}
                    required
                  />
                )
              )}
              <button type="submit" className={styles.formSubmit}>
                {contactData.buttonLabel}
              </button>
              {isSubmitted && (
                <div className={styles.successMessage}>
                  Thanks for reaching out! We’ll reply soon with a custom quote.
                </div>
              )}
            </form>
          </div>
          <div className={styles.contactIllustration}>
            <Image
              src={contactData.illustration}
              alt="Contact illustration"
              width={520}
              height={520}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
