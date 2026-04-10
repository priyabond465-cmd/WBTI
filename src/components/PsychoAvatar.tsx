import { ResultData } from '../data/results';
import { motion } from 'motion/react';
import { ArchetypeAvatars } from './ArchetypeAvatars';

interface PsychoAvatarProps {
  level: ResultData['level'];
  avatarKey: string;
  matchRate?: number;
}

export default function PsychoAvatar({ level, avatarKey, matchRate = 100 }: PsychoAvatarProps) {
  // Chaos Mutant logic
  const isChaos = matchRate === 99 && level === 'SSR';

  // Get the avatar component for the avatarKey
  const AvatarComponent = ArchetypeAvatars[avatarKey] || ArchetypeAvatars['DEFAULT'];

  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <motion.div
        className="w-full h-full"
        animate={isChaos ? {
          x: [-2, 2, -2, 2, 0],
          y: [-2, 2, 2, -2, 0],
          filter: ['hue-rotate(0deg)', 'hue-rotate(90deg)', 'hue-rotate(180deg)', 'hue-rotate(270deg)', 'hue-rotate(360deg)']
        } : {}}
        transition={{ repeat: Infinity, duration: 0.2, ease: "linear" }}
      >
        <AvatarComponent className="w-full h-full object-contain" />
      </motion.div>
    </div>
  );
}
