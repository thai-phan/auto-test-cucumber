Feature: LitiumLoginTest

	# Scenario Outline: Verify login failed
	# 	Given User focus on panel "#loginPanel"
	# 	And User entered "<username>" into field "#c_textBoxLoginName"
	# 	And User entered "<password>" into field "#c_textBoxPassword_value"
	#  	And User click button "#c_buttonLogin"
	#  	# Then Wait For App on element "media-home"
	# 	Then I see the response contains "Log in failed" in element "#c_labelError"
	# Examples: 
	# 	| username | password  |
	# 	| admin1   | Password! |
	# 	| admin    | Pass      |
	# 	| adm      | Pass      |

	Scenario Outline: Verify login passed
	Given Go to site "https://ci-vnext-mvc.product.workplace.nu/Litium/"
		Given User focus on panel "Login Form"
		Given User entered username "<username>" into "field Username"
		And User entered password "<password>" into "field Password"
		And User click Login button "Login"
		And Wait for element "Dashboard element" visible
        Then User see "<username>" on header menu at "top menu"
	Examples: 
			|	username	|	password	|
			|	luyen.nguyen	|	123456	|