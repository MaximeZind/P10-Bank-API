// Fonction pour valider les noms
export function validateName(string) {
  const nameValue = string.trim();
  const regex = /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/; //pattern
  let response = false;
  let errorMsg = null;
  
  if (nameValue.length >= 2) { // plus de 2 caractères
    if ((regex.test(nameValue)) && (!nameValue.includes(",,")) && (!nameValue.includes("..")) && (!nameValue.includes("''")) && (!nameValue.includes("--")) && (!nameValue.trim().includes("  "))) {
      response = true;
    } else if ((regex.test(nameValue) === false) || (nameValue.includes(",,")) || (nameValue.includes("..")) || (nameValue.includes("''")) || (nameValue.includes("--")) || nameValue.trim().includes("  ")) {
      errorMsg = "This name is invalid."
    }
  } else if (nameValue.length < 2) {
    errorMsg = "The name must be at least 2 characters long."
  }

  let validation = {
    response: response,
    errorMsg: errorMsg
  }
  return validation;
}

// Fonction qui valide l'email

export function validateEmail(string) {
  const emailValue = string.toLowerCase().trim();
  const regex = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i;
  let response = false;
  let errorMsg = null;
  
  if (emailValue.match(regex) && !emailValue.includes(" ")) {
    response = true;
  } else if (!emailValue.match(regex) || emailValue.includes(" ")) {
    errorMsg = "This email address is invalid.";
  }
  let validation = {
    response: response,
    errorMsg: errorMsg
  }
  return validation;
}

export function validatePassword(string) {
  const password = string.trim();
  let response = false;
  let errorMsg = null;
  
  if (password.length >= 8) {
    response = true;
  } else if (password.length < 8) {
    errorMsg = "The password must be at least 8 characters long.";
  }
  let validation = {
    response: response,
    errorMsg: errorMsg
  }
  return validation;
}