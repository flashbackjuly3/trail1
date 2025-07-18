import React from 'react';

interface NavigationProps {
  activeModule: 'car_owner' | 'space_owner';
  onModuleChange: (module: 'car_owner' | 'space_owner') => void;
  activeTab: string;
  onTabChange: (tab: string) => void;
}

export default function Navigation({ activeModule, onModuleChange, activeTab, onTabChange }: NavigationProps) {
  return <div>Navigation Component Placeholder</div>;
}