import React from "react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

function AccordionDemo() {
  return (
    <Accordion type="single" collapsible>
      <AccordionItem value="item-1">
        <AccordionTrigger>Is it accessible?</AccordionTrigger>
        <AccordionContent>Yes. It adheres to the WAI-ARIA design pattern.</AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>What are the benefits?</AccordionTrigger>
        <AccordionContent>It provides a clear and concise way to organize content.</AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>How do I use it?</AccordionTrigger>
        <AccordionContent>Simply add the Accordion component to your page and include the AccordionItem components within it.</AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-4">
        <AccordionTrigger>What are the limitations?</AccordionTrigger>
        <AccordionContent>It is not suitable for all types of content.</AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-5">
        <AccordionTrigger>Where can I learn more?</AccordionTrigger>
        <AccordionContent>You can find more information on the Radix UI documentation.</AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}

export default AccordionDemo;
