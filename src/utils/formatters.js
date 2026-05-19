// Format large number

export function formatCount(n) {
    if (n >= 1_000_000) 
        return `${(n / 1_000_000).toFixed(1)}M`;
    if (n >= 1_000)
        return `${(n / 1_000).toFixed(1)}K`;
    // return n.toString();
    return String(n);
}

// Relative time: "5 mins ago", "2hrs ago", "3 days ago"
export function timeAgo(date) {
    const diff = (Date.now() - new Date(date).getTime()) / 1000; // in seconds
    
    if(diff < 60) return 'just now';
    if(diff < 3600) return `${Math.floor(diff / 60)} mins ago`;
    if(diff < 86400) return `${Math.floor(diff / 3600)} hrs ago`;
    if(diff < 604800) return `${Math.floor(diff / 86400)} days ago`;

    return new Date(date).toLocaleDateString(undefined, {month: 'short', day: 'numeric', year: '2-digit'});
}

// Generate user's Display name
export function displayName(user) {
    if (!user) return 'Unknown';
    if(user.firstName && user.lastName) return `${user.firstName} ${user.lastName}.`;
    return user.name || user.username || 'User';
}

// Generate Avarter
export function initials(name ='') {
    return name.split(' ').map(n => n[0]).slice(0, 2).join('').toUpperCase();
}

// Truncate long text
export function clamp(text, max=120) {
    if (!text) return '';
    if (text.length <= max) return text;
    return text.slice(0, max) + '...';
}