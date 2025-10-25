import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import Icon from '@/components/ui/icon';

interface Achievement {
  id: number;
  title: string;
  description: string;
  icon: string;
  progress: number;
  maxProgress: number;
  unlocked: boolean;
  reward?: string;
}

const AchievementsSection = () => {
  const achievements: Achievement[] = [
    {
      id: 1,
      title: 'Первый шаг',
      description: 'Открой свой первый кейс',
      icon: '🎁',
      progress: 1,
      maxProgress: 1,
      unlocked: true,
      reward: '+100₽'
    },
    {
      id: 2,
      title: 'Коллекционер',
      description: 'Открой 100 кейсов',
      icon: '📦',
      progress: 127,
      maxProgress: 100,
      unlocked: true,
      reward: '+500₽'
    },
    {
      id: 3,
      title: 'Везунчик',
      description: 'Получи 10 легендарных предметов',
      icon: '🍀',
      progress: 15,
      maxProgress: 10,
      unlocked: true,
      reward: 'VIP на 7 дней'
    },
    {
      id: 4,
      title: 'Магнат',
      description: 'Открой кейсов на 10,000₽',
      icon: '💰',
      progress: 7650,
      maxProgress: 10000,
      unlocked: false
    },
    {
      id: 5,
      title: 'Снайпер',
      description: 'Получи 5 AWP подряд',
      icon: '🎯',
      progress: 2,
      maxProgress: 5,
      unlocked: false
    },
    {
      id: 6,
      title: 'Ночной игрок',
      description: 'Открой кейс в 3 часа ночи',
      icon: '🌙',
      progress: 0,
      maxProgress: 1,
      unlocked: false,
      reward: '+200₽'
    },
    {
      id: 7,
      title: 'Серия',
      description: 'Открой 10 кейсов за один день',
      icon: '🔥',
      progress: 3,
      maxProgress: 10,
      unlocked: false
    },
    {
      id: 8,
      title: 'Меценат',
      description: 'Пригласи 10 друзей',
      icon: '👥',
      progress: 4,
      maxProgress: 10,
      unlocked: false,
      reward: '+1000₽'
    },
    {
      id: 9,
      title: 'Легенда',
      description: 'Войди в топ-10 рейтинга',
      icon: '👑',
      progress: 0,
      maxProgress: 1,
      unlocked: false,
      reward: 'VIP на месяц'
    }
  ];

  return (
    <div className="max-w-6xl mx-auto space-y-8 animate-fade-in">
      <div className="text-center">
        <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">Достижения</h2>
        <p className="text-muted-foreground text-lg">
          Выполняй задания и получай награды
        </p>
      </div>

      <div className="grid gap-4">
        {achievements.map((achievement) => (
          <Card
            key={achievement.id}
            className={`p-6 transition-all hover-scale ${
              achievement.unlocked
                ? 'bg-gradient-to-r from-primary/20 to-transparent border-primary/50'
                : 'bg-card/50'
            }`}
          >
            <div className="flex items-start gap-4">
              <div
                className={`text-5xl ${
                  achievement.unlocked ? 'grayscale-0' : 'grayscale opacity-50'
                }`}
              >
                {achievement.icon}
              </div>
              <div className="flex-1">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h3 className="font-heading text-xl font-bold mb-1">
                      {achievement.title}
                    </h3>
                    <p className="text-muted-foreground">{achievement.description}</p>
                  </div>
                  {achievement.unlocked ? (
                    <Badge className="bg-primary">
                      <Icon name="Check" size={16} className="mr-1" />
                      Получено
                    </Badge>
                  ) : (
                    <Badge variant="outline">
                      {achievement.progress}/{achievement.maxProgress}
                    </Badge>
                  )}
                </div>
                <Progress
                  value={(achievement.progress / achievement.maxProgress) * 100}
                  className="h-2 mb-2"
                />
                {achievement.reward && (
                  <div className="flex items-center gap-2 text-sm">
                    <Icon name="Gift" size={16} className="text-primary" />
                    <span className="text-muted-foreground">
                      Награда: <span className="text-primary font-semibold">{achievement.reward}</span>
                    </span>
                  </div>
                )}
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default AchievementsSection;
