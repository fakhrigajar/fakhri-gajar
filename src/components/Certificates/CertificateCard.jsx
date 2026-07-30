import PropTypes from "prop-types";
import { Image } from "antd";

function CertificateCard({ certificate }) {
  const { title, issuer, date, image } = certificate;

  return (
    <div
      data-aos="zoom-in"
      className="group flex flex-col overflow-hidden rounded-2xl border-2 border-surface-1 border-solid bg-surface-card shadow-black/20 duration-300 hover:-translate-y-1 hover:border-primary"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={image}
          alt={title}
          rootClassName="block h-full w-full"
          className="!h-full w-full object-cover duration-500 group-hover:scale-110"
          preview={{
            cover: (
              <span className="flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-medium text-white shadow-lg">
                <i className="ri-zoom-in-line"></i>
                View Certificate
              </span>
            ),
          }}
        />
      </div>

      <div className="flex flex-1 flex-col gap-1 p-5">
        <h3 className="font-semibold leading-snug text-text-primary">
          {title}
        </h3>
        <p className="text-sm text-text-secondary">{issuer}</p>
        {date && <p className="text-xs text-text-muted">{date}</p>}
      </div>
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
};

export default CertificateCard;
