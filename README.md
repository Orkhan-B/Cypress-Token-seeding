Token Seeding Helper: This class contains functions that interact with your application's authentication API to obtain an authentication token.
After obtaining the token that is used for authentication purposes during your test cases, it stores it in the browser's local storage.

Purpose: The primary purpose of this helper class is to eliminate repetitive steps required for authentication in your test cases.
Instead of starting each test case by navigating to the login page, entering a username and password, and clicking the login button, you can use this helper class to automate the authentication process.
This allows you to start your testing directly on the desired page, saving time and effort.

Flexibility: Depending on your application's requirements and test cases, you may choose to extend this helper class to handle other aspects of authentication, such as seeding cookies and other application data. However, i suggest using Cypress's built-in commands for cookie
manipulation because they are more convenient.

In summary, token seeding helper class (auth.ts) simplifies the setup phase of your test cases by automating the authentication process, allowing you to start your tests directly on the desired page.
This approach can improve the efficiency of your end-to-end testing process.

Hope it helped you in any shape or form 🙂

Best!
