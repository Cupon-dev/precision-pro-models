import { motion } from "framer-motion";
import { Check, Star, Zap, Crown, ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const pricingTiers = [
  {
    name: "Single Template",
    description: "Perfect for specific needs",
    price: "49",
    priceNote: "starting at",
    features: [
      "1 premium template",
      "Full documentation",
      "Lifetime updates",
      "Email support",
    ],
    cta: "Browse Templates",
    popular: false,
  },
  {
    name: "Category Bundle",
    description: "Complete toolkit for your domain",
    price: "199",
    originalPrice: "497",
    priceNote: "average bundle",
    savings: "Save 60%",
    features: [
      "All templates in category",
      "Priority support",
      "Video tutorials",
      "Bonus resources",
      "Private community access",
    ],
    cta: "View Bundles",
    popular: false,
  },
  {
    name: "All-Access Bundle",
    description: "Everything. Forever.",
    price: "799",
    originalPrice: "4,999",
    priceNote: "one-time payment",
    savings: "Save 84%",
    features: [
      "All 85+ templates",
      "All future templates FREE",
      "1-on-1 onboarding call",
      "Priority support forever",
      "Exclusive masterclasses",
      "Commercial license",
    ],
    cta: "Get All Access",
    popular: true,
    icon: Crown,
  },
];

export const PricingSection = () => {
  return (
    <section id="pricing" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-flex items-center gap-2 text-accent text-sm font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-4 h-4" />
            Limited Time Offer
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Invest in Your Career.<br />
            <span className="text-gradient-accent">Pay Once, Use Forever.</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            No subscriptions. No hidden fees. Buy once and own your templates forever, 
            including all future updates.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {pricingTiers.map((tier, index) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className={`relative rounded-2xl p-8 ${
                tier.popular
                  ? "bg-primary text-primary-foreground border-2 border-accent shadow-2xl scale-105 z-10"
                  : "bg-card border border-border"
              }`}
            >
              {/* Popular Badge */}
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <div className="px-4 py-2 rounded-full bg-accent text-accent-foreground text-sm font-semibold flex items-center gap-2">
                    <Zap className="w-4 h-4" />
                    Most Popular
                  </div>
                </div>
              )}

              {/* Header */}
              <div className="mb-6">
                {tier.icon && (
                  <tier.icon className="w-8 h-8 text-accent mb-4" />
                )}
                <h3 className={`text-xl font-bold mb-2 ${tier.popular ? "text-primary-foreground" : "text-foreground"}`}>
                  {tier.name}
                </h3>
                <p className={`text-sm ${tier.popular ? "text-primary-foreground/70" : "text-muted-foreground"}`}>
                  {tier.description}
                </p>
              </div>

              {/* Price */}
              <div className="mb-6">
                <div className="flex items-baseline gap-2">
                  {tier.originalPrice && (
                    <span className={`text-lg line-through ${tier.popular ? "text-primary-foreground/50" : "text-muted-foreground"}`}>
                      ${tier.originalPrice}
                    </span>
                  )}
                </div>
                <div className="flex items-baseline gap-1">
                  <span className={`text-5xl font-bold ${tier.popular ? "text-primary-foreground" : "text-foreground"}`}>
                    ${tier.price}
                  </span>
                </div>
                <p className={`text-sm mt-1 ${tier.popular ? "text-primary-foreground/70" : "text-muted-foreground"}`}>
                  {tier.priceNote}
                </p>
                {tier.savings && (
                  <span className="inline-block mt-2 px-3 py-1 rounded-full bg-accent/20 text-accent text-sm font-semibold">
                    {tier.savings}
                  </span>
                )}
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-8">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check className={`w-5 h-5 flex-shrink-0 mt-0.5 ${tier.popular ? "text-accent" : "text-accent"}`} />
                    <span className={`text-sm ${tier.popular ? "text-primary-foreground/90" : "text-foreground"}`}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <Button
                className={`w-full group ${
                  tier.popular
                    ? "btn-hero"
                    : "bg-secondary hover:bg-secondary/80 text-foreground"
                }`}
              >
                {tier.cta}
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
          ))}
        </div>

        {/* Trust Note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-12"
        >
          <div className="inline-flex items-center gap-6 text-sm text-muted-foreground">
            <span className="flex items-center gap-2">
              <Star className="w-4 h-4 text-premium fill-premium" />
              4.9/5 average rating
            </span>
            <span>•</span>
            <span>30-day money-back guarantee</span>
            <span>•</span>
            <span>Secure payment via Stripe</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
