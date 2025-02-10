import SubscriptionCard from "./SubscriptionCard";

const plans = [
    {
        planName: "Free",
        features: [
            "Add only 3 projects",
            "Basic Task Management",
            "Project Collaboration",
            "Basic Reporting",
            "Email Notification",
            "Basic Access Control",
        ],
        planType: "FREE",
        price: 0,
    },
    {
        planName: "Monthly Paid Plan",
        features: [
            "Add unlimited projects",
            "Access to live chat",
            "Add unlimited team members",
            "Advanced Reporting",
            "Priority Support",
            "Customization Options",
            "Integration Support",
            "Advanced Security",
            "Training and Resources",
            "Access Control",
            "Custom Workflows",
        ],
        planType: "MONTHLY",
        price: 799,
    },
    {
        planName: "Annual Paid Plan",
        features: [
            "Add unlimited projects",
            "Add unlimited team members",
            "Advanced Reporting",
            "Priority Support",
            "Everything included in the monthly plan",
        ],
        planType: "ANNUALLY",
        price: 6999,
    },
];

const currentPlanType = "FREE";

const Subscription = () => {
    return (
        <div className="p-10">
            <h1 className="text-5xl font-semibold py-5 pb-16 text-center">Pricing</h1>
            <div className="flex flex-col lg:flex-row gap-9 justify-center items-center">
                {plans.map((plan, index) => (
                    <SubscriptionCard
                        key={index}
                        data={{
                            ...plan,
                            buttonName: plan.planType === currentPlanType ? "Current Plan" : "Get Started",
                        }}
                    />
                ))}
            </div>
        </div>
    );
};

export default Subscription;

// import SubscriptionCard from "./SubscriptionCard";

// const paidPlan = [
//     "Add unlimited projects",
//     "Access to live chat",
//     "Add unlimited team members",
//     "Advanced Reporting",
//     "Priority Support",
//     "Customization Options",
//     "Integration Support",
//     "Advanced Security",
//     "Training and Resources",
//     "Access Control",
//     "Custom Workflows",
// ];

// const annualPlan = [
//     "Add unlimited projects",
//     "Add unlimited team members",
//     "Advanced Reporting",
//     "Priority Support",
//     "Everything which monthly plan includes",
// ];

// const freePlan = [
//     "Add only 3 projects",
//     "Basic Task Management",
//     "Project Collaboration",
//     "Basic Reporting",
//     "Email Notification",
//     "Basic Access Control",
// ];
// const Subscription = () => {
//     return (
//         <div className="p-10">
//             <h1 className="text-5x1 font-semibold py-5 pb-16 text-center">Pricing</h1>
//             <div className="flex flex-col lg:flex-row gap-9 justify-center items-center">
//                 <SubscriptionCard
//                     data={{
//                     planName: "Free",
//                     features: freePlan,
//                     PlanType: "FREE",
//                     price: 0,
//                     buttonName: true ? "Current Plan" : "Get Started"
//                  }}
//                  />
//                 <SubscriptionCard
//                 data={{
//                     planName: "Monthly Paid Plan",
//                     features: paidPlan,
//                     PlanType: "MONTHLY",
//                     price: 799,
//                     buttonName: true ? "Current Plan" : "Get Started"
//                  }} />
//                 <SubscriptionCard
//                 data={{
//                     planName: "Annual Paid Plan",
//                     features: annualPlan,
//                     PlanType: "ANNUALLY",
//                     price: 6999,
//                     buttonName: true ? "Current Plan" : "Get Started"
//                  }}  />



//             </div>


//         </div>
//     )
// }

// export default Subscription
