"use client";
import {
  CentspayProductIcon,
  CentspayProductTextIcon,
} from "@/assets/icons/common";
import {
  CentspayImage,
  EverydayMoneyImage,
  ExpenseAndSpendAnalyticsImage,
  SavingsWithCentsImage,
} from "@/assets/images/features/products";
import ProductDetailPagesCommon from "../product-detail-pages-common";

export const CentsPayFeature = () => {
  const gridContent = [
    {
      id: 1,
      sectionImage: CentspayImage,
      title: "Real-Time Micro-Payments with a Macro Impact",
      subtitle: "Centspay",
      description:
        "Centspay enables users to transact in real-time with unmatched precision whether paying peers, splitting bills, or automating small-value transfers. Fast, secure, and designed for modern digital behavior.",
      innerValues: [
        {
          liTitle: "What It Delivers:",
          liList: [
            "Real-time P2P payments",
            "Micro-transaction support with instant settlement",
            "Auto-split and shared payments",
            "Built-in payment links and QR functionality",
            "Secure with strong customer authentication (SCA)",
          ],
        },
        {
          liTitle: "Strategic Value:",
          liList: [
            "Increase user engagement through fluid payments",
            "Reduce dependency on external payment apps",
            "Enable innovative pricing models (e.g., pay-per-use)",
            "Build trust with fast and transparent transfers",
          ],
        },
      ],
    },
    {
      id: 2,
      sectionImage: SavingsWithCentsImage,
      title: "Automated Saving, Invisible Effort",
      subtitle: "Savings with Cents",
      description:
        "Turn spare change into savings with intelligent micro-saving algorithms. Users can round up purchases, set triggers, and automate transfers toward their goals making saving habitual without disrupting spending.",
      innerValues: [
        {
          liTitle: "What It Delivers:",
          liList: [
            "Purchase round-up and auto-save options",
            "Rule-based savings (e.g., save when you skip coffee)",
            "Goal tracking with dynamic progress visuals",
            "Scheduled transfers and smart nudges",
            "Integration with wallets or bank accounts",
          ],
        },
        {
          liTitle: "Strategic Value:",
          liList: [
            "Encourage long-term saving behavior",
            "Make saving feel effortless and rewarding",
            "Drive product stickiness through goal-oriented features",
            "Improve user financial well-being",
          ],
        },
      ],
    },
    {
      id: 3,
      sectionImage: ExpenseAndSpendAnalyticsImage,
      title: "Clarity in Every Transaction",
      subtitle: "Expense & Spend Analytics",
      description:
        "Empower users with real-time insights into their spending patterns. From category-based visuals to intelligent spend alerts, help users understand where their money goes and how to take back control.",
      innerValues: [
        {
          liTitle: "What It Delivers:",
          liList: [
            "Real-time spend categorisation",
            "Monthly trends and anomaly detection",
            "Budget creation and progress tracking",
            "Merchant-level transaction insights",
            "Smart alerts for overspending or unusual activity",
          ],
        },
        {
          liTitle: "Strategic Value:",
          liList: [
            "Promote financial awareness and self-correction",
            "Help users make informed money choices",
            "Increase user trust and platform usage",
            "Deliver actionable insights without overwhelming complexity",
          ],
        },
      ],
    },
  ];

  return (
    <ProductDetailPagesCommon
      PageIcon={CentspayProductIcon}
      PageName={CentspayProductTextIcon}
      PageTitle={
        <>
          Everyday Money, <br /> Reimagined with Precision
        </>
      }
      PageDescription={
        <>
          Give your users the tools to master money without friction. Centspay
          offers powerful, behind-the-scenes <br /> capabilities that make
          saving smarter, spending more conscious, and money management
          beautifully simple. <br /> Built to deliver real-time control and
          long-term financial confidence — all through intuitive, elegant
          experiences.
        </>
      }
      PageHeaderImage={EverydayMoneyImage}
      gridContent={gridContent}
    />
  );
};

export default CentsPayFeature;
