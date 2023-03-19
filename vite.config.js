import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

const root = process.cwd();

export default defineConfig({
    resolve: {
        alias: {
            "@": path.resolve(root, "src"),
            "@assets": path.resolve(root, "src/assets"),
            "@config": path.resolve(root, "src/config"),
            "@features": path.resolve(root, "src/features"),
            "@hooks": path.resolve(root, "src/hooks"),
            "@icons": path.resolve(root, "src/icons"),
            "@pages": path.resolve(root, "src/pages"),
            "@routes": path.resolve(root, "src/routes"),
            "@styles": path.resolve(root, "src/styles"),
            "@themes": path.resolve(root, "src/themes"),
            "@utils": path.resolve(root, "src/utils"),
        },
    },
    plugins: [react()],
});
