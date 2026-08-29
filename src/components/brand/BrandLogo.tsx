import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/brand/logo.jpg';
import { site } from '../../data/site';
import styles from './BrandLogo.module.css';

type BrandLogoProps = {
  className?: string;
};

function knockOutWhite(source: string) {
  return new Promise<string>((resolve, reject) => {
    const image = new Image();
    image.onload = () => {
      try {
        const canvas = document.createElement('canvas');
        canvas.width = image.naturalWidth;
        canvas.height = image.naturalHeight;
        const context = canvas.getContext('2d');
        if (!context) {
          resolve(source);
          return;
        }
        context.drawImage(image, 0, 0);
        const pixels = context.getImageData(0, 0, canvas.width, canvas.height);
        const data = pixels.data;
        for (let index = 0; index < data.length; index += 4) {
          const red = data[index];
          const green = data[index + 1];
          const blue = data[index + 2];
          if (red > 248 && green > 248 && blue > 248) {
            data[index + 3] = 0;
          }
        }
        context.putImageData(pixels, 0, 0);
        resolve(canvas.toDataURL('image/png'));
      } catch (error) {
        reject(error);
      }
    };
    image.onerror = () => resolve(source);
    image.src = source;
  });
}

export function BrandLogo({ className }: BrandLogoProps) {
  const [src, setSrc] = useState(logo);

  useEffect(() => {
    let active = true;
    knockOutWhite(logo)
      .then((next) => {
        if (active) {
          setSrc(next);
        }
      })
      .catch(() => undefined);
    return () => {
      active = false;
    };
  }, []);

  return (
    <Link to="/" className={[styles.logo, className].filter(Boolean).join(' ')} aria-label={site.name}>
      <img className={styles.mark} src={src} alt={site.name} />
    </Link>
  );
}
