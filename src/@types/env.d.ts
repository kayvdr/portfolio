/// <reference types="vite/client" />

declare const INSTA_ACCESS: string;

interface ImportMetaEnv {
  readonly VITE_INSTA_ACCESS: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
