// LoginValidation.js

function LoginValidation(values) {
  const errors = {};

  if (!values.email) {
    errors.email = "Email is required";
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = "Email address is invalid";
  }

  if (!values.password) {
    errors.password = "Password is required";
  } else if (values.password.length < 6) {
    errors.password = "Password must be at least 6 characters";
  }

  return errors;
}

export default LoginValidation;
/*function LoginValidation(values) {
    let error = {};
  
    const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  //   const password_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/;
  
    if (values.email === "") {
      error.email = "* Email should not be empty";
    } else if (!email_pattern.test(values.email)) {
      error.email = " * Email should be valid";
    } else {
      error.email = "";
    }
  
    if(values.password === ""){
      error.password = "* Password should not be empty"
    }
    else {
      error.password = "";
    }
  
    return error;
  }
  

export default LoginValidation;*/