export interface AuditLog {
  listingId: string;
  adminName: string;
  name?: string;
  modal?: string;
  availability?: boolean;
  action: string;
  timestamp: string;
}
