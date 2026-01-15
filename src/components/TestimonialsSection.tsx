import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "James Chen",
    role: "Investment Analyst",
    company: "Goldman Sachs, London",
    image: "🧑‍💼",
    rating: 5,
    quote: "These LBO and DCF models saved me 40+ hours on my first deal. The structure is exactly what we use in-house. Absolutely worth every penny.",
    country: "🇬🇧",
  },
  {
    name: "Sarah Mitchell",
    role: "Startup Founder",
    company: "Y Combinator S22",
    image: "👩‍💻",
    rating: 5,
    quote: "Used the financial model template for our Series A. Investors were impressed by the depth and clarity. Closed $4M with these projections.",
    country: "🇺🇸",
  },
  {
    name: "Michael Weber",
    role: "Management Consultant",
    company: "McKinsey & Company",
    image: "👨‍💼",
    rating: 5,
    quote: "I've bought templates from 5+ competitors. ExcelPro is the only one that actually feels enterprise-ready. The documentation alone is worth the price.",
    country: "🇩🇪",
  },
  {
    name: "Emily Rodriguez",
    role: "MBA Student",
    company: "Wharton Business School",
    image: "👩‍🎓",
    rating: 5,
    quote: "Perfect for case competitions and internship prep. My classmates are always asking where I got these models. Now they're all buying too!",
    country: "🇺🇸",
  },
  {
    name: "David Park",
    role: "Real Estate Developer",
    company: "Blackstone Portfolio Co.",
    image: "🏢",
    rating: 5,
    quote: "The real estate templates are incredibly detailed. Waterfall distributions, IRR sensitivity, GP/LP splits—all built in and customizable.",
    country: "🇨🇦",
  },
  {
    name: "Anna Thompson",
    role: "CFO",
    company: "Series B SaaS Startup",
    image: "👩‍💼",
    rating: 5,
    quote: "We use these templates for board reporting and investor updates. Professional, clean, and actually useful. Replaced our $2k/mo SaaS tool.",
    country: "🇦🇺",
  },
];

export const TestimonialsSection = () => {
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
            Customer Stories
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-4 mb-6">
            Trusted by 10,000+ Professionals
          </h2>
          <p className="text-lg text-muted-foreground">
            From Wall Street analysts to Silicon Valley founders. 
            See why professionals choose ExcelPro for critical financial work.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="card-premium p-6 flex flex-col"
            >
              {/* Quote Icon */}
              <Quote className="w-8 h-8 text-accent/30 mb-4" />

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-premium fill-premium" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-foreground mb-6 flex-1 leading-relaxed">
                "{testimonial.quote}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-border">
                <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center text-2xl">
                  {testimonial.image}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <p className="font-semibold text-foreground">{testimonial.name}</p>
                    <span>{testimonial.country}</span>
                  </div>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  <p className="text-xs text-accent">{testimonial.company}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
