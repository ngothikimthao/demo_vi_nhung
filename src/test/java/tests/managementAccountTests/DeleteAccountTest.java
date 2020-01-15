package tests.managementAccountTests;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import tests.PageProvider;

public class DeleteAccountTest extends PageProvider {
    static String userName = getCommonPage().userName();

    @And("^I click deleteAccount with userName$")
    public void deleteAccountClick() throws InterruptedException {
        Thread.sleep(5000);
        getDeleteAccountPage().clickDeleteButton(userName);
        Thread.sleep(1000);
    }

    @Then("^I verify delete successfully$")
    public void verifyDeleteSuccessfully() throws InterruptedException {
        Thread.sleep(1000);
        if (getDeleteAccountPage().verifyDeleteSuccessfully(userName) == false) {
            System.out.println("Delete successfully");
        } else {
            System.out.println("Delete unsuccessfully");
        }
    }
}
