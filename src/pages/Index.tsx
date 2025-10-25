import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import CaseOpening from '@/components/CaseOpening';
import HomeSection from '@/components/sections/HomeSection';
import CasesSection from '@/components/sections/CasesSection';
import RulesSection from '@/components/sections/RulesSection';
import FaqSection from '@/components/sections/FaqSection';
import ProfileSection from '@/components/sections/ProfileSection';
import LeaderboardSection from '@/components/sections/LeaderboardSection';
import AchievementsSection from '@/components/sections/AchievementsSection';
import DailyBonusSection from '@/components/sections/DailyBonusSection';
import HistorySection from '@/components/sections/HistorySection';
import ContractSection from '@/components/sections/ContractSection';
import PromoSection from '@/components/sections/PromoSection';
import ReferralSection from '@/components/sections/ReferralSection';
import VIPSection from '@/components/sections/VIPSection';
import InventorySection from '@/components/sections/InventorySection';
import StatsSection from '@/components/sections/StatsSection';
import ThemeToggle from '@/components/ThemeToggle';
import ParticlesBackground from '@/components/ParticlesBackground';

interface LiveDrop {
  id: number;
  username: string;
  item: string;
  rarity: string;
  color: string;
  timestamp: string;
}

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [openingCase, setOpeningCase] = useState<any>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [liveDrops, setLiveDrops] = useState<LiveDrop[]>([]);
  const [totalOpened, setTotalOpened] = useState(12847);
  const [onlineUsers, setOnlineUsers] = useState(234);

  useEffect(() => {
    const weapons = [
      { name: 'AK-47 | Огненный змей', rarity: 'Легендарный', color: '#F97316' },
      { name: 'AWP | Азимов', rarity: 'Эпический', color: '#0EA5E9' },
      { name: 'Desert Eagle | Золотая лихорадка', rarity: 'Редкий', color: '#EAB308' },
      { name: 'M4A4 | Городской камуфляж', rarity: 'Обычный', color: '#6B7280' },
      { name: 'USP-S | Киберпанк', rarity: 'Эпический', color: '#0EA5E9' },
      { name: 'Glock-18 | Ночной страж', rarity: 'Обычный', color: '#6B7280' },
      { name: 'Dragonuv | Красный дракон', rarity: 'Легендарный', color: '#F97316' },
      { name: 'P90 | Неон', rarity: 'Редкий', color: '#EAB308' },
    ];

    const usernames = ['ProGamer', 'SniperKing', 'NinjaWarrior', 'TacticalMind', 'ElitePlayer', 'Striker', 'Shadow', 'Phoenix', 'Viper', 'Ghost'];

    const generateDrop = () => {
      const weapon = weapons[Math.floor(Math.random() * weapons.length)];
      const username = usernames[Math.floor(Math.random() * usernames.length)];
      const now = new Date();
      
      return {
        id: Date.now(),
        username,
        item: weapon.name,
        rarity: weapon.rarity,
        color: weapon.color,
        timestamp: now.toLocaleTimeString('ru-RU', { hour: '2-digit', minute: '2-digit', second: '2-digit' })
      };
    };

    const interval = setInterval(() => {
      setLiveDrops(prev => {
        const newDrop = generateDrop();
        const updated = [newDrop, ...prev].slice(0, 5);
        return updated;
      });
      setTotalOpened(prev => prev + 1);
      setOnlineUsers(prev => Math.max(200, prev + Math.floor(Math.random() * 10) - 4));
    }, 3000);

    setLiveDrops([generateDrop(), generateDrop(), generateDrop(), generateDrop(), generateDrop()]);

    return () => clearInterval(interval);
  }, []);

  const cases = [
    {
      id: 1,
      name: 'Золотой кейс',
      price: '499₽',
      rarity: 'Легендарный',
      image: 'https://cdn.poehali.dev/projects/cfbd3b84-3243-4df8-aa27-f98b7c681d34/files/7668567e-8edd-4664-b06c-49a3825958ec.jpg'
    },
    {
      id: 2,
      name: 'Киберкейс',
      price: '299₽',
      rarity: 'Эпический',
      image: 'https://cdn.poehali.dev/projects/cfbd3b84-3243-4df8-aa27-f98b7c681d34/files/0a19fe45-35a0-4661-9877-d0ea262721c3.jpg'
    },
    {
      id: 3,
      name: 'Огненный кейс',
      price: '399₽',
      rarity: 'Редкий',
      image: 'https://cdn.poehali.dev/projects/cfbd3b84-3243-4df8-aa27-f98b7c681d34/files/e4bee628-c5a9-491c-b048-9e7c4d8b6c3d.jpg'
    }
  ];

  const leaderboard = [
    { position: 1, username: 'ProGamer', wins: 1250, avatar: '🏆' },
    { position: 2, username: 'SniperKing', wins: 1180, avatar: '🎯' },
    { position: 3, username: 'NinjaWarrior', wins: 1050, avatar: '⚔️' },
    { position: 4, username: 'TacticalMind', wins: 980, avatar: '🎮' },
    { position: 5, username: 'ElitePlayer', wins: 920, avatar: '💎' }
  ];

  const faqItems = [
    {
      question: 'Как открыть кейс?',
      answer: 'Выберите понравившийся кейс в каталоге, нажмите "Открыть" и оплатите. Вы получите случайный предмет из содержимого кейса.'
    },
    {
      question: 'Можно ли вернуть деньги?',
      answer: 'Возврат средств возможен только в случае технической ошибки при открытии кейса в течение 24 часов.'
    },
    {
      question: 'Как вывести выигрыш?',
      answer: 'Перейдите в раздел "Профиль", выберите предметы для вывода и укажите способ получения.'
    },
    {
      question: 'Какова вероятность выигрыша?',
      answer: 'Каждый кейс имеет свою таблицу вероятностей, которую можно посмотреть перед открытием.'
    }
  ];

  const renderSection = () => {
    switch (activeSection) {
      case 'home':
        return <HomeSection 
          setActiveSection={setActiveSection} 
          liveDrops={liveDrops} 
          totalOpened={totalOpened} 
          onlineUsers={onlineUsers} 
        />;
      case 'cases':
        return <CasesSection cases={cases} setOpeningCase={setOpeningCase} />;
      case 'rules':
        return <RulesSection />;
      case 'faq':
        return <FaqSection faqItems={faqItems} />;
      case 'profile':
        return <ProfileSection />;
      case 'leaderboard':
        return <LeaderboardSection leaderboard={leaderboard} />;
      case 'achievements':
        return <AchievementsSection />;
      case 'daily':
        return <DailyBonusSection />;
      case 'history':
        return <HistorySection />;
      case 'contract':
        return <ContractSection />;
      case 'promo':
        return <PromoSection />;
      case 'referral':
        return <ReferralSection />;
      case 'vip':
        return <VIPSection />;
      case 'inventory':
        return <InventorySection />;
      case 'stats':
        return <StatsSection />;
      default:
        return null;
    }
  };

  return (
    <>
      <ParticlesBackground />
      
      {openingCase && (
        <CaseOpening 
          caseData={openingCase} 
          onClose={() => setOpeningCase(null)} 
        />
      )}
      
    <div className="min-h-screen bg-background relative z-10">
      <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Icon name="Box" size={32} className="text-primary" />
              <span className="font-heading text-2xl font-bold">SO2 CASES</span>
            </div>
            
            <div className="hidden lg:flex items-center gap-1">
              {[
                { id: 'home', label: 'Главная', icon: 'Home' },
                { id: 'cases', label: 'Кейсы', icon: 'Package' },
                { id: 'inventory', label: 'Инвентарь', icon: 'Backpack' },
                { id: 'contract', label: 'Контракт', icon: 'Repeat' },
                { id: 'achievements', label: 'Достижения', icon: 'Award' },
                { id: 'stats', label: 'Статистика', icon: 'BarChart3' },
                { id: 'leaderboard', label: 'Рейтинг', icon: 'Trophy' },
                { id: 'vip', label: 'VIP', icon: 'Crown' }
              ].map((item) => (
                <Button
                  key={item.id}
                  variant={activeSection === item.id ? 'default' : 'ghost'}
                  onClick={() => setActiveSection(item.id)}
                  size="sm"
                  className={activeSection === item.id ? 'bg-primary hover:bg-primary/90' : ''}
                >
                  <Icon name={item.icon as any} className="mr-1" size={16} />
                  {item.label}
                </Button>
              ))}
            </div>

            <div className="hidden md:flex items-center gap-2">
              <ThemeToggle />
              <Button
                variant="outline"
                onClick={() => setActiveSection('daily')}
                className="relative"
              >
                <Icon name="Gift" className="mr-2" size={18} />
                Бонус
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-primary rounded-full animate-pulse" />
              </Button>
            </div>

            <div className="md:hidden">
              <Button 
                variant="outline" 
                size="icon"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                <Icon name={mobileMenuOpen ? "X" : "Menu"} size={24} />
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 top-[73px] z-40 bg-background/95 backdrop-blur-lg animate-fade-in overflow-y-auto">
          <div className="container mx-auto px-6 py-8 space-y-2">
            {[
              { id: 'home', label: 'Главная', icon: 'Home' },
              { id: 'cases', label: 'Кейсы', icon: 'Package' },
              { id: 'inventory', label: 'Инвентарь', icon: 'Backpack' },
              { id: 'contract', label: 'Контракт', icon: 'Repeat' },
              { id: 'daily', label: 'Ежедневный бонус', icon: 'Gift' },
              { id: 'achievements', label: 'Достижения', icon: 'Award' },
              { id: 'history', label: 'История', icon: 'Clock' },
              { id: 'stats', label: 'Статистика', icon: 'BarChart3' },
              { id: 'leaderboard', label: 'Рейтинг', icon: 'Trophy' },
              { id: 'vip', label: 'VIP статус', icon: 'Crown' },
              { id: 'promo', label: 'Промокоды', icon: 'Ticket' },
              { id: 'referral', label: 'Рефералы', icon: 'Users' },
              { id: 'profile', label: 'Профиль', icon: 'User' },
              { id: 'rules', label: 'Правила', icon: 'Shield' },
              { id: 'faq', label: 'FAQ', icon: 'HelpCircle' }
            ].map((item) => (
              <Button
                key={item.id}
                variant={activeSection === item.id ? 'default' : 'ghost'}
                onClick={() => {
                  setActiveSection(item.id);
                  setMobileMenuOpen(false);
                }}
                className={`w-full justify-start text-lg py-6 ${
                  activeSection === item.id ? 'bg-primary hover:bg-primary/90' : ''
                }`}
              >
                <Icon name={item.icon as any} className="mr-3" size={24} />
                {item.label}
              </Button>
            ))}
          </div>
        </div>
      )}

      <main className="container mx-auto px-6 py-12">
        {renderSection()}
      </main>

      <footer className="bg-muted/50 mt-20 py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8 text-center md:text-left">
            <div>
              <h3 className="font-heading text-xl font-bold mb-4">SO2 CASES</h3>
              <p className="text-muted-foreground">Лучший сервис для открытия кейсов Standoff 2</p>
            </div>
            <div>
              <h3 className="font-heading text-xl font-bold mb-4">Ссылки</h3>
              <div className="space-y-2">
                <p className="text-muted-foreground cursor-pointer hover:text-primary transition-colors">Поддержка</p>
                <p className="text-muted-foreground cursor-pointer hover:text-primary transition-colors">Условия использования</p>
                <p className="text-muted-foreground cursor-pointer hover:text-primary transition-colors">Политика конфиденциальности</p>
              </div>
            </div>
            <div>
              <h3 className="font-heading text-xl font-bold mb-4">Контакты</h3>
              <p className="text-muted-foreground">support@so2cases.ru</p>
            </div>
          </div>
          <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground">
            © 2025 SO2 CASES. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
    </>
  );
};

export default Index;