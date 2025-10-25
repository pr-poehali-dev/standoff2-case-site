import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Icon from '@/components/ui/icon';
import CaseOpening from '@/components/CaseOpening';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [openingCase, setOpeningCase] = useState<any>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
          </div>
        );

      case 'cases':
        return (
          <div className="space-y-8 animate-fade-in">
            <div className="text-center">
              <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">Доступные кейсы</h2>
              <p className="text-muted-foreground text-lg">Выбери свой шанс на победу</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {cases.map((caseItem, index) => (
                <Card 
                  key={caseItem.id} 
                  className="overflow-hidden bg-card/50 backdrop-blur border-2 border-primary/20 hover:border-primary/50 transition-all hover-scale cursor-pointer"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="relative h-64 bg-gradient-to-br from-muted/50 to-background overflow-hidden">
                    <img 
                      src={caseItem.image} 
                      alt={caseItem.name}
                      className="w-full h-full object-cover"
                    />
                    <Badge className="absolute top-4 right-4 bg-primary text-primary-foreground">
                      {caseItem.rarity}
                    </Badge>
                  </div>
                  <div className="p-6 space-y-4">
                    <h3 className="font-heading text-2xl font-bold">{caseItem.name}</h3>
                    <div className="flex items-center justify-between">
                      <span className="text-3xl font-bold text-primary">{caseItem.price}</span>
                      <Button 
                        className="bg-primary hover:bg-primary/90 pulse-glow"
                        onClick={() => setOpeningCase(caseItem)}
                      >
                        <Icon name="Unlock" className="mr-2" size={18} />
                        Открыть
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        );

      case 'rules':
        return (
          <div className="max-w-3xl mx-auto space-y-8 animate-fade-in">
            <div className="text-center">
              <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">Правила сервиса</h2>
              <p className="text-muted-foreground text-lg">Ознакомься перед использованием</p>
            </div>
            <Card className="p-8 bg-card/50 backdrop-blur space-y-6">
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="font-bold">1</span>
                  </div>
                  <div>
                    <h3 className="font-heading text-xl font-bold mb-2">Возраст 18+</h3>
                    <p className="text-muted-foreground">Использование сервиса доступно только лицам старше 18 лет.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="font-bold">2</span>
                  </div>
                  <div>
                    <h3 className="font-heading text-xl font-bold mb-2">Честная игра</h3>
                    <p className="text-muted-foreground">Все результаты открытия кейсов генерируются честным алгоритмом.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="font-bold">3</span>
                  </div>
                  <div>
                    <h3 className="font-heading text-xl font-bold mb-2">Ответственность</h3>
                    <p className="text-muted-foreground">Пользователь несет полную ответственность за свои действия на сайте.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="font-bold">4</span>
                  </div>
                  <div>
                    <h3 className="font-heading text-xl font-bold mb-2">Запрет мошенничества</h3>
                    <p className="text-muted-foreground">Любые попытки обмана системы приведут к блокировке аккаунта.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="font-bold">5</span>
                  </div>
                  <div>
                    <h3 className="font-heading text-xl font-bold mb-2">Конфиденциальность</h3>
                    <p className="text-muted-foreground">Мы защищаем персональные данные пользователей.</p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        );

      case 'faq':
        return (
          <div className="max-w-3xl mx-auto space-y-8 animate-fade-in">
            <div className="text-center">
              <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">Частые вопросы</h2>
              <p className="text-muted-foreground text-lg">Ответы на популярные вопросы</p>
            </div>
            <Accordion type="single" collapsible className="space-y-4">
              {faqItems.map((item, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="bg-card/50 backdrop-blur border border-primary/20 rounded-lg px-6"
                >
                  <AccordionTrigger className="font-heading text-lg font-semibold hover:text-primary">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        );

      case 'profile':
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

      case 'leaderboard':
        return (
          <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
            <div className="text-center">
              <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">Рейтинг игроков</h2>
              <p className="text-muted-foreground text-lg">Топ игроков по открытым кейсам</p>
            </div>
            <Card className="p-8 bg-card/50 backdrop-blur">
              <div className="space-y-4">
                {leaderboard.map((player, index) => (
                  <div 
                    key={player.position}
                    className={`flex items-center gap-6 p-6 rounded-xl transition-all hover-scale cursor-pointer ${
                      player.position === 1 ? 'bg-gradient-to-r from-primary/20 to-transparent border border-primary/30' :
                      player.position === 2 ? 'bg-gradient-to-r from-secondary/20 to-transparent border border-secondary/30' :
                      player.position === 3 ? 'bg-gradient-to-r from-accent/20 to-transparent border border-accent/30' :
                      'bg-muted/20'
                    }`}
                  >
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center text-2xl font-bold ${
                      player.position === 1 ? 'bg-primary text-primary-foreground' :
                      player.position === 2 ? 'bg-secondary text-secondary-foreground' :
                      player.position === 3 ? 'bg-accent text-accent-foreground' :
                      'bg-muted text-muted-foreground'
                    }`}>
                      {player.position}
                    </div>
                    <div className="text-4xl">{player.avatar}</div>
                    <div className="flex-1">
                      <h3 className="font-heading text-xl font-bold">{player.username}</h3>
                      <p className="text-muted-foreground">Побед: {player.wins}</p>
                    </div>
                    {player.position <= 3 && (
                      <Icon name="Crown" className={
                        player.position === 1 ? 'text-primary' :
                        player.position === 2 ? 'text-secondary' :
                        'text-accent'
                      } size={32} />
                    )}
                  </div>
                ))}
              </div>
            </Card>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <>
      {openingCase && (
        <CaseOpening 
          caseData={openingCase} 
          onClose={() => setOpeningCase(null)} 
        />
      )}
      
    <div className="min-h-screen bg-background">
      <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Icon name="Box" size={32} className="text-primary" />
              <span className="font-heading text-2xl font-bold">SO2 CASES</span>
            </div>
            
            <div className="hidden md:flex items-center gap-2">
              {[
                { id: 'home', label: 'Главная', icon: 'Home' },
                { id: 'cases', label: 'Кейсы', icon: 'Package' },
                { id: 'rules', label: 'Правила', icon: 'Shield' },
                { id: 'faq', label: 'FAQ', icon: 'HelpCircle' },
                { id: 'profile', label: 'Профиль', icon: 'User' },
                { id: 'leaderboard', label: 'Рейтинг', icon: 'Trophy' }
              ].map((item) => (
                <Button
                  key={item.id}
                  variant={activeSection === item.id ? 'default' : 'ghost'}
                  onClick={() => setActiveSection(item.id)}
                  className={activeSection === item.id ? 'bg-primary hover:bg-primary/90' : ''}
                >
                  <Icon name={item.icon as any} className="mr-2" size={18} />
                  {item.label}
                </Button>
              ))}
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
        <div className="md:hidden fixed inset-0 top-[73px] z-40 bg-background/95 backdrop-blur-lg animate-fade-in">
          <div className="container mx-auto px-6 py-8 space-y-2">
            {[
              { id: 'home', label: 'Главная', icon: 'Home' },
              { id: 'cases', label: 'Кейсы', icon: 'Package' },
              { id: 'rules', label: 'Правила', icon: 'Shield' },
              { id: 'faq', label: 'FAQ', icon: 'HelpCircle' },
              { id: 'profile', label: 'Профиль', icon: 'User' },
              { id: 'leaderboard', label: 'Рейтинг', icon: 'Trophy' }
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