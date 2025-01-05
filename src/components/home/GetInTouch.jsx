import React from "react";

const GetInTouch = ({ heading, message, email }) => {
  const whatsappLink = `https://wa.me/${+9779811591871}`
  return (
    <>
      <h2 className="display-4 pb-3 text-center">{heading}</h2>
      <p className="lead text-center pb-3">
        {message} <a className="text-decoration-none" href={`mailto:${email}`}> <img src="gmail.png" alt="gmail icon" width={27} height={27} style={{ position: "relative" ,marginLeft: 3, marginRight:3, top: -3}} /> Himal Midun</a>.
        <br />
        or
        <br/>
        <a 
          href={whatsappLink} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-decoration-none text-success"
        >
          <i className="fab fa-whatsapp" style={{ fontSize: "30px", marginRight: "8px" }}></i> Text me on WhatsApp
        </a>
      </p>
      
    </>
  );
};

export default GetInTouch;
