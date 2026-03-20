import "./roofingPageCards.css";
import Image from "next/image";
import Link from "next/link";

const RoofingPageCard = ({
  title,
  subtitle,
  image,
  options = [],
  buttonText,
  buttonHref,
  buttonTarget = "_self"
}) => {
  return (
    <section className="roofing-card">

      {image && (
        <div className="roofing-card__image">
          <Image
            src={image}
            alt={title}
            fill
            priority
            sizes="100vw"
            style={{ objectFit: "cover" }}
          />
        </div>
      )}

      <div className="roofing-card__body">

        <div className="roofing-card__header">
          <h2>{title}</h2>
          <p className="roofing-card__subtitle">{subtitle}</p>
        </div>

        <div className="roofing-card__features">
          {options.map((group, index) => (
            <div key={index} className="feature-group">
              <h4>{group.title}</h4>
              <ul>
                {group.subOptions.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {buttonText && buttonHref && (
          <Link
            href={buttonHref}
            target={buttonTarget}
            className="roofing-card__cta"
          >
            {buttonText}
          </Link>
        )}

      </div>
    </section>
  );
};

export default RoofingPageCard;