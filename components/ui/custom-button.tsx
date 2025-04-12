import { cn } from "@/lib/utils"
import { Button, type ButtonProps } from "@/components/ui/button"

interface CustomButtonProps extends Omit<ButtonProps, "variant"> {
  variant?: "primary" | "secondary" | "outline" | "ghost"
}

export function CustomButton({ className, variant = "primary", ...props }: CustomButtonProps) {
  const baseStyles = "font-medium transition-all duration-300 ease-in-out"

  const variantStyles = {
    primary: "bg-sage hover:bg-dark-green text-white",
    secondary: "bg-dark-green hover:bg-sage text-white",
    outline: "border border-sage text-sage hover:bg-sage hover:text-white",
    ghost: "text-sage hover:bg-sage/10",
  }

  return <Button className={cn(baseStyles, variantStyles[variant], className)} variant="default" {...props} />
}
