import PropTypes from "prop-types";
import { Field } from "./CollectionEditor";
import { aboutSchema } from "./collectionSchemas";

function AboutEditor({ about, onChange }) {
  const updateField = (key, value) => {
    onChange({ ...about, [key]: value });
  };

  return (
    <div className="rounded-2xl border border-surface-border bg-surface-card p-5">
      <div className="grid grid-cols-1 gap-4 desktop:grid-cols-2">
        {aboutSchema.fields.map((field) => (
          <div
            key={field.key}
            className={
              field.type === "textarea" || field.type === "tags"
                ? "flex flex-col gap-1.5 desktop:col-span-2"
                : "flex flex-col gap-1.5"
            }
          >
            <label className="text-xs font-medium text-text-muted">
              {field.label}
            </label>
            <Field
              field={field}
              value={about[field.key]}
              onChange={(value) => updateField(field.key, value)}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

AboutEditor.propTypes = {
  about: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default AboutEditor;
