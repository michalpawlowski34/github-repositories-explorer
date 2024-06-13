import {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";
import { HiChevronDown } from "react-icons/hi";

type AccordionContextType = {
  isOpen: boolean;
  toggle: () => void;
};

const AccordionContext = createContext<AccordionContextType | undefined>(
  undefined
);

const useAccordionContext = () => {
  const context = useContext(AccordionContext);
  if (!context) {
    throw new Error("useAccordionContext must be used within an Accordion");
  }
  return context;
};

type AccordionProps = {
  children: ReactNode;
  onToggle?: (isOpen: boolean) => void;
};

const Accordion = ({ children, onToggle }: AccordionProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen((prev) => !prev);

  useEffect(() => {
    if (onToggle) {
      onToggle(isOpen);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen]);

  return (
    <AccordionContext.Provider value={{ isOpen, toggle }}>
      <div className="flex flex-col w-full">{children}</div>
    </AccordionContext.Provider>
  );
};

const AccordionHeader = ({ children }: { children: ReactNode }) => {
  const { isOpen, toggle } = useAccordionContext();
  return (
    <button
      onClick={toggle}
      className="flex items-center w-full p-3 transition-all rounded-sm bg-neutral-100 hover:bg-neutral-200"
    >
      <div className="flex items-center justify-between w-full">
        {children}

        <HiChevronDown
          className={`ml-auto transition duration-200 origin-center transform ${
            isOpen && "-rotate-180"
          }`}
        />
      </div>
    </button>
  );
};

const AccordionBody = ({ children }: { children: ReactNode }) => {
  const { isOpen } = useAccordionContext();
  return (
    <div
      className={`grid gap-2 overflow-hidden transition-all ${
        isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
      }`}
    >
      <div className="overflow-hidden">{children}</div>
    </div>
  );
};

export { Accordion, AccordionHeader, AccordionBody };
