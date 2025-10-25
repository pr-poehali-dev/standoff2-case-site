import { Card } from '@/components/ui/card';

const RulesSection = () => {
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
};

export default RulesSection;
