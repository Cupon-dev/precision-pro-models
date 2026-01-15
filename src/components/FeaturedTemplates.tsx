import { motion } from "framer-motion";
import { Star, ArrowRight, FileSpreadsheet, Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const featuredTemplates = [
  {
    id: 1,
    name: "3-Statement Financial Model",
    category: "Financial Modeling",
    price: 299,
    originalPrice: 499,
    rating: 4.9,
    reviews: 847,
    bestseller: true,
    features: ["Income Statement", "Balance Sheet", "Cash Flow", "Auto-linked formulas"],
  },
  {
    id: 2,
    name: "LBO Model (Leveraged Buyout)",
    category: "Financial Modeling",
    price: 399,
    originalPrice: 699,
    rating: 4.9,
    reviews: 523,
    features: ["Debt schedules", "IRR sensitivity", "Exit scenarios", "GP/LP waterfall"],
  },
  {
    id: 3,
    name: "DCF Valuation Model",
    category: "Financial Modeling",
    price: 249,
    originalPrice: 449,
    rating: 4.8,
    reviews: 612,
    features: ["WACC calculator", "Terminal value", "Sensitivity tables", "Scenario analysis"],
  },
  {
    id: 4,
    name: "Startup Financial Projections",
    category: "Business Planning",
    price: 149,
    originalPrice: 249,
    rating: 4.9,
    reviews: 1204,
    bestseller: true,
    features: ["5-year projections", "Unit economics", "Runway calculator", "Cap table ready"],
  },
];

export const FeaturedTemplates = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-accent text-sm font-semibold uppercase tracking-wider">
            Most Popular
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-4 mb-6">
            Investment-Grade Templates
          </h2>
          <p className="text-lg text-muted-foreground">
            Our top-rated templates used by analysts at leading investment banks, 
            consulting firms, and fast-growing startups.
          </p>
        </motion.div>

        {/* Templates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredTemplates.map((template, index) => (
            <motion.div
              key={template.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="group card-premium overflow-hidden flex flex-col"
            >
              {/* Template Preview */}
              <div className="relative h-40 bg-gradient-to-br from-secondary to-secondary/50 flex items-center justify-center">
                {/* Bestseller Badge */}
                {template.bestseller && (
                  <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-premium text-premium-foreground text-xs font-semibold flex items-center gap-1">
                    <Star className="w-3 h-3 fill-current" />
                    Bestseller
                  </div>
                )}
                
                {/* Excel Icon */}
                <div className="w-16 h-16 rounded-xl bg-accent/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <FileSpreadsheet className="w-8 h-8 text-accent" />
                </div>
              </div>

              {/* Content */}
              <div className="p-5 flex flex-col flex-1">
                {/* Category */}
                <span className="text-xs text-muted-foreground mb-1">
                  {template.category}
                </span>

                {/* Name */}
                <h3 className="font-semibold text-foreground mb-2 group-hover:text-accent transition-colors">
                  {template.name}
                </h3>

                {/* Rating */}
                <div className="flex items-center gap-2 mb-3">
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 text-premium fill-premium" />
                    <span className="text-sm font-medium text-foreground">{template.rating}</span>
                  </div>
                  <span className="text-sm text-muted-foreground">
                    ({template.reviews.toLocaleString()} reviews)
                  </span>
                </div>

                {/* Features */}
                <ul className="space-y-1.5 mb-4 flex-1">
                  {template.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-xs text-muted-foreground">
                      <Check className="w-3.5 h-3.5 text-accent" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Price & CTA */}
                <div className="pt-4 border-t border-border">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-baseline gap-2">
                      <span className="text-2xl font-bold text-foreground">${template.price}</span>
                      <span className="text-sm text-muted-foreground line-through">${template.originalPrice}</span>
                    </div>
                    <span className="text-xs font-medium text-accent">
                      Save {Math.round((1 - template.price / template.originalPrice) * 100)}%
                    </span>
                  </div>
                  <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground group/btn">
                    Get Template
                    <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-12"
        >
          <Button variant="outline" size="lg" className="group">
            View All 85+ Templates
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
