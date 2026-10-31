import PropTypes from "prop-types";

function CertificateCard({ certificate, index, revealed = false }) {
  const { title, issuer, date, image } = certificate;

  // Cards added by "Show all" animate in with CSS; the initial ones use AOS.
  const revealProps = revealed
    ? {
        className: "animate-fade-up",
        style: { animationDelay: `${(index % 3) * 90}ms` },
      }
    : { "data-aos": "fade-up", "data-aos-delay": (index % 3) * 100 };

  return (
    <div {...revealProps}>
      <article className="card card-hover group flex h-full flex-col">
        <a
          href={image}
          target="_blank"
          rel="noreferrer"
          aria-label={`View ${title} certificate`}
          className="relative m-2 mb-0 block overflow-hidden rounded-2xl bg-surface-1"
        >
          <img
            src={image}
            alt={title}
            loading="lazy"
            decoding="async"
            className="h-[240px] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>

          <span className="absolute bottom-4 left-1/2 flex -translate-x-1/2 translate-y-4 items-center gap-2 whitespace-nowrap rounded-full bg-white px-4 py-2 text-xs font-semibold text-[#141222] opacity-0 shadow-lg transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
            <i aria-hidden="true" className="ri-zoom-in-line"></i>
            View Certificate
          </span>
        </a>

        <div className="relative flex flex-1 flex-col gap-3 p-5">
          <div className="flex items-center justify-between gap-3">
            <span className="inline-flex min-w-0 items-center gap-1.5 text-xs font-semibold text-primary">
              <i aria-hidden="true" className="ri-award-line text-sm"></i>
              <span className="truncate">{issuer}</span>
            </span>
            {date && (
              <span className="shrink-0 font-mono text-[11px] text-text-muted">
                {date}
              </span>
            )}
          </div>
          <h3 className="font-semibold leading-snug text-text-primary">
            {title}
          </h3>
        </div>
      </article>
    </div>
  );
}

CertificateCard.propTypes = {
  certificate: PropTypes.shape({
    title: PropTypes.string.isRequired,
    issuer: PropTypes.string.isRequired,
    date: PropTypes.string,
    image: PropTypes.string.isRequired,
  }).isRequired,
  index: PropTypes.number.isRequired,
  revealed: PropTypes.bool,
};

export default CertificateCard;
