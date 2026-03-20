import Image from "next/image";
import "./servicescard.css";

const HomePageServiceCard = ({
  title,
  subtitle,
  description,
  buttonText = "Learn More",
  onClick,
  href,
  backgroundImage,
}) => {
  const CardWrapper = href ? "a" : "div";

  return (
    <CardWrapper className="service-card" href={href} onClick={onClick}>
      {/* Image Background */}
      <div className="service-card-image">
        <Image
          src={backgroundImage}
          alt={title}
          fill
          style={{ objectFit: "cover" }}
        />
        <div className="service-card-overlay" />
      </div>

      <div className="service-card-content top">
        <h2 className="service-card-title">{title}</h2>
        {/*{subtitle && <h3 className="service-card-subtitle">{subtitle}</h3>}*/}
      </div>

      <div className="service-card-content bottom">
        <p className="service-card-description">{description}</p>
        {buttonText && (
          <button className="service-card-button">{buttonText}</button>
        )}
      </div>
    </CardWrapper>
  );
};

export default HomePageServiceCard;
