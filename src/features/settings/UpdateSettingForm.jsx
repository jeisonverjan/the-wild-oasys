import { useSettings } from "./useSettings";

import Spinner from "../../ui/Spinner";
import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";
import { useEditSettings } from "./useEditSettings";
import { useForm } from "react-hook-form";

function UpdateSettingForm() {
  const {
    isLoading,
    settings: {
      minBookingLength,
      maxBookingLength,
      maxGuestsBooking,
      breakfastPrice,
    } = {},
  } = useSettings();

  const { isEditing, editSetting } = useEditSettings();
  const {
    register,
    trigger,
    formState: { errors },
  } = useForm();

  if (isLoading) return <Spinner />;

  async function handleUpdate(e, fieldName) {
    await trigger(fieldName);
    const { value } = e.target;
    if (!value || value < 1) return;
    editSetting({ [fieldName]: value });
  }

  return (
    <Form>
      <FormRow
        label="Minimum nights/booking"
        error={errors?.minBookingLength?.message}
      >
        <Input
          type="number"
          id="min-nights"
          defaultValue={minBookingLength}
          {...register("minBookingLength", {
            required: "This field is required",
            min: {
              value: 1,
              message: "The value should be at least 1",
            },
          })}
          onBlur={(e) => handleUpdate(e, "minBookingLength")}
          disabled={isEditing}
        />
      </FormRow>

      <FormRow
        label="Maximum nights/booking"
        error={errors?.maxBookingLength?.message}
      >
        <Input
          type="number"
          id="max-nights"
          defaultValue={maxBookingLength}
          {...register("maxBookingLength", {
            required: "This field is required",
            min: {
              value: 1,
              message: "The value should be at least 1",
            },
          })}
          onBlur={(e) => handleUpdate(e, "maxBookingLength")}
          disabled={isEditing}
        />
      </FormRow>

      <FormRow
        label="Maximum guests/booking"
        error={errors?.maxGuestsBooking?.message}
      >
        <Input
          type="number"
          id="max-guests"
          defaultValue={maxGuestsBooking}
          {...register("maxGuestsBooking", {
            required: "This field is required",
            min: {
              value: 1,
              message: "The value should be at least 1",
            },
          })}
          onBlur={(e) => handleUpdate(e, "maxGuestsBooking")}
          disabled={isEditing}
        />
      </FormRow>

      <FormRow label="Breakfast price" error={errors?.breakfastPrice?.message}>
        <Input
          type="number"
          id="breakfast-price"
          defaultValue={breakfastPrice}
          {...register("breakfastPrice", {
            required: "This field is required",
            min: {
              value: 1,
              message: "The value should be at least 1",
            },
          })}
          onBlur={(e) => handleUpdate(e, "breakfastPrice")}
          disabled={isEditing}
        />
      </FormRow>
    </Form>
  );
}

export default UpdateSettingForm;
