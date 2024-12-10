/// <reference types="vite/client" />

declare const GA_ID: string;

interface ImportMetaEnv {
  readonly GA_ID: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
