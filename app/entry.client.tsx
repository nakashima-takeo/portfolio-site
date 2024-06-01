/**
 * デフォルトでは、Remixがクライアント上でアプリのハイドレイティングを行います。
 * このファイルは削除してもかまいませんが、再度公開したい場合は `npx remix reveal` を実行してください✨。
 * 詳細は https://remix.run/file-conventions/entry.client を参照してください。
 */

import { RemixBrowser } from "@remix-run/react";
import { startTransition, StrictMode } from "react";
import { hydrateRoot } from "react-dom/client";

startTransition(() => {
  hydrateRoot(
    document,
    <StrictMode>
      <RemixBrowser />
    </StrictMode>
  );
});
