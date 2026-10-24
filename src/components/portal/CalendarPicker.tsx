"use client";

import { useEffect, useId, useMemo, useRef, useState } from "react";
import "@/styles/portal/calendar-picker.css";

export type CalendarPickerProps = {
  id?: string;
  name?: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  required?: boolean;
  invalid?: boolean;
  disabled?: boolean;
};

const WEEKDAYS = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];

const MONTH_NAMES = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

function CalendarIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="3" y="4" width="18" height="18" rx="2.5" stroke="currentColor" strokeWidth="2" />
      <line x1="16" y1="2" x2="16" y2="6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <line x1="8" y1="2" x2="8" y2="6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <line x1="3" y1="10" x2="21" y2="10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function ChevronIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function LeftArrow() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function RightArrow() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <line x1="18" y1="6" x2="6" y2="18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <line x1="6" y1="6" x2="18" y2="18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function pad2(n: number) {
  return n < 10 ? `0${n}` : `${n}`;
}

export function CalendarPicker({
  id,
  name,
  value,
  onChange,
  placeholder = "Select due date...",
  required,
  invalid,
  disabled,
}: CalendarPickerProps) {
  const generatedId = useId();
  const inputId = id || generatedId;
  const containerRef = useRef<HTMLDivElement>(null);

  const [isOpen, setIsOpen] = useState(false);

  // Parse current value (date only: YYYY-MM-DD)
  const parsed = useMemo(() => {
    if (!value) return null;
    const datePart = value.includes("T") ? value.split("T")[0] : value;
    const [y, m, d] = datePart.split("-").map(Number);
    if (!y || !m || !d) return null;
    return {
      year: y,
      month: m - 1,
      day: d,
    };
  }, [value]);

  // View state for month/year currently visible in the calendar grid
  const today = useMemo(() => new Date(), []);
  const [viewYear, setViewYear] = useState(() => parsed?.year ?? today.getFullYear());
  const [viewMonth, setViewMonth] = useState(() => parsed?.month ?? today.getMonth());

  // Sync view state when value changes externally
  useEffect(() => {
    if (parsed) {
      setViewYear(parsed.year);
      setViewMonth(parsed.month);
    }
  }, [parsed]);

  // Click outside listener
  useEffect(() => {
    if (!isOpen) return;

    function handleOutsideClick(event: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleOutsideClick);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  // Format display text in input trigger (clean date only)
  const displayInfo = useMemo(() => {
    if (!parsed) return null;
    const d = new Date(parsed.year, parsed.month, parsed.day);
    if (isNaN(d.getTime())) return null;

    const dateStr = d.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });

    return {
      fullLabel: dateStr,
    };
  }, [parsed]);

  // Build 42 grid cells (6 rows x 7 days)
  const calendarDays = useMemo(() => {
    const firstDayIndex = new Date(viewYear, viewMonth, 1).getDay();
    const daysInMonth = new Date(viewYear, viewMonth + 1, 0).getDate();
    const daysInPrevMonth = new Date(viewYear, viewMonth, 0).getDate();

    const cells: Array<{
      year: number;
      month: number;
      day: number;
      isOutside: boolean;
      isToday: boolean;
      isSelected: boolean;
    }> = [];

    // Previous month trailing days
    for (let i = firstDayIndex - 1; i >= 0; i--) {
      const day = daysInPrevMonth - i;
      const m = viewMonth === 0 ? 11 : viewMonth - 1;
      const y = viewMonth === 0 ? viewYear - 1 : viewYear;
      cells.push({
        year: y,
        month: m,
        day,
        isOutside: true,
        isToday:
          today.getFullYear() === y && today.getMonth() === m && today.getDate() === day,
        isSelected:
          parsed?.year === y && parsed?.month === m && parsed?.day === day,
      });
    }

    // Current month days
    for (let day = 1; day <= daysInMonth; day++) {
      cells.push({
        year: viewYear,
        month: viewMonth,
        day,
        isOutside: false,
        isToday:
          today.getFullYear() === viewYear &&
          today.getMonth() === viewMonth &&
          today.getDate() === day,
        isSelected:
          parsed?.year === viewYear &&
          parsed?.month === viewMonth &&
          parsed?.day === day,
      });
    }

    // Next month leading days to complete 5 or 6 rows (35 or 42 cells)
    const totalNeeded = cells.length <= 35 ? 35 : 42;
    const remaining = totalNeeded - cells.length;
    for (let day = 1; day <= remaining; day++) {
      const m = viewMonth === 11 ? 0 : viewMonth + 1;
      const y = viewMonth === 11 ? viewYear + 1 : viewYear;
      cells.push({
        year: y,
        month: m,
        day,
        isOutside: true,
        isToday:
          today.getFullYear() === y && today.getMonth() === m && today.getDate() === day,
        isSelected:
          parsed?.year === y && parsed?.month === m && parsed?.day === day,
      });
    }

    return cells;
  }, [viewYear, viewMonth, today, parsed]);

  const handleSelectDay = (year: number, month: number, day: number) => {
    const formatted = `${year}-${pad2(month + 1)}-${pad2(day)}`;
    onChange(formatted);
    setIsOpen(false);
  };

  const handlePrevMonth = () => {
    if (viewMonth === 0) {
      setViewMonth(11);
      setViewYear((y) => y - 1);
    } else {
      setViewMonth((m) => m - 1);
    }
  };

  const handleNextMonth = () => {
    if (viewMonth === 11) {
      setViewMonth(0);
      setViewYear((y) => y + 1);
    } else {
      setViewMonth((m) => m + 1);
    }
  };

  const handleSelectToday = () => {
    const now = new Date();
    const formatted = `${now.getFullYear()}-${pad2(now.getMonth() + 1)}-${pad2(now.getDate())}`;
    setViewYear(now.getFullYear());
    setViewMonth(now.getMonth());
    onChange(formatted);
    setIsOpen(false);
  };

  const handleClear = (e: React.MouseEvent) => {
    e.stopPropagation();
    onChange("");
  };

  return (
    <div className="sm-calendar-picker" ref={containerRef}>
      {/* Hidden input for form data / required check */}
      <input
        type="hidden"
        id={inputId}
        name={name}
        value={value}
        required={required}
      />

      {/* Main Trigger Button */}
      <button
        type="button"
        className={`sm-calendar-picker__trigger${
          isOpen ? " sm-calendar-picker__trigger--open" : ""
        }${invalid ? " sm-calendar-picker__trigger--invalid" : ""}`}
        onClick={() => !disabled && setIsOpen((prev) => !prev)}
        aria-haspopup="dialog"
        aria-expanded={isOpen}
        disabled={disabled}
      >
        <div className="sm-calendar-picker__trigger-left">
          <div className="sm-calendar-picker__icon-wrap">
            <CalendarIcon />
          </div>
          {displayInfo ? (
            <span className="sm-calendar-picker__value">
              {displayInfo.fullLabel}
            </span>
          ) : (
            <span className="sm-calendar-picker__placeholder">{placeholder}</span>
          )}
        </div>

        <div className="sm-calendar-picker__trigger-right">
          {value && (
            <span
              role="button"
              tabIndex={0}
              className="sm-calendar-picker__clear-btn"
              onClick={handleClear}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  handleClear(e as unknown as React.MouseEvent);
                }
              }}
              title="Clear date"
              aria-label="Clear date"
            >
              <CloseIcon />
            </span>
          )}
          <span className="sm-calendar-picker__chevron">
            <ChevronIcon />
          </span>
        </div>
      </button>

      {/* Popover Calendar */}
      {isOpen && (
        <div
          className="sm-calendar-picker__popover"
          role="dialog"
          aria-label="Calendar date selector"
        >
          {/* Month/Year & Nav Header */}
          <div className="sm-calendar-picker__header">
            <span className="sm-calendar-picker__month-label">
              {MONTH_NAMES[viewMonth]} {viewYear}
            </span>

            <div className="sm-calendar-picker__nav">
              <button
                type="button"
                className="sm-calendar-picker__today-btn"
                onClick={handleSelectToday}
                title="Select today"
              >
                Today
              </button>
              <button
                type="button"
                className="sm-calendar-picker__nav-btn"
                onClick={handlePrevMonth}
                aria-label="Previous month"
              >
                <LeftArrow />
              </button>
              <button
                type="button"
                className="sm-calendar-picker__nav-btn"
                onClick={handleNextMonth}
                aria-label="Next month"
              >
                <RightArrow />
              </button>
            </div>
          </div>

          {/* Weekday Names */}
          <div className="sm-calendar-picker__weekdays">
            {WEEKDAYS.map((w) => (
              <span key={w} className="sm-calendar-picker__weekday">
                {w}
              </span>
            ))}
          </div>

          {/* Days Grid */}
          <div className="sm-calendar-picker__grid">
            {calendarDays.map((cell, idx) => {
              const classNames = [
                "sm-calendar-picker__day",
                cell.isOutside ? "sm-calendar-picker__day--outside" : "",
                cell.isToday ? "sm-calendar-picker__day--today" : "",
                cell.isSelected ? "sm-calendar-picker__day--selected" : "",
              ]
                .filter(Boolean)
                .join(" ");

              return (
                <button
                  key={`${cell.year}-${cell.month}-${cell.day}-${idx}`}
                  type="button"
                  className={classNames}
                  onClick={() => handleSelectDay(cell.year, cell.month, cell.day)}
                  aria-label={`${MONTH_NAMES[cell.month]} ${cell.day}, ${cell.year}`}
                >
                  {cell.day}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
