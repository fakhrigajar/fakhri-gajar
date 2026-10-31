function BackgroundEffects() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      <div className="aurora aurora--1" />
      <div className="aurora aurora--2" />
      <div className="aurora aurora--3" />
      <div className="bg-noise absolute inset-0" />
    </div>
  );
}

export default BackgroundEffects;
