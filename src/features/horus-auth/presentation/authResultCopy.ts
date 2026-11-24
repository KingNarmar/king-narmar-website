import type { AuthResult } from "./authResult";

interface ResultCopy {
  title: string;
  message: string;
  arabic: string;
}

export const authResultCopy: Record<AuthResult, ResultCopy> = {
  directAccess: {
    title: "Email confirmation",
    message: "This page cannot verify your email address. Open the confirmation link from your email. If you have already confirmed your email, return to H.O.R.U.S System and sign in.",
    arabic: "لا يمكن لهذه الصفحة التحقق من بريدك الإلكتروني. افتح رابط التأكيد الموجود في رسالة البريد. إذا كنت قد أكدت بريدك بالفعل، ارجع إلى نظام H.O.R.U.S وسجل الدخول.",
  },
  callback: {
    title: "Return to H.O.R.U.S System",
    message: "Return to the app and sign in to check your account status. If your email is still unconfirmed, request a new confirmation email. This page does not verify your account or create a session.",
    arabic: "ارجع إلى التطبيق وسجل الدخول للتحقق من حالة حسابك. إذا ظل بريدك غير مؤكد، اطلب رسالة تأكيد جديدة. هذه الصفحة لا تتحقق من حسابك ولا تنشئ جلسة تسجيل دخول.",
  },
  expired: {
    title: "Confirmation link already used or expired",
    message: "This one-time confirmation link is no longer valid. If you already confirmed your email, return to H.O.R.U.S System and sign in. Otherwise, request a new confirmation email.",
    arabic: "إذا كنت قد أكدت بريدك بالفعل، ارجع إلى تطبيق H.O.R.U.S وحاول تسجيل الدخول. إذا ظل البريد غير مؤكد، اطلب رسالة تأكيد جديدة.",
  },
  error: {
    title: "Email confirmation could not be completed",
    message: "H.O.R.U.S could not complete this email confirmation. Return to the app and try signing in. If your email is still unconfirmed, request a new confirmation email.",
    arabic: "تعذر إكمال تأكيد البريد الإلكتروني. ارجع إلى تطبيق H.O.R.U.S وحاول تسجيل الدخول. إذا ظل البريد غير مؤكد، اطلب رسالة تأكيد جديدة.",
  },
};

export const authResultLabels = {
  kicker: "Secure Account Verification",
  support: "H.O.R.U.S Support",
  back: "Back to KING NARMAR",
};
