// src/components/timeline/CategoryIcon.jsx
import React from 'react';
import {
  FileContract,
  FileCheck,
  Scale,
  ScrollText,
  Building2,
  AlertCircle,
  File,
  FileWarning,
  GanttChart,
  Gavel,
  Bell,
  BookOpen,
  FileOutput,
  Newspaper,
  PrayingHands
} from 'lucide-react';

const CategoryIcon = ({ category }) => {
  const iconClass = "w-5 h-5";
  
  const getIconStyle = (cat) => {
    switch (cat) {
      case 'license_grant':
        return {
          icon: FileCheck,
          color: 'text-green-500',
          bgColor: 'bg-green-50'
        };
      case 'contract_agreement':
        return {
          icon: FileContract,
          color: 'text-blue-500',
          bgColor: 'bg-blue-50'
        };
      case 'contract_implementation':
        return {
          icon: GanttChart,
          color: 'text-purple-500',
          bgColor: 'bg-purple-50'
        };
      case 'court_order':
        return {
          icon: Gavel,
          color: 'text-amber-500',
          bgColor: 'bg-amber-50'
        };
      case 'legal_proceeding':
        return {
          icon: Scale,
          color: 'text-orange-500',
          bgColor: 'bg-orange-50'
        };
      case 'administrative_order':
        return {
          icon: ScrollText,
          color: 'text-red-500',
          bgColor: 'bg-red-50'
        };
      case 'enforcement_action':
        return {
          icon: AlertCircle,
          color: 'text-rose-500',
          bgColor: 'bg-rose-50'
        };
      case 'administrative_notification':
        return {
          icon: Bell,
          color: 'text-cyan-500',
          bgColor: 'bg-cyan-50'
        };
      case 'administrative_petition':
        return {
          icon: BookOpen,
          color: 'text-teal-500',
          bgColor: 'bg-teal-50'
        };
      case 'contract_termination':
        return {
          icon: FileWarning,
          color: 'text-pink-500',
          bgColor: 'bg-pink-50'
        };
      case 'public_notice':
        return {
          icon: Newspaper,
          color: 'text-indigo-500',
          bgColor: 'bg-indigo-50'
        };
      case 'greeting':
        return {
          icon: PrayingHands,
          color: 'text-emerald-500',
          bgColor: 'bg-emerald-50'
        };
      default:
        return {
          icon: File,
          color: 'text-gray-500',
          bgColor: 'bg-gray-50'
        };
    }
  };
  
  const { icon: Icon, color, bgColor } = getIconStyle(category);  // Fixed: Passing the category prop
  
  return (
    <div className={`${bgColor} p-1.5 rounded-full`}>
      <Icon className={`${iconClass} ${color} stroke-2`} />
    </div>
  );
};

export default CategoryIcon;
