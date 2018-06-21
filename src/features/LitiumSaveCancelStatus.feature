Feature: Verify Save Cancel Button Status 
    Scenario: Verify Save Cancel Button Status - Media folder properties tab
        Given I am on the "https://ci-media-manager.product.workplace.nu/Litium/UI/media"
        Given I have entered "admin" and "Password!"
        When I click Login button
        Given I click to select folder "Automation test folder" on the tree
        # When I click to "Properties" tab
        # Then I see Save, Cancel button were "disable"
        # Given I click to edit icon of "Description" 
        # Given I update field "Description" by "text"
        # Then I see Save, Cancel button were "enable" 
        # Then I see Undo link will be displayed
        # When I click Undo link 
        # Then I see Save, Cancel button were "disable"
        # Given I update field "Description" by "text"
        # When I click "Cancel" button
        # Then I see Save, Cancel button were "disable"
        # Given I update field "Description" by "text"
        # When I click "Save" button
        # Then I see Save, Cancel button were "disable"

    Scenario: Verify Save Cancel Button Status - Media folder settings tab
        When I click to "Settings" tab
        Then I see Save, Cancel button were "disable"
        Given I click to edit icon of "Template"
        When I update to new template 
        Then I see Save, Cancel button were "enable"
        Then I see Undo link will be displayed
        When I click Undo link 
        Then I see Save, Cancel button were "disable"
        When I update to new template 
        When I click "Cancel" button
        Then I see Save, Cancel button were "disable"
        When I update to new template 
        When I click "Save" button
        Then I see Save, Cancel button were "disable"

    #TODO
    #Scenario: Verify Save Cancel Button Status - Media permisison tab





