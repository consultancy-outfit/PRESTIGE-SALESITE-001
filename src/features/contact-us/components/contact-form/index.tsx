"use client";
import { contactUsFormFields } from "./contact-form.data";
import { useContactUs } from "./use-contact-form";
import { CustomFormProvider } from "@/providers/custom-form-provider";
import { FormGrid } from "@/components/grids/form-grid";
import { CommonCard } from "@/components/cards/common-card";
import { CommonLoadingButton } from "@/components/buttons/common-loading-button";
import { CommonCircularProgress } from "@/components/progress-bars/common-circular-progress";

const ContactForm = () => {
  const { methods, handleSubmit, submitContactUs, isLoading } = useContactUs();

  return (
    <CommonCard borderRadius={8} customStyles={{ p: { md: 4, xs: 2 } }}>
      <CustomFormProvider
        methods={methods}
        onSubmit={handleSubmit(submitContactUs)}
      >
        <FormGrid formFieldsList={contactUsFormFields} size="large" />
        <br />
        <CommonLoadingButton
          variant="contained"
          color="primary"
          type="submit"
          size="large"
          loading={isLoading}
          disabled={isLoading}
          customStyles={{ p: "1rem 1.5rem", fontSize: 20, borderRadius: 12 }}
          onClick={() => handleSubmit(submitContactUs)}
          fullWidth
        >
          {isLoading ? <CommonCircularProgress /> : "Submit "}
        </CommonLoadingButton>
      </CustomFormProvider>
    </CommonCard>
  );
};

export default ContactForm;
