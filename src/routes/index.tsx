import { createFileRoute } from "@tanstack/react-router";
import HomePage from "@/HomePage";

export const Route = createFileRoute("/")({
  component: HomePage,
  head: () => ({
    meta: [
      { title: "FilBud — Wykończenia Wnętrz | Remonty Koszyce Małe, Tarnów" },
      { name: "description", content: "FilBud — profesjonalne wykończenia wnętrz i usługi remontowo-budowlane w Koszycach Małych i okolicach Tarnowa. Ocena 4,6/5. Bezpłatna wycena." },
    ],
  }),
});
