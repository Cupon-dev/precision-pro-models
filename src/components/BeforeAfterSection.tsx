import { motion } from "framer-motion";
import { ArrowRight, XCircle, CheckCircle2, Clock, Zap } from "lucide-react";

const beforeItems = [
  { text: "Hours searching for the right template", icon: Clock },
  { text: "Messy spreadsheets with formula errors", icon: XCircle },
  { text: "Starting from scratch every time", icon: XCircle },
  { text: "Unprofessional outputs for stakeholders", icon: XCircle },
];

const afterItems = [
  { text: "Instant access to 85+ pro templates", icon: Zap },
  { text: "Error-free, audit-ready models", icon: CheckCircle2 },
  { text: "Plug-and-play with your own data", icon: CheckCircle2 },
  { text: "Impress investors & leadership", icon: CheckCircle2 },
];

export const BeforeAfterSection = () => {
  return (
    <section className="py-24 bg-secondary/30">
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
            The Transformation
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-4 mb-6">
            From Spreadsheet Chaos to<br />
            <span className="text-gradient-accent">Decision-Making Clarity</span>
          </h2>
        </motion.div>

        {/* Before/After Comparison */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Before */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-destructive/20 to-destructive/5 rounded-2xl blur-xl" />
            <div className="relative bg-card rounded-2xl border border-destructive/20 p-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-destructive/10 text-destructive text-sm font-semibold mb-6">
                <XCircle className="w-4 h-4" />
                Before ExcelPro
              </div>
              <ul className="space-y-4">
                {beforeItems.map((item, index) => (
                  <motion.li
                    key={item.text}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.1 + index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <div className="w-10 h-10 rounded-full bg-destructive/10 flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-5 h-5 text-destructive" />
                    </div>
                    <span className="text-muted-foreground">{item.text}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* After */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-accent/20 to-accent/5 rounded-2xl blur-xl" />
            <div className="relative bg-card rounded-2xl border border-accent/20 p-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent text-sm font-semibold mb-6">
                <CheckCircle2 className="w-4 h-4" />
                After ExcelPro
              </div>
              <ul className="space-y-4">
                {afterItems.map((item, index) => (
                  <motion.li
                    key={item.text}
                    initial={{ opacity: 0, x: 10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-5 h-5 text-accent" />
                    </div>
                    <span className="text-foreground font-medium">{item.text}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>

        {/* Arrow connecting */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: 0.5 }}
          className="hidden lg:flex justify-center -mt-8 mb-8"
        >
          <div className="w-16 h-16 rounded-full bg-accent flex items-center justify-center shadow-lg shadow-accent/30">
            <ArrowRight className="w-8 h-8 text-accent-foreground" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};
