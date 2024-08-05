import React from "react";
import SheetComponent from "./Sheet";
import Sheet from "./components/SheetDemo";
import { InputDemo } from "./components/InputDemo";
import { InputForm } from "./components/FormDemo";
import { ComboboxDemo } from "./components/Combobox";
import { Separator } from "@/components/ui/separator";
import { DropDownDemo } from "./components/DropdownDemo";
import SwitchDemo from "./components/SwitchDemo";
import AccordionDemo from "./components/AccordionDemo";

function ComponentsDemo() {
  return (
    <>
      <div className="flex flex-col gap-3 mb-3 ">
        <p className="mb-3 text-2xl font-bold text-slate-600"> Modal and Side Drawer:</p>
        <div className="flex gap-3 mb-3 ">
          <SheetComponent />
          <Sheet />
        </div>
      </div>
      <Separator />
      <div className="my-5">
        <p className="mb-3 text-2xl font-bold text-slate-600">Input Components:</p>
        <InputDemo />
      </div>
      <Separator />
      <div className="my-3 w-[550px]">
        <p className="mb-3 text-2xl font-bold text-slate-600">Form:</p>
        <div className="flex flex-col gap-4">
          {/* <InputForm /> */}
          <div className="flex items-center gap-4">
            <ComboboxDemo />
            <DropDownDemo />
            <SwitchDemo />
          </div>
          <div>
            <InputForm />
          </div>
        </div>
      </div>
      <Separator />

      <div className="my-3 w-[550px]">
        <p className="mb-3 text-2xl font-bold text-slate-600">Accordion:</p>
        <AccordionDemo />
      </div>
    </>
  );
}

export default ComponentsDemo;
