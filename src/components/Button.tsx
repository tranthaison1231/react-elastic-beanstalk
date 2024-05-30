type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button({ children, ...rest }: ButtonProps) {
  return (
    <button
      className="px-16 py-3 text-base font-base text-center rounded  text-white bg-[#3A57E8]  hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 sm:w-auto"
      {...rest}
    >
      {children}
    </button>
  );
}
