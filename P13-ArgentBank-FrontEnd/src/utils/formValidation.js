// Fonction pour valider les noms
export function validateName(string) {
  nameValue = string.value.trim();
  const regex = /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/; //pattern
  if (nameValue.length >= 2) { // plus de 2 caractères
    if ((regex.test(nameValue)) && (!nameValue.includes(",,")) && (!nameValue.includes("..")) && (!nameValue.includes("''")) && (!nameValue.includes("--")) && (!nameValue.trim().includes("  "))) {
      return true;
    } else if ((regex.test(nameValue) === false) || (nameValue.includes(",,")) || (nameValue.includes("..")) || (nameValue.includes("''")) || (nameValue.includes("--")) || nameValue.trim().includes("  ")) {
      return false;
    }
  } else if (nameValue.length < 2) {
    return false;
  }
}

// Fonction qui valide l'email

export function validateEmail(string) {
  emailValue = string.value.trim();
  const regex = "[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?";
  if (emailValue.match(regex) && !emailValue.includes(" ")) {
    return true;
  } else if (!emailValue.match(regex) || emailValue.includes(" ")) {
    return false;
  }
}