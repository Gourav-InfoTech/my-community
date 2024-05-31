export function humanizeTimestamp(timestamp: number | string | Date): string {
    const now = Date.now();
    const inputTime = typeof timestamp === "number" ? timestamp : typeof timestamp === "string" ? new Date(timestamp).getTime() : timestamp instanceof Date ? timestamp.getTime() : NaN;

    if (isNaN(inputTime)) {
        throw new Error("Invalid timestamp format");
    }

    const diff = now - inputTime;

    const seconds = Math.floor(diff / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    const weeks = Math.floor(days / 7);
    const months = Math.floor(days / 30);
    const years = Math.floor(days / 365);

    if (seconds < 10) {
        return `just now`;
    }
    if (seconds < 60) {
        return `${seconds} sec${seconds !== 1 ? "s" : ""} ago`;
    } else if (minutes < 60) {
        return `${minutes} min${minutes !== 1 ? "s" : ""} ago`;
    } else if (hours < 24) {
        return `${hours} hr${hours !== 1 ? "s" : ""} ago`;
    } else if (days < 7) {
        return `${days} day${days !== 1 ? "s" : ""} ago`;
    } else if (weeks < 4) {
        return `${weeks} week${weeks !== 1 ? "s" : ""} ago`;
    } else if (months < 12) {
        return `${months} month${months !== 1 ? "s" : ""} ago`;
    } else {
        return `${years} year${years !== 1 ? "s" : ""} ago`;
    }
}