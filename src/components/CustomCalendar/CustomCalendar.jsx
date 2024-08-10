import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useController } from "react-hook-form";
import css from "./CustomCalendar.module.css";
import icons from "../../assets/icons.svg";
import { dayMappings } from "../../constans/constans";

const CustomCalendar = ({ control, name, rules }) => {
  const {
    field: { onChange, value },
    fieldState: { error },
  } = useController({ name, control, rules });

  const formatWeekDay = (day) => {
    return dayMappings[day] || "";
  };

  return (
    <div
      className='customCalendarWrapper'
      style={{ position: "relative", display: "inline-block" }}
    >
      <DatePicker
        formatWeekDay={formatWeekDay}
        showIcon
        selected={value}
        onChange={onChange}
        calendarStartDay={1}
        placeholderText='Booking date'
        className={`${css.datepicker} ${error ? css.inputError : ""}`}
        icon={
          <svg width={20} height={20}>
            <use className={css.icon} href={`${icons}#icon-date`} />
          </svg>
        }
      />
      {error && (
        <p className={css.error}>{error.message || "Invalid date selected"}</p>
      )}
    </div>
  );
};

export default CustomCalendar;
