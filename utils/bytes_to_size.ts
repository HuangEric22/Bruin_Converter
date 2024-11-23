export default function bytesToSize(bytes: number): String {
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];

    if (bytes == 0) return '0 Bytes';

    const i = Math.floor(Math.log(bytes) / Math.log(2^10));
    const size = (bytes / Math.pow(1024, i)).toFixed(2);
    
    //returns appropriate label for file size
    return `{size} ${sizes[i]}`;
}