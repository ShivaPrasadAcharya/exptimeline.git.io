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
  Heart,
  Handshake,
  Clock,
  Ban,
  Folder,
  Shield,
  UserX,
  Gavel,
  FileSearch,
  MessageSquare,
  FileLock2
} from 'lucide-react';

const CategoryIcon = ({ category }) => {
  const iconClass = "w-5 h-5";
  
  const getIconStyle = () => {
    switch (category) {
      // Existing categories
      case 'namaskar':
        return {
          icon: HeartHandshake,
          color: 'text-emerald-500',
          bgColor: 'bg-emerald-50'
        };
      case 'casino':
        return {
          icon: CircleDollarSign,
          color: 'text-green-500',
          bgColor: 'bg-green-50'
        };
      case 'contract':
        return {
          icon: FileSignature,
          color: 'text-blue-500',
          bgColor: 'bg-blue-50'
        };
      case 'court':
        return {
          icon: Scale,
          color: 'text-purple-500',
          bgColor: 'bg-purple-50'
        };
      case 'circular':
        return {
          icon: Scroll,
          color: 'text-amber-500',
          bgColor: 'bg-amber-50'
        };
      case 'closeddoor':
        return {
          icon: Building2,
          color: 'text-slate-500',
          bgColor: 'bg-slate-50'
        };
      case 'notification':
        return {
          icon: Bell,
          color: 'text-orange-500',
          bgColor: 'bg-orange-50'
        };
      case 'complaint':
        return {
          icon: FileWarning,
          color: 'text-red-500',
          bgColor: 'bg-red-50'
        };
      case 'complaint2':
        return {
          icon: Files,
          color: 'text-indigo-500',
          bgColor: 'bg-indigo-50'
        };
      case 'brokenheart':
        return {
          icon: Heart,
          color: 'text-rose-500',
          bgColor: 'bg-rose-50'
        };
      case 'conflict':
        return {
          icon: AlertTriangle,
          color: 'text-amber-500',
          bgColor: 'bg-amber-50'
        };

      // New legal timeline specific categories
      case 'subcontract':
        return {
          icon: Handshake, // Agreement between parties
          color: 'text-cyan-500',
          bgColor: 'bg-cyan-50'
        };
      case 'deadline':
        return {
          icon: Clock, // Time-sensitive matters
          color: 'text-yellow-500',
          bgColor: 'bg-yellow-50'
        };
      case 'termination':
        return {
          icon: Ban, // Contract termination
          color: 'text-red-600',
          bgColor: 'bg-red-50'
        };
      case 'documentation':
        return {
          icon: Folder, // Legal documentation
          color: 'text-blue-600',
          bgColor: 'bg-blue-50'
        };
      case 'compliance':
        return {
          icon: Shield, // Regulatory compliance
          color: 'text-green-600',
          bgColor: 'bg-green-50'
        };
      case 'breach':
        return {
          icon: UserX, // Contract breach
          color: 'text-red-500',
          bgColor: 'bg-red-50'
        };
      case 'judgment':
        return {
          icon: Gavel, // Court judgment
          color: 'text-purple-600',
          bgColor: 'bg-purple-50'
        };
      case 'investigation':
        return {
          icon: FileSearch, // Legal investigation
          color: 'text-indigo-600',
          bgColor: 'bg-indigo-50'
        };
      case 'mediation':
        return {
          icon: MessageSquare, // Dispute mediation
          color: 'text-teal-500',
          bgColor: 'bg-teal-50'
        };
      case 'confidential':
        return {
          icon: FileLock2, // Confidential documents
          color: 'text-slate-600',
          bgColor: 'bg-slate-50'
        };
      case 'none':
        return {
          icon: Files,
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
