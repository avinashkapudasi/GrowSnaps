/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_YOUNG_RISERS_FEE_INR?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

declare module '*.docx' {
  const src: string;
  export default src;
}
