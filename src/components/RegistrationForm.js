function RegistrationForm() {
  return (
    <div className="page">
      <h1>Create new account</h1>
      <form className="page-p">
        <div className="field">
          <label htmlFor="name-input">Full name</label>
          <input type="text" name="name" id="name-input" />
        </div>
        <div className="field">
          <label htmlFor="email-input">Email</label>
          <input type="text" name="email" id="email-input" />
        </div>
        <div className="field">
          <label htmlFor="password-input">Password</label>
          <input type="text" name="password" id="password-input" />
        </div>
        <div className="field">
          <label htmlFor="repassword-input">Verify Password</label>
          <input type="text" name="repassword" id="repassword-input" />
        </div>
        <div className="field">
          <div>
            <button type="submit">Save</button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default RegistrationForm;
