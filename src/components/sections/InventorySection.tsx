import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

interface InventoryItem {
  id: number;
  name: string;
  rarity: string;
  color: string;
  value: number;
  image: string;
  selected: boolean;
}

const InventorySection = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [rarityFilter, setRarityFilter] = useState<string | null>(null);
  const [sortBy, setSortBy] = useState<'name' | 'value' | 'rarity'>('value');
  const [selectedItems, setSelectedItems] = useState<number[]>([]);

  const inventory: InventoryItem[] = [
    { id: 1, name: 'AK-47 | Огненный змей', rarity: 'Легендарный', color: '#F97316', value: 2450, image: '🔫', selected: false },
    { id: 2, name: 'AWP | Азимов', rarity: 'Эпический', color: '#0EA5E9', value: 1200, image: '🎯', selected: false },
    { id: 3, name: 'M4A4 | Неоновая революция', rarity: 'Редкий', color: '#EAB308', value: 850, image: '⚡', selected: false },
    { id: 4, name: 'Desert Eagle | Золотая лихорадка', rarity: 'Редкий', color: '#EAB308', value: 720, image: '💛', selected: false },
    { id: 5, name: 'USP-S | Киберпанк', rarity: 'Эпический', color: '#0EA5E9', value: 980, image: '🌟', selected: false },
    { id: 6, name: 'Glock-18 | Ночной страж', rarity: 'Обычный', color: '#6B7280', value: 180, image: '🌙', selected: false },
    { id: 7, name: 'P90 | Неон', rarity: 'Редкий', color: '#EAB308', value: 640, image: '💚', selected: false },
    { id: 8, name: 'M4A1-S | Гипнотик', rarity: 'Редкий', color: '#EAB308', value: 580, image: '💜', selected: false }
  ];

  const rarities = ['Все', 'Легендарный', 'Эпический', 'Редкий', 'Обычный'];

  const filteredItems = inventory
    .filter(item => {
      const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesRarity = !rarityFilter || rarityFilter === 'Все' || item.rarity === rarityFilter;
      return matchesSearch && matchesRarity;
    })
    .sort((a, b) => {
      if (sortBy === 'value') return b.value - a.value;
      if (sortBy === 'name') return a.name.localeCompare(b.name);
      const rarityOrder = ['Легендарный', 'Эпический', 'Редкий', 'Обычный'];
      return rarityOrder.indexOf(a.rarity) - rarityOrder.indexOf(b.rarity);
    });

  const toggleSelect = (id: number) => {
    setSelectedItems(prev =>
      prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
    );
  };

  const selectedValue = inventory
    .filter(item => selectedItems.includes(item.id))
    .reduce((sum, item) => sum + item.value, 0);

  const totalValue = inventory.reduce((sum, item) => sum + item.value, 0);

  const handleSellSelected = () => {
    if (selectedItems.length === 0) return;
    alert(`Продано ${selectedItems.length} предметов на сумму ${selectedValue}₽`);
    setSelectedItems([]);
  };

  return (
    <div className="max-w-7xl mx-auto space-y-6 animate-fade-in">
      <div className="text-center">
        <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">Инвентарь</h2>
        <p className="text-muted-foreground text-lg">Управляй своими предметами</p>
      </div>

      <div className="grid md:grid-cols-3 gap-4">
        <Card className="p-6 bg-gradient-to-br from-primary/20 to-transparent text-center">
          <Icon name="Package" size={32} className="mx-auto mb-2 text-primary" />
          <div className="text-3xl font-bold mb-1">{inventory.length}</div>
          <div className="text-sm text-muted-foreground">Всего предметов</div>
        </Card>
        <Card className="p-6 bg-gradient-to-br from-secondary/20 to-transparent text-center">
          <Icon name="Wallet" size={32} className="mx-auto mb-2 text-secondary" />
          <div className="text-3xl font-bold mb-1">{totalValue.toLocaleString()}₽</div>
          <div className="text-sm text-muted-foreground">Общая стоимость</div>
        </Card>
        <Card className="p-6 bg-gradient-to-br from-accent/20 to-transparent text-center">
          <Icon name="CheckSquare" size={32} className="mx-auto mb-2 text-accent" />
          <div className="text-3xl font-bold mb-1">{selectedItems.length}</div>
          <div className="text-sm text-muted-foreground">Выбрано</div>
        </Card>
      </div>

      <Card className="p-6 bg-card/50 backdrop-blur">
        <div className="space-y-4">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <Input
                placeholder="Поиск предметов..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full"
              />
            </div>
            <div className="flex gap-2">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="px-4 py-2 rounded-md bg-muted border border-border"
              >
                <option value="value">По цене</option>
                <option value="name">По имени</option>
                <option value="rarity">По редкости</option>
              </select>
            </div>
          </div>

          <div className="flex gap-2 flex-wrap">
            {rarities.map((rarity) => (
              <Button
                key={rarity}
                variant={rarityFilter === rarity || (!rarityFilter && rarity === 'Все') ? 'default' : 'outline'}
                onClick={() => setRarityFilter(rarity === 'Все' ? null : rarity)}
                size="sm"
              >
                {rarity}
              </Button>
            ))}
          </div>

          {selectedItems.length > 0 && (
            <Card className="p-4 bg-primary/10 border-primary/50">
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-semibold">Выбрано: {selectedItems.length} предметов</div>
                  <div className="text-sm text-muted-foreground">
                    Общая стоимость: {selectedValue.toLocaleString()}₽
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    onClick={() => setSelectedItems([])}
                  >
                    Отменить
                  </Button>
                  <Button
                    onClick={handleSellSelected}
                    className="bg-primary hover:bg-primary/90"
                  >
                    <Icon name="DollarSign" className="mr-2" size={18} />
                    Продать
                  </Button>
                </div>
              </div>
            </Card>
          )}
        </div>
      </Card>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filteredItems.map((item) => {
          const isSelected = selectedItems.includes(item.id);
          return (
            <Card
              key={item.id}
              onClick={() => toggleSelect(item.id)}
              className={`p-4 cursor-pointer transition-all hover-scale relative ${
                isSelected
                  ? 'bg-primary/20 border-primary shadow-lg'
                  : 'bg-muted/30'
              }`}
            >
              {isSelected && (
                <div className="absolute top-2 right-2">
                  <Icon name="CheckCircle" size={24} className="text-primary" />
                </div>
              )}
              <div className="text-6xl text-center mb-3">{item.image}</div>
              <div className="space-y-2">
                <div className="font-semibold text-sm line-clamp-2" style={{ color: item.color }}>
                  {item.name}
                </div>
                <Badge
                  variant="outline"
                  className="text-xs"
                  style={{ borderColor: item.color, color: item.color }}
                >
                  {item.rarity}
                </Badge>
                <div className="text-lg font-bold text-primary">
                  {item.value.toLocaleString()}₽
                </div>
              </div>
            </Card>
          );
        })}
      </div>

      {filteredItems.length === 0 && (
        <Card className="p-12 bg-muted/30 text-center">
          <Icon name="Package" size={64} className="mx-auto mb-4 text-muted-foreground" />
          <h3 className="font-heading text-xl font-bold mb-2">Предметы не найдены</h3>
          <p className="text-muted-foreground">Попробуйте изменить фильтры поиска</p>
        </Card>
      )}
    </div>
  );
};

export default InventorySection;
