"use client";
import {
  MoveMoneyProductIcon,
  MoveMoneyProductTextIcon,
} from "@/assets/icons/common";
import {
  CurrencyExchangeConversionImage,
  MultiCurrencyWalletImage,
  PaymentInitiationServicesImage,
  PaymentsMoneyMovementImage,
  PeerToPeerTransfersImage,
  RealTimeMicroPaymentsImage,
} from "@/assets/images/features/products";
import ProductDetailPagesCommon from "../product-detail-pages-common";

export const PaymentsAndMoneyMovement = () => {
  const gridContent = [
    {
      id: 1,
      sectionImage: PaymentInitiationServicesImage,
      title: "Initiate with Intelligence. Complete with Confidence",
      subtitle: "Payment Initiation Services ",
      description:
        "Initiate direct payments from bank accounts without card rails or delays. Prestige's PIS infrastructure uses secure open banking APIs to trigger bank transfers instantly reducing fees, improving user experience, and increasing payment success rates.",
      innerValues: [
        {
          liTitle: "What It Delivers:",
          liList: [
            "Direct bank-to-bank payments",
            "Real-time payment initiation via Open Banking",
            "Built-in Strong Customer Authentication (SCA)",
            "Branded or white-labeled payment flows",
            "Full transaction traceability",
            "FCA-compliant and PSD2-ready",
          ],
        },
        {
          liTitle: "Strategic Value:",
          liList: [
            "Lower processing costs than card payments",
            "Faster settlement times",
            "Reduced fraud risk",
            "Improved user trust and checkout experience",
            "Customisable flows for full brand control",
          ],
        },
      ],
    },
    {
      id: 2,
      sectionImage: MultiCurrencyWalletImage,
      title: "Your Global Wallet. Localised for Every Transaction",
      subtitle: "Multi-Currency Wallet",
      description:
        "Enable customers or businesses to hold, send, and receive money in multiple currencies all in one secure wallet. Built for global expansion, the Prestige Multi-Currency Wallet supports real-time FX, instant transfers, and full compliance.",
      innerValues: [
        {
          liTitle: "What It Delivers:",
          liList: [
            "Multi-currency balances under one user account",
            "Instant internal transfers",
            "Currency holding, conversion, and settlement",
            "Bank-level security and encryption",
            "API-first integration with your platform",
          ],
        },
        {
          liTitle: "Strategic Value:",
          liList: [
            "Simplifies cross-border payments",
            "Reduces currency conversion friction",
            "Enables global user onboarding",
            "Offers transparent FX and wallet fees",
            "Ideal for ecommerce, SaaS, and digital platforms",
          ],
        },
      ],
    },
    {
      id: 3,
      sectionImage: RealTimeMicroPaymentsImage,
      title: "Precision Payments. Down to the Cent.",
      subtitle: "Real-Time Micro-Payments",
      description:
        "Facilitate ultra-fast, ultra-small transactions for content, usage-based billing, subscriptions, or gamification. Prestige’s micro-payment engine delivers intelligent routing, high frequency handling, and instantaneous confirmation built for scale.",
      innerValues: [
        {
          liTitle: "What It Delivers:",
          liList: [
            "Process payments under £1 or local equivalents",
            "High-frequency, low-latency transaction engine",
            "Instant confirmation & reconciliation",
            "Custom user limits and rules",
            "Seamless API integration",
          ],
        },
        {
          liTitle: "Strategic Value:",
          liList: [
            "Monetise digital content or per-use models",
            "Enhance user experience for low-cost services",
            "Reduce friction in subscription and reward flows",
            "Built-in protections against overuse/fraud",
          ],
        },
      ],
    },
    {
      id: 4,
      sectionImage: CurrencyExchangeConversionImage,
      title: "Real FX. Real Fast",
      subtitle: "Currency Exchange & Conversion",
      description:
        "Prestige offers intelligent, real-time currency conversion at competitive rates. Whether for remittance, global business payments, or marketplace transactions our FX tools ensure clarity, control, and compliance every time.",
      innerValues: [
        {
          liTitle: "What It Delivers:",
          liList: [
            "Real-time FX rates with live pricing",
            "Transparent fees and mid-market references",
            "Support for major and exotic currencies",
            "Instant currency conversion at the point of payment",
            "Fully compliant with AML and regulatory standards",
          ],
        },
        {
          liTitle: "Strategic Value:",
          liList: [
            "Improved international checkout experience",
            "Reduced FX slippage and surprise costs",
            "Transparent pricing builds user trust",
            "Scales with international growth",
          ],
        },
      ],
    },
    {
      id: 5,
      sectionImage: PeerToPeerTransfersImage,
      title: "Connect Users. Move Money Instantly.",
      subtitle: "Peer-to-Peer Transfers",
      description:
        "Let users send, request, and receive money in real time. Whether for splitting bills, paying friends, or intra-team reimbursements our P2P engine enables seamless personal transfers with full traceability and embedded security.",
      innerValues: [
        {
          liTitle: "What It Delivers:",
          liList: [
            "Instant P2P transfers within your platform",
            "Unique user IDs and payment handles",
            "Full payment history and notifications",
            "Optional escrow and split payments",
            "Identity-verified transfers",
          ],
        },
        {
          liTitle: "Strategic Value:",
          liList: [
            "Boosts user engagement and retention",
            "Ideal for social, gig, and wallet-based apps",
            "Reduces need for third-party tools (e.g., PayPal, Venmo)",
            "Customisable UX for brand-first experiences",
          ],
        },
      ],
    },
  ];

  return (
    <ProductDetailPagesCommon
      PageIcon={MoveMoneyProductIcon}
      PageName={MoveMoneyProductTextIcon}
      PageTitle={
        <>
          Move money smarter. Globally <br /> connected. Instantly enabled.
        </>
      }
      PageDescription={
        <>
          Unlock frictionless financial movement across borders and systems.
          Prestige empowers your business with fast, <br /> secure, and
          regulation-ready payment infrastructure — combining open banking
          technology with intuitive design. <br /> Move money in real time,
          convert currency with confidence, and connect your customers to a
          better way to pay.
        </>
      }
      PageHeaderImage={PaymentsMoneyMovementImage}
      gridContent={gridContent}
    />
  );
};

export default PaymentsAndMoneyMovement;
