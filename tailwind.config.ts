import type { Config } from 'tailwindcss';

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
      },
      backgroundImage: {
        'neon-blue-pink': 'linear-gradient(135deg, #00d9ff, #0077ff, #ff00cc)',
        'pink-stream': 'linear-gradient(120deg, #0077ff, #ff00cc, #ff80ff)',
        'cool-blue-pink': 'linear-gradient(90deg, #00caff, #0099ff, #6633cc, #ff00ff)',
        'cyber-wave': 'linear-gradient(135deg, #80dfff, #0099ff, #ff66cc, #ff99ff)',
        'mystic-cyber': 'linear-gradient(45deg, #0033ff, #00ccff, #cc00ff)',
        // ピンク中心のサイバーストリーム
        'pink-strong': 'linear-gradient(120deg, #0055ff, #ff33cc, #ff99ff)',
        'pink-blue-balanced': 'linear-gradient(120deg, #0066ff, #ff66cc, #ffccff)',
        'dark-pink': 'linear-gradient(120deg, #0033BB, #cc00aa)',

        // クール系青からピンクの滑らかな変化
        'blue-calm': 'linear-gradient(90deg, #0099cc, #3366ff, #6699ff)',
        'cyber-blue': 'linear-gradient(90deg, #0033ff, #00aaff, #ff66ff)',
        'mystic-purple': 'linear-gradient(90deg, #0011ff, #6633cc, #ff99cc)',
      },
    },
  },
  plugins: [],
} satisfies Config;
