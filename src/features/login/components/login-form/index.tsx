import { CommonButton } from "@/components/buttons/common-button";
import { BodyText } from "@/components/text/body-text";
import { HeadingText } from "@/components/text/heading-text";
import { Box, Container } from "@mui/material";
import { GoogleIcon } from "../../assets";
import { useLoginForm } from "../../hooks/useLoginForm";
import { CustomFormProvider } from "@/providers/custom-form-provider";
import TextFormFields from "@/components/form-fields/text-form-field";
import { CustomText } from "@/components/text/custom-text";
import Link from "next/link";
import { SubHeadingText } from "@/components/text/sub-heading-text";
import { APP_ROUTES } from "@/constants/routes";

const LoginForm = () => {
  const { methods, onSubmit, handleSubmit } = useLoginForm();
  return (
    <CustomFormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <Container
        maxWidth="md"
        sx={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <HeadingText
          variant="h3"
          fontWeight="fontWeightNormal"
          customStyles={{ py: 2 }}
        >
          Welcome back!
        </HeadingText>
        <SubHeadingText variant="subtitle2" color="grey.400">
          Please enter your details to get started
        </SubHeadingText>
        <CommonButton
          startIcon={<GoogleIcon />}
          variant="outlined"
          fullWidth
          customStyles={{
            borderRadius: 2,
            my: 2,
            opacity: 0.8,
          }}
        >
          Sign In with Google
        </CommonButton>
        <TextFormFields
          name="email"
          label="Email"
          required
          placeholder="Username or email"
        />
        <Box sx={{ mt: 2 }}>
          <TextFormFields
            name="password"
            label="Password"
            placeholder="Password"
            required
            sx={{ mt: 2 }}
          />
        </Box>
        <BodyText
          variant="body2"
          color="error.main"
          fontWeight="fontWeightSemiBold"
          customStyles={{ textAlign: "left", mt: 2 }}
        >
          <Link href={APP_ROUTES.CONTACT_US}>Forgot password?</Link>
        </BodyText>
        <CommonButton
          variant="contained"
          customStyles={{ borderRadius: 8, my: 2 }}
          primary
          fullWidth
          type="submit"
        >
          Sign in
        </CommonButton>
        <BodyText
          variant="body2"
          color="grey.500"
          customStyles={{ textAlign: "center" }}
        >
          Don&apos;t have an account?{" "}
          <CustomText
            variant="body2"
            component="span"
            color="success.dark"
            fontWeight="fontWeightSemiBold"
          >
            <Link href="/get-started">Create account</Link>
          </CustomText>
        </BodyText>
      </Container>
    </CustomFormProvider>
  );
};

export default LoginForm;
