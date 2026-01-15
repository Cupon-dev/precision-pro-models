import { motion } from "framer-motion";
import { ArrowRight, Play, CheckCircle2, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-hero overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(16,185,129,0.15),_transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(16,185,129,0.1),_transparent_50%)]" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-accent/5 rounded-full blur-3xl" />
      
      {/* Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '64px 64px'
        }}
      />

      <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/10 mb-8"
          >
            <Sparkles className="w-4 h-4 text-accent" />
            <span className="text-white/90 text-sm font-medium">
              Trusted by 10,000+ professionals in 40+ countries
            </span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-7xl font-bold text-white leading-tight mb-6"
          >
            Stop Building Spreadsheets.
            <br />
            <span className="text-gradient-accent">Start Making Decisions.</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-white/70 max-w-3xl mx-auto mb-10 leading-relaxed"
          >
            85+ investment-grade Excel templates used by analysts at Goldman Sachs, 
            McKinsey consultants, and Y Combinator founders. Save 100+ hours on 
            financial modeling, business planning, and analytics.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
          >
            <Button className="btn-hero group text-base">
              Get Instant Access
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button className="btn-secondary-hero group text-base">
              <Play className="mr-2 w-5 h-5" />
              Watch Demo
            </Button>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-wrap items-center justify-center gap-6 text-white/60"
          >
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-accent" />
              <span className="text-sm">Instant Download</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-accent" />
              <span className="text-sm">30-Day Money Back</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-accent" />
              <span className="text-sm">Lifetime Updates</span>
            </div>
          </motion.div>
        </div>

        {/* Hero Visual - Dashboard Preview */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16 max-w-6xl mx-auto"
        >
          <div className="relative">
            {/* Glow Effect */}
            <div className="absolute -inset-4 bg-accent/20 rounded-3xl blur-2xl" />
            
            {/* Dashboard Card */}
            <div className="relative bg-card rounded-2xl border border-white/10 shadow-2xl overflow-hidden">
              {/* Window Controls */}
              <div className="flex items-center gap-2 px-6 py-4 bg-secondary/50 border-b border-border">
                <div className="w-3 h-3 rounded-full bg-destructive/60" />
                <div className="w-3 h-3 rounded-full bg-premium/60" />
                <div className="w-3 h-3 rounded-full bg-accent/60" />
                <span className="ml-4 text-sm text-muted-foreground">Financial_Model_Template.xlsx</span>
              </div>
              
              {/* Content Preview */}
              <div className="p-8 bg-gradient-to-br from-card to-secondary/30">
                <div className="grid grid-cols-12 gap-4">
                  {/* Sidebar */}
                  <div className="col-span-3 space-y-3">
                    {['Revenue Model', 'Expenses', 'Cash Flow', 'Projections', 'Scenarios'].map((item, i) => (
                      <div 
                        key={item}
                        className={`px-4 py-3 rounded-lg text-sm font-medium ${
                          i === 0 
                            ? 'bg-accent/10 text-accent border border-accent/20' 
                            : 'text-muted-foreground hover:bg-secondary/50'
                        }`}
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                  
                  {/* Main Content */}
                  <div className="col-span-9 space-y-4">
                    {/* Chart placeholder */}
                    <div className="bg-secondary/50 rounded-xl p-6 border border-border/50">
                      <div className="flex items-end justify-between h-32 gap-2">
                        {[40, 65, 45, 80, 55, 90, 70, 95, 85, 100, 88, 110].map((height, i) => (
                          <motion.div
                            key={i}
                            initial={{ height: 0 }}
                            animate={{ height: `${height}%` }}
                            transition={{ duration: 0.5, delay: 0.8 + i * 0.05 }}
                            className="flex-1 bg-accent/80 rounded-t-sm"
                          />
                        ))}
                      </div>
                    </div>
                    
                    {/* Stats Row */}
                    <div className="grid grid-cols-3 gap-4">
                      {[
                        { label: 'Projected Revenue', value: '$2.4M', change: '+24%' },
                        { label: 'Net Margin', value: '18.5%', change: '+3.2%' },
                        { label: 'Break-even', value: 'Month 8', change: '-2 mo' },
                      ].map((stat) => (
                        <div key={stat.label} className="bg-secondary/50 rounded-xl p-4 border border-border/50">
                          <p className="text-xs text-muted-foreground mb-1">{stat.label}</p>
                          <p className="text-xl font-bold text-foreground">{stat.value}</p>
                          <p className="text-xs text-accent font-medium">{stat.change}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
