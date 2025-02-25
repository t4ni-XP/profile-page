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
        accent: 'var(--accent)',
        'foreground-primary': 'var(--foreground-primary)',
        'foreground-secondary': 'var(--foreground-secondary)',
        'foreground-secondary-hover': 'var(--foreground-secondary-hover)',
        'tile-bg': 'var(--tile-bg)'
      },
      backgroundImage: {
        // light theme bg color
        'pink-horizon': 'linear-gradient(120deg, #A8D1FF, #FFA8EF)',
        // dark theme bg color
        'dark-pink': 'linear-gradient(120deg, #0033BB, #cc00aa)',

        // 'neon-blue-pink': 'linear-gradient(135deg, #00d9ff, #0077ff, #ff00cc)',
        // 'pink-stream': 'linear-gradient(120deg, #0077ff, #ff00cc, #ff80ff)',
        // 'cool-blue-pink': 'linear-gradient(90deg, #00caff, #0099ff, #6633cc, #ff00ff)',
        // 'cyber-wave': 'linear-gradient(135deg, #80dfff, #0099ff, #ff66cc, #ff99ff)',
        // 'mystic-cyber': 'linear-gradient(45deg, #0033ff, #00ccff, #cc00ff)',
        // ピンク中心のサイバーストリーム
        // 'pink-strong': 'linear-gradient(120deg, #0055ff, #ff33cc, #ff99ff)',
        // 'pink-blue-balanced': 'linear-gradient(120deg, #0066ff, #ff66cc, #ffccff)',
        
        // クール系青からピンクの滑らかな変化
        // 'blue-calm': 'linear-gradient(90deg, #0099cc, #3366ff, #6699ff)',
        // 'cyber-blue': 'linear-gradient(90deg, #0033ff, #00aaff, #ff66ff)',
        // 'mystic-purple': 'linear-gradient(90deg, #0011ff, #6633cc, #ff99cc)',


        // 以下がライトテーマ用の背景色例 (いずれか1つまたは複数を選択)
        // 'light-pink': 'linear-gradient(120deg, #ffe4fa, #ffc7f0)',
        // 'soft-lavender': 'linear-gradient(120deg, #e8e3fa, #fdeafa)',
        // 'pastel-pink': 'linear-gradient(120deg, #ffe7f1, #ffdcee)',
        // 'light-blossom': 'linear-gradient(120deg, #fce4fc, #fff0fb)',

        
        // ② パステルのピーチ×ピンクのグラデーション
        // 'sunrise-peach': 'linear-gradient(120deg, #FEDAC7 0%, #FCE6FB 100%)',
        
        // ③ 淡いミントグリーン×パステルピンクのグラデーション
        // 'pastel-twilight': 'linear-gradient(120deg, #C2FFD8 0%, #FFD1FF 100%)',
        
        // ④ パープル×スカイブルー系の鮮やかなグラデーション
        // 'vibrant-lavender': 'linear-gradient(120deg, #A3D8F4 0%, #E4C1F9 100%)',
      },
    },
  },
  plugins: [],
} satisfies Config;
