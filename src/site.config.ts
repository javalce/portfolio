interface NavLink {
  href: string;
  label: string;
}

export const NAV_LINKS: NavLink[] = [
  { href: '/projects', label: 'Proyectos' },
  { href: '/work', label: 'Trabajo' },
  { href: '/blog', label: 'Blog' },
] as const;
