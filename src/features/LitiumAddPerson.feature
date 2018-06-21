Feature: LitiumAddNewPerson

Scenario Outline: Add New Person
        # Given Go to the "https://ci-media-manager.product.workplace.nu/Litium/UI/customer"
		Given User click "Customers top menu"
		# Then Wait for element "New person button" visible
        And User click button "New person"
        And User entered "<firstName>" into "First Name"
        And User entered "<lastName>" into "Last Name"
        When User click button "OK" 
        Then  User see "New person dialog" was closed  

	Examples: 
			| firstName | lastName |
			| Person Test | 511 |
