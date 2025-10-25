import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

interface FaqItem {
  question: string;
  answer: string;
}

interface FaqSectionProps {
  faqItems: FaqItem[];
}

const FaqSection = ({ faqItems }: FaqSectionProps) => {
  return (
    <div className="max-w-3xl mx-auto space-y-8 animate-fade-in">
      <div className="text-center">
        <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">Частые вопросы</h2>
        <p className="text-muted-foreground text-lg">Ответы на популярные вопросы</p>
      </div>
      <Accordion type="single" collapsible className="space-y-4">
        {faqItems.map((item, index) => (
          <AccordionItem 
            key={index} 
            value={`item-${index}`}
            className="bg-card/50 backdrop-blur border border-primary/20 rounded-lg px-6"
          >
            <AccordionTrigger className="font-heading text-lg font-semibold hover:text-primary">
              {item.question}
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              {item.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default FaqSection;
