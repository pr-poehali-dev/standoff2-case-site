import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

interface Item {
  id: number;
  name: string;
  rarity: string;
  color: string;
  value: number;
}

const ContractSection = () => {
  const [selectedItems, setSelectedItems] = useState<Item[]>([]);
  
  const inventory: Item[] = [
    { id: 1, name: 'Glock-18 | Ночной страж', rarity: 'Обычный', color: '#6B7280', value: 180 },
    { id: 2, name: 'USP-S | Лесной камуфляж', rarity: 'Обычный', color: '#6B7280', value: 150 },
    { id: 3, name: 'P90 | Песчаная буря', rarity: 'Обычный', color: '#6B7280', value: 200 },
    { id: 4, name: 'M4A4 | Городской камуфляж', rarity: 'Обычный', color: '#6B7280', value: 220 },
    { id: 5, name: 'AK-47 | Сафари', rarity: 'Обычный', color: '#6B7280', value: 250 },
    { id: 6, name: 'Desert Eagle | Метель', rarity: 'Редкий', color: '#EAB308', value: 640 },
    { id: 7, name: 'AWP | Пустынный камуфляж', rarity: 'Редкий', color: '#EAB308', value: 720 },
    { id: 8, name: 'M4A1-S | Гипнотик', rarity: 'Редкий', color: '#EAB308', value: 580 }
  ];

  const toggleItem = (item: Item) => {
    if (selectedItems.find(i => i.id === item.id)) {
      setSelectedItems(selectedItems.filter(i => i.id !== item.id));
    } else if (selectedItems.length < 10) {
      setSelectedItems([...selectedItems, item]);
    }
  };

  const totalValue = selectedItems.reduce((sum, item) => sum + item.value, 0);
  const canCraft = selectedItems.length >= 3;

  const getPotentialReward = () => {
    if (selectedItems.length < 3) return null;
    const avgValue = totalValue / selectedItems.length;
    const multiplier = 1.2 + (selectedItems.length * 0.1);
    return Math.round(avgValue * multiplier);
  };

  const handleCraft = () => {
    if (!canCraft) return;
    const reward = getPotentialReward();
    alert(`🎉 Контракт выполнен! Вы получили предмет стоимостью ${reward}₽`);
    setSelectedItems([]);
  };

  return (
    <div className="max-w-6xl mx-auto space-y-8 animate-fade-in">
      <div className="text-center">
        <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">Контракт обмена</h2>
        <p className="text-muted-foreground text-lg">
          Обменяй несколько предметов на один более ценный
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        <div className="space-y-4">
          <h3 className="font-heading text-2xl font-bold">Ваш инвентарь</h3>
          <Card className="p-6 bg-card/50 backdrop-blur max-h-[600px] overflow-y-auto">
            <div className="space-y-2">
              {inventory.map((item) => {
                const isSelected = selectedItems.find(i => i.id === item.id);
                return (
                  <Card
                    key={item.id}
                    onClick={() => toggleItem(item)}
                    className={`p-4 cursor-pointer transition-all hover-scale ${
                      isSelected
                        ? 'bg-primary/20 border-primary'
                        : 'bg-muted/30'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div>
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
                      <div className="text-right">
                        <div className="font-bold">{item.value}₽</div>
                        {isSelected && (
                          <Icon name="Check" size={20} className="text-primary ml-auto" />
                        )}
                      </div>
                    </div>
                  </Card>
                );
              })}
            </div>
          </Card>
        </div>

        <div className="space-y-4">
          <h3 className="font-heading text-2xl font-bold">
            Контракт ({selectedItems.length}/10)
          </h3>
          <Card className="p-6 bg-gradient-to-br from-primary/20 via-card to-card min-h-[300px]">
            {selectedItems.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-center py-12">
                <Icon name="Package" size={64} className="text-muted-foreground mb-4" />
                <p className="text-muted-foreground">
                  Выберите минимум 3 предмета для обмена
                </p>
              </div>
            ) : (
              <div className="space-y-4">
                <div className="grid grid-cols-5 gap-2">
                  {[...Array(10)].map((_, index) => (
                    <div
                      key={index}
                      className={`aspect-square rounded-lg border-2 border-dashed flex items-center justify-center ${
                        selectedItems[index]
                          ? 'bg-primary/20 border-primary'
                          : 'bg-muted/20 border-muted'
                      }`}
                    >
                      {selectedItems[index] ? (
                        <div className="text-2xl">✓</div>
                      ) : (
                        <div className="text-2xl text-muted-foreground">?</div>
                      )}
                    </div>
                  ))}
                </div>

                <div className="space-y-3 pt-4 border-t border-border">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Предметов:</span>
                    <span className="font-bold">{selectedItems.length}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Общая стоимость:</span>
                    <span className="font-bold">{totalValue}₽</span>
                  </div>
                  {getPotentialReward() && (
                    <>
                      <div className="flex justify-between text-primary">
                        <span>Возможная награда:</span>
                        <span className="font-bold">~{getPotentialReward()}₽</span>
                      </div>
                      <div className="text-xs text-muted-foreground text-center pt-2">
                        💡 Больше предметов = выше шанс на редкий дроп
                      </div>
                    </>
                  )}
                </div>

                <Button
                  onClick={handleCraft}
                  disabled={!canCraft}
                  className="w-full bg-primary hover:bg-primary/90 disabled:opacity-50"
                  size="lg"
                >
                  <Icon name="Sparkles" className="mr-2" size={20} />
                  Выполнить контракт
                </Button>
              </div>
            )}
          </Card>

          <Card className="p-4 bg-muted/50">
            <h4 className="font-semibold mb-2 flex items-center gap-2">
              <Icon name="Info" size={18} className="text-primary" />
              Как работает контракт?
            </h4>
            <ul className="text-sm text-muted-foreground space-y-1">
              <li>• Выберите от 3 до 10 предметов</li>
              <li>• Получите случайный предмет выше рангом</li>
              <li>• Чем больше предметов, тем выше шанс</li>
              <li>• Стоимость награды зависит от вложений</li>
            </ul>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ContractSection;
