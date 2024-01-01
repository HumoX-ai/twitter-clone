import React, { ReactElement } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../ui/dialog";
import { X } from "lucide-react";
interface ModalProps {
  isOpen?: boolean;
  onClose: () => void;
  title?: string;
  body?: ReactElement;
  footer?: ReactElement;
  step?: number;
  totalSteps?: number;
}

export const Modal = ({
  isOpen,
  onClose,
  body,
  footer,
  step,
  totalSteps,
}: ModalProps) => {
  return (
    <div>
      <Dialog open={isOpen} onOpenChange={onClose}>
        <DialogContent>
          <div className="flex items-center gap-6">
            <button
              className="p-1 border-0 text-white hover:opacity-70 transition w-fit"
              onClick={onClose}
            >
              <X size={28} />
            </button>
            {step && totalSteps && (
              <div className="text-xl font-bold">
                Step {step} of {totalSteps}
              </div>
            )}
          </div>
          <DialogHeader>
            <div className="mt-4 mb-4">{body}</div>
            {footer && <div>{footer}</div>}
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
};
