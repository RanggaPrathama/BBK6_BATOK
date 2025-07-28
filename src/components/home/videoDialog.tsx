"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {Play} from 'lucide-react';

interface VideoDialogProps{
    title :string;
    linkVideo :string;
}

export default function VideoDialog(props :VideoDialogProps){
    return(
            <Dialog>
              <DialogTrigger asChild>
                <Button size={null} className="inline-flex items-center gap-3 bg-primary/10 backdrop-blur-sm border border-primary/20 rounded-full px-6 py-3 text-primary hover:bg-primary/20 transition-all duration-300 cursor-pointer group">
                  <div className="bg-primary/20 rounded-full p-2 group-hover:scale-110 transition-transform">
                    <Play className="w-4 h-4" />
                  </div>
                  <span className="text-sm font-medium">
                    Tonton Cerita Kami
                  </span>
                </Button>
              </DialogTrigger>

              <DialogContent className="max-w-7xl w-full">
                <DialogHeader>
                  <DialogTitle className="text-xl font-bold text-center mb-4">
                    Video Program AIRLANGGA CAKAP
                  </DialogTitle>
                </DialogHeader>

                <div className="aspect-video w-full">
                  <iframe
                    src={props.linkVideo}
                    title={props.title}
                    className="w-full h-full rounded-lg"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </DialogContent>
            </Dialog>
    )
}