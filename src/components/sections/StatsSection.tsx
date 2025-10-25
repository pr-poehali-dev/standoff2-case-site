import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const StatsSection = () => {
  const weeklyData = [
    { day: 'Пн', cases: 12, value: 3200 },
    { day: 'Вт', cases: 8, value: 2100 },
    { day: 'Ср', cases: 15, value: 4800 },
    { day: 'Чт', cases: 20, value: 6500 },
    { day: 'Пт', cases: 25, value: 8200 },
    { day: 'Сб', cases: 30, value: 9800 },
    { day: 'Вс', cases: 17, value: 5400 }
  ];

  const rarityStats = [
    { rarity: 'Легендарный', count: 15, color: '#F97316', percentage: 11.8 },
    { rarity: 'Эпический', count: 28, color: '#0EA5E9', percentage: 22.0 },
    { rarity: 'Редкий', count: 45, color: '#EAB308', percentage: 35.4 },
    { rarity: 'Обычный', count: 39, color: '#6B7280', percentage: 30.8 }
  ];

  const maxCases = Math.max(...weeklyData.map(d => d.cases));
  const totalCases = weeklyData.reduce((sum, d) => sum + d.cases, 0);
  const totalValue = weeklyData.reduce((sum, d) => sum + d.value, 0);

  return (
    <div className="max-w-6xl mx-auto space-y-8 animate-fade-in">
      <div className="text-center">
        <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">Статистика</h2>
        <p className="text-muted-foreground text-lg">Анализ ваших открытий</p>
      </div>

      <div className="grid md:grid-cols-3 gap-4">
        <Card className="p-6 bg-gradient-to-br from-primary/20 to-transparent text-center">
          <Icon name="TrendingUp" size={32} className="mx-auto mb-2 text-primary" />
          <div className="text-3xl font-bold mb-1">{totalCases}</div>
          <div className="text-sm text-muted-foreground">Открыто за неделю</div>
        </Card>
        <Card className="p-6 bg-gradient-to-br from-secondary/20 to-transparent text-center">
          <Icon name="DollarSign" size={32} className="mx-auto mb-2 text-secondary" />
          <div className="text-3xl font-bold mb-1">{totalValue.toLocaleString()}₽</div>
          <div className="text-sm text-muted-foreground">Общая стоимость</div>
        </Card>
        <Card className="p-6 bg-gradient-to-br from-accent/20 to-transparent text-center">
          <Icon name="Target" size={32} className="mx-auto mb-2 text-accent" />
          <div className="text-3xl font-bold mb-1">{Math.round(totalValue / totalCases)}₽</div>
          <div className="text-sm text-muted-foreground">Средняя стоимость</div>
        </Card>
      </div>

      <Card className="p-8 bg-card/50 backdrop-blur">
        <h3 className="font-heading text-2xl font-bold mb-6">График открытий</h3>
        <div className="space-y-4">
          {weeklyData.map((day) => (
            <div key={day.day}>
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-4 min-w-[120px]">
                  <span className="font-semibold">{day.day}</span>
                  <span className="text-sm text-muted-foreground">{day.cases} кейсов</span>
                </div>
                <span className="text-primary font-semibold">{day.value.toLocaleString()}₽</span>
              </div>
              <div className="w-full bg-muted rounded-full h-3 overflow-hidden">
                <div
                  className="bg-gradient-to-r from-primary to-secondary h-full rounded-full transition-all duration-500"
                  style={{ width: `${(day.cases / maxCases) * 100}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </Card>

      <Card className="p-8 bg-card/50 backdrop-blur">
        <h3 className="font-heading text-2xl font-bold mb-6">Статистика по редкости</h3>
        <div className="space-y-6">
          {rarityStats.map((stat) => (
            <div key={stat.rarity}>
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div
                    className="w-4 h-4 rounded-full"
                    style={{ backgroundColor: stat.color }}
                  />
                  <span className="font-semibold">{stat.rarity}</span>
                </div>
                <div className="flex items-center gap-6">
                  <span className="text-muted-foreground">{stat.count} предметов</span>
                  <span className="font-bold min-w-[60px] text-right" style={{ color: stat.color }}>
                    {stat.percentage}%
                  </span>
                </div>
              </div>
              <div className="w-full bg-muted rounded-full h-4 overflow-hidden">
                <div
                  className="h-full rounded-full transition-all duration-500"
                  style={{
                    width: `${stat.percentage}%`,
                    backgroundColor: stat.color
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </Card>

      <Card className="p-6 bg-gradient-to-r from-primary/20 to-transparent border-primary/50">
        <div className="flex items-start gap-4">
          <Icon name="Lightbulb" size={32} className="text-primary flex-shrink-0" />
          <div>
            <h4 className="font-semibold mb-2">Совет дня</h4>
            <p className="text-sm text-muted-foreground">
              Ваши лучшие результаты в пятницу и субботу! Открывайте больше кейсов в эти дни для максимального профита.
            </p>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default StatsSection;
