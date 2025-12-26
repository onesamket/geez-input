import { Link, useRouterState } from '@tanstack/react-router';
import { ChevronRight } from 'lucide-react';
import { useState } from 'react';

interface NavItem {
    title: string;
    href: string;
    items?: NavItem[];
}

const navItems: NavItem[] = [
    {
        title: 'Getting Started',
        href: '/docs/getting-started',
    },
    {
        title: 'React',
        href: '/docs/react',
        items: [
            { title: 'Installation', href: '/docs/react#installation' },
            { title: 'Components', href: '/docs/react#components' },
            { title: 'Hooks', href: '/docs/react#hooks' },
            { title: 'Examples', href: '/docs/react#examples' },
        ],
    },
    {
        title: 'Core Engine',
        href: '/docs/core',
        items: [
            { title: 'Overview', href: '/docs/core#overview' },
            { title: 'API Reference', href: '/docs/core#api' },
            { title: 'Integration', href: '/docs/core#integration' },
        ],
    },
    {
        title: 'Phonetic Guide',
        href: '/docs/guide',
    },
    {
        title: 'API Reference',
        href: '/docs/api',
    },
];

interface SidebarItemProps {
    item: NavItem;
    level?: number;
}

function SidebarItem({ item, level = 0 }: SidebarItemProps) {
    const router = useRouterState();
    const currentPath = router.location.pathname;
    const currentHash = router.location.hash;
    const hasHash = item.href.includes('#');
    const basePath = hasHash ? item.href.split('#')[0] : item.href;
    const hash = hasHash ? item.href.split('#')[1] : '';

    const isActive = hasHash
        ? currentPath === basePath && currentHash === `#${hash}`
        : currentPath === item.href || currentPath.startsWith(item.href + '/');

    const hasChildren = item.items && item.items.length > 0;
    const [isExpanded, setIsExpanded] = useState(isActive || currentPath.startsWith(basePath));

    const handleClick = (e: React.MouseEvent) => {
        if (hasChildren) {
            e.preventDefault();
            setIsExpanded(!isExpanded);
        }
    };

    const linkContent = (
        <>
            <span>{item.title}</span>
            {hasChildren && (
                <ChevronRight
                    size={16}
                    className={`transition-transform ${isExpanded ? 'rotate-90' : ''}`}
                />
            )}
        </>
    );

    return (
        <div>
            {hasHash ? (
                <a
                    href={item.href}
                    onClick={handleClick}
                    className={`
            flex items-center justify-between px-3 py-2 rounded-lg text-sm font-medium transition-colors
            ${isActive
                            ? 'bg-[#149eca]/20 text-[#149eca]'
                            : 'text-[#ebecf0] hover:bg-[#343a46] hover:text-[#f6f7f9]'
                        }
          `}
                    style={{ paddingLeft: `${12 + level * 16}px` }}
                >
                    {linkContent}
                </a>
            ) : (
                <Link
                    to={item.href}
                    onClick={handleClick}
                    className={`
            flex items-center justify-between px-3 py-2 rounded-lg text-sm font-medium transition-colors
            ${isActive
                            ? 'bg-[#149eca]/20 text-[#149eca]'
                            : 'text-[#ebecf0] hover:bg-[#343a46] hover:text-[#f6f7f9]'
                        }
          `}
                    style={{ paddingLeft: `${12 + level * 16}px` }}
                >
                    {linkContent}
                </Link>
            )}
            {hasChildren && isExpanded && item.items && (
                <div className="mt-1 space-y-1">
                    {item.items.map((subItem) => (
                        <SidebarItem key={subItem.href} item={subItem} level={level + 1} />
                    ))}
                </div>
            )}
        </div>
    );
}

export default function Sidebar() {
    return (
        <aside className="w-64 shrink-0 border-r border-[#343a46] bg-[#23272f] h-full overflow-y-auto">
            <div className="p-4">
                <Link
                    to="/docs"
                    className="flex items-center gap-2 mb-6 px-3 py-2 rounded-lg hover:bg-[#343a46] transition-colors"
                >
                    <div className="w-6 h-6 flex items-center justify-center text-[#149eca]">
                        <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
                        </svg>
                    </div>
                    <span className="font-bold text-base tracking-tight text-[#f6f7f9]">Documentation</span>
                </Link>
                <nav className="space-y-1">
                    {navItems.map((item) => (
                        <SidebarItem key={item.href} item={item} />
                    ))}
                </nav>
            </div>
        </aside>
    );
}

