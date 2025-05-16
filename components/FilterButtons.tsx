'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Flame, Clock, Sparkles } from 'lucide-react';

type FilterType = 'trend' | 'ohio' | 'fresh';

interface FilterButtonsProps {
  onFilterChange: (filter: FilterType) => void;
}

const FilterButtons: React.FC<FilterButtonsProps> = ({ onFilterChange }) => {
  const [activeFilter, setActiveFilter] = useState<FilterType>('trend');

  const handleFilterClick = (filter: FilterType) => {
    setActiveFilter(filter);
    onFilterChange(filter);
  };

  return (
    <div className="flex flex-wrap gap-3 mb-6">
      <Button
        variant="outline"
        className={`flex items-center gap-2 font-comic ${activeFilter === 'trend' ? 'bg-brainrot-neon text-black border-brainrot-pink' : ''}`}
        onClick={() => handleFilterClick('trend')}
      >
        <Flame size={16} />
        Most Rizz
      </Button>
      <Button
        variant="outline"
        className={`flex items-center gap-2 font-comic ${activeFilter === 'ohio' ? 'bg-brainrot-blue text-white border-brainrot-purple' : ''}`}
        onClick={() => handleFilterClick('ohio')}
      >
        <Sparkles size={16} />
        Most Ohio
      </Button>
      <Button
        variant="outline"
        className={`flex items-center gap-2 font-comic ${activeFilter === 'fresh' ? 'bg-brainrot-pink text-white border-brainrot-neon' : ''}`}
        onClick={() => handleFilterClick('fresh')}
      >
        <Clock size={16} />
        Fresh Yaps
      </Button>
    </div>
  );
};

export default FilterButtons; 