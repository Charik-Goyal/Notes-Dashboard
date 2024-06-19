"use client"
import { CircleCheck , Copy, Plus } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useState } from "react";

export function Card() {
    const [text, setText] = useState('');
    const [isEditingTitle, setIsEditingTitle] = useState(false);
    const [isEditingDescription, setIsEditingDescription] = useState(false);
    const [title, setTitle] = useState('Title');
    const [description, setDescription] = useState('Description');

    const handleTextChange = (value: string) => {
        setText(value);
    };
    const titleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newTitle = e.target.value;
        if (newTitle.length === 0) {
          setTitle("Title"); // Reset to default or previous value if needed
        }
        setIsEditingTitle(false)
    };

    const checkDescription = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newTitle = e.target.value;
        if (newTitle.length === 0) {
            setDescription("Description"); // Reset to default or previous value if needed
        }
        setIsEditingDescription(false)
    }
      
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant="outline" size="icon">
                    <Plus className="h-4 w-4" />
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
                <DialogHeader>
                    {isEditingTitle ? (
                        <input
                            type="text"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            onBlur={titleChange}
                            autoFocus
                            className="border-b-2 border-gray-300 focus:outline-none focus:border-blue-500"
                        />
                    ) : (
                        <DialogTitle onClick={() => setIsEditingTitle(true)} className="cursor-pointer">
                            {title}
                        </DialogTitle>
                    )}
                    {isEditingDescription ? (
                        <input
                            className="mt-3 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            onBlur={checkDescription}
                            autoFocus
                        />
                    ) : (
                        <DialogDescription onClick={() => setIsEditingDescription(true)} className="cursor-pointer">
                            {description}
                        </DialogDescription>
                    )}
                </DialogHeader>
                <div className="flex items-center space-x-3">
                    <div className="grid flex-1 gap-3">
                        <ReactQuill theme="snow" value={text} onChange={handleTextChange} style={{ height: '280px', width: '400px' }} />
                    </div>
                </div>
                <div className="flex justify-center">
                    <DialogFooter>
                        <Button type="button" variant="secondary" className="mt-10 w-28 text-lg bg-slate-200 hover:bg-black hover:text-gray-50">
                            <CircleCheck className="m-1"/> Save
                        </Button>
                    </DialogFooter>
                </div>
            </DialogContent>
        </Dialog>
    )
}