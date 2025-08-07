"use client";
import {
  IdentityAndRegulatoryProductIcon,
  IdentityAndRegulatoryProductTextIcon
} from "@/assets/icons/common";
import {
  BankBasedIdentityVerificationImage,
  PaymentsMoneyMovementImage,
  PSD2AndFCAComplianceImage,
  SecureIdentityAndKYCImage,
} from "@/assets/images/features/products";
import ProductDetailPagesCommon from "../product-detail-pages-common";

export const IdentityAndRegulatoryCompliance = () => {
  const gridContent = [
    {
      id: 1,
      sectionImage: BankBasedIdentityVerificationImage,
      title: "Authenticate Directly from the Source",
      subtitle: "Bank-Based Identity Verification",
      description:
        "Leverage bank-held identity data to verify user identity with unmatched accuracy. This method uses direct, regulated access to confirm name, address, and other KYC-relevant details  reducing fraud, friction, and false positives.",
      innerValues: [
        {
          liTitle: "What It Delivers:",
          liList: [
            "Real-time identity retrieval from user’s bank",
            "Verifies name, address, DOB, and account activity",
            "GDPR-aligned and consent-based",
            "Integrates seamlessly with onboarding and risk systems",
            "Supports individual and business identities",
          ],
        },
        {
          liTitle: "Strategic Value:",
          liList: [
            "Higher match accuracy than document checks",
            "Stop fraud at the source with bank-verified data",
            "Faster, frictionless onboarding",
            "Lower compliance and operational costs",
          ],
        },
      ],
    },
    {
      id: 2,
      sectionImage: SecureIdentityAndKYCImage,
      title: "Know Your Customer, Automatically",
      subtitle: "Secure Identity & KYC",
      description:
        "Simplify KYC and user verification with intelligent, layered identity solutions. From biometric checks to source-of-funds verification, our systems adapt to risk levels and regulatory needs  without slowing the user down.",
      innerValues: [
        {
          liTitle: "What It Delivers:",
          liList: [
            "Bank-based and biometric verification options",
            "ID document capture and validation",
            "Real-time AML and sanctions screening",
            "Re-verification for ongoing due diligence",
            "Seamless UX for mobile and web",
          ],
        },
        {
          liTitle: "Strategic Value:",
          liList: [
            "Satisfy evolving KYC/AML requirements",
            "Scale onboarding with automated verification",
            "Reduce drop-offs and manual reviews",
            "Enhance fraud detection accuracy",
          ],
        },
      ],
    },
    {
      id: 3,
      sectionImage: PSD2AndFCAComplianceImage,
      title: "Compliance Built Into the Core",
      subtitle: "PSD2 & FCA Compliance",
      description:
        "Operate confidently with infrastructure designed for regulatory alignment. Our compliance layer supports PSD2 mandates, SCA protocols, and FCA expectations so you can focus on growth, not risk.",
      innerValues: [
        {
          liTitle: "What It Delivers:",
          liList: [
            "PSD2 and Strong Customer Authentication (SCA) support",
            "Regulatory reporting frameworks",
            "Consent capture and audit trail tools",
            "Identity and transaction monitoring aligned to FCA standards",
            "API and dashboard controls for compliance teams",
          ],
        },
        {
          liTitle: "Strategic Value:",
          liList: [
            "Stay audit-ready and regulator-aligned",
            "Eliminate the burden of compliance development",
            "Improve customer trust and legal certainty",
            "Scale securely across regulated regions",
          ],
        },
      ],
    },
  ];

  return (
    <ProductDetailPagesCommon
      PageIcon={IdentityAndRegulatoryProductIcon}
      PageName={IdentityAndRegulatoryProductTextIcon}
      PageTitle={
        <>
          Trust Starts with Identity. We <br /> Build the Foundation.
        </>
      }
      PageDescription={
        <>
          Security, compliance, and transparency — delivered at infrastructure
          level. Whether it&apos;s <br /> verifying identities directly through
          banks or ensuring your consent flows meet PSD2 and <br /> FCA
          standards, our tools give you the edge in compliance and user
          protection.
        </>
      }
      PageHeaderImage={PaymentsMoneyMovementImage}
      gridContent={gridContent}
    />
  );
};

export default IdentityAndRegulatoryCompliance;
