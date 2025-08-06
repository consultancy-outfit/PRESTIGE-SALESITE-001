import { HeadingText } from "@/components/text/heading-text";
import { alpha, Box } from "@mui/material";
import { SubHeadingText } from "@/components/text/sub-heading-text";
import { CommonCard } from "@/components/cards/common-card";
import { BookIcon, QuestionIcon } from "../../assets/icons";
import { CustomText } from "@/components/text/custom-text";

const ContactInfoCard = () => {
  return (
    <Box
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <Box>
        <HeadingText
          variant="h1"
          fontWeight="fontWeightMedium"
          color="common.white"
        >
          Contact us
        </HeadingText>
        <SubHeadingText
          variant="subtitle1"
          marginTop={2}
          color="common.white"
          fontWeight="fontWeightThin"
          customStyles={{ width: { md: "70%", xs: "100%" } }}
        >
          Whether you’re exploring Open Banking integration, looking for
          tailored solutions, or just need to speak with an expert—Prestige is
          here to help.
        </SubHeadingText>
      </Box>
      <Box display={"flex"} gap={1} mt={2}>
        <CommonCard
          backgroundColor={alpha("#FFFFFF1A", 0.1)}
          boxShadow={0}
          customStyles={{ width: 288 }}
        >
          <QuestionIcon />
          <SubHeadingText
            variant="subtitle2"
            marginTop={1}
            color="common.white"
          >
            Have a questions?
          </SubHeadingText>
          <CustomText
            variant="body1"
            color="common.white"
            fontWeight="fontWeightThin"
          >
            Find the answers to frequently asked questions here.
          </CustomText>
        </CommonCard>
        <CommonCard
          backgroundColor={alpha("#FFFFFF1A", 0.1)}
          boxShadow={0}
          customStyles={{ width: 288 }}
        >
          <BookIcon />
          <SubHeadingText
            variant="subtitle2"
            marginTop={1}
            color="common.white"
          >
            Compliance & Privacy
          </SubHeadingText>
          <CustomText
            variant="body1"
            color="common.white"
            fontWeight="fontWeightThin"
          >
            For privacy, security, and regulatory inquiries.
          </CustomText>
        </CommonCard>
      </Box>
    </Box>
  );
};

export default ContactInfoCard;
