import PropTypes from "prop-types";

function FormField({ label, name, value, onChange, type = "text", multiline = false }) {
  const id = `contact-${name}`;
  const Field = multiline ? "textarea" : "input";

  return (
    <div className="relative">
      <Field
        id={id}
        name={name}
        type={multiline ? undefined : type}
        rows={multiline ? 5 : undefined}
        value={value}
        onChange={onChange}
        placeholder=" "
        required
        className="peer w-full resize-none rounded-2xl border border-surface-border bg-surface-2/60 px-4 pb-2.5 pt-6 text-sm font-medium text-text-primary outline-none transition-all duration-300 placeholder:text-transparent hover:border-text-muted/50 focus:border-primary focus:bg-surface-card focus:ring-4 focus:ring-primary/15"
      />
      <label
        htmlFor={id}
        className="pointer-events-none absolute left-4 top-4 text-sm text-text-muted transition-all duration-200 peer-focus:top-2 peer-focus:text-[11px] peer-focus:font-semibold peer-focus:text-primary peer-[:not(:placeholder-shown)]:top-2 peer-[:not(:placeholder-shown)]:text-[11px] peer-[:not(:placeholder-shown)]:font-semibold"
      >
        {label}
      </label>
    </div>
  );
}

FormField.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  type: PropTypes.string,
  multiline: PropTypes.bool,
};

export default FormField;
