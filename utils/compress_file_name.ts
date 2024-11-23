export default function compressFile(fileName : any): String { 
    // define max length for file name
    const maxLength = 18;

    if(fileName.length > maxLength) {
        // removes suffix from file name
        const trueFileName = fileName.split('.').slice(0, -1).join('.');
        
        const fileExtension = fileName.split('.');

        const keptChars = maxLength - (trueFileName.length + fileExtension.length + 4);

        // truncates long file names by replacing the middle with ...
        const compressedFileName = trueFileName.substring(0, (maxLength - fileExtension.length - 4)) 
        + "..." + trueFileName.slice(-keptChars) + "." + fileExtension;

        return compressedFileName;

    }
    else {
        return fileName.trim();
    }
}