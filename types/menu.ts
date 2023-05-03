interface Menu {
  id: string;
  icon: React.ReactNode;
  label: string;
  click: () => void;
}