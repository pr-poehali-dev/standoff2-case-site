import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

interface HistoryItem {
  id: number;
  date: string;
  time: string;
  caseName: string;
  item: string;
  rarity: string;
  color: string;
  value: string;
}

const HistorySection = () => {
  const history: HistoryItem[] = [
    {
      id: 1,
      date: '25.10.2025',
      time: '14:32',
      caseName: 'Золотой кейс',
      item: 'AK-47 | Огненный змей',
      rarity: 'Легендарный',
      color: '#F97316',
      value: '2,450₽'
    },
    {
      id: 2,
      date: '25.10.2025',
      time: '14:15',
      caseName: 'Киберкейс',
      item: 'AWP | Азимов',
      rarity: 'Эпический',
      color: '#0EA5E9',
      value: '1,200₽'
    },
    {
      id: 3,
      date: '25.10.2025',
      time: '13:47',
      caseName: 'Огненный кейс',
      item: 'M4A4 | Неоновая революция',
      rarity: 'Редкий',
      color: '#EAB308',
      value: '850₽'
    },
    {
      id: 4,
      date: '24.10.2025',
      time: '22:19',
      caseName: 'Золотой кейс',
      item: 'Desert Eagle | Золотая лихорадка',
      rarity: 'Редкий',
      color: '#EAB308',
      value: '720₽'
    },
    {
      id: 5,
      date: '24.10.2025',
      time: '21:55',
      caseName: 'Киберкейс',
      item: 'Glock-18 | Ночной страж',
      rarity: 'Обычный',
      color: '#6B7280',
      value: '180₽'
    },
    {
      id: 6,
      date: '24.10.2025',
      time: '21:33',
      caseName: 'Огненный кейс',
      item: 'USP-S | Киберпанк',
      rarity: 'Эпический',
      color: '#0EA5E9',
      value: '980₽'
    },
    {
      id: 7,
      date: '23.10.2025',
      time: '19:08',
      caseName: 'Золотой кейс',
      item: 'P90 | Неон',
      rarity: 'Редкий',
      color: '#EAB308',
      value: '640₽'
    }
  ];

  const totalValue = history.reduce((sum, item) => {
    return sum + parseFloat(item.value.replace(/[₽,]/g, ''));
  }, 0);

  return (
    <div className="max-w-6xl mx-auto space-y-8 animate-fade-in">
      <div className="text-center">
        <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">История открытий</h2>
        <p className="text-muted-foreground text-lg">
          Все ваши выигрыши в одном месте
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-4 mb-8">
        <Card className="p-6 bg-gradient-to-br from-primary/20 to-transparent text-center">
          <Icon name="Package" size={32} className="mx-auto mb-2 text-primary" />
          <div className="text-3xl font-bold mb-1">{history.length}</div>
          <div className="text-sm text-muted-foreground">Всего открыто</div>
        </Card>
        <Card className="p-6 bg-gradient-to-br from-secondary/20 to-transparent text-center">
          <Icon name="TrendingUp" size={32} className="mx-auto mb-2 text-secondary" />
          <div className="text-3xl font-bold mb-1">{totalValue.toLocaleString()}₽</div>
          <div className="text-sm text-muted-foreground">Общая стоимость</div>
        </Card>
        <Card className="p-6 bg-gradient-to-br from-accent/20 to-transparent text-center">
          <Icon name="Star" size={32} className="mx-auto mb-2 text-accent" />
          <div className="text-3xl font-bold mb-1">
            {history.filter(h => h.rarity === 'Легендарный').length}
          </div>
          <div className="text-sm text-muted-foreground">Легендарных</div>
        </Card>
      </div>

      <Card className="p-6 bg-card/50 backdrop-blur">
        <div className="space-y-3">
          {history.map((item) => (
            <Card
              key={item.id}
              className="p-4 bg-muted/30 hover-scale transition-all"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="flex items-center gap-4 flex-1">
                  <div className="text-center min-w-[80px]">
                    <div className="text-sm font-semibold">{item.date}</div>
                    <div className="text-xs text-muted-foreground">{item.time}</div>
                  </div>
                  <div className="flex-1">
                    <div className="text-xs text-muted-foreground mb-1">{item.caseName}</div>
                    <div className="font-semibold" style={{ color: item.color }}>
                      {item.item}
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Badge
                    variant="outline"
                    style={{ borderColor: item.color, color: item.color }}
                  >
                    {item.rarity}
                  </Badge>
                  <div className="text-lg font-bold min-w-[100px] text-right">
                    {item.value}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Card>
    </div>
  );
};

export default HistorySection;
