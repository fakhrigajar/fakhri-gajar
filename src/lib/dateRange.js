export function formatDateRange(date) {
  if (!date) return "";
  if (typeof date === "string") return date;

  const { start = "", end = "", ongoing = false } = date;
  if (ongoing) return start ? `${start} - Present` : "Present";
  if (start && end && start !== end) return `${start} - ${end}`;
  return start || end || "";
}
