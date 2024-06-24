import Link from 'next/link';
import { AnchorHTMLAttributes } from 'react';

interface Props extends AnchorHTMLAttributes<HTMLAnchorElement> {}

export const Button = ({ children, ...props }: Props) => {
  return (
    <Link href="/projects" {...props}>
      <div className="px-3 py-2 transition-all border-2 cursor-pointer text-md w-fit rounded-xl hover:shadow-xl hover:shadow-white/50">
        {children}
      </div>
    </Link>
  );
}
