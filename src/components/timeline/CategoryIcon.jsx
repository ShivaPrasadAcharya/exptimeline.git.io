// src/components/timeline/CategoryIcon.jsx
import React from 'react';
import { 
  FileSignature, 
  Files, 
  AlertTriangle, 
  FileText,
  Scale,
  HeartHandshake,
  HelpCircle,
  CircleDollarSign,
  Bell,
  Building2,
  FileWarning,
  Scroll,
  Heart
} from 'lucide-react';

const CategoryIcon = ({ category }) => {
  const iconClass = "w-5 h-5";
  
  const getIconStyle = () => {
    switch (category) {
      case 'namaskar':
        return {
          icon: HeartHandshake,
          color: 'text-emerald-500',
          bgColor: 'bg-emerald-50'
        };
      case 'casino':
        return {
          icon: CircleDollarSign, // Money/casino icon
          color: 'text-green-500',
          bgColor: 'bg-green-50'
        };
      case 'contract':
        return {
          icon: FileSignature, // Document signing icon
          color: 'text-blue-500',
          bgColor: 'bg-blue-50'
        };
      case 'court':
        return {
          icon: Scale, // Justice scale icon
          color: 'text-purple-500',
          bgColor: 'bg-purple-50'
        };
      case 'circular':
        return {
          icon: Scroll, // Official document/circular icon
          color: 'text-amber-500',
          bgColor: 'bg-amber-50'
        };
      case 'police':
        return {
          icon: Building2, // Police station/official building icon
          color: 'text-slate-500',
          bgColor: 'bg-slate-50'
        };
      case 'notification':
        return {
          icon: Bell, // Notification bell icon
          color: 'text-orange-500',
          bgColor: 'bg-orange-50'
        };
      case 'review':
        return {
          icon: FileText, // Document review icon
          color: 'text-indigo-500',
          bgColor: 'bg-indigo-50'
        };
      case 'complaint':
        return {
          icon: FileWarning, // Warning document icon
          color: 'text-red-500',
          bgColor: 'bg-red-50'
        };
      case 'brokenheart':
        return {
          icon: Heart, // Heart icon for broken agreements
          color: 'text-rose-500',
          bgColor: 'bg-rose-50'
        };
      case 'conflict':
        return {
          icon: AlertTriangle, // Warning/conflict icon
          color: 'text-amber-500',
          bgColor: 'bg-amber-50'
        };
      case 'none':
        return {
          icon: Files, // Generic files icon
          color: 'text-gray-500',
          bgColor: 'bg-gray-50'
        };
      default:
        return {
          icon: HelpCircle,
          color: 'text-gray-500',
          bgColor: 'bg-gray-50'
        };
    }
  };
  
  const { icon: Icon, color, bgColor } = getIconStyle();
  
  return (
    <div className={`${bgColor} p-1.5 rounded-full`}>
      <Icon className={`${iconClass} ${color} stroke-2`} />
    </div>
  );
};

export default CategoryIcon;
