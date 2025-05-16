'use client';

import React from 'react';
import { Button } from '@/components/ui/button';

type FilterType = 'trend' | 'ohio' | 'fresh';

export default function FilterSection() {
  const [activeFilter, setActiveFilter] = React.useState<FilterType>('trend');

  const handleFilterChange = (filter: FilterType) => {
    setActiveFilter(filter);
    // You can add any additional logic here if needed
  };

  return (
    <div className="flex gap-4 mb-6">
      <Button
        variant={activeFilter === 'trend' ? 'default' : 'outline'}
        onClick={() => handleFilterChange('trend')}
        className="font-comic"
      >
        🔥 Trending
      </Button>
      <Button
        variant={activeFilter === 'ohio' ? 'default' : 'outline'}
        onClick={() => handleFilterChange('ohio')}
        className="font-comic"
      >
        🎭 Ohio
      </Button>
      <Button
        variant={activeFilter === 'fresh' ? 'default' : 'outline'}
        onClick={() => handleFilterChange('fresh')}
        className="font-comic"
      >
        ✨ Fresh
      </Button>
    </div>
  );
} 