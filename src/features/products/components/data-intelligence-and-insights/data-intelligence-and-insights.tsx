"use client";
import {
  PrecisionDataProductIcon,
  PrecisionDataProductTextIcon
} from "@/assets/icons/common";
import {
  BankDataAggregationImage,
  DataEnrichmentImage,
  IncomeExpenseInsightsImage,
  PrecisionDataImage,
  RiskCreditScoringImage,
  SmartBankImage,
  TransactionCategorisationImage
} from "@/assets/images/features/products";
import ProductDetailPagesCommon from "../product-detail-pages-common";

export const DataIntelligenceAndInsights = () => {
  const gridContent = [
    {
      id: 1,
      sectionImage: SmartBankImage,
      title: "The Core Infrastructure for Financial Intelligence",
      subtitle: "SmartBank Data Layer",
      description:
        "A high-integrity data layer purpose-built for financial applications. It standardises fragmented bank data into a unified, enriched format ready for instant deployment across insights engines, analytics dashboards, or credit models.",
      innerValues: [
        {
          liTitle: "What It Delivers:",
          liList: [
            "Normalised multi-bank data across all institutions",
            "Real-time and historical transaction streams",
            "Embedded enrichment (tags, categories, context)",
            "Plug-and-play API for developers and analysts",
            "Enterprise-ready performance and stability",
          ],
        },
        {
          liTitle: "Strategic Value:",
          liList: [
            "Enables intelligent automation at scale",
            "Reduces time spent cleaning and structuring raw data",
            "Provides a stable data backbone for any fintech stack",
            "Supports regulatory, analytical, and reporting use cases",
          ],
        },
      ],
    },
    {
      id: 2,
      sectionImage: BankDataAggregationImage,
      title: "360° Visibility Across Accounts, Regions, and Institutions",
      subtitle: "Bank Data Aggregation",
      description:
        "Consolidate all financial accounts into a single, coherent view from personal checking to business multi-currency wallets. This engine powers the unified visibility essential for forecasting, reconciliation, and financial planning.",
      innerValues: [
        {
          liTitle: "What It Delivers:",
          liList: [
            "Secure aggregation across thousands of institutions",
            "Real-time and periodic sync options",
            "Complete balance and transaction coverage",
            "Consent-based authentication flows",
            "Global support for multi-region aggregation",
          ],
        },
        {
          liTitle: "Strategic Value:",
          liList: [
            "Eliminates blind spots across fragmented accounts",
            "Empowers richer financial profiling",
            "Enables fully reconciled views in accounting platforms",
            "Powers cross-border or group-level financial visibility",
          ],
        },
      ],
    },
    {
      id: 3,
      sectionImage: TransactionCategorisationImage,
      title: "Automated Classification with Enterprise Accuracy",
      subtitle: "Transaction Categorisation",
      description:
        "Harness advanced machine learning to classify transactions with precision from everyday spending to niche business activity. Built to scale across millions of transactions without compromising accuracy.",
      innerValues: [
        {
          liTitle: "What It Delivers:",
          liList: [
            "100+ intelligent categories (customisable)",
            "Contextual classification using ML and metadata",
            "Merchant identification, logo mapping, and labels",
            "Multi-language and international merchant support",
            "Consistent outputs for analytics and reporting",
          ],
        },
        {
          liTitle: "Strategic Value:",
          liList: [
            "Enhances clarity in financial dashboards",
            "Enables precision spend tracking and trend analysis",
            "Reduces manual bookkeeping or reconciliation effort",
            "Supports affordability and behavioural profiling",
          ],
        },
      ],
    },
    {
      id: 4,
      sectionImage: DataEnrichmentImage,
      title: "Elevate Data Unlock Context Add Meaning",
      subtitle: "Data Enrichment",
      description:
        "Data becomes insight when it's enriched. We apply metadata, visual markers, location tags, and logic-based enhancements to transform raw financial activity into information you can act on.",
      innerValues: [
        {
          liTitle: "What It Delivers:",
          liList: [
            "Branded merchant mapping and metadata overlays",
            "Geolocation context for transactions",
            "Duplicate detection and anomaly filtering",
            "Visual enrichment: icons, categories, branding",
            "Optional compliance and ESG tagging",
          ],
        },
        {
          liTitle: "Strategic Value:",
          liList: [
            "Improves end-user experience in apps and dashboards",
            "Drives trust through clearer data presentation",
            "Enhances downstream AI, ML, or analytics tools",
            "Supports enriched data exports for partners and reports",
          ],
        },
      ],
    },
    {
      id: 5,
      sectionImage: IncomeExpenseInsightsImage,
      title: "Track Flow. Detect Risk. Power Smarter Decisions",
      subtitle: "Income & Expense Insights",
      description:
        "Real-time insights into income patterns, recurring bills, spending behaviour, and disposable cash flow. Ideal for credit risk, affordability checks, financial planning, or B2B software integrations.",
      innerValues: [
        {
          liTitle: "What It Delivers:",
          liList: [
            "Income stream analysis: salary, benefits, bonuses",
            "Recurring spend: subscriptions, utilities, rent",
            "Disposable income calculation and projections",
            "Income stability and anomaly detection",
            "Time-series expense tracking",
          ],
        },
        {
          liTitle: "Strategic Value:",
          liList: [
            "Essential for credit and affordability modelling",
            "Powers financial wellness tools and alerts",
            "Helps anticipate financial risk or opportunity",
            "Supports predictive analytics and trend analysis",
          ],
        },
      ],
    },
    {
      id: 6,
      sectionImage: RiskCreditScoringImage,
      title: "Next-Gen Credit Scoring — Built on Real Bank Data",
      subtitle: "Risk & Credit Scoring",
      description:
        "Ditch outdated credit bureau models. We enable dynamic, fair, and accurate credit scoring using real income, transaction behaviour, and cash flow — enabling inclusive lending without compromise on risk.",
      innerValues: [
        {
          liTitle: "What It Delivers:",
          liList: [
            "Behavioural and transactional credit scoring",
            "Real-time financial stability analysis",
            "Cash flow–based affordability models",
            "Score APIs and segmentation logic",
            "Custom scorecard support for lenders",
          ],
        },
        {
          liTitle: "Strategic Value:",
          liList: [
            "Supports modern lending and BNPL platforms",
            "Reduces reliance on legacy bureau scores",
            "Enables access to credit for underserved segments",
            "Improves underwriting and loss prediction accuracy",
          ],
        },
      ],
    },
  ];

  return (
    <ProductDetailPagesCommon
      PageIcon={PrecisionDataProductIcon}
      PageName={PrecisionDataProductTextIcon}
      PageTitle={
        <>
          Precision Data for High <br /> Performance Finance
        </>
      }
      PageDescription={
        <>
          Financial data is only powerful when it’s accurate, structured, and
          actionable. Our intelligence suite <br /> transforms raw bank feeds
          into high-value datasets, enabling advanced analytics, predictive
          tools, and <br /> smarter decisions across banking, lending, payments,
          and accounting.
        </>
      }
      PageHeaderImage={PrecisionDataImage}
      gridContent={gridContent}
    />
  );
};

export default DataIntelligenceAndInsights;
