window.onload = function () {
  document.getElementById('login-form').onclick = () => {
    let passwordValue = document.getElementById('password').value;
    let websitePattern = '^(http)(|s)(://)';
    let websiteValue = document.getElementById('website').value;

    if (
      !passwordValue.match('[a-z]{1,}') ||
      !passwordValue.match('[A-Z]{1,}') ||
      !passwordValue.match('[0-9]{1,}')
    ) {
      alert(
        'Password must have atleaset 10 characters in length and contain at least one number and one uppercase and lowercase letter'
      );
    }

    if (!websiteValue.match(websitePattern)) {
      alert('Website URL must begin with "http://" or "https://"');
    }
  };
};
