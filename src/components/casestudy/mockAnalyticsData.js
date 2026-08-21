// Realistic demo data for Pan-India Retail & Consumer Sales Analytics Dashboard
// Labeled: "Pan-India Retail Intelligence Demo Data • INR (₹)"

export const ANALYTICS_DATA = {
  kpis: {
    all: {
      revenue: "₹12.85 Cr",
      revenueGrowth: "+16.4%",
      profitMargin: "34.8%",
      marginGrowth: "+2.8%",
      unitsSold: "4,82,500",
      unitsGrowth: "+11.2%",
      targetAchievement: "104.2%",
      targetDelta: "+4.2%"
    },
    q1: {
      revenue: "₹2.85 Cr",
      revenueGrowth: "+12.1%",
      profitMargin: "33.5%",
      marginGrowth: "+1.6%",
      unitsSold: "1,14,000",
      unitsGrowth: "+8.4%",
      targetAchievement: "101.5%",
      targetDelta: "+1.5%"
    },
    q2: {
      revenue: "₹3.20 Cr",
      revenueGrowth: "+14.8%",
      profitMargin: "35.2%",
      marginGrowth: "+2.4%",
      unitsSold: "1,21,500",
      unitsGrowth: "+10.1%",
      targetAchievement: "103.0%",
      targetDelta: "+3.0%"
    },
    q3: {
      revenue: "₹3.05 Cr",
      revenueGrowth: "+11.3%",
      profitMargin: "34.0%",
      marginGrowth: "+1.8%",
      unitsSold: "1,09,000",
      unitsGrowth: "+7.6%",
      targetAchievement: "99.1%",
      targetDelta: "-0.9%"
    },
    q4: {
      revenue: "₹3.75 Cr",
      revenueGrowth: "+22.8%",
      profitMargin: "36.8%",
      marginGrowth: "+4.2%",
      unitsSold: "1,38,000",
      unitsGrowth: "+15.9%",
      targetAchievement: "112.5%",
      targetDelta: "+12.5%"
    }
  },

  monthlyTrends: [
    { month: "Jan", revenue: 88, target: 85, profit: 29.5, quarter: "Q1" },
    { month: "Feb", revenue: 94, target: 90, profit: 31.0, quarter: "Q1" },
    { month: "Mar", revenue: 103, target: 100, profit: 34.2, quarter: "Q1" },
    { month: "Apr", revenue: 102, target: 100, profit: 35.8, quarter: "Q2" },
    { month: "May", revenue: 106, target: 105, profit: 37.1, quarter: "Q2" },
    { month: "Jun", revenue: 112, target: 110, profit: 39.4, quarter: "Q2" },
    { month: "Jul", revenue: 95, target: 102, profit: 32.3, quarter: "Q3" },
    { month: "Aug", revenue: 98, target: 100, profit: 33.1, quarter: "Q3" },
    { month: "Sep", revenue: 112, target: 108, profit: 38.2, quarter: "Q3" },
    { month: "Oct (Diwali)", revenue: 128, target: 115, profit: 46.5, quarter: "Q4" },
    { month: "Nov (Wedding)", revenue: 122, target: 118, profit: 44.8, quarter: "Q4" },
    { month: "Dec (Year-End)", revenue: 125, target: 120, profit: 45.0, quarter: "Q4" }
  ],

  regionalBreakdown: [
    { region: "North (Delhi NCR, UP, PB)", revenue: 395, target: 370, margin: 36.2, units: 148000, hubs: "Delhi NCR, Lucknow, Chandigarh" },
    { region: "West (MH, Gujarat, Goa)", revenue: 420, target: 400, margin: 33.5, units: 162000, hubs: "Mumbai, Pune, Ahmedabad" },
    { region: "South (KA, TN, TS, KL)", revenue: 270, target: 260, margin: 32.8, units: 101000, hubs: "Bengaluru, Chennai, Hyderabad" },
    { region: "East & NE (WB, BR, OD)", revenue: 200, target: 180, margin: 38.5, units: 71500, hubs: "Kolkata, Patna, Bhubaneswar" }
  ],

  categoryShare: [
    { name: "Consumer Electronics & Appliances", value: 42, revenue: "₹5.40 Cr", margin: "29.4%", color: "#06B6D4" },
    { name: "FMCG & Packaged Foods", value: 26, revenue: "₹3.34 Cr", margin: "38.2%", color: "#3B82F6" },
    { name: "Apparel & Festive Fashion", value: 20, revenue: "₹2.57 Cr", margin: "44.5%", color: "#10B981" },
    { name: "Home Essentials & Logistics", value: 12, revenue: "₹1.54 Cr", margin: "27.0%", color: "#F59E0B" }
  ]
};

