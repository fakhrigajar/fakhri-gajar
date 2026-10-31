import { about, navigations, socials } from "../../data/constants";

const footerLinks = navigations.flatMap((navigation) =>
  navigation.children ? navigation.children : [navigation],
);

const currentYear = new Date().getFullYear();

function Footer() {
  return (
    <footer className="relative border-t border-surface-border/70 bg-surface-1/50 backdrop-blur-sm">
      <div className="container-page flex flex-col items-center gap-3 pb-24 pt-6 text-sm text-text-muted sm:pb-6">
        <p className="text-center">
          © {currentYear} Fakhri Gajar. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
