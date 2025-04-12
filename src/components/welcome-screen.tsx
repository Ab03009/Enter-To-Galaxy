import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Volume2, VolumeX, Rocket } from 'lucide-react';
import useSound from 'use-sound';

interface WelcomeScreenProps {
  onStart: () => void;
}

export default function WelcomeScreen({ onStart }: WelcomeScreenProps) {
  const [isMuted, setIsMuted] = useState(true);
  const [playSpaceAmbience, { stop }] = useSound('/sounds/space-ambience.mp3', {
    loop: true,
  });

  const toggleSound = () => {
    if (isMuted) {
      playSpaceAmbience();
    } else {
      stop();
    }
    setIsMuted(!isMuted);
  };

  return (
    <div className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-slate-900 via-purple-900 to-slate-900">
      {/* Animated stars background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="stars"></div>
        <div className="stars2"></div>
        <div className="stars3"></div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative text-center space-y-8 p-8"
      >
        <motion.div
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <Rocket className="w-16 h-16 mx-auto text-purple-400 mb-4" />
        </motion.div>
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600"
        >
          Galactic Guide
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-xl text-purple-200"
        >
          Explore the Mysteries of the Universe
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="flex flex-col items-center space-y-4"
        >
          <Button
            size="lg"
            onClick={onStart}
            className="bg-purple-500/90 hover:bg-purple-500 text-white px-8 py-6 text-lg rounded-full transition-all duration-300 hover:scale-105 hover:shadow-[0_0_15px_rgba(168,85,247,0.5)]"
          >
            Enter Galaxy
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleSound}
            className="text-purple-300 hover:text-purple-100 hover:bg-purple-500/20"
          >
            {isMuted ? (
              <VolumeX className="h-6 w-6" />
            ) : (
              <Volume2 className="h-6 w-6" />
            )}
          </Button>
        </motion.div>
      </motion.div>
    </div>
  );
}