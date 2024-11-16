"use client";
import React from "react";
import { motion } from "framer-motion";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { LogOut, Menu, Plus } from "lucide-react";
import SheetWrapper from "@/components/dashboard/sheetWrapper";
import { SectionWrapper } from "@/components/dashboard/Section-wrapper";
import { TaskContainer } from "@/components/dashboard/TaskContainer";
import AddTaskForm from "@/components/dashboard/AddTask";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import formSchema from "@/types/zodType";
import { useQueryClient } from "@tanstack/react-query";
const page = () => {

  return (
    <SectionWrapper>
    <div className="flex-grow flex flex-col min-h-screen   w-full">
      <div className="container mx-auto flex flex-col min-h-screen w-full">
        <section className="w-full py-2 md:py-24 lg:py-32 xl:py-38 relative select-none flex flex-col gap-2 md:mt-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center text-center space-y-8"
          >
            <DashboardHeader />
            <TaskContainer />
          </motion.div>
        </section>
      </div>
    </div>
  </SectionWrapper>
  )
}

function DashboardHeader() {
  const [isLoading, setIsLoading] = useState(false);
  const [isOpen, setIsOpen] = React.useState(false);
  const [isLoggingOut, setIsLoggingOut] = React.useState(false);
  const handleLogout = () => {
    setIsLoggingOut(true);
    signOut();
    setIsLoggingOut(false);
  };
  const [title, setTitle] = useState('');
  const [url, setUrl] = useState('');
    
    
    
  

 

    const handleSubmit = async (e) => {
      e.preventDefault();
      
      try {
        setIsLoading(true);
        const result=  formSchema.safeParse({title,url});

   if(!result.success){
         console.log(result.error);
       }

        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        console.log(error);
        
      }
    }
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full md:w-[85%] md:px-4 py-6 md:py-8 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <div className="flex  sm:flex-row sm:items-center justify-between gap-4">
          <motion.h1
            className="text-3xl font-bold tracking-tight md:text-4xl text-center sm:text-left"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Dashboard
          </motion.h1>
          <div className="flex items-center gap-3 flex-wrap justify-center sm:justify-start">
            <Button
              variant="outline"
              size="icon"
              className="md:hidden flex justify-center items-center"
              onClick={() => setIsOpen(true)}
            >
              <Plus className=" h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="md:hidden bg-red-500"
              onClick={() => signOut()}
            >
              <LogOut className=" h-4 w-4" />
            </Button>

            <motion.div
              className="hidden md:flex md:gap-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <Button
                variant="destructive"
                onClick={() => signOut()}
                className="flex items-center gap-2 rounded-lg"
              >
                <LogOut className="h-4 w-4" />
                <span className="hidden lg:inline">Log Out</span>
              </Button>
              <Dialog>
      <DialogTrigger asChild>
        <Button >Add Task</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add CronJob</DialogTitle>
          <DialogDescription className=" text-red-400">
          By default, we will send an email notification if this server returns any status code other than 200.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right font-semibold ">
            Title*
            </Label>
            <Input  value={title}  onChange={(e)=>setTitle(e.target.value)} id="name" placeholder="name" className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right font-semibold">
            URL*
            </Label>
            <Input id="username" value={url} onChange={(e)=>setUrl(e.target.value)}  placeholder="https://example.com" className="col-span-3"  />
          </div>
        </div>
        <DialogFooter>
          <Button disabled={isLoading} onClick={handleSubmit} >Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
            </motion.div>
          </div>
        </div>
      </div>
      <SheetWrapper
        title="Add Task"
        description="Add a new task to monitor"
        isOpen={isOpen}
        handleClose={() => setIsOpen(false)}
      >
        <AddTaskForm />
      </SheetWrapper>
    </motion.div>
  );
}

export default page