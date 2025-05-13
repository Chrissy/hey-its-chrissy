import fs from 'fs';
import path from 'path';
import Tesseract from 'tesseract.js';

const caseStudiesDir = path.join(process.cwd(), 'static', 'case-studies');

async function extractTextFromImage(imagePath) {
    try {
        const result = await Tesseract.recognize(
            imagePath,
            'eng',
            { logger: m => console.log(m) }
        );
        return result.data.text;
    } catch (error) {
        console.error(`Error processing ${imagePath}:`, error);
        return '';
    }
}

async function processImages() {
    const images = ['flakytp1.png', 'flakytp2.png', 'flakytp3.png', 'flakytp4.png'];
    
    for (const image of images) {
        const imagePath = path.join(caseStudiesDir, image);
        console.log(`\nProcessing ${image}...`);
        const text = await extractTextFromImage(imagePath);
        console.log(`\nExtracted text from ${image}:`);
        console.log(text);
    }
}

processImages(); 