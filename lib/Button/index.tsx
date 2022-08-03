import { DOMAttributes } from "react";
interface Props extends DOMAttributes<HTMLDivElement> {
  className?: string;
}
export function Button({ className, children, ...rest }: Props): JSX.Element {
  return (
    <div className={[className].join(" ")} {...rest}>
      <button className="bg-red-400 text-base">click me3</button>
      {children}
    </div>
  );
}
