Feature: LitiumUploadTest

	Scenario Outline: Upload media file success
		# Given I wait 4000 seconds
		Then I see the Upload files button is disable
		Given I click to select folder "Automation Test" on the tree
		When I click to Upload files button
		Given I send "<media_file_name>" to upload dialog
		Then I see the file "<media_file_name>", file size "<media_file_size>" on the bar
		Then I see the file "<media_file_name>" upload success with icon success

		Examples:
			| media_file_name | media_file_size |
			#| ../files/images/philosopher.png | 16.4 KB         |
			| C:/Users/hello/Documents/images/chart1.jpg | 31 KB |

	Scenario Outline: Overwrite media file that has existed
		Given I click to select folder "Automation test folder" on the tree
		When I click to Upload files button
		Given I send "<media_file_name>" to upload dialog
		Then I see the file "<media_file_name>", file size "<media_file_size>" on the bar
		Then I see message Overwrite or Cancel file "<media_file_name>"
		When I click to "Overwrite"
		Then I see the file "<media_file_name>" upload success with icon success

		Examples:
			| media_file_name                 | media_file_size |
			#| ../files/images/philosopher.png | 16.4 KB         |
		    | C:/Users/hello/Documents/images/chart1.jpg | 31 KB |

	Scenario Outline: Cancel upload media file that has existed
		Given I click to select folder "Automation test folder" on the tree
		When I click to Upload files button
		Given I send "<media_file_name>" to upload dialog
		Then I see message Overwrite or Cancel file "<media_file_name>"
		When I click to "cancel"
		Then I see no files in the dialog

		Examples:
			| media_file_name                 | media_file_size |
			#| ../files/images/philosopher.png | 16.4 KB         |
			| C:/Users/hello/Documents/images/chart1.jpg | 31 KB |

	Scenario Outline: Cancel upload media file while uploading
		Given I click to select folder "Automation test folder" on the tree
		When I click to Upload files button
		When I send "<media_file_name>" to upload dialog
		When I click to icon X
		Then I see the file "<media_file_name>" was not upload, has red progress bar and Remove link
		When I click to "Remove"
		Then I see no files in the dialog

		Examples:
			| media_file_name               | media_file_size |
			#| ../files/images/spiderman.jpg | 4.5 MB          |
			| C:/Users/hello/Documents/images/chart1.jpg | 31 KB |