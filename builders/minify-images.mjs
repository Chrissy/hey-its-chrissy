import imagemin from 'imagemin';
import imageminMozjpeg from 'imagemin-mozjpeg';
import imageminPngquant from 'imagemin-pngquant';

const files = await imagemin(['static/images/*.{jpg,png}'], {
    destination: 'static/compressed_images',
    plugins: [imageminMozjpeg(), imageminPngquant({quality: [0.65, 0.8]})]
});

console.log(files);
