import { Roboto } from 'next/font/google';


export const roboto = Roboto({
    subsets: ['latin'], // Specify character subsets (e.g., latin, latin-ext)
    weight: ['400', '700'], // Include desired font weights (e.g., 400 for regular, 700 for bold)
    style: ['normal', 'italic'], // Include font styles if needed
    display: 'swap', // Optimize font display for better performance
  });