"use client";

import {
  UseCasesIcon,
  UseCasesTextIcon
} from "@/assets/icons/common";
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

export const UseCases = () => {
  return (
    <>
      <Stack alignItems="center">
        <Box
          display={"flex"}
          flexDirection={"column"}
          alignItems={"center"}
          justifyContent={"center"}
          py={10}
          px={2}
          m={2}
          pb={20}
        >
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <UseCasesIcon />
            <UseCasesTextIcon />
          </Box>
          <Typography variant="h2" color="white" fontWeight={600}>
            Built for Real Impact Trusted <br /> Across Every Financial Journey
          </Typography>
          <Typography
            variant="body1"
            color="grey"
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
            height: "660px",
            position: "relative",
            bottom: "200px",
          }}
        />
      </Box>
      <Box
        sx={{
          backgroundColor: "#F2F5F7",
          px: 12,
          pb: 10,
        }}
      >
        <Typography
          variant="h3"
          color="black"
          fontWeight={500}
          textAlign={"center"}
          py={5}
        >
          Unlocking Strategic Financial Insights with <br /> Data Intelligence
        </Typography>
        <Image
          src={FinancialInsightsImage}
          alt="HeroSection"
          style={{
            width: "100%",
            height: "760px",
          }}
        />
        <Typography sx={{ mt: 4 }}>
          Today’s financial institutions are overwhelmed by unstructured data.
          Raw bank feeds and transaction logs lack meaning unless refined into
          actionable intelligence. Whether you&#39;re a lender, budget planner,
          or fintech app — understanding spending patterns, income flows, and
          user behaviour is crucial. <br /> Prestige’s Data Intelligence &
          Insights product transforms this chaos into clarity. It gives you
          structured insights, enriched analytics, and categorised transaction
          flows — enabling smart forecasting, scoring, and trend analysis.
        </Typography>
        <Typography sx={{ mt: 4, fontWeight: 600 }}>Applications</Typography>
        <Box component="ul" sx={{ pl: 4, mb: 4 }}>
          <Typography component="li" sx={{ mb: 1 }}>
            Neo-banks & Challenger Banks for smart categorisation and automated
            budgeting tools
          </Typography>
          <Typography component="li" sx={{ mb: 1 }}>
            Lending Platforms for alternative credit scoring
          </Typography>
          <Typography component="li" sx={{ mb: 1 }}>
            SMEs for expense tracking, revenue breakdown, and customer behaviour
          </Typography>
          <Typography component="li">
            Fintech Apps for delivering custom alerts, insights, and nudges
          </Typography>
        </Box>
        <Typography sx={{ mt: 4, fontWeight: 600 }}>Benefits</Typography>
        <Box component="ul" sx={{ pl: 4, mb: 4 }}>
          <Typography component="li" sx={{ mb: 1 }}>
            Granular transaction categorisation
          </Typography>
          <Typography component="li" sx={{ mb: 1 }}>
            Real-time risk and credit analysis
          </Typography>
          <Typography component="li" sx={{ mb: 1 }}>
            Enriched and contextualised data layers
          </Typography>
          <Typography component="li">
            Pre-built models for faster deployment
          </Typography>
        </Box>
        <Typography sx={{ mt: 4, fontWeight: 600 }}>
          How Prestige Helps
        </Typography>
        <Typography>
          Our SmartBank Data Layer aggregates bank feeds via open banking APIs
          and enriches the raw input. We apply AI-based tagging, detect income
          vs expenses, and calculate predictive scoring. All data is structured
          for easy integration into your systems.
        </Typography>
        <Typography sx={{ mt: 4, fontWeight: 600 }}>Scenarios</Typography>
        <Box component="ul" sx={{ pl: 4, mb: 4 }}>
          <Typography component="li" sx={{ mb: 1 }}>
            A loan platform uses transaction insights to verify salary and
            estimate financial stress.
          </Typography>
          <Typography component="li" sx={{ mb: 1 }}>
            A personal finance app automatically detects bills and flags
            potential overdrafts.
          </Typography>
          <Typography component="li">
            An SME dashboard shows cash inflows by customer and forecast gaps.
          </Typography>
        </Box>
      </Box>

      <Box
        sx={{
          backgroundColor: "#F2F5F7",
          px: 12,
          pb: 10,
        }}
      >
        <Typography
          variant="h3"
          color="black"
          fontWeight={500}
          textAlign={"center"}
          py={5}
        >
          Simplifying Global Transactions with Payments & <br /> Money Movement
        </Typography>
        <Image
          src={GlobalTransactionsImage}
          alt="HeroSection"
          style={{
            width: "100%",
            height: "760px",
          }}
        />
        <Typography sx={{ mt: 4 }}>
          Global finance needs speed and flexibility. Traditional payment
          methods are slow, expensive, and fragmented. Whether you’re building a
          fintech app, managing multi-currency operations, or facilitating
          micro-transactions — real-time infrastructure is vital. <br />{" "}
          Prestige enables simple, fast, and borderless money movement. Our
          solution supports P2P payments, currency exchange, and wallet
          functionality — all built on compliant, open banking rails.
        </Typography>
        <Typography sx={{ mt: 4, fontWeight: 600 }}>Applications</Typography>
        <Box component="ul" sx={{ pl: 4, mb: 4 }}>
          <Typography component="li" sx={{ mb: 1 }}>
            Cross-border remittance platforms
          </Typography>
          <Typography component="li" sx={{ mb: 1 }}>
            Gig economy payment engines
          </Typography>
          <Typography component="li" sx={{ mb: 1 }}>
            Multi-currency wallets for travel or global business{" "}
          </Typography>
          <Typography component="li">
            Real-time tipping and donation platforms{" "}
          </Typography>
        </Box>
        <Typography sx={{ mt: 4, fontWeight: 600 }}>Benefits</Typography>
        <Box component="ul" sx={{ pl: 4, mb: 4 }}>
          <Typography component="li" sx={{ mb: 1 }}>
            Instant P2P and wallet-to-wallet payments
          </Typography>
          <Typography component="li" sx={{ mb: 1 }}>
            FX conversion with transparency
          </Typography>
          <Typography component="li" sx={{ mb: 1 }}>
            Automated multi-currency support{" "}
          </Typography>
          <Typography component="li">
            Fully compliant with UK and EU standards{" "}
          </Typography>
        </Box>
        <Typography sx={{ mt: 4, fontWeight: 600 }}>
          How Prestige Helps
        </Typography>
        <Typography>
          Our Payment Initiation Services (PIS) and real-time wallet APIs
          facilitate seamless money movement. With programmable payment triggers
          and FX logic, you can launch products faster while managing global
          operations at scale.
        </Typography>
        <Typography sx={{ mt: 4, fontWeight: 600 }}>Scenarios</Typography>
        <Box component="ul" sx={{ pl: 4, mb: 4 }}>
          <Typography component="li" sx={{ mb: 1 }}>
            A freelancer platform enables weekly payouts in multiple currencies.
          </Typography>
          <Typography component="li" sx={{ mb: 1 }}>
            A travel wallet allows real-time conversion of GBP to EUR with
            transparent rates.
          </Typography>
          <Typography component="li">
            A donation app processes micro-payments globally with live exchange
            tracking.{" "}
          </Typography>
        </Box>
      </Box>

      <Box
        sx={{
          backgroundColor: "#F2F5F7",
          px: 12,
          pb: 10,
        }}
      >
        <Typography
          variant="h3"
          color="black"
          fontWeight={500}
          textAlign={"center"}
          py={5}
        >
          Seamless Bank Access & Consent with Account <br /> Connectivity
        </Typography>
        <Image
          src={BankAccessImage}
          alt="HeroSection"
          style={{
            width: "100%",
            height: "760px",
          }}
        />
        <Typography sx={{ mt: 4 }}>
          Digital finance relies on smooth account connectivity — but security
          and user trust are critical. Whether your product needs real-time
          balance checks, data sharing consent, or bank ownership validation,
          fragmented experiences create friction. <br /> Prestige offers secure,
          open, and user-centric account access built around regulated APIs. Our
          Consent Flow Manager handles every step, from user authentication to
          data-sharing preferences — ensuring regulatory peace of mind.
        </Typography>
        <Typography sx={{ mt: 4, fontWeight: 600 }}>Applications</Typography>
        <Box component="ul" sx={{ pl: 4, mb: 4 }}>
          <Typography component="li" sx={{ mb: 1 }}>
            PFM tools that need transaction data and live balances
          </Typography>
          <Typography component="li" sx={{ mb: 1 }}>
            Identity verification via bank ownership confirmation
          </Typography>
          <Typography component="li" sx={{ mb: 1 }}>
            Open banking aggregation apps{" "}
          </Typography>
          <Typography component="li">
            Subscription platforms that need mandate setup{" "}
          </Typography>
        </Box>
        <Typography sx={{ mt: 4, fontWeight: 600 }}>Benefits</Typography>
        <Box component="ul" sx={{ pl: 4, mb: 4 }}>
          <Typography component="li" sx={{ mb: 1 }}>
            One-click bank account linking{" "}
          </Typography>
          <Typography component="li" sx={{ mb: 1 }}>
            Fully PSD2 and FCA compliant{" "}
          </Typography>
          <Typography component="li" sx={{ mb: 1 }}>
            Supports dynamic consent management{" "}
          </Typography>
          <Typography component="li">Enables safer data retrieval </Typography>
        </Box>
        <Typography sx={{ mt: 4, fontWeight: 600 }}>
          How Prestige Helps
        </Typography>
        <Typography>
          We provide seamless AIS integration with major UK and EU banks. Our
          Consent Flow Management layer tracks authorisations, expiry, and
          revocation — so you stay compliant and user-trust remains high.
        </Typography>
        <Typography sx={{ mt: 4, fontWeight: 600 }}>Scenarios</Typography>
        <Box component="ul" sx={{ pl: 4, mb: 4 }}>
          <Typography component="li" sx={{ mb: 1 }}>
            A budget app connects to user bank accounts and refreshes data
            daily.{" "}
          </Typography>
          <Typography component="li" sx={{ mb: 1 }}>
            A fintech platform verifies account ownership as part of onboarding.
          </Typography>
          <Typography component="li">
            A marketplace app auto-pulls transaction summaries for monthly
            billing.
          </Typography>
        </Box>
      </Box>

      <Box
        sx={{
          backgroundColor: "#F2F5F7",
          px: 12,
          pb: 10,
        }}
      >
        <Typography
          variant="h3"
          color="black"
          fontWeight={500}
          textAlign={"center"}
          py={5}
        >
          Building Trust Through Identity & Regulatory <br /> Compliance
        </Typography>
        <Image
          src={IdentityAndRegulatoryImage}
          alt="HeroSection"
          style={{
            width: "100%",
            height: "760px",
          }}
        />
        <Typography sx={{ mt: 4 }}>
          In the digital age, trust is everything — but verifying identity while
          staying compliant is complex. From AML and KYC to FCA audits and
          consent logging, startups and enterprises alike face regulatory
          hurdles. <br /> <br /> Prestige solves this with bank-based identity
          verification, KYC flows, and consent infrastructure — delivering a
          secure, compliant user experience that meets all PSD2 requirements.
        </Typography>
        <Typography sx={{ mt: 4, fontWeight: 600 }}>Applications</Typography>
        <Box component="ul" sx={{ pl: 4, mb: 4 }}>
          <Typography component="li" sx={{ mb: 1 }}>
            Crypto and investment platforms
          </Typography>
          <Typography component="li" sx={{ mb: 1 }}>
            Digital banks & e-wallets{" "}
          </Typography>
          <Typography component="li" sx={{ mb: 1 }}>
            Insurance and lending apps{" "}
          </Typography>
          <Typography component="li">
            High-risk sector platforms requiring advanced verification{" "}
          </Typography>
        </Box>
        <Typography sx={{ mt: 4, fontWeight: 600 }}>Benefits</Typography>
        <Box component="ul" sx={{ pl: 4, mb: 4 }}>
          <Typography component="li" sx={{ mb: 1 }}>
            Bank-grade identity checks{" "}
          </Typography>
          <Typography component="li" sx={{ mb: 1 }}>
            Real-time onboarding and KYC{" "}
          </Typography>
          <Typography component="li" sx={{ mb: 1 }}>
            Consent-driven compliance{" "}
          </Typography>
          <Typography component="li">Enables safer data retrieval </Typography>
        </Box>
        <Typography sx={{ mt: 4, fontWeight: 600 }}>
          How Prestige Helps
        </Typography>
        <Typography>
          We connect with banks to verify real user identity using live data.
          Combined with secure KYC forms and real-time decisioning, we make it
          easy to trust new users — while staying on the right side of
          regulation.
        </Typography>
        <Typography sx={{ mt: 4, fontWeight: 600 }}>Scenarios</Typography>
        <Box component="ul" sx={{ pl: 4, mb: 4 }}>
          <Typography component="li" sx={{ mb: 1 }}>
            A crypto app uses Prestige to verify identity via connected bank
            accounts.
          </Typography>
          <Typography component="li" sx={{ mb: 1 }}>
            A lending platform runs AML checks before approving
            applications.{" "}
          </Typography>
          <Typography component="li">
            A finance app stores user consent records for audit purposes.
          </Typography>
        </Box>
      </Box>

      <Box
        sx={{
          backgroundColor: "#F2F5F7",
          px: 12,
          pb: 10,
        }}
      >
        <Typography
          variant="h3"
          color="black"
          fontWeight={500}
          textAlign={"center"}
          py={5}
        >
          Empowering Finance Teams with Automated Tools <br /> (Accountant Help
          Squad){" "}
        </Typography>
        <Image
          src={EmpoweringFinanceImage}
          alt="HeroSection"
          style={{
            width: "100%",
            height: "760px",
          }}
        />
        <Typography sx={{ mt: 4 }}>
          Managing business finances shouldn’t require spreadsheets and late
          nights. From payables to forecasting, financial ops must be
          streamlined — especially for startups and growing SMEs. <br />{" "}
          Prestige’s Accountant HelpSquad provides a complete suite for cash
          flow forecasting, invoice management, expense tracking, and customer
          queries — all in one smart dashboard.
        </Typography>
        <Typography sx={{ mt: 4, fontWeight: 600 }}>Applications</Typography>
        <Box component="ul" sx={{ pl: 4, mb: 4 }}>
          <Typography component="li" sx={{ mb: 1 }}>
            Startup founders needing visibility on spend{" "}
          </Typography>
          <Typography component="li" sx={{ mb: 1 }}>
            Accounting firms managing multiple clients{" "}
          </Typography>
          <Typography component="li" sx={{ mb: 1 }}>
            Finance departments seeking automation{" "}
          </Typography>
          <Typography component="li">
            Customer-facing businesses with receivable workflows{" "}
          </Typography>
        </Box>
        <Typography sx={{ mt: 4, fontWeight: 600 }}>Benefits</Typography>
        <Box component="ul" sx={{ pl: 4, mb: 4 }}>
          <Typography component="li" sx={{ mb: 1 }}>
            Real-time expense and income dashboards{" "}
          </Typography>
          <Typography component="li" sx={{ mb: 1 }}>
            Smart invoice management{" "}
          </Typography>
          <Typography component="li" sx={{ mb: 1 }}>
            Cash flow prediction and trend detection{" "}
          </Typography>
          <Typography component="li">Customer helpdesk integration</Typography>
        </Box>
        <Typography sx={{ mt: 4, fontWeight: 600 }}>
          How Prestige Helps
        </Typography>
        <Typography>
          We aggregate real-time data and offer automated tools to simplify
          back-office finance. The platform includes modules like Accounts
          Payable, Receivable, and Forecasting — eliminating manual work and
          offering clarity.
        </Typography>
        <Typography sx={{ mt: 4, fontWeight: 600 }}>Scenarios</Typography>
        <Box component="ul" sx={{ pl: 4, mb: 4 }}>
          <Typography component="li" sx={{ mb: 1 }}>
            A startup founder checks future cash burn rate based on current
            payables.
          </Typography>
          <Typography component="li" sx={{ mb: 1 }}>
            A virtual CFO automates weekly invoices and vendor payments.{" "}
          </Typography>
          <Typography component="li">
            A customer support agent accesses billing records to resolve queries
            fast.
          </Typography>
        </Box>
      </Box>

      <Box
        sx={{
          backgroundColor: "#F2F5F7",
          px: 12,
          pb: 10,
        }}
      >
        <Typography
          variant="h3"
          color="black"
          fontWeight={500}
          textAlign={"center"}
          py={5}
        >
          Smart Financial Habits with Centspay for <br /> Everyday Users
        </Typography>
        <Image
          src={FinancialHabitsImage}
          alt="HeroSection"
          style={{
            width: "100%",
            height: "760px",
          }}
        />
        <Typography sx={{ mt: 4 }}>
          Most users want to save and track spending — but don’t know where to
          start. Whether it’s nudging savings on every spend or highlighting
          weekly expenses, financial wellness needs automation. <br />{" "}
          Prestige’s Centspay gives users intuitive tools to save, spend, and
          understand money. With real-time spend insights and micro-saving
          nudges, it helps people take control without needing a financial
          background.
        </Typography>
        <Typography sx={{ mt: 4, fontWeight: 600 }}>Applications</Typography>
        <Box component="ul" sx={{ pl: 4, mb: 4 }}>
          <Typography component="li" sx={{ mb: 1 }}>
            Banking apps targeting Gen S{" "}
          </Typography>
          <Typography component="li" sx={{ mb: 1 }}>
            Salary advance platforms encouraging savings{" "}
          </Typography>
          <Typography component="li" sx={{ mb: 1 }}>
            Spending tracker apps{" "}
          </Typography>
          <Typography component="li">
            Budgeting tools with gamified savings{" "}
          </Typography>
        </Box>
        <Typography sx={{ mt: 4, fontWeight: 600 }}>Benefits</Typography>
        <Box component="ul" sx={{ pl: 4, mb: 4 }}>
          <Typography component="li" sx={{ mb: 1 }}>
            Micro-savings from daily spending{" "}
          </Typography>
          <Typography component="li" sx={{ mb: 1 }}>
            Categorised spend analysis{" "}
          </Typography>
          <Typography component="li" sx={{ mb: 1 }}>
            Smart saving suggestions{" "}
          </Typography>
          <Typography component="li">
            Personalised insights via notifications
          </Typography>
        </Box>
        <Typography sx={{ mt: 4, fontWeight: 600 }}>
          How Prestige Helps
        </Typography>
        <Typography>
          Centspay connects to user accounts and runs in the background. It
          rounds up spare change, categorises spending, and sends nudges —
          turning financial goals into habits.
        </Typography>
        <Typography sx={{ mt: 4, fontWeight: 600 }}>Scenarios</Typography>
        <Box component="ul" sx={{ pl: 4, mb: 4 }}>
          <Typography component="li" sx={{ mb: 1 }}>
            A user saves 50p every time they spend over £10.
          </Typography>
          <Typography component="li" sx={{ mb: 1 }}>
            An app sends weekly summaries and top spending categories.{" "}
          </Typography>
          <Typography component="li">
            A young professional receives alerts for unusual expenses or bills.
          </Typography>
        </Box>
      </Box>

      <ReadyToGetStarted />
    </>
  );
};
