import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useController } from "react-hook-form";
import css from "./CustomCalendar.module.css";
// import { format } from "date-fns";

const CustomCalendar = ({ control, name, rules }) => {
  const {
    field: { onChange, value },
    fieldState: { error },
  } = useController({ name, control, rules });

  return (
    <div style={{ position: "relative", display: "inline-block" }}>
      <DatePicker
        showIcon
        selected={value}
        onChange={onChange}
        calendarStartDay={1}
        placeholderText='Booking date'
        className={`${css.datepicker} ${error ? css.inputError : ""}`}
        // formatWeekDay={(day) => format(day, "eee")}
      />
    </div>
  );
};

export default CustomCalendar;
