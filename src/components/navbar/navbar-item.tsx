interface NavBarItemProps {
  className: string;
  href: string;
  text: string;
}

export default function NavBarItem({ className, href, text }: NavBarItemProps) {
  return (
    <li className={className}>
      <a href={href}>{text}</a>
    </li>
  );
}
