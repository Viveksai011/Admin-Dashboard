"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import useAuditLogStore from "@/store/useAuditlog";
import { Button } from "@/components/ui/button";

interface auditprops {
  children: React.ReactNode;
  className?: string;
}

export function Auditlogmodal({ children, className }: auditprops) {
  const logs = useAuditLogStore((state) => state.logs);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button size="sm" variant="outline" className={className}>
          {children}
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Audit Trail</DialogTitle>
        </DialogHeader>

        {logs.length === 0 ? (
          <div className="flex justify-center py-8">
            <div className="text-gray-500">No audit logs...</div>
          </div>
        ) : (
          <div className="space-y-4">
            {logs.map((log, index) => (
              <div key={index} className="border rounded-lg p-4 space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <span className="font-medium">
                      Listing ID: {log.listingId}
                    </span>
                  </div>
                  <span className="text-sm text-gray-500">{log.timestamp}</span>
                </div>
                <div className="text-sm text-gray-600">
                  Action performed by:{" "}
                  <span className="font-medium">{log.adminName}</span>
                </div>
                <div className="text-sm text-gray-600">
                  Action: <span className="font-medium">{log.action}</span>
                </div>
              </div>
            ))}
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
