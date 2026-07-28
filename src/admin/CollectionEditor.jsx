import PropTypes from "prop-types";

const inputClass =
  "w-full rounded-lg border border-surface-border bg-surface-1 px-3 py-2 text-sm text-text-primary outline-none focus:border-primary";

function Field({ field, value, onChange }) {
  if (field.type === "textarea") {
    return (
      <textarea
        className={`${inputClass} min-h-[100px] resize-y`}
        value={value || ""}
        onChange={(e) => onChange(e.target.value)}
      />
    );
  }

  if (field.type === "tags") {
    return (
      <input
        className={inputClass}
        type="text"
        value={(value || []).join(", ")}
        placeholder="Comma separated, e.g. HTML, CSS, React"
        onChange={(e) =>
          onChange(
            e.target.value
              .split(",")
              .map((tag) => tag.trim())
              .filter(Boolean),
          )
        }
      />
    );
  }

  if (field.type === "links") {
    const [live, code] = value || ["", ""];
    return (
      <div className="flex flex-col gap-2">
        <input
          className={inputClass}
          type="text"
          placeholder="Live URL"
          value={live || ""}
          onChange={(e) => onChange([e.target.value, code || ""])}
        />
        <input
          className={inputClass}
          type="text"
          placeholder="Code URL"
          value={code || ""}
          onChange={(e) => onChange([live || "", e.target.value])}
        />
      </div>
    );
  }

  if (field.type === "image") {
    return (
      <div className="flex items-center gap-3">
        <input
          className={inputClass}
          type="text"
          value={value || ""}
          placeholder="/images/... or https://..."
          onChange={(e) => onChange(e.target.value)}
        />
        {value && (
          <img
            src={value}
            alt=""
            className="h-10 w-10 shrink-0 rounded object-cover"
          />
        )}
      </div>
    );
  }

  return (
    <input
      className={inputClass}
      type="text"
      value={value || ""}
      onChange={(e) => onChange(e.target.value)}
    />
  );
}

Field.propTypes = {
  field: PropTypes.shape({ type: PropTypes.string }).isRequired,
  value: PropTypes.any,
  onChange: PropTypes.func.isRequired,
};

function CollectionEditor({ schema, items, onChange }) {
  const updateItem = (index, key, val) => {
    const next = items.map((item, i) =>
      i === index ? { ...item, [key]: val } : item,
    );
    onChange(next);
  };

  const removeItem = (index) => {
    onChange(items.filter((_, i) => i !== index));
  };

  const moveItem = (index, direction) => {
    const target = index + direction;
    if (target < 0 || target >= items.length) return;
    const next = [...items];
    [next[index], next[target]] = [next[target], next[index]];
    onChange(next);
  };

  const addItem = () => {
    onChange([...items, { ...schema.emptyItem }]);
  };

  return (
    <div className="flex flex-col gap-4">
      {items.map((item, index) => (
        <div
          key={index}
          className="flex flex-col gap-3 rounded-2xl border border-surface-border bg-surface-card p-5"
        >
          <div className="flex items-center justify-between gap-3">
            <h3 className="font-semibold text-text-primary">
              {schema.itemLabel(item)}
            </h3>
            <div className="flex items-center gap-1">
              <button
                type="button"
                onClick={() => moveItem(index, -1)}
                disabled={index === 0}
                className="rounded-lg px-2 py-1 text-text-secondary hover:text-primary disabled:opacity-30"
                aria-label="Move up"
              >
                <i className="ri-arrow-up-line"></i>
              </button>
              <button
                type="button"
                onClick={() => moveItem(index, 1)}
                disabled={index === items.length - 1}
                className="rounded-lg px-2 py-1 text-text-secondary hover:text-primary disabled:opacity-30"
                aria-label="Move down"
              >
                <i className="ri-arrow-down-line"></i>
              </button>
              <button
                type="button"
                onClick={() => removeItem(index)}
                className="rounded-lg px-2 py-1 text-red-400 hover:text-red-300"
                aria-label="Delete"
              >
                <i className="ri-delete-bin-line"></i>
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-3 desktop:grid-cols-2">
            {schema.fields.map((field) => (
              <div
                key={field.key}
                className={
                  field.type === "textarea" || field.type === "tags"
                    ? "desktop:col-span-2 flex flex-col gap-1"
                    : "flex flex-col gap-1"
                }
              >
                <label className="text-xs font-medium text-text-muted">
                  {field.label}
                </label>
                <Field
                  field={field}
                  value={item[field.key]}
                  onChange={(val) => updateItem(index, field.key, val)}
                />
              </div>
            ))}
          </div>
        </div>
      ))}

      <button
        type="button"
        onClick={addItem}
        className="flex items-center justify-center gap-2 rounded-2xl border border-dashed border-surface-border py-4 text-text-secondary hover:border-primary hover:text-primary"
      >
        <i className="ri-add-line"></i>
        Add {schema.label} item
      </button>
    </div>
  );
}

CollectionEditor.propTypes = {
  schema: PropTypes.shape({
    label: PropTypes.string.isRequired,
    itemLabel: PropTypes.func.isRequired,
    emptyItem: PropTypes.object.isRequired,
    fields: PropTypes.array.isRequired,
  }).isRequired,
  items: PropTypes.array.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default CollectionEditor;
