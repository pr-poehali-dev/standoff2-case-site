import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

interface CaseItem {
  name: string;
  rarity: string;
  color: string;
  chance: number;
  value: string;
}

interface CasePreviewModalProps {
  caseName: string;
  casePrice: string;
  items: CaseItem[];
  onClose: () => void;
  onOpen: () => void;
}

const CasePreviewModal = ({ caseName, casePrice, items, onClose, onOpen }: CasePreviewModalProps) => {
  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in">
      <Card className="max-w-4xl w-full max-h-[90vh] overflow-y-auto bg-card p-8">
        <div className="flex items-start justify-between mb-6">
          <div>
            <h2 className="font-heading text-3xl font-bold mb-2">{caseName}</h2>
            <p className="text-muted-foreground">Возможное содержимое кейса</p>
          </div>
          <Button
            variant="ghost"
            size="icon"
            onClick={onClose}
          >
            <Icon name="X" size={24} />
          </Button>
        </div>

        <div className="space-y-6">
          <Card className="p-6 bg-gradient-to-r from-primary/20 to-transparent border-primary/50">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-sm text-muted-foreground mb-1">Стоимость открытия</div>
                <div className="text-3xl font-bold text-primary">{casePrice}</div>
              </div>
              <Button
                onClick={onOpen}
                size="lg"
                className="bg-primary hover:bg-primary/90"
              >
                <Icon name="Package" className="mr-2" size={20} />
                Открыть кейс
              </Button>
            </div>
          </Card>

          <div>
            <h3 className="font-heading text-xl font-bold mb-4">Содержимое ({items.length} предметов)</h3>
            <div className="space-y-2">
              {items.map((item, index) => (
                <Card
                  key={index}
                  className="p-4 bg-muted/30 hover-scale transition-all"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 flex-1">
                      <div className="text-3xl">🎁</div>
                      <div className="flex-1">
                        <div className="font-semibold" style={{ color: item.color }}>
                          {item.name}
                        </div>
                        <Badge
                          variant="outline"
                          className="mt-1"
                          style={{ borderColor: item.color, color: item.color }}
                        >
                          {item.rarity}
                        </Badge>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-bold text-primary">{item.value}</div>
                      <div className="text-sm text-muted-foreground">{item.chance}% шанс</div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          <Card className="p-6 bg-muted/50">
            <h4 className="font-semibold mb-3 flex items-center gap-2">
              <Icon name="Info" size={20} className="text-primary" />
              Информация о вероятности
            </h4>
            <div className="space-y-2 text-sm text-muted-foreground">
              <div className="flex justify-between">
                <span>Легендарный:</span>
                <span className="font-semibold text-primary">
                  {items.filter(i => i.rarity === 'Легендарный').reduce((sum, i) => sum + i.chance, 0).toFixed(1)}%
                </span>
              </div>
              <div className="flex justify-between">
                <span>Эпический:</span>
                <span className="font-semibold" style={{ color: '#0EA5E9' }}>
                  {items.filter(i => i.rarity === 'Эпический').reduce((sum, i) => sum + i.chance, 0).toFixed(1)}%
                </span>
              </div>
              <div className="flex justify-between">
                <span>Редкий:</span>
                <span className="font-semibold" style={{ color: '#EAB308' }}>
                  {items.filter(i => i.rarity === 'Редкий').reduce((sum, i) => sum + i.chance, 0).toFixed(1)}%
                </span>
              </div>
              <div className="flex justify-between">
                <span>Обычный:</span>
                <span className="font-semibold" style={{ color: '#6B7280' }}>
                  {items.filter(i => i.rarity === 'Обычный').reduce((sum, i) => sum + i.chance, 0).toFixed(1)}%
                </span>
              </div>
            </div>
          </Card>
        </div>
      </Card>
    </div>
  );
};

export default CasePreviewModal;
