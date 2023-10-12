/**
 *
 * @param email account email address
 * @param password account password
 * @param url url path to visit ater authentication
 */
export function seedToken(email, password, url) {
  if (window.localStorage.getItem("token")) {
    if (window.localStorage.getItem("username") === email) {
      cy.log("Token is valid");
      cy.visit(url);
    } else {
      cy.log("Getting token for new user");
      getLocalStorageToken(email, password, url);
    }
  } else {
    cy.log("Getting Token.");
    getLocalStorageToken(email, password, url);
  }
  checkTokenInLocalStorage();
}
/**
 *
 * @param email account email address
 * @param password account password
 * @param url url path to visit ater authentication
 */
function getLocalStorageToken(
  email: string,
  password: string,
  url: string
): void {
  cy.request({
    method: "POST",
    url: Cypress.config().baseUrl + "/login",
    body: loginBody(email, password),
  })
    .its("body")
    .then((loginRequestBody) => {
      const token = tokenMaker(loginRequestBody);
      cy.visit(url, {
        onBeforeLoad(win) {
          win.localStorage.setItem("username", email);
          win.localStorage.setItem("token", token);
        },
      });
      cy.log("Logged in with main password");
    });
}

/**
 * @param UN :string
 * @param PWD :string
 * @returns Authentication request payload object.
 */
function loginBody(UN: string, PWD: string): object {
  //You will need to change request body to match your application authentication payload structure.
  return { UserName: UN, Password: PWD };
}
/**
 * Custom function to get proper token from api response.
 * @param body
 * @returns token in string format.
 */
function tokenMaker($body): string {
  cy.wrap($body.Data.IsLoginSuccessful).should(
    "be.true",
    "Login is Successful"
  );
  cy.wrap($body.IsSuccessful).should("be.true");
  //You will need to change response string to match your application token structure.
  return `{"Token":"${$body.Data.Token}","TokenExpiration":"${$body.Data.TokenExpiration}","LoginErrors":[],"IsLoginSuccessful":${$body.Data.IsLoginSuccessful},"Contacts":null,"FirstLoginFormSetup":null,"Stage":null}`;
}
function checkTokenInLocalStorage() {
  const tokenFromLocalStorage = window.localStorage.getItem("wr-username");
}
