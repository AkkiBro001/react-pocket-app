export const pricing = [
    {
        id: 1,
        title: "Starter",
        price: 0,
        details: "You're new to investing but want to do it right. Get started for free",
        buttonName: "Get started for free",
        points: [
            "Commission-free trading",
            "Multi-layered encryption",
            "One tip every day",
            "Invest up to ₹1,20,000 each month",
        ]
    },

    {
        id: 2,
        title: "Investor",
        price: 500,
        details: "You've been investing for a while. Invest more and grow your wealth faster.",
        buttonName: "Subscribe",
        points: [
            "Commission-free trading",
            "Multi-layered encryption",
            "One tip every hour",
            "Invest up to ₹12,00,000 each month",
            "Basic transaction anonymization",
        ]
    },

    {
        id: 3,
        title: "VIP",
        price: 5000,
        details: "You've got a huge amount of assets but it's enough. To the moon",
        buttonName: "Subscribe",
        points: [
            "Commission-free trading",
            "Multi-layered encryption",
            "Real-time tip notifications",
            "No investment limits",
            "Advance transaction anonymization",
        ]
    },
]

export type Pricing = typeof pricing[0]
