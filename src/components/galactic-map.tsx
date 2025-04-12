import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Planet } from '@/lib/types';
import { planets } from '@/lib/data';

export default function GalacticMap() {
  const [selectedPlanet, setSelectedPlanet] = useState<Planet | null>(null);

  return (
    <div className="container mx-auto px-4 py-8">
      <ScrollArea className="h-[calc(100vh-4rem)]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {planets.map((planet, index) => (
            <motion.div
              key={planet.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card
                className="group cursor-pointer hover:scale-105 transition-all duration-300 bg-black/50 border-purple-500/30 hover:border-purple-500/60 backdrop-blur-sm"
                onClick={() => setSelectedPlanet(planet)}
              >
                <CardContent className="p-6">
                  <div className="aspect-square rounded-lg overflow-hidden mb-4">
                    <img
                      src={planet.image}
                      alt={planet.name}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-purple-300 group-hover:text-purple-200">
                    {planet.name}
                  </h3>
                  <p className="text-sm text-purple-200/70">{planet.shortDesc}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </ScrollArea>

      <Dialog open={!!selectedPlanet} onOpenChange={() => setSelectedPlanet(null)}>
        <DialogContent className="bg-black/90 border-purple-500/30 backdrop-blur-md max-w-2xl">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-purple-300">
              {selectedPlanet?.name}
            </DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <div className="aspect-video rounded-lg overflow-hidden">
              <img
                src={selectedPlanet?.image}
                alt={selectedPlanet?.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div className="space-y-2">
                <p className="text-purple-300">Temperature</p>
                <p className="text-white">{selectedPlanet?.temperature}</p>
              </div>
              <div className="space-y-2">
                <p className="text-purple-300">Day Length</p>
                <p className="text-white">{selectedPlanet?.dayLength}</p>
              </div>
              <div className="space-y-2">
                <p className="text-purple-300">Atmosphere</p>
                <p className="text-white">{selectedPlanet?.atmosphere}</p>
              </div>
              <div className="space-y-2">
                <p className="text-purple-300">Orbit Period</p>
                <p className="text-white">{selectedPlanet?.orbitPeriod}</p>
              </div>
            </div>
            <div className="space-y-2">
              <h4 className="text-lg font-semibold text-purple-300">Description</h4>
              <p className="text-purple-100">{selectedPlanet?.description}</p>
            </div>
            <div className="space-y-2">
              <h4 className="text-lg font-semibold text-purple-300">Fun Facts</h4>
              <ul className="list-disc list-inside space-y-1 text-purple-100">
                {selectedPlanet?.funFacts.map((fact, index) => (
                  <li key={index}>{fact}</li>
                ))}
              </ul>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}