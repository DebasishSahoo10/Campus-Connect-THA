import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { Checkbox } from "@/components/ui/checkbox"
import { Slider } from "@/components/ui/slider"

// className="border rounded-xl"
export const Accordions = () => {
    return (
        <div className="lg:w-[28%] w-[100%] mt-5 text-left">
            <Accordion type="multiple">
                <AccordionItem value="listing-category" className="mb-1 border rounded-xl">
                    <AccordionTrigger className="text-base lg:text-xl font-semibold text-left p-5">Listing Categories</AccordionTrigger>
                    <AccordionContent className="pl-5">
                        <div className="flex items-center space-x-2">
                            <Checkbox id="terms" />
                            <label
                                htmlFor="terms"
                                className="text-base font-normal leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            >
                                Accept
                            </label>
                        </div>
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="listing-type" className="mb-1 border rounded-xl">
                    <AccordionTrigger className="text-base lg:text-xl font-semibold text-left p-5">Listing Type</AccordionTrigger>
                    <AccordionContent className="pl-5">
                        <div className="flex items-center space-x-2">
                            <Checkbox id="terms" />
                            <label
                                htmlFor="terms"
                                className="text-base font-normal leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            >
                                Accept
                            </label>
                        </div>
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="pay-type" className="border rounded-xl">
                    <AccordionTrigger className="text-base lg:text-xl font-semibold text-left p-5">Pay Type</AccordionTrigger>
                    <AccordionContent className="pl-5">
                        <div className="flex items-center space-x-2 mb-5">
                            <Checkbox id="terms" />
                            <label
                                htmlFor="terms"
                                className="text-base font-normal leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            >
                                Parternship/Collab
                            </label>
                        </div>
                        <div className="flex items-center space-x-2 mb-5">
                            <Checkbox id="terms" />
                            <label
                                htmlFor="terms"
                                className="text-base font-normal leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            >
                                Equity
                            </label>
                        </div>
                        <Slider
                            max={100}
                            min={0}
                            step={1}
                            value={[20, 40]}
                            minStepsBetweenThumbs={10}
                            formatLabel={(value) => `${value}`}
                            className="mb-5"
                        />
                        <div className="flex items-center space-x-2 mb-5">
                            <Checkbox id="terms" />
                            <label
                                htmlFor="terms"
                                className="mt-3 text-base font-normal leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            >
                                Stipend
                            </label>
                        </div>
                        <Slider
                            max={100}
                            min={0}
                            step={1}
                            value={[20, 40]}
                            minStepsBetweenThumbs={10}
                            formatLabel={(value) => `${value}`}
                            className="mb-5"
                        />
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </div>
    )
}