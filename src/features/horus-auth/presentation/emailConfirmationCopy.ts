import type { ConfirmationOutcome } from "../data/emailConfirmationOperations";

export type ConfirmationLocale = "en" | "ar";
export type ConfirmationMessage = ConfirmationOutcome | "checking" | "awaitingAction";

interface ConfirmationCopy {
  switchLanguage: string;
  kicker: string;
  heading: string;
  accent: string;
  back: string;
  confirmAction: string;
  footer: string;
  messages: Record<ConfirmationMessage, string>;
}

export const confirmationCopy: Record<ConfirmationLocale, ConfirmationCopy> = {
  en: {
    switchLanguage: "العربية",
    kicker: "Secure Account Verification",
    heading: "Confirm",
    accent: "your email",
    back: "Back to KING NARMAR",
    confirmAction: "Confirm my email",
    footer: "If you did not create a H.O.R.U.S account, you can safely ignore this page.",
    messages: {
      awaitingAction: "Press the button below to confirm your email securely.",
      checking: "Confirming your H.O.R.U.S account...",
      confirmed: "Your email has been confirmed successfully. Return to H.O.R.U.S System and sign in.",
      missingToken: "This page has no confirmation token. If you already confirmed your email, sign in to the app. Otherwise request a new email.",
      unconfigured: "H.O.R.U.S authentication is unavailable on this website. Contact support.",
      invalidOrUsed: "This link is invalid, expired or already used. If you already confirmed your email, sign in to the app. Otherwise request a new confirmation email.",
      verificationFailed: "We could not verify the result. Try signing in to the app. If your email is not confirmed, request a new confirmation email.",
      signOutFailed: "Your email was confirmed, but temporary session sign-out failed. Close this tab before returning to the app.",
    },
  },
  ar: {
    switchLanguage: "English",
    kicker: "التحقق الآمن من الحساب",
    heading: "تأكيد",
    accent: "البريد الإلكتروني",
    back: "العودة إلى KING NARMAR",
    confirmAction: "تأكيد بريدي الإلكتروني",
    footer: "إذا لم تنشئ حسابًا في نظام H.O.R.U.S، يمكنك تجاهل هذه الصفحة.",
    messages: {
      awaitingAction: "اضغط على الزر أدناه لتأكيد بريدك الإلكتروني بأمان.",
      checking: "جارٍ تأكيد حسابك في نظام H.O.R.U.S...",
      confirmed: "تم تأكيد بريدك الإلكتروني بنجاح. يمكنك العودة إلى نظام H.O.R.U.S وتسجيل الدخول.",
      missingToken: "لا تحتوي الصفحة على رمز تأكيد. إذا أكدت بريدك بالفعل، سجل الدخول إلى التطبيق. وإلا اطلب رسالة جديدة.",
      unconfigured: "خدمة المصادقة لنظام H.O.R.U.S غير متاحة على الموقع. تواصل مع الدعم.",
      invalidOrUsed: "الرابط غير صالح أو منتهي الصلاحية أو مستخدم بالفعل. إذا أكدت بريدك بالفعل، سجل الدخول إلى التطبيق. وإلا اطلب رسالة تأكيد جديدة.",
      verificationFailed: "تعذر التحقق من النتيجة. حاول تسجيل الدخول إلى التطبيق. إذا لم يكن بريدك مؤكدًا، اطلب رسالة تأكيد جديدة.",
      signOutFailed: "تم تأكيد بريدك، لكن تعذر إنهاء الجلسة المؤقتة. أغلق علامة التبويب قبل العودة إلى التطبيق.",
    },
  },
};
