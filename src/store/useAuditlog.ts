import { create } from "zustand";
import { AuditLog } from "@/lib/auditlog";

interface AuditLogStore {
  logs: AuditLog[];
  addLog: (log: AuditLog) => void;
}

const useAuditLogStore = create<AuditLogStore>((set) => ({
  logs: [],
  addLog: (log) => set((state) => ({ logs: [...state.logs, log] })),
}));

export default useAuditLogStore;
