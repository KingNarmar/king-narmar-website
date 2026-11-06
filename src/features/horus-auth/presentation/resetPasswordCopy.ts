import {
  HORUS_PASSWORD_MIN_LENGTH,
  HORUS_PASSWORD_MAX_UTF8_BYTES,
} from "../domain/passwordPolicy.ts";

export type HorusResetLocale = "en" | "ar";
export type HorusResetMessage =
  | "checking"
  | "unconfigured"
  | "missingToken"
  | "invalidToken"
  | "ready"
  | "tooShort"
  | "tooLong"
  | "mismatch"
  | "saving"
  | "signingOut"
  | "updateFailed"
  | "signOutFailed"
  | "success";

interface ResetPasswordCopy {
  switchLanguage: string;
  kicker: string;
  heading: string;
  headingAccent: string;
  newPassword: string;
  confirmPassword: string;
  enterPassword: string;
  confirmPasswordPlaceholder: string;
  updatePassword: string;
  updating: string;
  retrySignOut: string;
  backToSite: string;
  securityNoteTitle: string;
  securityNote: string;
  messages: Record<HorusResetMessage, string>;
}

export const horusResetCopy: Record<HorusResetLocale, ResetPasswordCopy> = {
  en: {
    switchLanguage: "العربية",
    kicker: "Secure Password Recovery",
    heading: "Reset",
    headingAccent: "your password",
    newPassword: "New password",
    confirmPassword: "Confirm password",
    enterPassword: "Enter new password",
    confirmPasswordPlaceholder: "Confirm new password",
    updatePassword: "Update password",
    updating: "Updating...",
    retrySignOut: "Retry secure sign-out",
    backToSite: "Back to KING NARMAR",
    securityNoteTitle: "Security note",
    securityNote:
      "If you did not request this password reset, you can safely ignore this page and keep using your current password.",
    messages: {
      checking: "Checking your H.O.R.U.S reset link...",
      unconfigured: "H.O.R.U.S authentication is not configured on this website yet.",
      missingToken:
        "This reset link is missing its secure token. Please request a new password reset email.",
      invalidToken:
        "This reset link is invalid or has expired. Please request a new password reset email.",
      ready: "Enter a new password for your H.O.R.U.S System account.",
      tooShort: `Your new password must be at least ${HORUS_PASSWORD_MIN_LENGTH} characters long.`,
      tooLong: `Your new password must not exceed ${HORUS_PASSWORD_MAX_UTF8_BYTES} UTF-8 bytes. Some characters use multiple bytes.`,
      mismatch: "The two passwords do not match.",
      saving: "Updating your password...",
      signingOut: "Signing out of your recovery session...",
      updateFailed:
        "We could not update your password. Check your new password and try again, or request a fresh reset link.",
      signOutFailed:
        "Your password was updated, but secure sign-out failed. Retry sign-out now. If it keeps failing, clear the browser site data for kingnarmar.com before using this browser again.",
      success:
        "Your password has been updated successfully. You can now return to H.O.R.U.S System and sign in with your new password.",
    },
  },
  ar: {
    switchLanguage: "English",
    kicker: "استعادة كلمة المرور بأمان",
    heading: "إعادة تعيين",
    headingAccent: "كلمة المرور",
    newPassword: "كلمة المرور الجديدة",
    confirmPassword: "تأكيد كلمة المرور",
    enterPassword: "أدخل كلمة المرور الجديدة",
    confirmPasswordPlaceholder: "أعد إدخال كلمة المرور",
    updatePassword: "تحديث كلمة المرور",
    updating: "جارٍ التحديث...",
    retrySignOut: "إعادة محاولة تسجيل الخروج الآمن",
    backToSite: "العودة إلى KING NARMAR",
    securityNoteTitle: "ملاحظة أمنية",
    securityNote:
      "إذا لم تطلب إعادة تعيين كلمة المرور، يمكنك تجاهل هذه الصفحة والاستمرار في استخدام كلمة المرور الحالية.",
    messages: {
      checking: "جارٍ التحقق من رابط استعادة كلمة مرور H.O.R.U.S...",
      unconfigured: "خدمة المصادقة لنظام H.O.R.U.S غير مهيأة على الموقع حاليًا.",
      missingToken: "رابط الاستعادة لا يحتوي على رمز التحقق الآمن. اطلب رسالة جديدة.",
      invalidToken: "رابط الاستعادة غير صالح أو انتهت صلاحيته. اطلب رسالة جديدة.",
      ready: "أدخل كلمة مرور جديدة لحسابك في نظام H.O.R.U.S.",
      tooShort: `يجب ألا تقل كلمة المرور الجديدة عن ${HORUS_PASSWORD_MIN_LENGTH} حرفًا.`,
      tooLong: `يجب ألا يزيد حجم كلمة المرور عن ${HORUS_PASSWORD_MAX_UTF8_BYTES} بايت بترميز UTF-8؛ بعض الحروف والرموز تشغل أكثر من بايت.`,
      mismatch: "كلمتا المرور غير متطابقتين.",
      saving: "جارٍ تحديث كلمة المرور...",
      signingOut: "جارٍ تسجيل الخروج من جلسة الاستعادة...",
      updateFailed:
        "تعذر تحديث كلمة المرور. راجع كلمة المرور الجديدة وحاول مجددًا، أو اطلب رابط استعادة جديدًا.",
      signOutFailed:
        "تم تحديث كلمة المرور، لكن تعذر تسجيل الخروج الآمن. أعد المحاولة الآن. إذا استمر الفشل، امسح بيانات موقع kingnarmar.com من المتصفح قبل استخدامه مجددًا.",
      success:
        "تم تحديث كلمة المرور بنجاح. يمكنك العودة إلى تطبيق H.O.R.U.S وتسجيل الدخول بكلمة المرور الجديدة.",
    },
  },
};
