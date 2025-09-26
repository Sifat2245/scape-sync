import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";

// Accordion Root
const Accordion = ({ children, defaultValue, collapsible }) => {
  const [value, setValue] = useState(defaultValue);

  const toggleItem = (itemValue) => {
    if (collapsible && value === itemValue) {
      setValue(null);
    } else {
      setValue(itemValue);
    }
  };

  return (
    <div className="w-full space-y-4">
      {React.Children.map(children, (child) =>
        React.cloneElement(child, {
          isOpen: value === child.props.value,
          toggleItem: () => toggleItem(child.props.value),
        })
      )}
    </div>
  );
};

// Accordion Item
const AccordionItem = ({ className, children, isOpen, toggleItem }) => (
  <div className={className}>
    {React.Children.map(children, (child) =>
      React.cloneElement(child, { isOpen, toggleItem })
    )}
  </div>
);

// Accordion Trigger
const AccordionTrigger = ({ children, isOpen, toggleItem }) => (
  <button
    onClick={toggleItem}
    data-state={isOpen ? "open" : "closed"}
    className="group flex w-full items-center justify-between text-left text-lg font-medium text-gray-900 hover:no-underline py-6"
  >
    <span>{children}</span>
    <div className="relative h-5 w-5 flex-shrink-0">
      <Plus
        className={`h-full w-full transition-all duration-300 ${
          isOpen ? "opacity-0 rotate-90" : "opacity-100 rotate-0"
        }`}
      />
      <Minus
        className={`absolute top-0 left-0 h-full w-full transition-all duration-300 ${
          isOpen ? "opacity-100 rotate-0" : "opacity-0 -rotate-90"
        }`}
      />
    </div>
  </button>
);

// Accordion Content
const AccordionContent = ({ children, isOpen, className }) => (
  <div
    className={`overflow-hidden text-sm transition-all duration-300 ease-in-out ${
      isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
    }`}
  >
    <div className={className}>{children}</div>
  </div>
);

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
