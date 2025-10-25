import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

interface CaseItem {
  id: number;
  name: string;
  price: string;
  rarity: string;
  image: string;
}

interface CasesSectionProps {
  cases: CaseItem[];
  setOpeningCase: (caseItem: CaseItem) => void;
}

const CasesSection = ({ cases, setOpeningCase }: CasesSectionProps) => {
  return (
    <div className="space-y-8 animate-fade-in">
      <div className="text-center">
        <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">Доступные кейсы</h2>
        <p className="text-muted-foreground text-lg">Выбери свой шанс на победу</p>
      </div>
      <div className="grid md:grid-cols-3 gap-8">
        {cases.map((caseItem, index) => (
          <Card 
            key={caseItem.id} 
            className="overflow-hidden bg-card/50 backdrop-blur border-2 border-primary/20 hover:border-primary/50 transition-all hover-scale cursor-pointer"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="relative h-64 bg-gradient-to-br from-muted/50 to-background overflow-hidden">
              <img 
                src={caseItem.image} 
                alt={caseItem.name}
                className="w-full h-full object-cover"
              />
              <Badge className="absolute top-4 right-4 bg-primary text-primary-foreground">
                {caseItem.rarity}
              </Badge>
            </div>
            <div className="p-6 space-y-4">
              <h3 className="font-heading text-2xl font-bold">{caseItem.name}</h3>
              <div className="flex items-center justify-between">
                <span className="text-3xl font-bold text-primary">{caseItem.price}</span>
                <Button 
                  className="bg-primary hover:bg-primary/90 pulse-glow"
                  onClick={() => setOpeningCase(caseItem)}
                >
                  <Icon name="Unlock" className="mr-2" size={18} />
                  Открыть
                </Button>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default CasesSection;
