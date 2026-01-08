export function validateForm(email, password, fullName = "") {
  let isValidEmailRegex =
    /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
  let isValidPasswodRegex =
    /(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/.test(
      password
    );
  let isValidFullName = /^[a-zA-Z ]{2,}$/.test(fullName);

  if (!isValidEmailRegex) return "Email id is not valid";
  if (!isValidPasswodRegex) return "Password is not valid";
  if (fullName && !isValidFullName) return "Full name is not valid";

  return null;
}
