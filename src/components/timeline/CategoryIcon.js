import React from 'react';
import { 
  FileText,
  Building,
  Eye,
  Scale,
  HeartHandshake,
  Laptop,
  BarChart,
  HelpCircle
} from 'lucide-react';

const CategoryIcon = ({ category }) => {
  const iconClass = "w-5 h-5";
  
  const getIconStyle = () => {
    switch (category) {
      case 'complaint':
        return {
          icon: FileText,
          color: 'text-red-500',
          bgColor: 'bg-red-50'
        };
      case 'administration':
        return {
          icon: Building,
          color: 'text-blue-500',
          bgColor: 'bg-blue-50'
        };
      case 'monitoring':
        return {
          icon: Eye,
          color: 'text-purple-500',
          bgColor: 'bg-purple-50'
        };
      case 'governance':
        return {
          icon: Scale,
          color: 'text-green-500',
          bgColor: 'bg-green-50'
        };
      case 'service':
        return {
          icon: HeartHandshake,
          color: 'text-orange-500',
          bgColor: 'bg-orange-50'
        };
      case 'digital':
        return {
          icon: Laptop,
          color: 'text-cyan-500',
          bgColor: 'bg-cyan-50'
        };
      case 'planning':
        return {
          icon: BarChart,
          color: 'text-yellow-500',
          bgColor: 'bg-yellow-50'
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
