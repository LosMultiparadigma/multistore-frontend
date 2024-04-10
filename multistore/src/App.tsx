import "./App.css";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { LoginForm } from "./LoginForm";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function App() {
  return (
    <>
    <div className="mx-auto max-w-sm pb-5">
    <Card className="p-4">
        <CardHeader>
          <CardTitle className="text-2xl font-bold">Welcome to MultiStore 🏬</CardTitle>
        </CardHeader>
        <CardDescription className="text-2xl font-bold">
          Hoy no estamos, regrese otro día 🌞
        </CardDescription>
        {/* <CardFooter>
          <Button>Jjajaa OK</Button>
        </CardFooter> */}
      </Card>
    </div>
      <LoginForm />
      <Accordion type="single" collapsible className="mx-auto max-w-sm pt-8">
        <AccordionItem value="item-1">
          <AccordionTrigger>Ya está listo el proyecto?</AccordionTrigger>
          <AccordionContent>
            No, por ahora solo es un esqueleto de proyecto con Vite y React.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>
            Para cuándo va a estar listo el proyecto?
          </AccordionTrigger>
          <AccordionContent>
            Pues no sé, pero espero que pronto.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>
            Se puede confiar en que el proyecto estará listo pronto?
          </AccordionTrigger>
          <AccordionContent>
            Sí, es posible, pero no garantizo nada.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger>
            Es posible que el proyecto no esté listo nunca?
          </AccordionTrigger>
          <AccordionContent>
            Quizá sí, quizá no, aún no lo sé, el tiempo lo dirá.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </>
  );
}
