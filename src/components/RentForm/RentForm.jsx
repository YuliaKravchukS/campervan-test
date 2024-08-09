import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import CustomCalendar from "../CustomCalendar/CustomCalendar";
import css from "./RentForm.module.css";

const validationSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  email: Yup.string().required("Email is required").email("Email is invalid"),
  date: Yup.date().required("Booking date is required"),
  comment: Yup.string().max(250, "Comment should be at most 250 characters"),
});

const RentForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm({
    resolver: yupResolver(validationSchema),
    defaultValues: {
      date: null,
    },
  });

  const onSubmit = () => {
    window.location.reload();
  };

  return (
    <div className={css.wrapForm}>
      <h2>Book your campervan now</h2>
      <p>Stay connected! We are always ready to help you.</p>

      <form className={css.form} onSubmit={handleSubmit(onSubmit)}>
        <div>
          <input {...register("name")} placeholder='Name' />
          {errors.name && <p>{errors.name.message}</p>}
        </div>
        <div>
          <input {...register("email")} placeholder='Email' />
          {errors.email && <p>{errors.email.message}</p>}
        </div>
        <div className={css.wrapInput}>
          <CustomCalendar
            name='date'
            control={control}
            rules={{ required: "Booking date is required" }}
          />
        </div>
        <div>
          <textarea {...register("comment")} placeholder='Comment' />
          {errors.comment && <p>{errors.comment.message}</p>}
        </div>
        <button className={css.btn} type='submit'>
          Send
        </button>
      </form>
    </div>
  );
};

export default RentForm;
