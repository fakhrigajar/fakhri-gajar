import PropTypes from "prop-types";

function SectionHeading({ eyebrow, title, highlight, description }) {
  return (
    <div
      data-aos="fade-up"
      className="flex max-w-2xl flex-col items-center gap-4 text-center"
    >
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <h2 className="text-4xl font-bold text-text-primary sm:text-5xl">
        {title}
        {title && highlight ? " " : ""}
        {highlight && (
          <span className="text-gradient whitespace-nowrap">{highlight}</span>
        )}
      </h2>
      {description && (
        <p className="text-base leading-relaxed text-text-secondary sm:text-lg">
          {description}
        </p>
      )}
    </div>
  );
}

SectionHeading.propTypes = {
  eyebrow: PropTypes.string,
  title: PropTypes.string,
  highlight: PropTypes.string,
  description: PropTypes.string,
};

export default SectionHeading;
