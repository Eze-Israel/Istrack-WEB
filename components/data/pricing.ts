export const pricingPlans = [
  {
    name: "Starter",
    price: "₦399,000",
    period: "/term",
    description:
      "Perfect for small schools getting started.",
    features: [
      "Student Management",
      "Attendance Tracking",
      "Basic Reports",
      "Parent Communication",
      "Email Support",
    ],
    popular: false,
  },

  {
    name: "Professional",
    price: "₦550,000",
    period: "/term",
    description:
      "Best for growing schools and colleges.",
    features: [
      "Everything in Starter",
      "Advanced Analytics",
      "Finance Management",
      "Result Processing",
      "SMS Notifications",
      "Priority Support",
    ],
    popular: true,
  },

  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description:
      "For large institutions with custom needs.",
    features: [
      "Everything in Professional",
      "Multi-Campus Support",
      "Custom Integrations",
      "Dedicated Manager",
      "Advanced Security",
      "24/7 Support",
    ],
    popular: false,
  },
];