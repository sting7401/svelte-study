import { tv } from "tailwind-variants";
import Root from "./button.svelte";
const buttonVariants = tv({
	base: "ring-offset-background focus-visible:ring-ring inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
	variants: {
		variant: {
			default: "bg-primary text-primary-foreground hover:bg-primary/90",
			destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
			outline:
				"border-input bg-background hover:bg-accent hover:text-accent-foreground border",
			secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
			ghost: "hover:bg-accent hover:text-accent-foreground",
			link: "text-primary underline-offset-4 hover:underline",
			deepnavy:
			'bg-primaryBlue-700 text-[14px] text-white rounded-[0px] hover:bg-primaryBlue-700/80 transition-all duration-300',
			// 연한 블루 버튼
			lightblue:
			  'bg-primaryBlue-100 text-[14px] font-bold text-primaryBlue-default rounded-full hover:bg-primaryBlue-100/50 transition-all duration-300',
		},
		size: {
			default: "h-10 px-4 py-2",
			sm: "h-9 rounded-md px-3",
			lg: "h-11 rounded-md px-8",
			icon: "h-10 w-10",
		},
	},
	defaultVariants: {
		variant: "default",
		size: "default",
	},
});
export {
	Root,
	//
	Root as Button,
	buttonVariants,
};
