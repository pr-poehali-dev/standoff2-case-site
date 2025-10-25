import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

interface LiveDrop {
  id: number;
  username: string;
  item: string;
  rarity: string;
  color: string;
  timestamp: string;
}

interface HomeSectionProps {
  setActiveSection: (section: string) => void;
  liveDrops: LiveDrop[];
  totalOpened: number;
  onlineUsers: number;
}

const HomeSection = ({ setActiveSection, liveDrops, totalOpened, onlineUsers }: HomeSectionProps) => {
  return (
    <div className="space-y-12 animate-fade-in">
      <div className="relative h-[500px] rounded-3xl overflow-hidden bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 flex items-center justify-center">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE2YzAgMi4yMS0xLjc5IDQtNCA0cy00LTEuNzktNC00IDEuNzktNCA0LTQgNCAxLjc5IDQgNHptMCAxNmMwIDIuMjEtMS43OSA0LTQgNHMtNC0xLjc5LTQtNCAxLjc5LTQgNC00IDQgMS43OSA0IDR6bTE2IDBjMCAyLjIxLTEuNzkgNC00IDRzLTQtMS43OS00LTQgMS43OS00IDQtNCA0IDEuNzkgNCA0em0wIDE2YzAgMi4yMS0xLjc5IDQtNCA0cy00LTEuNzktNC00IDEuNzktNCA0LTQgNCAxLjc5IDQgNHoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-30"></div>
        <div className="relative z-10 text-center px-6 space-y-6">
          <h1 className="font-heading text-6xl md:text-7xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent animate-slide-up">
            STANDOFF 2 КЕЙСЫ
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
            Открывай легендарные кейсы и получай эксклюзивное оружие
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-lg px-8 py-6 glow-effect hover-scale font-heading"
              onClick={() => setActiveSection('cases')}
            >
              <Icon name="Package" className="mr-2" size={24} />
              Открыть кейс
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="text-lg px-8 py-6 border-2 hover-scale font-heading"
              onClick={() => setActiveSection('rules')}
            >
              <Icon name="Shield" className="mr-2" size={24} />
              Правила
            </Button>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        <Card className="p-6 bg-card/50 backdrop-blur border-primary/30 hover-scale cursor-pointer">
          <div className="text-center space-y-4">
            <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto">
              <Icon name="Zap" size={32} className="text-primary" />
            </div>
            <h3 className="font-heading text-2xl font-bold">Быстро</h3>
            <p className="text-muted-foreground">Мгновенное открытие кейсов без задержек</p>
          </div>
        </Card>

        <Card className="p-6 bg-card/50 backdrop-blur border-secondary/30 hover-scale cursor-pointer">
          <div className="text-center space-y-4">
            <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mx-auto">
              <Icon name="Lock" size={32} className="text-secondary" />
            </div>
            <h3 className="font-heading text-2xl font-bold">Безопасно</h3>
            <p className="text-muted-foreground">Защищенные платежи и честная система</p>
          </div>
        </Card>

        <Card className="p-6 bg-card/50 backdrop-blur border-accent/30 hover-scale cursor-pointer">
          <div className="text-center space-y-4">
            <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto">
              <Icon name="Trophy" size={32} className="text-accent" />
            </div>
            <h3 className="font-heading text-2xl font-bold">Выгодно</h3>
            <p className="text-muted-foreground">Лучшие шансы на редкие предметы</p>
          </div>
        </Card>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <Card className="p-6 bg-card/50 backdrop-blur border-primary/30">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center">
              <Icon name="Activity" size={20} className="text-primary" />
            </div>
            <h3 className="font-heading text-2xl font-bold">Последние открытия</h3>
            <div className="ml-auto flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm text-muted-foreground">Live</span>
            </div>
          </div>
          <div className="space-y-3">
            {liveDrops.map((drop, index) => (
              <div 
                key={drop.id}
                className="flex items-center gap-4 p-4 bg-muted/30 rounded-lg transition-all animate-slide-up"
                style={{ 
                  animationDelay: `${index * 0.1}s`,
                  borderLeft: `3px solid ${drop.color}`
                }}
              >
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-heading font-bold">{drop.username}</span>
                    <span className="text-xs text-muted-foreground">{drop.timestamp}</span>
                  </div>
                  <p className="text-sm">{drop.item}</p>
                </div>
                <Badge style={{ backgroundColor: drop.color, color: 'white' }}>
                  {drop.rarity}
                </Badge>
              </div>
            ))}
          </div>
        </Card>

        <Card className="p-6 bg-card/50 backdrop-blur border-secondary/30">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-secondary/20 rounded-full flex items-center justify-center">
              <Icon name="TrendingUp" size={20} className="text-secondary" />
            </div>
            <h3 className="font-heading text-2xl font-bold">Статистика</h3>
          </div>
          <div className="space-y-6">
            <div className="p-6 bg-gradient-to-br from-primary/20 to-transparent rounded-xl border border-primary/30">
              <div className="text-center">
                <div className="text-4xl font-bold font-heading mb-2 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  {totalOpened.toLocaleString()}
                </div>
                <div className="text-sm text-muted-foreground">Всего открыто кейсов</div>
              </div>
            </div>
            
            <div className="p-6 bg-gradient-to-br from-secondary/20 to-transparent rounded-xl border border-secondary/30">
              <div className="text-center">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <div className="text-4xl font-bold font-heading">{onlineUsers}</div>
                </div>
                <div className="text-sm text-muted-foreground">Игроков онлайн</div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-muted/30 rounded-lg text-center">
                <div className="text-2xl font-bold mb-1">1,247</div>
                <div className="text-xs text-muted-foreground">За сегодня</div>
              </div>
              <div className="p-4 bg-muted/30 rounded-lg text-center">
                <div className="text-2xl font-bold mb-1">8.5%</div>
                <div className="text-xs text-muted-foreground">Редких дропов</div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default HomeSection;
