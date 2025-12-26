'use client';

import React, { useEffect, useState } from 'react';
import { Star } from 'lucide-react';

interface GitHubStats {
    stars: number;
    forks: number;
}

interface NpmStats {
    version: string;
    downloads: number;
}

export const StatsDisplay: React.FC = () => {
    const [githubStats, setGithubStats] = useState<GitHubStats | null>(null);
    const [npmStats, setNpmStats] = useState<NpmStats | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchStats = async () => {
            try {
                // Fetch GitHub stats
                const githubResponse = await fetch('https://api.github.com/repos/onesamket/geez-input');
                const githubData = await githubResponse.json();

                setGithubStats({
                    stars: githubData.stargazers_count || 0,
                    forks: githubData.forks_count || 0,
                });

                // Fetch npm stats
                const npmResponse = await fetch('https://registry.npmjs.org/geez-input');
                const npmData = await npmResponse.json();

                setNpmStats({
                    version: npmData['dist-tags']?.latest || '1.0.0',
                    downloads: 0, // npm registry doesn't provide download count directly
                });
            } catch (error) {
                console.error('Error fetching stats:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchStats();
    }, []);

    if (loading) {
        return (
            <div className="flex items-center space-x-2">
                <div className="h-8 w-16 bg-[#343a46] rounded-md animate-pulse" />
            </div>
        );
    }

    return (
        <div className="flex items-center gap-2">
            {githubStats && (
                <a
                    href="https://github.com/onesamket/geez-input"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-[#ebecf0] hover:text-[#149eca] transition-colors px-3 py-2 rounded-md hover:bg-[#343a46]"
                >
                    <Star className="w-4 h-4" />
                    <span className="font-bold text-sm">{githubStats.stars.toLocaleString()}</span>
                </a>
            )}

            {npmStats && (
                <a
                    href="https://www.npmjs.com/package/geez-input"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hidden sm:flex items-center gap-2 text-[#ebecf0] hover:text-[#149eca] transition-colors px-3 py-2 rounded-md hover:bg-[#343a46]"
                >
                    <span className="text-sm font-medium">v{npmStats.version}</span>
                </a>
            )}
        </div>
    );
};
