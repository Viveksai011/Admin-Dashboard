"use client";

import React, { useState, useEffect } from "react";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useListStore } from "@/store/useListstore";
import useAuditLogStore from "@/store/useAuditlog";

interface CarDialogProps {
  children: React.ReactNode;
  className?: string;
  car: {
    createdAt: string;
    name: string;
    avatar: string;
    availability: boolean;
    model: string;
    id: string;
    status: "approve" | "reject" | "pending";
    price: number;
  };
}

export default function CarDialog({
  children,
  className,
  car,
}: CarDialogProps) {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState(car);
  const refreshCars = useListStore((state) => state.refreshCars);

  useEffect(() => {
    setFormData(car);
  }, [car]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch(`/api/carddetails?id=${formData.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          model: formData.model,
          Price: formData.price,
          Status: formData.status,
        }),
      });
      if (!response.ok) throw new Error("Failed to update car data");
      const adminName = "AdminName";
      useAuditLogStore.getState().addLog({
        listingId: formData.id,
        adminName: adminName,
        name: formData.name,
        modal: formData.model,
        availability: formData.availability,
        action: `Updated car status to ${formData.status}`,
        timestamp: new Date().toISOString(),
      });
      await refreshCars();
      setOpen(false);
    } catch (error) {
      console.error("Error updating car data:", error);
    }
  };

  const updateField = (field: keyof typeof formData, value: unknown) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div className="flex items-center justify-center ">
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button size="sm" variant="outline" className={className}>
            {children}
          </Button>
        </DialogTrigger>

        <DialogContent className="sm:max-w-[500px]">
          <DialogHeader>
            <DialogTitle>Car Information</DialogTitle>
            <DialogDescription>
              Update the car details below. Click save when you&apos;re done.
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handleSubmit} className="space-y-4 p-4">
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="id" className="text-right">
                  ID
                </Label>
                <div className="col-span-3">{formData.id}</div>
              </div>

              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="avatar" className="text-right">
                  Avatar
                </Label>
                <div className="col-span-3 flex items-center gap-3">
                  <Avatar>
                    <AvatarImage
                      src={formData.avatar || "/placeholder.svg"}
                      alt="Car avatar"
                    />
                    <AvatarFallback>CAR</AvatarFallback>
                  </Avatar>
                  <Input
                    id="avatar"
                    value={formData.avatar}
                    onChange={(e) => updateField("avatar", e.target.value)}
                    placeholder="Avatar URL"
                    className="flex-1"
                  />
                </div>
              </div>

              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="name" className="text-right">
                  Name
                </Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => updateField("name", e.target.value)}
                  className="col-span-3"
                />
              </div>

              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="model" className="text-right">
                  Model
                </Label>
                <Input
                  id="model"
                  value={formData.model}
                  onChange={(e) => updateField("model", e.target.value)}
                  className="col-span-3"
                />
              </div>

              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="createdAt" className="text-right">
                  Created At
                </Label>
                <Input
                  id="createdAt"
                  value={formData.createdAt}
                  onChange={(e) => updateField("createdAt", e.target.value)}
                  className="col-span-3"
                />
              </div>

              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="availability" className="text-right">
                  Available
                </Label>
                <div className="col-span-3">
                  <Switch
                    id="availability"
                    checked={formData.availability}
                    onCheckedChange={(checked) =>
                      updateField("availability", checked)
                    }
                  />
                </div>
              </div>

              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="status" className="text-right">
                  Status
                </Label>
                <Select
                  value={formData.status}
                  onValueChange={(value) =>
                    updateField("status", value as typeof formData.status)
                  }
                >
                  <SelectTrigger className="col-span-3">
                    <SelectValue placeholder="Select status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="approve">Approve</SelectItem>
                    <SelectItem value="reject">Reject</SelectItem>
                    <SelectItem value="pending">Pending</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="price" className="text-right">
                  Price ($)
                </Label>
                <Input
                  id="price"
                  type="number"
                  value={formData.price}
                  onChange={(e) =>
                    updateField("price", Number.parseFloat(e.target.value) || 0)
                  }
                  className="col-span-3"
                  min="0"
                  step="0.01"
                />
              </div>
            </div>
            <DialogFooter>
              <Button
                type="button"
                variant="outline"
                onClick={() => setOpen(false)}
                className="cursor-pointer"
              >
                Cancel
              </Button>
              <Button type="submit" className="cursor-pointer">
                Save Changes
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}
