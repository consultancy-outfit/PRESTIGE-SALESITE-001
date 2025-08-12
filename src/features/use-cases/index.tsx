"use client";

import { UseCasesIcon } from "@/assets/icons/common";
import {
  BankAccessImage,
  EmpoweringFinanceImage,
  FinancialHabitsImage,
  FinancialInsightsImage,
  GlobalTransactionsImage,
  IdentityAndRegulatoryImage,
  UseCaseFirstImage,
} from "@/assets/images/features/usecases";
import { ReadyToGetStarted } from "@/components/ready-to-get-started";
import { Box, Stack, Typography } from "@mui/material";
import Image from "next/image";

const sections = [
  {
    title: (
      <>
        Unlocking Strategic Financial Insights with <br /> Data Intelligence
      </>
    ),
    image: FinancialInsightsImage,
    description: `Today’s financial institutions are overwhelmed by unstructured data.
      Raw bank feeds and transaction logs lack meaning unless refined into
      actionable intelligence. Whether you're a lender, budget planner,
      or fintech app — understanding spending patterns, income flows, and
      user behaviour is crucial. Prestige’s Data Intelligence &
      Insights product transforms this chaos into clarity. It gives you
      structured insights, enriched analytics, and categorised transaction
      flows — enabling smart forecasting, scoring, and trend analysis.`,
    applications: [
      "Neo-banks & Challenger Banks for smart categorisation and automated budgeting tools",
      "Lending Platforms for alternative credit scoring",
      "SMEs for expense tracking, revenue breakdown, and customer behaviour",
      "Fintech Apps for delivering custom alerts, insights, and nudges",
    ],
    benefits: [
      "Granular transaction categorisation",
      "Real-time risk and credit analysis",
      "Enriched and contextualised data layers",
      "Pre-built models for faster deployment",
    ],
    how: `Our SmartBank Data Layer aggregates bank feeds via open banking APIs
      and enriches the raw input. We apply AI-based tagging, detect income
      vs expenses, and calculate predictive scoring. All data is structured
      for easy integration into your systems.`,
    scenarios: [
      "A loan platform uses transaction insights to verify salary and estimate financial stress.",
      "A personal finance app automatically detects bills and flags potential overdrafts.",
      "An SME dashboard shows cash inflows by customer and forecast gaps.",
    ],
  },
  {
    title: (
      <>
        Simplifying Global Transactions with Payments & <br /> Money Movement
      </>
    ),
    image: GlobalTransactionsImage,
    description: `Global finance needs speed and flexibility. Traditional payment
      methods are slow, expensive, and fragmented. Whether you’re building a
      fintech app, managing multi-currency operations, or facilitating
      micro-transactions — real-time infrastructure is vital. Prestige enables
      simple, fast, and borderless money movement. Our solution supports P2P
      payments, currency exchange, and wallet functionality — all built on
      compliant, open banking rails.`,
    applications: [
      "Cross-border remittance platforms",
      "Gig economy payment engines",
      "Multi-currency wallets for travel or global business",
      "Real-time tipping and donation platforms",
    ],
    benefits: [
      "Instant P2P and wallet-to-wallet payments",
      "FX conversion with transparency",
      "Automated multi-currency support",
      "Fully compliant with UK and EU standards",
    ],
    how: `Our Payment Initiation Services (PIS) and real-time wallet APIs
      facilitate seamless money movement. With programmable payment triggers
      and FX logic, you can launch products faster while managing global
      operations at scale.`,
    scenarios: [
      "A freelancer platform enables weekly payouts in multiple currencies.",
      "A travel wallet allows real-time conversion of GBP to EUR with transparent rates.",
      "A donation app processes micro-payments globally with live exchange tracking.",
    ],
  },
  {
    title: (
      <>
        Seamless Bank Access & Consent with Account <br /> Connectivity
      </>
    ),
    image: BankAccessImage,
    description: `Digital finance relies on smooth account connectivity — but security
      and user trust are critical. Whether your product needs real-time
      balance checks, data sharing consent, or bank ownership validation,
      fragmented experiences create friction. Prestige offers secure,
      open, and user-centric account access built around regulated APIs. Our
      Consent Flow Manager handles every step, from user authentication to
      data-sharing preferences — ensuring regulatory peace of mind.`,
    applications: [
      "PFM tools that need transaction data and live balances",
      "Identity verification via bank ownership confirmation",
      "Open banking aggregation apps",
      "Subscription platforms that need mandate setup",
    ],
    benefits: [
      "One-click bank account linking",
      "Fully PSD2 and FCA compliant",
      "Supports dynamic consent management",
      "Enables safer data retrieval",
    ],
    how: `We provide seamless AIS integration with major UK and EU banks. Our
      Consent Flow Management layer tracks authorisations, expiry, and
      revocation — so you stay compliant and user-trust remains high.`,
    scenarios: [
      "A budget app connects to user bank accounts and refreshes data daily.",
      "A fintech platform verifies account ownership as part of onboarding.",
      "A marketplace app auto-pulls transaction summaries for monthly billing.",
    ],
  },
  {
    title: (
      <>
        Building Trust Through Identity & Regulatory <br /> Compliance
      </>
    ),
    image: IdentityAndRegulatoryImage,
    description: `In the digital age, trust is everything — but verifying identity while
      staying compliant is complex. From AML and KYC to FCA audits and
      consent logging, startups and enterprises alike face regulatory
      hurdles. Prestige solves this with bank-based identity
      verification, KYC flows, and consent infrastructure — delivering a
      secure, compliant user experience that meets all PSD2 requirements.`,
    applications: [
      "Crypto and investment platforms",
      "Digital banks & e-wallets",
      "Insurance and lending apps",
      "High-risk sector platforms requiring advanced verification",
    ],
    benefits: [
      "Bank-grade identity checks",
      "Real-time onboarding and KYC",
      "Consent-driven compliance",
      "Enables safer data retrieval",
    ],
    how: `We connect with banks to verify real user identity using live data.
      Combined with secure KYC forms and real-time decisioning, we make it
      easy to trust new users — while staying on the right side of
      regulation.`,
    scenarios: [
      "A crypto app uses Prestige to verify identity via connected bank accounts.",
      "A lending platform runs AML checks before approving applications.",
      "A finance app stores user consent records for audit purposes.",
    ],
  },
  {
    title: (
      <>
        Empowering Finance Teams with Automated Tools <br /> (Accountant Help
        Squad)
      </>
    ),
    image: EmpoweringFinanceImage,
    description: `Managing business finances shouldn’t require spreadsheets and late
      nights. From payables to forecasting, financial ops must be
      streamlined — especially for startups and growing SMEs. Prestige’s
      Accountant HelpSquad provides a complete suite for cash flow
      forecasting, invoice management, expense tracking, and customer
      queries — all in one smart dashboard.`,
    applications: [
      "Startup founders needing visibility on spend",
      "Accounting firms managing multiple clients",
      "Finance departments seeking automation",
      "Customer-facing businesses with receivable workflows",
    ],
    benefits: [
      "Real-time expense and income dashboards",
      "Smart invoice management",
      "Cash flow prediction and trend detection",
      "Customer helpdesk integration",
    ],
    how: `We aggregate real-time data and offer automated tools to simplify
      back-office finance. The platform includes modules like Accounts
      Payable, Receivable, and Forecasting — eliminating manual work and
      offering clarity.`,
    scenarios: [
      "A startup founder checks future cash burn rate based on current payables.",
      "A virtual CFO automates weekly invoices and vendor payments.",
      "A customer support agent accesses billing records to resolve queries fast.",
    ],
  },
  {
    title: (
      <>
        Smart Financial Habits with Centspay for <br /> Everyday Users
      </>
    ),
    image: FinancialHabitsImage,
    description: `Most users want to save and track spending — but don’t know where to
      start. Whether it’s nudging savings on every spend or highlighting
      weekly expenses, financial wellness needs automation. Prestige’s
      Centspay gives users intuitive tools to save, spend, and understand
      money. With real-time spend insights and micro-saving nudges, it helps
      people take control without needing a financial background.`,
    applications: [
      "Banking apps targeting Gen S",
      "Salary advance platforms encouraging savings",
      "Spending tracker apps",
      "Budgeting tools with gamified savings",
    ],
    benefits: [
      "Micro-savings from daily spending",
      "Categorised spend analysis",
      "Smart saving suggestions",
      "Personalised insights via notifications",
    ],
    how: `Centspay connects to user accounts and runs in the background. It
      rounds up spare change, categorises spending, and sends nudges —
      turning financial goals into habits.`,
    scenarios: [
      "A user saves 50p every time they spend over £10.",
      "An app sends weekly summaries and top spending categories.",
      "A young professional receives alerts for unusual expenses or bills.",
    ],
  },
];

