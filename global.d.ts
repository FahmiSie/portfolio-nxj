// Add simple module declarations for style files so TypeScript won't error
// when importing side-effect CSS (e.g. `import './globals.css'`)

declare module '*.css';
declare module '*.scss';
declare module '*.sass';
declare module '*.less';
declare module '*.styl';
