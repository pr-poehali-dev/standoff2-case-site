import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

interface LeaderboardPlayer {
  position: number;
  username: string;
  wins: number;
  avatar: string;
}

interface LeaderboardSectionProps {
  leaderboard: LeaderboardPlayer[];
}

const LeaderboardSection = ({ leaderboard }: LeaderboardSectionProps) => {
  return (
    <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
      <div className="text-center">
        <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">Рейтинг игроков</h2>
        <p className="text-muted-foreground text-lg">Топ игроков по открытым кейсам</p>
      </div>
      <Card className="p-8 bg-card/50 backdrop-blur">
        <div className="space-y-4">
          {leaderboard.map((player) => (
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
};

export default LeaderboardSection;