export const UseCases = () => {
  return (
    <>
      <Stack alignItems="center">
        <Box
          display={"flex"}
          flexDirection={"column"}
          alignItems={"center"}
          justifyContent={"center"}
          py={{md: 10, xs: 5}}
          px={2}
          m={2}
          pb={{md: 20, xs: 5}}
        >
          <Stack direction="row" spacing={1} alignItems="center">
            <UseCasesIcon
              sx={{
                fontSize: 40,
              }}
            />
            <Typography
              variant="subtitle2"
              sx={{
                color: "primary.main",
                fontWeight: "bold",
                borderBottom: "2px solid",
                borderColor: "primary.main",
              }}
            >
              Use Case
            </Typography>
          </Stack>
          <Typography
            variant="h2"
            color="white"
            fontWeight={600}
            textAlign={"center"}
          >
            Built for Real Impact Trusted <br /> Across Every Financial Journey
          </Typography>
          <Typography
            variant="subtitle2"
            color="white"
            sx={{ mb: 3, textAlign: "center" }}
          >
            Discover how Prestige powers smarter, faster, and safer financial
            experiences. From data-driven insights to <br /> real-time payments
            and secure identity verification, our modular solutions are tailored
            for innovators, <br /> enterprises, and institutions redefining how
            money moves, connects, and grows.
          </Typography>
        </Box>
      </Stack>
      <Box
        sx={{
          backgroundColor: "#fff",
        }}
      >
        <Image
          src={UseCaseFirstImage}
          alt="HeroSection"
          style={{
            width: "100%",
            height: "100%",
            position: "relative",
            bottom: "100px",
          }}
        />
      </Box>
      <>
        {sections.map((section, index) => (
          <Box
            key={index}
            sx={{
              backgroundColor: "#F2F5F7",
              px: {md: 12, xs: 2},
              pb: {md: 5, xs: 2},
            }}
          >
            <Typography
              variant="h3"
              color="black"
              fontWeight={500}
              textAlign="center"
              py={5}
            >
              {section.title}
            </Typography>

            <Image
              src={section.image}
              alt="HeroSection"
              style={{
                width: "100%",
                height: "100%",
              }}
            />

            {section.description && (
              <Typography sx={{ mt: 4 }} variant="subtitle2">
                {section.description}
              </Typography>
            )}

            {section.applications && (
              <>
                <Typography sx={{ mt: 4, fontWeight: 600 }} variant="subtitle2">
                  Applications
                </Typography>
                <Box component="ul" sx={{ pl: 4, mb: 4 }}>
                  {section.applications.map((item, i) => (
                    <Typography
                      key={i}
                      component="li"
                      sx={{ mb: 1 }}
                      variant="subtitle2"
                    >
                      {item}
                    </Typography>
                  ))}
                </Box>
              </>
            )}

            {section.benefits && (
              <>
                <Typography sx={{ mt: 4, fontWeight: 600 }} variant="subtitle2">
                  Benefits
                </Typography>
                <Box component="ul" sx={{ pl: 4, mb: 4 }}>
                  {section.benefits.map((item, i) => (
                    <Typography
                      key={i}
                      component="li"
                      sx={{ mb: 1 }}
                      variant="subtitle2"
                    >
                      {item}
                    </Typography>
                  ))}
                </Box>
              </>
            )}

            {section.how && (
              <>
                <Typography sx={{ mt: 4, fontWeight: 600 }} variant="subtitle2">
                  How Prestige Helps
                </Typography>
                <Typography variant="subtitle2">{section.how}</Typography>
              </>
            )}

            {section.scenarios && (
              <>
                <Typography sx={{ mt: 4, fontWeight: 600 }} variant="subtitle2">
                  Scenarios
                </Typography>
                <Box component="ul" sx={{ pl: 4, mb: 4 }}>
                  {section.scenarios.map((item, i) => (
                    <Typography
                      key={i}
                      component="li"
                      sx={{ mb: 1 }}
                      variant="subtitle2"
                    >
                      {item}
                    </Typography>
                  ))}
                </Box>
              </>
            )}
          </Box>
        ))}
      </>

      <ReadyToGetStarted />
    </>
  );
};
