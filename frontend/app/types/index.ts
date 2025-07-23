export interface Endorsement {
  id: number;
  from: string;
  to: string;
  tag: string;
  message: string;
  timestamp: string;
  onchain: boolean;
}

export interface ScheduledCast {
  id: number;
  content: string;
  channels: string[];
  time: string;
  status: string;
}

export interface Channel {
  id: string;
  name: string;
  members: string;
  growth: string;
}

export interface EndorsementTag {
  id: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
}

export interface StatCard {
  label: string;
  value: string;
  change: string;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
}
