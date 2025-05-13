import fs from 'fs';
import path from 'path';

const caseStudiesDir = path.join(process.cwd(), 'static', 'case-studies');

// Function to convert to camelCase
function toCamelCase(str) {
    // Remove file extension
    const [name, ext] = str.split('.');
    // Convert to camelCase
    return name
        .toLowerCase()
        .replace(/\s+/g, '')
        .replace(/^[A-Z]/, c => c.toLowerCase()) + '.' + ext;
}

// Read directory
const files = fs.readdirSync(caseStudiesDir);

// Rename each file
files.forEach(file => {
    if (file === '.DS_Store') return; // Skip .DS_Store
    
    const oldPath = path.join(caseStudiesDir, file);
    const newName = toCamelCase(file);
    const newPath = path.join(caseStudiesDir, newName);
    
    console.log(`Renaming ${file} to ${newName}`);
    fs.renameSync(oldPath, newPath);
});

console.log('All files renamed successfully!'); 