"use client";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { FileText, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Resume = () => {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button
          variant="link"
          className="p-0 underline underline-offset-4 text-base font-extrabold"
        >
          <FileText className="w-4 h-4 mr-1" />
          resume
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent className="bg-transparent border-0 justify-center items-center">
        <iframe
          src="https://drive.google.com/file/d/1GcKjuIqax5mBIqD4XzM4LWm_kubsXTmx/preview"
          allow="autoplay"
          className="rounded-xl w-[80vw] h-[75vh] lg:w-[50vw]"
        ></iframe>
        <AlertDialogCancel className="bg-primary text-background border-0">
          close
        </AlertDialogCancel>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default Resume;
