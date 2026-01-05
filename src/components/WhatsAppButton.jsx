import React from "react";

const WhatsAppButton = () => {
  const phoneNumber = "919266704044";
  const message = "Hello, I would like to connect with you!";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <>
      {/* Font Awesome CDN */}
      <link
        rel="stylesheet"
        href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css"
      />

      {/* WhatsApp Floating Button */}
      <a
        href={whatsappUrl}
        className="whatsapp-float"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
      >
        <i className="fa fa-whatsapp whatsapp-icon"></i>
      </a>

      <style>{`
        .whatsapp-float {
          position: fixed;
          width: 60px;
          height: 60px;
          bottom: 110px; /* 👈 moved above tawk.to */
          right: 30px;
          background-color: #25d366;
          color: #ffffff;
          border-radius: 50%;
          text-align: center;
          font-size: 30px;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
          z-index: 9999; /* 👈 higher than tawk */
          display: flex;
          align-items: center;
          justify-content: center;
          transition: transform 0.2s ease;
        }

        .whatsapp-float:hover {
          transform: scale(1.08);
        }

        .whatsapp-icon {
          margin: 0;
        }

        /* Mobile adjustment */
        @media (max-width: 768px) {
          .whatsapp-float {
            bottom: 120px;
            right: 20px;
            width: 55px;
            height: 55px;
            font-size: 26px;
          }
        }
      `}</style>
    </>
  );
};

export default WhatsAppButton;
