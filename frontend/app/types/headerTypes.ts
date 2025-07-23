export interface DropdownPanelProps {
  title: string;
  children: React.ReactNode;
  onClose: () => void;
  position?: string;
}

export interface NotificationItem {
  id: number;
  title: string;
  message: string;
  time: string;
  read: boolean;
}

export interface SettingItem {
  id: string;
  label: string;
  current: string;
  icon: React.ComponentType<{ className?: string }>;
}
