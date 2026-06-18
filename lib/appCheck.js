"use client";

import { initializeAppCheck, ReCaptchaV3Provider } from "firebase/app-check";
import { app } from "./firebase";

export function initAppCheck() {
  if (typeof window !== "undefined") {
    return initializeAppCheck(app, {
      provider: new ReCaptchaV3Provider(
        "6Ld5EBQtAAAAAOrHb_yu_zl07UW7b7q2laUQzcAX"
      ),
      isTokenAutoRefreshEnabled: true,
    });
  }
}