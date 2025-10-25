import { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

interface CaseOpeningProps {
  caseData: {
    id: number;
    name: string;
    price: string;
    rarity: string;
    image: string;
  };
  onClose: () => void;
}

interface WeaponItem {
  name: string;
  rarity: string;
  color: string;
  icon: string;
}

const weapons: WeaponItem[] = [
  { name: 'AK-47 | Огненный змей', rarity: 'Легендарный', color: '#F97316', icon: '🔥' },
  { name: 'Glock-18 | Ночной страж', rarity: 'Обычный', color: '#6B7280', icon: '🔫' },
  { name: 'AWP | Азимов', rarity: 'Эпический', color: '#0EA5E9', icon: '⚡' },
  { name: 'M4A4 | Городской камуфляж', rarity: 'Обычный', color: '#6B7280', icon: '🔫' },
  { name: 'Desert Eagle | Золотая лихорадка', rarity: 'Редкий', color: '#EAB308', icon: '💫' },
  { name: 'MP5 | Техно', rarity: 'Обычный', color: '#6B7280', icon: '🔫' },
  { name: 'USP-S | Киберпанк', rarity: 'Эпический', color: '#0EA5E9', icon: '⚡' },
  { name: 'M249 | Стальной штурм', rarity: 'Обычный', color: '#6B7280', icon: '🔫' },
  { name: 'Dragonuv | Красный дракон', rarity: 'Легендарный', color: '#F97316', icon: '🔥' },
  { name: 'P90 | Неон', rarity: 'Редкий', color: '#EAB308', icon: '💫' },
];

const CaseOpening = ({ caseData, onClose }: CaseOpeningProps) => {
  const [isSpinning, setIsSpinning] = useState(false);
  const [wonItem, setWonItem] = useState<WeaponItem | null>(null);
  const [showResult, setShowResult] = useState(false);
  const rouletteRef = useRef<HTMLDivElement>(null);
  const spinSoundRef = useRef<HTMLAudioElement | null>(null);
  const winSoundRef = useRef<HTMLAudioElement | null>(null);
  const tickSoundRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    spinSoundRef.current = new Audio();
    winSoundRef.current = new Audio();
    tickSoundRef.current = new Audio();
    
    return () => {
      spinSoundRef.current?.pause();
      winSoundRef.current?.pause();
      tickSoundRef.current?.pause();
    };
  }, []);

  const playSpinSound = () => {
    if (spinSoundRef.current) {
      const audioContext = new AudioContext();
      const oscillator = audioContext.createOscillator();
      const gainNode = audioContext.createGain();
      
      oscillator.connect(gainNode);
      gainNode.connect(audioContext.destination);
      
      oscillator.frequency.setValueAtTime(200, audioContext.currentTime);
      oscillator.frequency.exponentialRampToValueAtTime(100, audioContext.currentTime + 5);
      
      gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 5);
      
      oscillator.start();
      oscillator.stop(audioContext.currentTime + 5);
    }
  };

  const playWinSound = (rarity: string) => {
    const audioContext = new AudioContext();
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();
    
    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);
    
    if (rarity === 'Легендарный') {
      oscillator.frequency.setValueAtTime(523.25, audioContext.currentTime);
      oscillator.frequency.setValueAtTime(659.25, audioContext.currentTime + 0.1);
      oscillator.frequency.setValueAtTime(783.99, audioContext.currentTime + 0.2);
      oscillator.frequency.setValueAtTime(1046.50, audioContext.currentTime + 0.3);
    } else if (rarity === 'Эпический') {
      oscillator.frequency.setValueAtTime(440, audioContext.currentTime);
      oscillator.frequency.setValueAtTime(554.37, audioContext.currentTime + 0.1);
      oscillator.frequency.setValueAtTime(659.25, audioContext.currentTime + 0.2);
    } else {
      oscillator.frequency.setValueAtTime(349.23, audioContext.currentTime);
      oscillator.frequency.setValueAtTime(440, audioContext.currentTime + 0.1);
    }
    
    gainNode.gain.setValueAtTime(0.2, audioContext.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.5);
    
    oscillator.start();
    oscillator.stop(audioContext.currentTime + 0.5);
  };

  const playTickSound = () => {
    const audioContext = new AudioContext();
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();
    
    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);
    
    oscillator.frequency.setValueAtTime(800, audioContext.currentTime);
    gainNode.gain.setValueAtTime(0.05, audioContext.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.05);
    
    oscillator.start();
    oscillator.stop(audioContext.currentTime + 0.05);
  };

  const generateRouletteItems = () => {
    const items: WeaponItem[] = [];
    for (let i = 0; i < 50; i++) {
      items.push(weapons[Math.floor(Math.random() * weapons.length)]);
    }
    return items;
  };

  const [rouletteItems] = useState(generateRouletteItems());

  const openCase = () => {
    setIsSpinning(true);
    setShowResult(false);
    setWonItem(null);

    playSpinSound();

    const winningItem = weapons[Math.floor(Math.random() * weapons.length)];
    const winningIndex = Math.floor(rouletteItems.length * 0.75);
    rouletteItems[winningIndex] = winningItem;

    const tickInterval = setInterval(() => {
      playTickSound();
    }, 100);

    if (rouletteRef.current) {
      const itemWidth = 200;
      const offset = winningIndex * itemWidth - (window.innerWidth / 2) + (itemWidth / 2);
      
      rouletteRef.current.style.transition = 'none';
      rouletteRef.current.style.transform = 'translateX(0px)';
      
      setTimeout(() => {
        if (rouletteRef.current) {
          rouletteRef.current.style.transition = 'transform 5s cubic-bezier(0.25, 0.1, 0.25, 1)';
          rouletteRef.current.style.transform = `translateX(-${offset}px)`;
        }
      }, 50);

      setTimeout(() => {
        clearInterval(tickInterval);
        setWonItem(winningItem);
        setShowResult(true);
        setIsSpinning(false);
        playWinSound(winningItem.rarity);
      }, 5500);
    }
  };

  useEffect(() => {
    openCase();
  }, []);

  return (
    <div className="fixed inset-0 z-50 bg-background/95 backdrop-blur-lg flex items-center justify-center p-6">
      <div className="w-full max-w-6xl space-y-8">
        <div className="text-center space-y-4">
          <h2 className="font-heading text-4xl md:text-5xl font-bold">Открытие кейса</h2>
          <Badge className="bg-primary text-primary-foreground text-lg px-6 py-2">
            {caseData.name}
          </Badge>
        </div>

        <div className="relative h-[400px] bg-card/50 backdrop-blur rounded-3xl border-2 border-primary/30 overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-primary shadow-[0_0_20px_rgba(247,115,22,0.8)] z-10 transform -translate-x-1/2"></div>
            <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
              <Icon name="ChevronDown" size={48} className="text-primary animate-pulse" />
            </div>
          </div>

          <div className="absolute inset-0 flex items-center overflow-hidden">
            <div 
              ref={rouletteRef}
              className="flex gap-4 px-4"
              style={{ willChange: 'transform' }}
            >
              {rouletteItems.map((item, index) => (
                <Card 
                  key={index}
                  className="flex-shrink-0 w-[180px] h-[280px] p-4 flex flex-col items-center justify-center gap-3 bg-card/80 backdrop-blur border-2 transition-all"
                  style={{ borderColor: item.color }}
                >
                  <div 
                    className="text-6xl"
                    style={{ filter: `drop-shadow(0 0 10px ${item.color})` }}
                  >
                    {item.icon}
                  </div>
                  <div className="text-center">
                    <p className="font-heading font-bold text-sm mb-1">{item.name}</p>
                    <Badge 
                      className="text-xs"
                      style={{ backgroundColor: item.color, color: 'white' }}
                    >
                      {item.rarity}
                    </Badge>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {showResult && wonItem && (
          <Card className="p-8 bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 border-2 border-primary animate-scale-in">
            <div className="text-center space-y-6">
              <div className="space-y-2">
                <h3 className="font-heading text-3xl font-bold">Поздравляем! 🎉</h3>
                <p className="text-muted-foreground">Вы выиграли:</p>
              </div>
              
              <div className="flex justify-center">
                <Card 
                  className="w-[300px] p-8 border-4"
                  style={{ borderColor: wonItem.color }}
                >
                  <div className="space-y-4">
                    <div 
                      className="text-8xl animate-float"
                      style={{ filter: `drop-shadow(0 0 20px ${wonItem.color})` }}
                    >
                      {wonItem.icon}
                    </div>
                    <div>
                      <h4 className="font-heading text-2xl font-bold mb-2">{wonItem.name}</h4>
                      <Badge 
                        className="text-lg px-4 py-1"
                        style={{ backgroundColor: wonItem.color, color: 'white' }}
                      >
                        {wonItem.rarity}
                      </Badge>
                    </div>
                  </div>
                </Card>
              </div>

              <div className="flex gap-4 justify-center">
                <Button 
                  size="lg"
                  className="bg-primary hover:bg-primary/90 glow-effect"
                  onClick={() => {
                    setShowResult(false);
                    openCase();
                  }}
                >
                  <Icon name="RotateCw" className="mr-2" size={20} />
                  Открыть ещё
                </Button>
                <Button 
                  size="lg"
                  variant="outline"
                  onClick={onClose}
                >
                  <Icon name="X" className="mr-2" size={20} />
                  Закрыть
                </Button>
              </div>
            </div>
          </Card>
        )}

        {!showResult && (
          <div className="flex justify-center">
            <Button 
              size="lg"
              variant="outline"
              onClick={onClose}
              disabled={isSpinning}
            >
              <Icon name="X" className="mr-2" size={20} />
              Закрыть
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CaseOpening;