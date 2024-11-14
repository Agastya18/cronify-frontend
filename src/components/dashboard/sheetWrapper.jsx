import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
  } from "@/components/ui/sheet";
 

  const SheetWrapper= ({
    isOpen,
    handleClose,
    children,
    title,
    description,
  }) => {
    return (
      <Sheet open={isOpen} onOpenChange={handleClose}>
        <SheetContent className="flex flex-col pb-0 overflow-y-auto no-scrollbar">
          <SheetHeader>
            <SheetTitle className="text-2xl">{title}</SheetTitle>
            <SheetDescription>{description}</SheetDescription>
          </SheetHeader>
  
          {children}
        </SheetContent>
      </Sheet>
    );
  };
  
  export default SheetWrapper;