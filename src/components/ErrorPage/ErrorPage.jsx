import { DefaultBtn } from "../components.style";
import GridPattern from "../Custom/GridPattern";
import { cn } from "../../lib/utils";

function ErrorPage() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-surface-2 px-5 text-center">
      <GridPattern
        className={cn(
          "stroke-[#1c1c27]",
          "[mask-image:radial-gradient(600px_circle_at_center,white,transparent)]",
          "inset-x-0 inset-y-[-30%] h-[160%] skew-y-12",
        )}
      />
      <div className="relative flex flex-col items-center gap-4">
        <h1 className="text-8xl font-bold text-primary desktop:text-9xl">
          404
        </h1>
        <p className="text-xl font-semibold text-text-primary">
          Something went wrong
        </p>
        <p className="max-w-md text-text-secondary">
          We couldn&apos;t reach the server. Please check your connection and
          try again.
        </p>
        <DefaultBtn onClick={() => window.location.reload()}>
          Try Again
        </DefaultBtn>
      </div>
    </section>
  );
}

export default ErrorPage;
