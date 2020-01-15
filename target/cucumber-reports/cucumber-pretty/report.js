$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("loginRegisters/login.feature");
formatter.feature({
  "line": 1,
  "name": "Login Demo Website",
  "description": "",
  "id": "login-demo-website",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 6,
  "name": "Login Demo Website Successfully",
  "description": "",
  "id": "login-demo-website;login-demo-website-successfully",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 7,
  "name": "I input username as \u003cusername\u003e password as \u003cpassword\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I click login button",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I verify that system is already login successfully with \u003cusername\u003e",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "I log out",
  "keyword": "Then "
});
formatter.examples({
  "line": 11,
  "name": "",
  "description": "",
  "id": "login-demo-website;login-demo-website-successfully;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 12,
      "id": "login-demo-website;login-demo-website-successfully;;1"
    },
    {
      "cells": [
        "admin",
        "admin"
      ],
      "line": 13,
      "id": "login-demo-website;login-demo-website-successfully;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "Open website http://localhost:8080/demo/",
  "keyword": "Given "
});
formatter.match({
  "arguments": [
    {
      "val": "http://localhost:8080/demo/",
      "offset": 13
    }
  ],
  "location": "CommonTest.user_already_on_home_page(String)"
});
formatter.result({
  "duration": 6696171800,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "Login Demo Website Successfully",
  "description": "",
  "id": "login-demo-website;login-demo-website-successfully;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 7,
  "name": "I input username as admin password as admin",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I click login button",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I verify that system is already login successfully with admin",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "I log out",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 20
    },
    {
      "val": "admin",
      "offset": 38
    }
  ],
  "location": "LoginTest.openAccount(String,String)"
});
formatter.result({
  "duration": 6395449200,
  "status": "passed"
});
formatter.match({
  "location": "LoginTest.clickLoginButton()"
});
formatter.result({
  "duration": 4289441500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 56
    }
  ],
  "location": "LoginTest.verifyUserLoginSuccessfully(String)"
});
formatter.result({
  "duration": 2100117700,
  "status": "passed"
});
formatter.match({
  "location": "CommonTest.clickLogoutButton()"
});
formatter.result({
  "duration": 2056891100,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 15,
  "name": "Login Demo Website Unsuccessfully",
  "description": "",
  "id": "login-demo-website;login-demo-website-unsuccessfully",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 16,
  "name": "I input username as \u003cusername\u003e password as \u003cpassword\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "I click login button",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I verify that system is already login unsuccessfully",
  "keyword": "Then "
});
formatter.examples({
  "line": 19,
  "name": "",
  "description": "",
  "id": "login-demo-website;login-demo-website-unsuccessfully;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 20,
      "id": "login-demo-website;login-demo-website-unsuccessfully;;1"
    },
    {
      "cells": [
        "admin2",
        "admin"
      ],
      "line": 21,
      "id": "login-demo-website;login-demo-website-unsuccessfully;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "Open website http://localhost:8080/demo/",
  "keyword": "Given "
});
formatter.match({
  "arguments": [
    {
      "val": "http://localhost:8080/demo/",
      "offset": 13
    }
  ],
  "location": "CommonTest.user_already_on_home_page(String)"
});
formatter.result({
  "duration": 5297014200,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "Login Demo Website Unsuccessfully",
  "description": "",
  "id": "login-demo-website;login-demo-website-unsuccessfully;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 16,
  "name": "I input username as admin2 password as admin",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "I click login button",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I verify that system is already login unsuccessfully",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "admin2",
      "offset": 20
    },
    {
      "val": "admin",
      "offset": 39
    }
  ],
  "location": "LoginTest.openAccount(String,String)"
});
formatter.result({
  "duration": 6210335000,
  "status": "passed"
});
formatter.match({
  "location": "LoginTest.clickLoginButton()"
});
formatter.result({
  "duration": 4252527600,
  "status": "passed"
});
formatter.match({
  "location": "LoginTest.verifyUserLoginUnsuccessfully()"
});
formatter.result({
  "duration": 2026730500,
  "status": "passed"
});
formatter.uri("loginRegisters/register.feature");
formatter.feature({
  "line": 1,
  "name": "Register account",
  "description": "",
  "id": "register-account",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 6,
  "name": "Register account successfully",
  "description": "",
  "id": "register-account;register-account-successfully",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 7,
  "name": "I click register option button",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I input firstname as \u003cfirstname\u003e lastname as \u003clastname\u003e username as \u003cusername\u003e password as \u003cpassword\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I click register submit",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "I verify that system is register successfully",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "I login successfully as \u003cusername\u003e and \u003cpassword\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I log out",
  "keyword": "Then "
});
formatter.examples({
  "line": 13,
  "name": "",
  "description": "",
  "id": "register-account;register-account-successfully;",
  "rows": [
    {
      "cells": [
        "firstname",
        "lastname",
        "username",
        "password"
      ],
      "line": 14,
      "id": "register-account;register-account-successfully;;1"
    },
    {
      "cells": [
        "nhung",
        "nguyen",
        "nhungnguyen",
        "nhung270599"
      ],
      "line": 15,
      "id": "register-account;register-account-successfully;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "Open website http://localhost:8080/demo/",
  "keyword": "Given "
});
formatter.match({
  "arguments": [
    {
      "val": "http://localhost:8080/demo/",
      "offset": 13
    }
  ],
  "location": "CommonTest.user_already_on_home_page(String)"
});
formatter.result({
  "duration": 6241638600,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "Register account successfully",
  "description": "",
  "id": "register-account;register-account-successfully;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 7,
  "name": "I click register option button",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I input firstname as nhung lastname as nguyen username as nhungnguyen password as nhung270599",
  "matchedColumns": [
    0,
    1,
    2,
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I click register submit",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "I verify that system is register successfully",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "I login successfully as nhungnguyen and nhung270599",
  "matchedColumns": [
    2,
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I log out",
  "keyword": "Then "
});
formatter.match({
  "location": "RegisterTest.clickRegisterOption()"
});
formatter.result({
  "duration": 3068938400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "nhung",
      "offset": 21
    },
    {
      "val": "nguyen",
      "offset": 39
    },
    {
      "val": "nhungnguyen",
      "offset": 58
    },
    {
      "val": "nhung270599",
      "offset": 82
    }
  ],
  "location": "RegisterTest.inputAccountInformation(String,String,String,String)"
});
formatter.result({
  "duration": 6405109400,
  "status": "passed"
});
formatter.match({
  "location": "RegisterTest.clickRegisterSubmit()"
});
formatter.result({
  "duration": 3268265500,
  "status": "passed"
});
formatter.match({
  "location": "RegisterTest.verifyUserRegisterSuccessfully()"
});
formatter.result({
  "duration": 3037424700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "nhungnguyen",
      "offset": 24
    },
    {
      "val": "nhung270599",
      "offset": 40
    }
  ],
  "location": "CommonTest.loginSuccess(String,String)"
});
formatter.result({
  "duration": 9479276500,
  "status": "passed"
});
formatter.match({
  "location": "CommonTest.clickLogoutButton()"
});
formatter.result({
  "duration": 2044495700,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 17,
  "name": "Register account unsuccessfully",
  "description": "",
  "id": "register-account;register-account-unsuccessfully",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 18,
  "name": "I click register option button",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "I input firstname as \u003cfirstname\u003e lastname as \u003clastname\u003e username as \u003cusername\u003e password as \u003cpassword\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I click register submit",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "I verify that system is register unsuccessfully with \u003cusername\u003e already is taken",
  "keyword": "Then "
});
formatter.examples({
  "line": 22,
  "name": "",
  "description": "",
  "id": "register-account;register-account-unsuccessfully;",
  "rows": [
    {
      "cells": [
        "firstname",
        "lastname",
        "username",
        "password"
      ],
      "line": 23,
      "id": "register-account;register-account-unsuccessfully;;1"
    },
    {
      "cells": [
        "nhung",
        "nguyen",
        "nhungnguyen",
        "nhung270599"
      ],
      "line": 24,
      "id": "register-account;register-account-unsuccessfully;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "Open website http://localhost:8080/demo/",
  "keyword": "Given "
});
formatter.match({
  "arguments": [
    {
      "val": "http://localhost:8080/demo/",
      "offset": 13
    }
  ],
  "location": "CommonTest.user_already_on_home_page(String)"
});
formatter.result({
  "duration": 12721055700,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "Register account unsuccessfully",
  "description": "",
  "id": "register-account;register-account-unsuccessfully;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 18,
  "name": "I click register option button",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "I input firstname as nhung lastname as nguyen username as nhungnguyen password as nhung270599",
  "matchedColumns": [
    0,
    1,
    2,
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I click register submit",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "I verify that system is register unsuccessfully with nhungnguyen already is taken",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "RegisterTest.clickRegisterOption()"
});
formatter.result({
  "duration": 3040231400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "nhung",
      "offset": 21
    },
    {
      "val": "nguyen",
      "offset": 39
    },
    {
      "val": "nhungnguyen",
      "offset": 58
    },
    {
      "val": "nhung270599",
      "offset": 82
    }
  ],
  "location": "RegisterTest.inputAccountInformation(String,String,String,String)"
});
formatter.result({
  "duration": 6369631000,
  "status": "passed"
});
formatter.match({
  "location": "RegisterTest.clickRegisterSubmit()"
});
formatter.result({
  "duration": 3243363300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "nhungnguyen",
      "offset": 53
    }
  ],
  "location": "RegisterTest.verifyUserLoginUnsuccessfully(String)"
});
formatter.result({
  "duration": 3027540300,
  "status": "passed"
});
formatter.uri("managementAccounts/addAccount.feature");
formatter.feature({
  "line": 1,
  "name": "Add Account",
  "description": "",
  "id": "add-account",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 7,
  "name": "Add Account successfully",
  "description": "",
  "id": "add-account;add-account-successfully",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 8,
  "name": "I scroll down page",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I click loginAccountTab",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I scroll up page",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I click addAccount",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I add account with firstName as\u003cfirstName\u003e, lastName as \u003clastName\u003e, role as \u003crole\u003e, userName as \u003cuserName\u003e, Password \u003cpassword\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I click summit add",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I verify successfully with firstName as\u003cfirstName\u003e, lastName as \u003clastName\u003e, role as \u003crole\u003e, userName as \u003cuserName\u003e, Password \u003cpassword\u003e",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "I log out",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I login successfully as \u003cuserName\u003e and \u003cpassword\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I log out",
  "keyword": "And "
});
formatter.examples({
  "line": 18,
  "name": "",
  "description": "",
  "id": "add-account;add-account-successfully;",
  "rows": [
    {
      "cells": [
        "firstName",
        "lastName",
        "role",
        "userName",
        "password"
      ],
      "line": 19,
      "id": "add-account;add-account-successfully;;1"
    },
    {
      "cells": [
        "thao",
        "ngo",
        "Admin",
        "thao.ngo",
        "123456"
      ],
      "line": 20,
      "id": "add-account;add-account-successfully;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "Open website http://localhost:8080/demo/#!/",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I login successfully as admin and admin",
  "keyword": "Given "
});
formatter.match({
  "arguments": [
    {
      "val": "http://localhost:8080/demo/#!/",
      "offset": 13
    }
  ],
  "location": "CommonTest.user_already_on_home_page(String)"
});
formatter.result({
  "duration": 6235460800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 24
    },
    {
      "val": "admin",
      "offset": 34
    }
  ],
  "location": "CommonTest.loginSuccess(String,String)"
});
