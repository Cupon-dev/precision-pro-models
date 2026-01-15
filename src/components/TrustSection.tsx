import { motion } from "framer-motion";
import { Shield, CreditCard, Download, RefreshCw, Lock, Clock } from "lucide-react";

const trustItems = [
  {
    icon: Shield,
    title: "Enterprise-Grade Quality",
    description: "Built by finance professionals with 10+ years of experience at top firms.",
  },
  {
    icon: CreditCard,
    title: "Secure Payment",
    description: "256-bit SSL encryption. We never store your payment details.",
  },
  {
    icon: Download,
    title: "Instant Download",
    description: "Get immediate access to your templates after purchase.",
  },
  {
    icon: RefreshCw,
    title: "Lifetime Updates",
    description: "All future improvements and new versions included forever.",
  },
  {
    icon: Lock,
    title: "30-Day Guarantee",
    description: "Full refund if you're not completely satisfied. No questions asked.",
  },
  {
    icon: Clock,
    title: "24/7 Support",
    description: "Priority email support with average response time under 4 hours.",
  },
];

export const TrustSection = () => {
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
            Why Choose ExcelPro
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-4 mb-6">
            Built by Professionals.<br />
            <span className="text-gradient-accent">Trusted Globally.</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            We're committed to delivering the highest quality templates with 
            world-class support and security.
          </p>
        </motion.div>

        {/* Trust Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {trustItems.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="flex gap-4"
            >
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                <item.icon className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
