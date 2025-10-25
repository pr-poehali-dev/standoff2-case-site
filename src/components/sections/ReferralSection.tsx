import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Icon from '@/components/ui/icon';
import { Badge } from '@/components/ui/badge';

interface Referral {
  username: string;
  joined: string;
  earned: number;
  status: 'active' | 'inactive';
}

const ReferralSection = () => {
  const referralCode = 'PROGAMER2025';
  const referralLink = `https://so2cases.ru/ref/${referralCode}`;
  const [copied, setCopied] = useState(false);

  const referrals: Referral[] = [
    { username: 'SniperKing', joined: '20.10.2025', earned: 450, status: 'active' },
    { username: 'NinjaWarrior', joined: '18.10.2025', earned: 320, status: 'active' },
    { username: 'TacticalMind', joined: '15.10.2025', earned: 180, status: 'inactive' },
    { username: 'ElitePlayer', joined: '12.10.2025', earned: 520, status: 'active' }
  ];

  const totalEarned = referrals.reduce((sum, ref) => sum + ref.earned, 0);
  const activeReferrals = referrals.filter(r => r.status === 'active').length;

  const handleCopy = () => {
    navigator.clipboard.writeText(referralLink);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="max-w-5xl mx-auto space-y-8 animate-fade-in">
      <div className="text-center">
        <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">Реферальная программа</h2>
        <p className="text-muted-foreground text-lg">
          Приглашай друзей и зарабатывай вместе
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-4">
        <Card className="p-6 bg-gradient-to-br from-primary/20 to-transparent text-center">
          <Icon name="Users" size={32} className="mx-auto mb-2 text-primary" />
          <div className="text-3xl font-bold mb-1">{referrals.length}</div>
          <div className="text-sm text-muted-foreground">Всего рефералов</div>
        </Card>
        <Card className="p-6 bg-gradient-to-br from-secondary/20 to-transparent text-center">
          <Icon name="UserCheck" size={32} className="mx-auto mb-2 text-secondary" />
          <div className="text-3xl font-bold mb-1">{activeReferrals}</div>
          <div className="text-sm text-muted-foreground">Активных</div>
        </Card>
        <Card className="p-6 bg-gradient-to-br from-accent/20 to-transparent text-center">
          <Icon name="Wallet" size={32} className="mx-auto mb-2 text-accent" />
          <div className="text-3xl font-bold mb-1">{totalEarned}₽</div>
          <div className="text-sm text-muted-foreground">Заработано</div>
        </Card>
      </div>

      <Card className="p-8 bg-gradient-to-br from-primary/10 via-card to-card">
        <h3 className="font-heading text-2xl font-bold mb-6 text-center">
          Ваша реферальная ссылка
        </h3>
        <div className="max-w-2xl mx-auto space-y-4">
          <div className="flex gap-2">
            <Input
              value={referralLink}
              readOnly
              className="text-center font-mono"
            />
            <Button
              onClick={handleCopy}
              className="bg-primary hover:bg-primary/90 min-w-[120px]"
            >
              {copied ? (
                <>
                  <Icon name="Check" className="mr-2" size={18} />
                  Скопировано
                </>
              ) : (
                <>
                  <Icon name="Copy" className="mr-2" size={18} />
                  Копировать
                </>
              )}
            </Button>
          </div>
          
          <div className="grid grid-cols-3 gap-3">
            <Button variant="outline" className="w-full">
              <Icon name="Send" className="mr-2" size={18} />
              Telegram
            </Button>
            <Button variant="outline" className="w-full">
              <Icon name="MessageCircle" className="mr-2" size={18} />
              VK
            </Button>
            <Button variant="outline" className="w-full">
              <Icon name="Share2" className="mr-2" size={18} />
              Поделиться
            </Button>
          </div>
        </div>
      </Card>

      <Card className="p-6 bg-card/50 backdrop-blur">
        <h3 className="font-heading text-2xl font-bold mb-6">Как это работает?</h3>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="text-center space-y-3">
            <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto">
              <Icon name="Link" size={32} className="text-primary" />
            </div>
            <h4 className="font-semibold">1. Пригласи друга</h4>
            <p className="text-sm text-muted-foreground">
              Отправь свою реферальную ссылку другу
            </p>
          </div>
          <div className="text-center space-y-3">
            <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto">
              <Icon name="UserPlus" size={32} className="text-primary" />
            </div>
            <h4 className="font-semibold">2. Друг регистрируется</h4>
            <p className="text-sm text-muted-foreground">
              Он переходит по ссылке и создает аккаунт
            </p>
          </div>
          <div className="text-center space-y-3">
            <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto">
              <Icon name="Coins" size={32} className="text-primary" />
            </div>
            <h4 className="font-semibold">3. Вы оба получаете бонус</h4>
            <p className="text-sm text-muted-foreground">
              10% от его покупок + 100₽ за регистрацию
            </p>
          </div>
        </div>
      </Card>

      <Card className="p-6 bg-card/50 backdrop-blur">
        <h3 className="font-heading text-2xl font-bold mb-4">Ваши рефералы</h3>
        <div className="space-y-3">
          {referrals.map((ref, index) => (
            <Card key={index} className="p-4 bg-muted/30">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center">
                    <Icon name="User" size={20} className="text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold">{ref.username}</div>
                    <div className="text-xs text-muted-foreground">
                      Присоединился: {ref.joined}
                    </div>
                  </div>
                </div>
                <div className="text-right flex items-center gap-3">
                  <div>
                    <div className="font-bold text-primary">+{ref.earned}₽</div>
                    <div className="text-xs text-muted-foreground">Заработано</div>
                  </div>
                  <Badge
                    variant={ref.status === 'active' ? 'default' : 'outline'}
                    className={ref.status === 'active' ? 'bg-primary' : ''}
                  >
                    {ref.status === 'active' ? 'Активен' : 'Неактивен'}
                  </Badge>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Card>
    </div>
  );
};

export default ReferralSection;
