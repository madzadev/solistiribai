const validator = require("validator")
const isEmpty = require("is-empty")

const validateContactInput = data => {
  let errors = {}

  data.name = !isEmpty(data.name) ? data.name : ""
  data.email = !isEmpty(data.email) ? data.email : ""
  data.phone = !isEmpty(data.phone) ? data.phone : ""
  data.message = !isEmpty(data.message) ? data.message : ""

  //   Name validation
  if (validator.isEmpty(data.name)) {
    errors.nameError = "Lūdzu ievadiet savu vārdu!"
  }

  // Email validation
  if (validator.isEmpty(data.email)) {
    errors.emailError = "Lūdzu ievadiet savu e-pastu!"
  } else if (!validator.isEmail(data.email)) {
    errors.emailError = "Neatbilst e-pasta adresei!"
  }

  // Message validation
  if (validator.isEmpty(data.message)) {
    errors.messageError = "Lūdzu ievadiet savu ziņojumu!"
  }

  return {
    errors,
    isValid: isEmpty(errors),
  }
}

export default validateContactInput
