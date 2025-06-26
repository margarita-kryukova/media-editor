import { useForm } from "react-hook-form";
import { useCallback, useState } from "react";
import styles from "./index.module.scss";
import Input from "../../shared/ui/Input";
import Button from "../../shared/ui/Button";
import Checkbox from "../../shared/ui/Checkbox";

interface IFormData {
  email: string;
  name: string;
  phone: string;
  agreement: boolean;
}

type FormStatus = "default" | "submit" | "error";

const FormRequest = () => {
  const [status, setStatus] = useState<FormStatus>("default");
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IFormData>({ mode: "onTouched" });

  const onSubmit = useCallback(
    (data: IFormData) => {
      console.log("Заявка отправлена!\n" + JSON.stringify(data, null, 2));
      // API-запрос
      if (Math.random() > 0.5) {
        setStatus("submit");
        reset();
      } else {
        setStatus("error");
      }
    },
    [reset]
  );

  const renderText = useCallback(
    (title: string, desc: string) => (
      <div className={styles.header}>
        <h4 className={styles.header__title}>{title}</h4>
        <p className={styles.header__desc}>{desc}</p>
      </div>
    ),
    []
  );

  const renderForm = () => (
    <form
      className={styles.form}
      onSubmit={handleSubmit(onSubmit)}
      autoComplete="off"
    >
      <div className={styles.form__header}>
        {renderText(
          "Оставить заявку",
          "Менеджеры перезвонят или напишут в течение дня. Поможем определиться и протестировать продукт. Без спама и навязчивости"
        )}
      </div>
      <div className={styles.form__fields}>
        <div className={styles.form__field}>
          <Input
            placeholder="Email"
            {...register("email", {
              required: "Введите email",
              pattern: {
                value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                message: "Некорректный e-mail",
              },
            })}
            error={errors.email?.message}
          />
        </div>
        <div className={styles.form__field}>
          <Input
            placeholder="Иван Иванов"
            {...register("name", { required: "Введите имя" })}
            error={errors.name?.message}
          />
        </div>
        <div className={styles.form__field}>
          <Input
            placeholder="Телефон"
            {...register("phone", {
              required: "Введите телефон",
              minLength: { value: 6, message: "Слишком короткий телефон" },
            })}
            error={errors.phone?.message}
          />
        </div>
      </div>
      <div className={styles.form__footer}>
        <Checkbox
          label="Я соглашаюсь на обработку персональных данных и присоединяюсь к регламенту СБИС"
          {...register("agreement", { required: true })}
          error={!!errors.agreement}
        />
        <Button
          type="submit"
          className={styles.form__submit}
          text="Отправить"
        />
      </div>
    </form>
  );

  return (
    <>
      {status === "default" && renderForm()}
      {status === "submit" &&
        renderText(
          "Спасибо за заявку",
          "Наши менеджеры свяжутся с вами в течение 5 минут"
        )}
      {status === "error" && renderText("Ошибка", "Повторите попытку позже")}
    </>
  );
};

export default FormRequest;
