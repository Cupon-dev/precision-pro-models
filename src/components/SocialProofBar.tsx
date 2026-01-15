import { motion } from "framer-motion";

const logos = [
  { name: "Fortune 500", icon: "🏢" },
  { name: "Investment Banking", icon: "📊" },
  { name: "Consulting Firms", icon: "💼" },
  { name: "Private Equity", icon: "💰" },
  { name: "Startups", icon: "🚀" },
  { name: "Real Estate", icon: "🏠" },
];

const stats = [
  { value: "10,000+", label: "Professionals Trust Us" },
  { value: "40+", label: "Countries Worldwide" },
  { value: "4.9★", label: "Average Rating" },
  { value: "85+", label: "Premium Templates" },
];

export const SocialProofBar = () => {
  return (
    <section className="py-16 bg-card border-y border-border/50">
      <div className="container mx-auto px-6">
        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <p className="stat-number mb-2">{stat.value}</p>
              <p className="text-muted-foreground text-sm">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Industry Logos */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center"
        >
          <p className="text-sm text-muted-foreground mb-8 uppercase tracking-wider font-medium">
            Trusted by professionals at leading organizations
          </p>
          <div className="flex flex-wrap justify-center gap-8 md:gap-16">
            {logos.map((logo, index) => (
              <motion.div
                key={logo.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.4 + index * 0.05 }}
                className="flex items-center gap-3 px-6 py-3 rounded-xl bg-secondary/50 border border-border/50"
              >
                <span className="text-2xl">{logo.icon}</span>
                <span className="text-sm font-medium text-muted-foreground">{logo.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
