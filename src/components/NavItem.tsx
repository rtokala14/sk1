export default function NavItem({
  path,
  title,
}: {
  path: string;
  title: string;
}) {
  const url = typeof window !== "undefined" ? window.location.pathname : "";

  return (
    <li>
      <a
        className={
          url === path
            ? "underline underline-offset-4 font-semibold text-lg"
            : "hover:font-medium"
        }
        href={path}
      >
        {title}
      </a>
    </li>
  );
}
