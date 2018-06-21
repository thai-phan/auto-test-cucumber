Feature: LitiumMediaFolderTest

	Scenario: Upload files button default disable
		Given  User click "Media top menu"
		Then User see button "Upload files button" is disable

	Scenario Outline: Create new media folder
		Given  User click button "New folder button"
		And   User entered "<mediaFolderName>" into "media folder name"
		When   User click button "OK button" 
		Then  User see "New media folder dialog" was closed  
		And   User see "<mediaFolderName>" was selected at "selected media folder"
	Examples: 
		| mediaFolderName |
		| Automation      |

	Scenario: Verify display media folder detail UI
		Given  User focus on "media detail page"
		Then User see "Files" at "Files tab" 
		And  User see "Properties" at "Properties tab" 
		And  User see "Permissions" at "Permissions tab"
		And  User see "Settings" at "Settings tab"
		And  User see "New folder" at "Media header New folder"
		And  User see "Delete Folder" at "Media header Delete folder" 
		And User see "Files tab" is active 
		And User see button "Media header Delete files" is disable

	Scenario Outline: Verify display Properties tab UI
		Given  User focus on "media detail page"
		When User click "Properties tab"
		Then User see "English (United States)" at "English(US) dropdown value"
		And User see "Swedish (Sweden)" at "Swedish dropdown value"
		And User see button "Save button" at "<tabName>" tab is disable
		And User see button "Cancel button" at "<tabName>" tab is disable
	Examples: 
		|tabName|
		|Properties|
		# |Permissions|
		# |Settings|

	Scenario Outline: Upload media files success 
		Given User click button "Upload files button"
		And User send "<mediaFileName>" to "upload file field" when "Upload files dialog" visible
		And Wait for "succeed icon" visible
		Then User see file name "<mediaFileName>" at "file name field"
		And User see "<mediaFileSize>" at "file size"
		And User see "progress bar succeed" is visible 
		And User see background color at "progress bar succeed" is "green"
		Examples:
			| mediaFileName | mediaFileSize |
			| ../files/images/philosopher.png | 16.4 KB	|
			# | C:/Users/hello/Documents/images/chart1.jpg | 30.6 KB |

	Scenario Outline: Cancel upload media files 
		Given User send "<mediaFileName>" to "upload file field" when "Upload files dialog" visible
		And User click "remove icon"
		Then User see file name "<mediaFileName>" at "file name field"
		And User see "<mediaFileSize>" at "file size"
		And User see "Remove" at "progress bar action"
		And User see "progress bar error" is visible 
		Examples:
			| mediaFileName | mediaFileSize |
			| ../files/images/Globe-icon.png| 21.1 KB |
			# | ../files/images/DSC_0010.NEF| 10.9 MB |
			# | C:/Users/hello/Documents/images/wallpaper1.jpg | 1.1 MB |

	Scenario Outline: Remove files that were cancelled upload
		Given User click "Remove" at "progress bar action"
		Then User see file will be removed at the "upload files list"
		And User see "succeed icon" still occur

	Scenario Outline: Overwrite upload duplicate file
		Given User send "<mediaFileName>" to "upload file field" when "Upload files dialog" visible
		And Wait for "Overwrite" visible at "progress bar action"
		And User click "Overwrite" at "progress bar action"
		And Wait for "succeed icon" visible
		Then User see file name "<mediaFileName>" at "file name field"
		Examples:
			| mediaFileName | mediaFileSize |
			| ../files/images/philosopher.png | 21.1 KB |
			# | C:/Users/hello/Documents/images/chart1.jpg | 30.6 KB |

	Scenario Outline: Cancelled upload duplicate file
		Given User send "<mediaFileName>" to "upload file field" when "Upload files dialog" visible
		And Wait for "cancel" visible at "progress bar action"
		And User click "cancel" at "progress bar action"
		Then User see file will be removed at the "upload files dialog"
		Given User click "upload files close icon"
		Examples:
			| mediaFileName | mediaFileSize |
			| ../files/images/philosopher.png | 21.1 KB |
			# | C:/Users/hello/Documents/images/chart1.jpg | 30.6 KB |
	
	Scenario Outline: Create duplicate media folder
		Given User click button "New folder button"
		And User entered "<mediaFolderName>" into "media folder name"
		When  User click button "OK button"
		Then  User error message "<errorMessage>" at "duplicate error message" 
		And   User see "New media folder dialog" still occur
		When User click "Close icon"
		Then User see "New media folder dialog" was closed 
		Examples: 
			|	mediaFolderName	|	errorMessage	|
			|	Automation	|	There is already a folder named 'Automation'	|