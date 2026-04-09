import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const githubRepository = process.env.GITHUB_REPOSITORY;
const [githubOwner = "", githubRepo = ""] = githubRepository?.split("/") ?? [];
const isUserPagesRepo =
  githubOwner &&
  githubRepo &&
  githubRepo.toLowerCase() === `${githubOwner.toLowerCase()}.github.io`;

export default defineConfig({
  base:
    process.env.GITHUB_ACTIONS && githubRepo
      ? isUserPagesRepo
        ? "/"
        : `/${githubRepo}/`
      : "/",
  plugins: [react()],
});
