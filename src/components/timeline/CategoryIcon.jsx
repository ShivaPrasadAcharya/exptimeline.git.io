// src/components/timeline/CategoryIcon.jsx
import React from 'react';
import { 
  FileSignature, Files, AlertTriangle, 
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
  
  const getIconStyle = (cat) => {
    switch (cat) {
      case 'contract':
        return {
          icon: FileSignature,
          color: 'text-blue-500',
          bgColor: 'bg-blue-50'
        };
      case 'conflict':
        return {
          icon: AlertTriangle,
          color: 'text-amber-500',
          bgColor: 'bg-amber-50'
        };
      case 'complaint':
        return {
          icon: FileText,
          color: 'text-red-500',
          bgColor: 'bg-red-50'
        };
      // Keep your other cases here
      default:
        return {
          icon: HelpCircle,
          color: 'text-gray-500',
          bgColor: 'bg-gray-50'
        };
    }
  };

  // Handle both array and single category
  const categories = Array.isArray(category) ? category : [category];
  
  return (
    <div className="flex gap-1">
      {categories.map((cat, index) => {
        const { icon: Icon, color, bgColor } = getIconStyle(cat);
        return (
          <div key={index} className={`${bgColor} p-1.5 rounded-full`}>
            <Icon className={`${iconClass} ${color} stroke-2`} />
          </div>
        );
      })}
    </div>
  );
};

export default CategoryIcon;
