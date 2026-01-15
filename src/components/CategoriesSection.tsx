import { motion } from "framer-motion";
import { ArrowRight, TrendingUp, Calculator, BarChart3, Users, FolderKanban, Building2, PieChart, Package, Wallet, Home } from "lucide-react";

const categories = [
  {
    icon: TrendingUp,
    name: "Financial Modeling",
    count: 12,
    priceRange: "$149–$499",
    description: "DCF, LBO, M&A models trusted by investment bankers",
    popular: true,
    color: "from-emerald-500/20 to-teal-500/20",
  },
  {
    icon: Calculator,
    name: "Business Planning",
    count: 8,
    priceRange: "$79–$149",
    description: "Complete business plans and financial projections",
    color: "from-blue-500/20 to-indigo-500/20",
  },
  {
    icon: BarChart3,
    name: "Sales & Marketing",
    count: 8,
    priceRange: "$79–$149",
    description: "Pipeline tracking, ROI analysis, campaign planning",
    color: "from-purple-500/20 to-pink-500/20",
  },
  {
    icon: Building2,
    name: "Accounting & Finance",
    count: 12,
    priceRange: "$49–$99",
    description: "Budgets, invoicing, expense tracking essentials",
    color: "from-amber-500/20 to-orange-500/20",
  },
  {
    icon: FolderKanban,
    name: "Project Management",
    count: 7,
    priceRange: "$69–$99",
    description: "Gantt charts, resource planning, milestone tracking",
    color: "from-cyan-500/20 to-sky-500/20",
  },
  {
    icon: Users,
    name: "HR & Payroll",
    count: 7,
    priceRange: "$69–$99",
    description: "Employee management, payroll calculators, org charts",
    color: "from-rose-500/20 to-red-500/20",
  },
  {
    icon: PieChart,
    name: "Data Analytics",
    count: 7,
    priceRange: "$69–$199",
    description: "Dashboards, KPI trackers, data visualization",
    color: "from-violet-500/20 to-purple-500/20",
  },
  {
    icon: Package,
    name: "Inventory & Operations",
    count: 8,
    priceRange: "$79–$149",
    description: "Stock management, supply chain, logistics tools",
    color: "from-lime-500/20 to-green-500/20",
  },
  {
    icon: Wallet,
    name: "Personal Finance",
    count: 8,
    priceRange: "$29–$59",
    description: "Budgeting, savings goals, investment tracking",
    color: "from-teal-500/20 to-cyan-500/20",
  },
  {
    icon: Home,
    name: "Real Estate",
    count: 8,
    priceRange: "$79–$249",
    description: "Property analysis, rental calculators, deal models",
    popular: true,
    color: "from-slate-500/20 to-gray-500/20",
  },
];

export const CategoriesSection = () => {
  return (
    <section id="categories" className="py-24 bg-background bg-mesh">
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
            Template Library
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-4 mb-6">
            85+ Templates Across 10 Categories
          </h2>
          <p className="text-lg text-muted-foreground">
            Professional-grade Excel templates built by finance experts. 
            Each template is fully editable, includes documentation, and comes with lifetime updates.
          </p>
        </motion.div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
          {categories.map((category, index) => (
            <motion.a
              key={category.name}
              href={`#${category.name.toLowerCase().replace(/\s+/g, '-')}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="group card-premium p-6 cursor-pointer relative overflow-hidden"
            >
              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              {/* Popular Badge */}
              {category.popular && (
                <div className="absolute top-4 right-4 px-2 py-1 rounded-full bg-accent/10 text-accent text-xs font-semibold">
                  Popular
                </div>
              )}

              <div className="relative z-10">
                {/* Icon */}
                <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center mb-4 group-hover:bg-accent/10 transition-colors">
                  <category.icon className="w-6 h-6 text-foreground group-hover:text-accent transition-colors" />
                </div>

                {/* Content */}
                <h3 className="font-semibold text-foreground mb-1 group-hover:text-accent transition-colors">
                  {category.name}
                </h3>
                <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                  {category.description}
                </p>

                {/* Meta */}
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">{category.count} templates</span>
                  <span className="font-medium text-accent">{category.priceRange}</span>
                </div>

                {/* Arrow */}
                <div className="mt-4 flex items-center text-accent opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-0 group-hover:translate-x-1">
                  <span className="text-sm font-medium">Explore</span>
                  <ArrowRight className="w-4 h-4 ml-1" />
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};
