import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const ProfileSection = () => {
  return (
    <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
      <div className="text-center">
        <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">Профиль игрока</h2>
      </div>
      <Card className="p-8 bg-card/50 backdrop-blur">
        <div className="flex items-center gap-6 mb-8">
          <div className="w-24 h-24 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center text-4xl">
            🎮
          </div>
          <div>
            <h3 className="font-heading text-3xl font-bold mb-2">ProGamer</h3>
            <Badge className="bg-primary">Уровень 25</Badge>
          </div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="p-6 bg-muted/50 text-center">
            <div className="text-3xl mb-2">📦</div>
            <div className="text-2xl font-bold mb-1">127</div>
            <div className="text-sm text-muted-foreground">Открыто кейсов</div>
          </Card>
          <Card className="p-6 bg-muted/50 text-center">
            <div className="text-3xl mb-2">💰</div>
            <div className="text-2xl font-bold mb-1">2,450₽</div>
            <div className="text-sm text-muted-foreground">Баланс</div>
          </Card>
          <Card className="p-6 bg-muted/50 text-center">
            <div className="text-3xl mb-2">🏆</div>
            <div className="text-2xl font-bold mb-1">15</div>
            <div className="text-sm text-muted-foreground">Легендарных</div>
          </Card>
        </div>

        <div className="mt-8 space-y-4">
          <h4 className="font-heading text-xl font-bold">Последние выигрыши</h4>
          <div className="space-y-3">
            {['AK-47 | Огненный змей', 'AWP | Азимов', 'M4A4 | Неоновая революция'].map((item, index) => (
              <div key={index} className="flex items-center justify-between p-4 bg-muted/30 rounded-lg">
                <span className="font-medium">{item}</span>
                <Badge variant="outline" className="border-primary text-primary">Редкий</Badge>
              </div>
            ))}
          </div>
        </div>
      </Card>
    </div>
  );
};

export default ProfileSection;
