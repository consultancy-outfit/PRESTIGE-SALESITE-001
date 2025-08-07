"use client";
import { AHSProductIcon, AHSProductTextIcon } from "@/assets/icons/common";
import {
  AccountsPayableImage,
  AccountsReceivableImage,
  CashFlowForecastingImage,
  ClarityControlImage,
  CustomerAssistanceHubImage,
  ExpenseManagementImage,
} from "@/assets/images/features/products";
import ProductDetailPagesCommon from "../product-detail-pages-common";

export const AccountantHelpSquad = () => {
  const gridContent = [
    {
      id: 1,
      sectionImage: AccountsPayableImage,
      title: "Make Outgoing Payments Smart and Stress-Free",
      subtitle: "Accounts Payable",
      description:
        "Say goodbye to manual approvals and missed due dates. Our Accounts Payable tool automates invoice capture, approval workflows, and payment scheduling — making supplier management seamless and strategic.",
      innerValues: [
        {
          liTitle: "What It Delivers:",
          liList: [
            "Automated invoice ingestion and matching",
            "Approval workflows with audit trails",
            "Scheduled and bulk payment support",
            "Payment status tracking and alerts",
            "Integration with ERP and banking systems",
          ],
        },
        {
          liTitle: "Strategic Value:",
          liList: [
            "Reduce human error and late payments",
            "Improve supplier relationships",
            "Free up finance team time",
            "Stay audit-ready at all times",
          ],
        },
      ],
    },
    {
      id: 2,
      sectionImage: AccountsReceivableImage,
      title: "Get Paid Faster, With Less Chasing",
      subtitle: "Accounts Receivable",
      description:
        "Streamline your receivables with smart billing, payment reminders, and reconciliation tools. Our system helps you reduce debtor days and improve cash inflow predictability — while giving customers a better payment experience.",
      innerValues: [
        {
          liTitle: "What It Delivers:",
          liList: [
            "Automated invoicing and due date tracking",
            "Customisable payment reminders",
            "One-click digital payment links",
            "Reconciliation tools for faster matching",
            "Analytics on aging receivables and recovery rates",
          ],
        },
        {
          liTitle: "Strategic Value:",
          liList: [
            "Shorten collection cycles",
            "Reduce manual follow-up effort",
            "Improve cash flow forecasting",
            "Enhance customer payment experience",
          ],
        },
      ],
    },
    {
      id: 3,
      sectionImage: CashFlowForecastingImage,
      title: "Know Where You Stand — and Where You’re Going",
      subtitle: "Cash Flow & Forecasting",
      description:
        "Gain financial foresight with dynamic cash flow insights and forecasting. Easily track inflows/outflows, model future scenarios, and make proactive decisions backed by live data.",
      innerValues: [
        {
          liTitle: "What It Delivers:",
          liList: [
            "Real-time cash position dashboard",
            "Forecasting based on historical patterns",
            "Scenario planning and variance tracking",
            "Alerts for low balance or anomalies",
            "Integration with bank and accounting feeds",
          ],
        },
        {
          liTitle: "Strategic Value:",
          liList: [
            "Avoid cash shortfalls",
            "Plan confidently for growth or downturns",
            "See the financial impact of decisions in advance",
            "Make budgeting a living process",
          ],
        },
      ],
    },
    {
      id: 4,
      sectionImage: ExpenseManagementImage,
      title: "Every Penny Accounted For — Effortlessly",
      subtitle: "Expense Management",
      description:
        "Simplify team expense tracking and approval. Our intuitive platform enables real-time submission, categorisation, and reconciliation — cutting costs, improving policy compliance, and giving you complete visibility.",
      innerValues: [
        {
          liTitle: "What It Delivers:",
          liList: [
            "Mobile receipt capture and upload",
            "Smart categorisation and tagging",
            "Automated policy enforcement",
            "Manager approval flows",
            "Sync with general ledger",
          ],
        },
        {
          liTitle: "Strategic Value:",
          liList: [
            "Eliminate paper trails and expense lag",
            "Reduce fraud and overspending",
            "Improve month-end close speed",
            "Give finance full control and visibility",
          ],
        },
      ],
    },
    {
      id: 5,
      sectionImage: CustomerAssistanceHubImage,
      title: "Support That Understands the Numbers",
      subtitle: "Customer Assistance Hub",
      description:
        "Go beyond basic help desks. Our Customer Assistance Hub connects your finance tools with intelligent support automation, helping customers resolve queries around payments, invoices, and transactions — without long wait times or confusion.",
      innerValues: [
        {
          liTitle: "What It Delivers:",
          liList: [
            "Self-service portal for finance-related support",
            "Real-time access to transaction/invoice history",
            "Automated ticketing and smart routing",
            "Escalation paths for complex issues",
            "Analytics on support requests and resolution time",
          ],
        },
        {
          liTitle: "Strategic Value:",
          liList: [
            "Reduce inbound support load",
            "Improve customer satisfaction and transparency",
            "Resolve financial queries faster",
            "Give your team more bandwidth",
          ],
        },
      ],
    },
  ];

  return (
    <ProductDetailPagesCommon
      PageIcon={AHSProductIcon}
      PageName={AHSProductTextIcon}
      PageTitle={
        <>
          Clarity, Control, and Cash Flow <br /> Without the Chaos
        </>
      }
      PageDescription={
        <>
          Modern financial operations need more than spreadsheets. With the
          Accountant HelpSquad, you <br /> get a connected suite of tools that
          automate daily finance tasks, eliminate blind spots, and give <br />{" "}
          your business the visibility it needs to thrive. From invoices to
          insights — all in one place.
        </>
      }
      PageHeaderImage={ClarityControlImage}
      gridContent={gridContent}
    />
  );
};

export default AccountantHelpSquad;
