import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Icon from '@/components/ui/icon';
import { Badge } from '@/components/ui/badge';

interface PromoCode {
  code: string;
  reward: string;
  description: string;
  used: boolean;
}

const PromoSection = () => {
  const [promoInput, setPromoInput] = useState('');
  const [activating, setActivating] = useState(false);
  
  const promoCodes: PromoCode[] = [
    {
      code: 'WELCOME2025',
      reward: '+500₽',
      description: 'Бонус для новых игроков',
      used: true
    },
    {
      code: 'LUCKY777',
      reward: 'Бесплатный кейс',
      description: 'Промокод на удачу',
      used: false
    },
    {
      code: 'VIP30',
      reward: 'VIP на 3 дня',
      description: 'Попробуй VIP бесплатно',
      used: false
    }
  ];

  const handleActivate = () => {
    if (!promoInput.trim()) return;
    
    setActivating(true);
    setTimeout(() => {
      const promo = promoCodes.find(p => p.code.toLowerCase() === promoInput.toLowerCase());
      
      if (promo && !promo.used) {
        alert(`🎉 Промокод активирован! Вы получили: ${promo.reward}`);
        setPromoInput('');
      } else if (promo && promo.used) {
        alert('⚠️ Этот промокод уже использован');
      } else {
        alert('❌ Промокод не найден или истек');
      }
      setActivating(false);
    }, 1000);
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
      <div className="text-center">
        <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">Промокоды</h2>
        <p className="text-muted-foreground text-lg">
          Активируй промокоды и получай бонусы
        </p>
      </div>

      <Card className="p-8 bg-gradient-to-br from-primary/20 via-card to-card">
        <div className="max-w-md mx-auto space-y-4">
          <div className="flex gap-2">
            <Input
              placeholder="Введите промокод..."
              value={promoInput}
              onChange={(e) => setPromoInput(e.target.value.toUpperCase())}
              className="text-lg"
              onKeyPress={(e) => e.key === 'Enter' && handleActivate()}
            />
            <Button
              onClick={handleActivate}
              disabled={activating || !promoInput.trim()}
              className="bg-primary hover:bg-primary/90 px-8"
              size="lg"
            >
              {activating ? (
                <Icon name="Loader2" className="animate-spin" size={20} />
              ) : (
                <>
                  <Icon name="Check" className="mr-2" size={20} />
                  Активировать
                </>
              )}
            </Button>
          </div>
          <p className="text-sm text-muted-foreground text-center">
            Следи за нашими социальными сетями, чтобы не пропустить новые промокоды
          </p>
        </div>
      </Card>

      <div className="space-y-4">
        <h3 className="font-heading text-2xl font-bold">Доступные промокоды</h3>
        <div className="grid md:grid-cols-2 gap-4">
          {promoCodes.map((promo, index) => (
            <Card
              key={index}
              className={`p-6 transition-all ${
                promo.used
                  ? 'bg-muted/50 opacity-60'
                  : 'bg-card/50 hover-scale'
              }`}
            >
              <div className="flex items-start justify-between mb-3">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <code className="text-lg font-bold bg-muted px-3 py-1 rounded">
                      {promo.code}
                    </code>
                    {promo.used && (
                      <Badge variant="outline" className="border-muted-foreground">
                        Использован
                      </Badge>
                    )}
                  </div>
                  <p className="text-sm text-muted-foreground">{promo.description}</p>
                </div>
                <Icon name="Gift" size={32} className="text-primary" />
              </div>
              <div className="flex items-center gap-2 text-primary font-semibold">
                <Icon name="Star" size={18} />
                {promo.reward}
              </div>
            </Card>
          ))}
        </div>
      </div>

      <Card className="p-6 bg-muted/50">
        <h4 className="font-semibold mb-3 flex items-center gap-2">
          <Icon name="Info" size={20} className="text-primary" />
          Где найти промокоды?
        </h4>
        <div className="grid md:grid-cols-3 gap-4 text-center">
          <div className="space-y-2">
            <div className="text-3xl">📱</div>
            <div className="font-semibold">Telegram</div>
            <p className="text-sm text-muted-foreground">Подпишись на наш канал</p>
          </div>
          <div className="space-y-2">
            <div className="text-3xl">🎮</div>
            <div className="font-semibold">Discord</div>
            <p className="text-sm text-muted-foreground">Общайся с игроками</p>
          </div>
          <div className="space-y-2">
            <div className="text-3xl">📺</div>
            <div className="font-semibold">YouTube</div>
            <p className="text-sm text-muted-foreground">Смотри стримы</p>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default PromoSection;
