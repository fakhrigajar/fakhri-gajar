import { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import { DatePicker, Input, Tag } from "antd";
import { AnimatePresence, motion } from "motion/react";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import { uploadImage } from "../lib/adminApi";

dayjs.extend(customParseFormat);

const inputClass =
  "w-full rounded-lg border border-surface-border bg-surface-1 px-3 py-2 text-sm text-text-primary outline-none focus:border-primary";

const uploadButtonClass =
  "flex shrink-0 items-center gap-1 rounded-lg border border-surface-border px-2.5 py-2 text-xs font-medium text-text-secondary hover:border-primary hover:text-primary disabled:opacity-50";

const DATE_FORMAT = "MMM YYYY";

const MotionTag = motion.create(Tag);

const tagMotionVariants = {
  initial: { scale: 0.8, opacity: 0 },
  animate: { scale: 1, opacity: 1, transition: { duration: 0.1 } },
  exit: { opacity: 0, width: 0, scale: 0, transition: { duration: 0.2 } },
};

function SingleDateInput({ value, onChange, disabled, placeholder }) {
  const parsed = value ? dayjs(value, DATE_FORMAT, true) : null;

  return (
    <DatePicker
      picker="month"
      format={DATE_FORMAT}
      value={parsed && parsed.isValid() ? parsed : null}
      onChange={(date) => onChange(date ? date.format(DATE_FORMAT) : "")}
      disabled={disabled}
      placeholder={disabled ? "Present" : placeholder || "e.g. Oct 2023"}
      allowClear
      className="w-full border-surface-border"
    />
  );
}

SingleDateInput.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
  placeholder: PropTypes.string,
};

function DateRangeField({ value, onChange, ongoingLabel }) {
  const { start = "", end = "", ongoing = false } = value || {};

  return (
    <div className="flex flex-col gap-2">
      <div className="grid grid-cols-2 gap-2">
        <div className="flex flex-col gap-1">
          <span className="text-[11px] text-text-muted">Start date</span>
          <SingleDateInput
            value={start}
            onChange={(v) => onChange({ start: v, end, ongoing })}
            placeholder="e.g. Sep 2025"
          />
        </div>
        <div className="flex flex-col gap-1">
          <span className="text-[11px] text-text-muted">End date</span>
          <SingleDateInput
            value={end}
            onChange={(v) => onChange({ start, end: v, ongoing })}
            disabled={ongoing}
            placeholder="e.g. Nov 2025"
          />
        </div>
      </div>
      <label className="flex items-center gap-2 text-xs text-text-secondary">
        <input
          type="checkbox"
          checked={ongoing}
          onChange={(e) =>
            onChange({
              start,
              end: e.target.checked ? "" : end,
              ongoing: e.target.checked,
            })
          }
          className="h-3.5 w-3.5 rounded border-surface-border accent-primary"
        />
        {ongoingLabel || "Currently ongoing"}
      </label>
    </div>
  );
}

DateRangeField.propTypes = {
  value: PropTypes.shape({
    start: PropTypes.string,
    end: PropTypes.string,
    ongoing: PropTypes.bool,
  }),
  onChange: PropTypes.func.isRequired,
  ongoingLabel: PropTypes.string,
};

function useFileUpload(onChange) {
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState("");

  const handleFile = async (file) => {
    if (!file) return;
    setUploading(true);
    setError("");
    try {
      const url = await uploadImage(file);
      onChange(url);
    } catch (err) {
      setError(err.message);
    } finally {
      setUploading(false);
    }
  };

  return { uploading, error, handleFile };
}

function useTagInput(value, onChange) {
  const tags = value || [];
  const [inputVisible, setInputVisible] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const inputRef = useRef(null);

  useEffect(() => {
    if (inputVisible) inputRef.current?.focus();
  }, [inputVisible]);

  const removeTag = (tag) => {
    onChange(tags.filter((t) => t !== tag));
  };

  const showInput = () => setInputVisible(true);

  const confirmInput = () => {
    if (inputValue && !tags.includes(inputValue)) {
      onChange([...tags, inputValue]);
    }
    setInputVisible(false);
    setInputValue("");
  };

  return {
    tags,
    inputVisible,
    inputValue,
    setInputValue,
    inputRef,
    removeTag,
    showInput,
    confirmInput,
  };
}

