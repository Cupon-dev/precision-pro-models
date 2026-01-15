import { motion } from "framer-motion";
import { BookOpen, ArrowRight, Play, FileSpreadsheet, TrendingUp } from "lucide-react";

const resources = [
  {
    type: "Guide",
    title: "How to Build an LBO Model in Excel",
    description: "Step-by-step guide to creating a leveraged buyout model from scratch.",
    readTime: "12 min read",
    icon: FileSpreadsheet,
    featured: true,
  },
  {
    type: "Tutorial",
    title: "DCF Valuation Explained for Founders",
    description: "Learn discounted cash flow analysis for your startup fundraising.",
    readTime: "8 min read",
    icon: TrendingUp,
  },
  {
    type: "Comparison",
    title: "Excel vs SaaS Financial Tools",
    description: "Why professionals still choose Excel for critical financial work.",
    readTime: "5 min read",
    icon: BookOpen,
  },
];

export const ResourcesSection = () => {
  return (
    <section id="resources" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-12"
        >
          <div>
            <span className="text-accent text-sm font-semibold uppercase tracking-wider">
              Learn & Grow
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2">
              Free Resources & Guides
            </h2>
          </div>
          <a
            href="#"
            className="flex items-center gap-2 text-accent font-medium mt-4 md:mt-0 hover:underline"
          >
            View all resources
            <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>

        {/* Resources Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {resources.map((resource, index) => (
            <motion.a
              key={resource.title}
              href="#"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className={`group card-premium overflow-hidden ${
                resource.featured ? "md:row-span-2" : ""
              }`}
            >
              {/* Image Placeholder */}
              <div className={`bg-gradient-to-br from-accent/10 to-accent/5 ${
                resource.featured ? "h-48" : "h-32"
              } flex items-center justify-center`}>
                <resource.icon className="w-12 h-12 text-accent/50" />
              </div>

              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="px-2 py-1 rounded-full bg-accent/10 text-accent text-xs font-medium">
                    {resource.type}
                  </span>
                  <span className="text-xs text-muted-foreground">{resource.readTime}</span>
                </div>
                <h3 className="font-semibold text-foreground mb-2 group-hover:text-accent transition-colors">
                  {resource.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {resource.description}
                </p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};
