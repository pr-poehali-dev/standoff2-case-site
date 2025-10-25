import { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const DailyBonusSection = () => {
  const [timeLeft, setTimeLeft] = useState({ hours: 0, minutes: 0, seconds: 0 });
  const [canClaim, setCanClaim] = useState(false);

  useEffect(() => {
    const lastClaim = localStorage.getItem('lastDailyClaim');
    const now = Date.now();
    
    if (!lastClaim || now - parseInt(lastClaim) > 24 * 60 * 60 * 1000) {
      setCanClaim(true);
    } else {
      const nextClaimTime = parseInt(lastClaim) + 24 * 60 * 60 * 1000;
      
      const updateTimer = () => {
        const diff = nextClaimTime - Date.now();
        if (diff <= 0) {
          setCanClaim(true);
        } else {
          const hours = Math.floor(diff / (1000 * 60 * 60));
          const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
          const seconds = Math.floor((diff % (1000 * 60)) / 1000);
          setTimeLeft({ hours, minutes, seconds });
        }
      };
      
      updateTimer();
      const interval = setInterval(updateTimer, 1000);
      return () => clearInterval(interval);
    }
  }, []);

  const handleClaim = () => {
    localStorage.setItem('lastDailyClaim', Date.now().toString());
    setCanClaim(false);
    alert('🎁 Вы получили бесплатный кейс!');
    window.location.reload();
  };

  const dailyRewards = [
    { day: 1, reward: '🎁 Бесплатный кейс', claimed: true },
    { day: 2, reward: '💰 +100₽', claimed: true },
    { day: 3, reward: '🎁 Бесплатный кейс', claimed: true },
    { day: 4, reward: '💎 +200₽', claimed: false },
    { day: 5, reward: '🎁 Премиум кейс', claimed: false },
    { day: 6, reward: '💰 +300₽', claimed: false },
    { day: 7, reward: '👑 VIP на день', claimed: false }
  ];

  return (
    <div className="max-w-5xl mx-auto space-y-8 animate-fade-in">
      <div className="text-center">
        <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">Ежедневные награды</h2>
        <p className="text-muted-foreground text-lg">
          Заходи каждый день и получай бонусы
        </p>
      </div>

      <Card className="p-8 bg-gradient-to-br from-primary/20 via-card to-card">
        <div className="text-center mb-8">
          {canClaim ? (
            <>
              <Icon name="Gift" size={64} className="mx-auto mb-4 text-primary" />
              <h3 className="font-heading text-3xl font-bold mb-4">
                Ваша награда готова!
              </h3>
              <Button
                size="lg"
                onClick={handleClaim}
                className="bg-primary hover:bg-primary/90 text-xl px-12 py-6"
              >
                <Icon name="Gift" className="mr-2" size={24} />
                Забрать награду
              </Button>
            </>
          ) : (
            <>
              <Icon name="Clock" size={64} className="mx-auto mb-4 text-muted-foreground" />
              <h3 className="font-heading text-3xl font-bold mb-4">
                Следующая награда через:
              </h3>
              <div className="flex justify-center gap-4 mb-6">
                <Card className="p-4 bg-muted min-w-[80px]">
                  <div className="text-3xl font-bold">{timeLeft.hours.toString().padStart(2, '0')}</div>
                  <div className="text-xs text-muted-foreground">Часов</div>
                </Card>
                <Card className="p-4 bg-muted min-w-[80px]">
                  <div className="text-3xl font-bold">{timeLeft.minutes.toString().padStart(2, '0')}</div>
                  <div className="text-xs text-muted-foreground">Минут</div>
                </Card>
                <Card className="p-4 bg-muted min-w-[80px]">
                  <div className="text-3xl font-bold">{timeLeft.seconds.toString().padStart(2, '0')}</div>
                  <div className="text-xs text-muted-foreground">Секунд</div>
                </Card>
              </div>
            </>
          )}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-3">
          {dailyRewards.map((item) => (
            <Card
              key={item.day}
              className={`p-4 text-center transition-all ${
                item.claimed
                  ? 'bg-primary/20 border-primary/50'
                  : 'bg-muted/50 hover-scale'
              }`}
            >
              <div className="text-sm font-semibold text-muted-foreground mb-2">
                День {item.day}
              </div>
              <div className="text-2xl mb-2">{item.reward.split(' ')[0]}</div>
              <div className="text-xs font-medium">
                {item.reward.split(' ').slice(1).join(' ')}
              </div>
              {item.claimed && (
                <Icon name="Check" size={16} className="mx-auto mt-2 text-primary" />
              )}
            </Card>
          ))}
        </div>
      </Card>
    </div>
  );
};

export default DailyBonusSection;
