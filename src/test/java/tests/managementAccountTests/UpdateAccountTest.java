package tests.managementAccountTests;

import cucumber.api.java.en.And;
import tests.PageProvider;

public class UpdateAccountTest extends PageProvider {
    @And("^I click updateAccount with userName need update$")
    public void clickUpdateButton() throws InterruptedException {
        Thread.sleep(5000);
        getUpdateAccountPage().clickUpdateButton(getCommonPage().userName());
        System.out.println("User don't exit with update");
    }

    @And("^I update account with firstName as(.*), lastName as (.*), role as (.*), userName as (.*), Password (.*)")
    public void informationUpdateAccount(String firstName, String lastName, String role, String userName, String password) throws InterruptedException {
        try {
            Thread.sleep(5000);
            getUpdateAccountPage().getInformationUpdateAccount(firstName, lastName, role, userName, password);
        } catch (Exception e) {
            System.out.println("Update unsuccessfully");
        }
    }

    @And("^I click summit update$")
    public void clickSummitUpdate() throws Throwable {
        try {
            Thread.sleep(5000);
            getUpdateAccountPage().clickUpdateSummit();
        } catch (Exception e) {
            System.out.println("Update unsuccessfully");
        }

    }
}