function Field({ field, value, onChange }) {
  const { uploading, error, handleFile } = useFileUpload(onChange);
  const tagInput = useTagInput(value, onChange);

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
    const {
      tags,
      inputVisible,
      inputValue,
      setInputValue,
      inputRef,
      removeTag,
      showInput,
      confirmInput,
    } = tagInput;

    return (
      <div className="flex flex-wrap items-center gap-2">
        <AnimatePresence initial={false}>
          {tags.map((tag) => (
            <MotionTag
              key={tag}
              closable
              layout
              variants={tagMotionVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="font-poppins"
              style={{
                display: "inline-block",
                overflow: "hidden",
                whiteSpace: "nowrap",
              }}
              onClose={(e) => {
                e.preventDefault();
                removeTag(tag);
              }}
            >
              {tag}
            </MotionTag>
          ))}
        </AnimatePresence>
        {inputVisible ? (
          <Input
            ref={inputRef}
            size="small"
            style={{ width: 100 }}
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onBlur={confirmInput}
            onPressEnter={confirmInput}
          />
        ) : (
          <Tag onClick={showInput} className="cursor-pointer border-dashed">
            <i className="ri-add-line"></i> Add skill
          </Tag>
        )}
      </div>
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

  if (field.type === "date") {
    return <SingleDateInput value={value} onChange={onChange} />;
  }

  if (field.type === "daterange") {
    return (
      <DateRangeField
        value={value}
        onChange={onChange}
        ongoingLabel={field.ongoingLabel}
      />
    );
  }

  if (field.type === "image") {
    return (
      <div className="flex flex-col gap-1.5">
        <div className="flex items-center gap-3">
          <label className="group relative flex h-16 w-16 shrink-0 cursor-pointer items-center justify-center overflow-hidden rounded-lg border border-dashed border-surface-border bg-surface-1 hover:border-primary">
            {value ? (
              <img src={value} alt="" className="h-full w-full object-cover" />
            ) : (
              <i className="ri-image-add-line text-lg text-text-muted"></i>
            )}
            <span className="absolute inset-0 flex items-center justify-center bg-surface-1/70 text-[11px] font-medium text-text-primary opacity-0 duration-200 group-hover:opacity-100">
              {uploading ? "..." : "Upload"}
            </span>
            <input
              type="file"
              accept="image/png,image/jpeg,image/webp,image/gif,image/svg+xml"
              className="hidden"
              disabled={uploading}
              onChange={(e) => handleFile(e.target.files?.[0])}
            />
          </label>
          {value && (
            <button
              type="button"
              onClick={() => onChange("")}
              className="text-xs font-medium text-text-secondary hover:text-red-400"
            >
              Remove
            </button>
          )}
        </div>
        {error && <p className="text-xs text-red-400">{error}</p>}
      </div>
    );
  }

  if (field.type === "file") {
    return (
      <div className="flex flex-col gap-1.5">
        <div className="flex items-center gap-3">
          <input
            className={inputClass}
            type="text"
            value={value || ""}
            placeholder="/certificates/... or https://..."
            onChange={(e) => onChange(e.target.value)}
          />
          {value && (
            <a
              href={value}
              target="_blank"
              rel="noreferrer"
              className="shrink-0 text-xs font-medium text-primary hover:underline"
            >
              View
            </a>
          )}
          <label className={uploadButtonClass}>
            <i className="ri-upload-2-line"></i>
            {uploading ? "..." : "Upload"}
            <input
              type="file"
              accept="application/pdf,image/*"
              className="hidden"
              disabled={uploading}
              onChange={(e) => handleFile(e.target.files?.[0])}
            />
          </label>
        </div>
        {error && <p className="text-xs text-red-400">{error}</p>}
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
  const [dragIndex, setDragIndex] = useState(null);
  const [dragOverIndex, setDragOverIndex] = useState(null);
  const [expandedIndices, setExpandedIndices] = useState(() => new Set());

  const toggleExpanded = (index) => {
    setExpandedIndices((prev) => {
      const next = new Set(prev);
      if (next.has(index)) next.delete(index);
      else next.add(index);
      return next;
    });
  };

  const updateItem = (index, key, val) => {
    const next = items.map((item, i) =>
      i === index ? { ...item, [key]: val } : item,
    );
    onChange(next);
  };

  const removeItem = (index) => {
    onChange(items.filter((_, i) => i !== index));
  };

  const addItem = () => {
    onChange([...items, { ...schema.emptyItem }]);
    setExpandedIndices((prev) => new Set(prev).add(items.length));
  };

  const handleDrop = (index) => {
    if (dragIndex === null || dragIndex === index) {
      setDragIndex(null);
      setDragOverIndex(null);
      return;
    }
    const next = [...items];
    const [moved] = next.splice(dragIndex, 1);
    next.splice(index, 0, moved);
    onChange(next);
    setDragIndex(null);
    setDragOverIndex(null);
  };

  return (
    <div className="flex flex-col gap-4">
      <button
        type="button"
        onClick={addItem}
        className="flex items-center justify-center gap-2 rounded-2xl border border-dashed border-surface-border py-4 text-text-secondary hover:border-primary hover:text-primary"
      >
        <i className="ri-add-line"></i>
        Add {schema.label} item
      </button>

      {items.map((item, index) => {
        const expanded = expandedIndices.has(index);
        return (
          <div
            key={index}
            onDragOver={(e) => {
              e.preventDefault();
              if (dragIndex !== null) setDragOverIndex(index);
            }}
            onDrop={(e) => {
              e.preventDefault();
              handleDrop(index);
            }}
            className={`flex flex-col rounded-2xl border bg-surface-card p-5 duration-150 ${
              dragOverIndex === index
                ? "border-primary"
                : "border-surface-border"
            } ${dragIndex === index ? "opacity-40" : ""}`}
          >
            <div className="flex items-center justify-between gap-3">
              <div className="flex flex-1 items-center gap-2">
                <span
                  draggable
                  onDragStart={(e) => {
                    e.dataTransfer.effectAllowed = "move";
                    setDragIndex(index);
                  }}
                  onDragEnd={() => {
                    setDragIndex(null);
                    setDragOverIndex(null);
                  }}
                  onClick={(e) => e.stopPropagation()}
                  className="cursor-grab text-text-muted hover:text-primary active:cursor-grabbing"
                  aria-label="Drag to reorder"
                >
                  <i className="ri-draggable"></i>
                </span>
                <button
                  type="button"
                  onClick={() => toggleExpanded(index)}
                  className="flex flex-1 items-center justify-between gap-2 text-left"
                  aria-expanded={expanded}
                >
                  <h3 className="font-semibold text-text-primary">
                    {schema.itemLabel(item)}
                  </h3>
                  <i
                    className={`ri-arrow-down-s-line shrink-0 text-lg text-text-muted duration-200 ${
                      expanded ? "rotate-180" : ""
                    }`}
                  ></i>
                </button>
              </div>
              <div className="flex items-center gap-1">
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

            <div
              className={`grid transition-all duration-300 ease-in-out ${
                expanded
                  ? "grid-rows-[1fr] opacity-100"
                  : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden">
                <div className="grid grid-cols-1 gap-3 pt-3 desktop:grid-cols-2">
                  {schema.fields.map((field) => (
                    <div
                      key={field.key}
                      className={
                        field.type === "textarea" ||
                        field.type === "tags" ||
                        field.type === "daterange"
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
            </div>
          </div>
        );
      })}
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
