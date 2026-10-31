import { useState } from "react";
import { Modal } from "antd";
import { contactDetail } from "../../data/constants";

const email = contactDetail.infos.find(
  (info) => info.icon === "ri-mail-line",
).label;

function WorkWithMe() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        aria-haspopup="dialog"
        aria-expanded={isOpen}
        className="group fixed bottom-[max(1rem,env(safe-area-inset-bottom))] right-[max(1rem,env(safe-area-inset-right))] z-30 flex items-center gap-2 rounded-full bg-brand px-5 py-3 text-sm font-semibold text-onBrand shadow-lg shadow-tangerine/40 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-tangerine/50 sm:bottom-6 sm:right-6 sm:px-6 sm:py-3.5"
      >
        <i
          className="ri-briefcase-line text-lg transition-transform duration-300 group-hover:-rotate-12"
          aria-hidden="true"
        ></i>
        Work with me
      </button>

      <Modal
        title={<span className="font-display text-xl">Work with me</span>}
        open={isOpen}
        onCancel={() => setIsOpen(false)}
        footer={null}
        centered
        width={420}
      >
        <div>
          <p className="mb-5 text-sm text-text-secondary">
            Choose how you’d like to get in touch.
          </p>
          <div className="flex flex-col gap-3">
            <a
              href="https://wa.me/994703821811"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 rounded-2xl border border-surface-border bg-surface-card p-4 text-text-primary transition-all duration-300 hover:-translate-y-0.5 hover:border-primary hover:bg-primaryOverlay hover:text-text-primary"
            >
              <i
                className="ri-whatsapp-line text-3xl text-[#25d366]"
                aria-hidden="true"
              ></i>
              <span className="min-w-0 flex-1">
                <span className="block font-semibold">WhatsApp</span>
                <span className="block text-xs text-text-secondary">
                  +994 70 382 18 11
                </span>
              </span>
              <i
                className="ri-external-link-line transition-transform duration-300 group-hover:translate-x-0.5"
                aria-hidden="true"
              ></i>
            </a>
            <a
              href={`mailto:${email}`}
              className="group flex items-center gap-3 rounded-2xl border border-surface-border bg-surface-card p-4 text-text-primary transition-all duration-300 hover:-translate-y-0.5 hover:border-primary hover:bg-primaryOverlay hover:text-text-primary"
            >
              <i
                className="ri-mail-line text-3xl text-primary"
                aria-hidden="true"
              ></i>
              <span className="min-w-0 flex-1">
                <span className="block font-semibold">Email</span>
                <span className="block break-all text-xs text-text-secondary">
                  {email}
                </span>
              </span>
              <i
                className="ri-arrow-right-line transition-transform duration-300 group-hover:translate-x-0.5"
                aria-hidden="true"
              ></i>
            </a>
          </div>
        </div>
      </Modal>
    </>
  );
}

export default WorkWithMe;
