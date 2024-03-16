export function getErrorMessage(errorCode) {
    switch (errorCode) {
        case "auth/email-already-in-use":
            return "The email address is already in use";
        case "auth/weak-password":
            return "The password is too weak";
        case "auth/invalid-email":
            return "The email address is invalid.";
        case "auth/user-not-found":
            return "There is no user record corresponding to this email";
        case "auth/wrong-password":
            return "The password is incorrect";
        case "auth/user-disabled":
            return "The user account has been disabled.";
        case "auth/user-token-expired":
            return "The user's credential has expired. Please sign in again";
        case "auth/operation-not-allowed":
            return "The requested authentication operation is not allowed";
        case "auth/network-request-failed":
            return "A network error occurred. Please check your internet connection.";
        case "auth/internal-error":
            return "An internal error occurred. Please try again later.";
        default:
            return "An unknown error occurred.";
    }
}