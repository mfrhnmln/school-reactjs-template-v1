import { useState } from "react";

/* Custom Input */
const CustomField = ({
  variant = "input", // "input" atau "textarea"
  type = "text",
  id,
  name,
  placeholder,
  required = false,
  autoComplete,
  className = "",
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const Component = variant === "textarea" ? "textarea" : "input";

  return (
    <Component
      id={id}
      name={name}
      type={variant === "input" ? type : undefined}
      placeholder={placeholder}
      autoComplete={autoComplete}
      className={`w-full p-3 border rounded-md focus:outline-none ${
        variant === "textarea" ? "h-40" : ""
      } ${className}`}
      style={{
        color: isFocused
          ? "var(--color_text_title)"
          : "var(--color_text_subtitle)",
      }}
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
      required={required}
    />
  );
};

const ComponentsContact = () => {
  return (
    <div className="flex flex-col w-full max-w-5xl px-6 lg:px-20 py-10 gap-20 bg-[var(--background_component)]">
      {/* Denah & info Kontak */}
      <div className="flex flex-col lg:flex-row gap-10">
        {/* Denah Lokasi */}
        <div className="flex flex-col w-full mx-auto gap-5">
          <h1 className="text-title font-bold text-center mb-10">
            Denah Lokasi
          </h1>
          <iframe
            title="Google Maps"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3961.133100493504!2d107.61440587572255!3d-6.874651793124128!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e6e36d488819%3A0x6d3b56647462bc52!2sSMP%20Negeri%2035%20Kota%20Bandung!5e0!3m2!1sid!2sid!4v1749787189676!5m2!1sid!2sid"
            className="w-full h-[25rem] rounded-md"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>

      {/* Kotak Saran */}
      <div className="flex flex-col gap-5">
        <h2 className="text-title font-bold text-center">Kotak Saran</h2>
        <form className="flex flex-col gap-5 text-paragraph">
          {/* name */}
          <CustomField
            variant="input"
            type="text"
            id="nama"
            name="nama"
            placeholder="Nama*"
          />
          {/* email */}
          <CustomField
            variant="input"
            type="email"
            id="email"
            name="email"
            placeholder="Email*"
            autoComplete="email"
          />
          <CustomField
            variant="input"
            type="tel"
            id="phone"
            name="phone"
            placeholder="No Telp*"
            autoComplete="tel"
          />
          {/* message */}
          <CustomField
            variant="textarea"
            id="pesan"
            name="pesan"
            placeholder="Pesan*"
          />

          <div className="flex justify-end">
            <button type="submit" className="btn-primary transition">
              KIRIM PESAN <i className="ri-send-plane-fill" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ComponentsContact;
