import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

interface FAQItem {
  q: string;
  a: string;
}

interface FAQAccordionProps {
  items: FAQItem[];
}

export default function FAQAccordion({ items }: FAQAccordionProps) {
  return (
    <Accordion type="single" collapsible className="space-y-4">
      {items.map((faq, i) => (
        <AccordionItem
          key={i}
          value={`item-${i}`}
          className="bg-card border border-border/50 rounded-2xl px-6 data-[state=open]:border-primary/30 transition-colors duration-300"
        >
          <AccordionTrigger className="text-left text-base font-semibold text-foreground hover:text-primary transition-colors py-5 hover:no-underline">
            {faq.q}
          </AccordionTrigger>
          <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
            {faq.a}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
