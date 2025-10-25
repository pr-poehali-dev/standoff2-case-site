import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { Badge } from '@/components/ui/badge';

const VIPSection = () => {
  const vipBenefits = [
    { icon: 'Zap', title: 'Увеличенный шанс дропа', description: '+15% к шансу редких предметов' },
    { icon: 'Gift', title: 'Ежедневный бонус', description: 'Эксклюзивный кейс каждый день' },
    { icon: 'Crown', title: 'VIP значок', description: 'Особый статус в рейтинге' },
    { icon: 'Sparkles', title: 'Эксклюзивные кейсы', description: 'Доступ к премиум коллекции' },
    { icon: 'TrendingUp', title: 'Бонус к балансу', description: '+10% при пополнении счета' },
    { icon: 'MessageCircle', title: 'Приоритетная поддержка', description: 'Быстрые ответы 24/7' }
  ];

  const vipPlans = [
    {
      duration: '7 дней',
      price: '299₽',
      originalPrice: '399₽',
      discount: '-25%',
      popular: false
    },
    {
      duration: '30 дней',
      price: '899₽',
      originalPrice: '1,199₽',
      discount: '-25%',
      popular: true
    },
    {
      duration: '90 дней',
      price: '2,199₽',
      originalPrice: '3,599₽',
      discount: '-39%',
      popular: false
    }
  ];

  return (
    <div className="max-w-6xl mx-auto space-y-8 animate-fade-in">
      <div className="text-center">
        <Badge className="bg-primary mb-4">
          <Icon name="Crown" className="mr-1" size={16} />
          PREMIUM
        </Badge>
        <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">
          VIP статус
        </h2>
        <p className="text-muted-foreground text-lg">
          Получи больше возможностей и эксклюзивные привилегии
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {vipBenefits.map((benefit, index) => (
          <Card
            key={index}
            className="p-6 bg-gradient-to-br from-primary/10 to-transparent hover-scale transition-all"
          >
            <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mb-4">
              <Icon name={benefit.icon as any} size={24} className="text-primary" />
            </div>
            <h3 className="font-heading text-lg font-bold mb-2">{benefit.title}</h3>
            <p className="text-sm text-muted-foreground">{benefit.description}</p>
          </Card>
        ))}
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {vipPlans.map((plan, index) => (
          <Card
            key={index}
            className={`p-8 transition-all hover-scale relative ${
              plan.popular
                ? 'bg-gradient-to-br from-primary/20 via-card to-card border-primary shadow-lg scale-105'
                : 'bg-card/50'
            }`}
          >
            {plan.popular && (
              <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary">
                Популярный
              </Badge>
            )}
            <div className="text-center mb-6">
              <Icon name="Crown" size={48} className={`mx-auto mb-4 ${plan.popular ? 'text-primary' : 'text-muted-foreground'}`} />
              <h3 className="font-heading text-2xl font-bold mb-2">{plan.duration}</h3>
              <div className="space-y-1">
                <div className="text-sm text-muted-foreground line-through">
                  {plan.originalPrice}
                </div>
                <div className="text-4xl font-bold text-primary">{plan.price}</div>
                <Badge variant="outline" className="border-primary text-primary">
                  {plan.discount}
                </Badge>
              </div>
            </div>
            <Button
              className={`w-full ${
                plan.popular
                  ? 'bg-primary hover:bg-primary/90'
                  : 'bg-muted hover:bg-muted/80'
              }`}
              size="lg"
            >
              Купить VIP
            </Button>
          </Card>
        ))}
      </div>

      <Card className="p-8 bg-gradient-to-r from-primary/20 to-transparent border-primary/50">
        <div className="flex flex-col md:flex-row items-center gap-6">
          <Icon name="Gift" size={64} className="text-primary" />
          <div className="flex-1 text-center md:text-left">
            <h3 className="font-heading text-2xl font-bold mb-2">
              Первая неделя со скидкой 50%!
            </h3>
            <p className="text-muted-foreground">
              Попробуй все преимущества VIP статуса всего за 149₽
            </p>
          </div>
          <Button size="lg" className="bg-primary hover:bg-primary/90 min-w-[200px]">
            <Icon name="Zap" className="mr-2" size={20} />
            Попробовать
          </Button>
        </div>
      </Card>

      <Card className="p-6 bg-muted/50">
        <h4 className="font-semibold mb-3 flex items-center gap-2">
          <Icon name="HelpCircle" size={20} className="text-primary" />
          Часто задаваемые вопросы
        </h4>
        <div className="space-y-3 text-sm">
          <div>
            <p className="font-semibold mb-1">Можно ли отменить подписку?</p>
            <p className="text-muted-foreground">
              Да, вы можете отменить автопродление в любой момент в настройках профиля.
            </p>
          </div>
          <div>
            <p className="font-semibold mb-1">Сохраняются ли выигранные предметы после окончания VIP?</p>
            <p className="text-muted-foreground">
              Конечно! Все предметы, выигранные во время VIP статуса, остаются в вашем инвентаре навсегда.
            </p>
          </div>
          <div>
            <p className="font-semibold mb-1">Можно ли продлить VIP досрочно?</p>
            <p className="text-muted-foreground">
              Да, при досрочном продлении оставшееся время суммируется с новым периодом.
            </p>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default VIPSection;
