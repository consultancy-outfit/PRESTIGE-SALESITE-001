"use client";
import { contactUsFormFields } from "./get-started-form.data";
import { useGetStarted } from "./use-get-started-form";
import { CustomFormProvider } from "@/providers/custom-form-provider";
import { FormGrid } from "@/components/grids/form-grid";
import { CommonLoadingButton } from "@/components/buttons/common-loading-button";
import { CommonCircularProgress } from "@/components/progress-bars/common-circular-progress";

const GetStartedForm = () => {
  const { methods, handleSubmit, submitContactUs, isLoading } = useGetStarted();

  return (
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
          fullWidth
        >
          {isLoading ? <CommonCircularProgress /> : "Submit"}
        </CommonLoadingButton>
      </CustomFormProvider>
  );
};

export default GetStartedForm;
