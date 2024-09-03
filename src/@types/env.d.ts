/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_INSTA_ACCESS: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
