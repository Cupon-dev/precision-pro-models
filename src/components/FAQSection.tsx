import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What file format are the templates in?",
    answer: "All templates are delivered as Microsoft Excel files (.xlsx) that work with Excel 2016 and later versions, including Microsoft 365. They also work with Google Sheets, though some advanced features may require Excel for full functionality.",
  },
  {
    question: "Can I customize the templates for my needs?",
    answer: "Absolutely! All templates are fully unlocked and editable. You can customize colors, add your logo, modify formulas, and adapt them to your specific use case. Each template includes detailed documentation to help you understand the structure.",
  },
  {
    question: "Do you offer refunds if I'm not satisfied?",
    answer: "Yes, we offer a 30-day money-back guarantee. If you're not completely satisfied with your purchase, contact our support team within 30 days for a full refund—no questions asked.",
  },
  {
    question: "What's included in the All-Access Bundle?",
    answer: "The All-Access Bundle includes all 85+ templates across every category, lifetime access to future templates we release, priority support, exclusive video tutorials, a 1-on-1 onboarding call, and a commercial license for client use.",
  },
  {
    question: "Can I use these templates for client work?",
    answer: "Single template purchases are for personal use only. If you need to use templates for client deliverables or commercial purposes, the All-Access Bundle includes a commercial license that allows unlimited client use.",
  },
  {
    question: "How do I get support if I have questions?",
    answer: "We offer email support for all customers with typical response times under 4 hours during business days. All-Access Bundle customers receive priority support with faster response times and direct access to our finance experts.",
  },
  {
    question: "Do you offer team or enterprise licenses?",
    answer: "Yes! For teams of 5 or more, we offer volume discounts and enterprise licensing options. Contact us at enterprise@excelpro.com for custom pricing based on your team size and needs.",
  },
  {
    question: "Will I get updates when templates are improved?",
    answer: "Yes, all purchases include lifetime updates. When we improve a template or release new versions, you'll receive an email notification and can download the latest version from your account dashboard.",
  },
];

export const FAQSection = () => {
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
            Common Questions
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-4 mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-muted-foreground">
            Everything you need to know about our templates and licensing.
          </p>
        </motion.div>

        {/* FAQ Accordion */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card rounded-xl border border-border px-6 data-[state=open]:shadow-md transition-shadow"
              >
                <AccordionTrigger className="text-left font-semibold text-foreground hover:text-accent hover:no-underline py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>

        {/* Support CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-12"
        >
          <p className="text-muted-foreground">
            Still have questions?{" "}
            <a href="mailto:support@excelpro.com" className="text-accent hover:underline font-medium">
              Contact our support team
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
};
