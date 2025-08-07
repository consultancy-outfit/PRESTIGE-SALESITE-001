"use client";
import {
  AccountAccessProductIcon,
  AccountAccessProductTextIcon,
} from "@/assets/icons/common";
import {
  AccountInformationImage,
  AccountOwnershipImage,
  ConsentFlowImage,
  SecureAccessImage,
} from "@/assets/images/features/products";
import ProductDetailPagesCommon from "../product-detail-pages-common";

export const AccountAccessAndConnectivity = () => {
  const gridContent = [
    {
      id: 1,
      sectionImage: AccountInformationImage,
      title: "Live Bank Feeds for Deeper Financial Visibility",
      subtitle: "Account Information Services",
      description:
        "Give users real-time access to their financial data across multiple bank accounts. AIS enables direct connectivity to banking infrastructure, making it easy to retrieve balances, transactions, and account details with full user consent.",
      innerValues: [
        {
          liTitle: "What It Delivers:",
          liList: [
            "Multi-bank account aggregation",
            "Real-time balance and transaction retrieval",
            "Consent-driven, PSD2-compliant access",
            "Seamless integration with personal and business finance tools",
            "Support for all major UK and EU banks",
          ],
        },
        {
          liTitle: "Strategic Value:",
          liList: [
            "Improve financial forecasting with live data",
            "Reduce manual data entry and reconciliation",
            "Enable personalised insights for your users",
            "Stay compliant with open banking standards",
          ],
        },
      ],
    },
    {
      id: 2,
      sectionImage: ConsentFlowImage,
      title: "Your Data. Your Control.",
      subtitle: "Consent Flow Management",
      description:
        "Make consent simple, transparent, and trackable. Our Consent Flow Management tools enable users to grant, revoke, and manage data-sharing permissions with full visibility and compliance baked into every step.",
      innerValues: [
        {
          liTitle: "What It Delivers:",
          liList: [
            "Fully customisable consent journeys",
            "Real-time consent status tracking",
            "Consent expiration and renewal logic",
            "Secure user authentication and session management",
            "Audit-ready records for regulatory use",
          ],
        },
        {
          liTitle: "Strategic Value:",
          liList: [
            "Build trust through clear data control",
            "Ensure GDPR and PSD2 compliance",
            "Reduce support overhead with self-serve tools",
            "Track and manage permissions effortlessly",
          ],
        },
      ],
    },
    {
      id: 3,
      sectionImage: AccountOwnershipImage,
      title: "Instant Proof. Real Confidence.",
      subtitle: "Account Ownership Validation",
      description:
        "Verify account ownership directly from the source — the bank itself. Our service checks user-provided details against verified bank data in real-time, streamlining onboarding and eliminating fraud risks.",
      innerValues: [
        {
          liTitle: "What It Delivers:",
          liList: [
            "Real-time validation of name, account number, and sort code",
            "Supports personal and business accounts",
            "Reduces fraud and onboarding friction",
            "Integrates with KYC and AML workflows",
            "API and dashboard options available",
          ],
        },
        {
          liTitle: "Strategic Value:",
          liList: [
            "Lower risk of fraud and identity mismatch",
            "Accelerate customer onboarding",
            "Strengthen compliance workflows",
            "Improve conversion with instant verification",
          ],
        },
      ],
    },
    // ...other items
  ];

  return (
    <ProductDetailPagesCommon
      PageIcon={AccountAccessProductIcon}
      PageName={AccountAccessProductTextIcon}
      PageTitle={
        <>
          Seamless, Secure Access to <br /> What Matters Most
        </>
      }
      PageDescription={
        <>
          Empower users to control their financial data with precision and
          trust. Our access tools are <br />
          designed for real-time bank connectivity, secure authorisations, and
          consent-first <br />
          experiences — all under full regulatory compliance.
        </>
      }
      PageHeaderImage={SecureAccessImage}
      gridContent={gridContent}
    />
  );
};

export default AccountAccessAndConnectivity;
