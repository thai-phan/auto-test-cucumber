module.exports = {
	object: {
        //Media tree page 
    	"New folder button": ".sidebar__link__button",
        "selected media folder":".treenode__item.selected>span",
        "Upload files button":".sidebar__button>button",
		//Media folder dialog
		"OK button": ".modal-dialog .base__success",
		"media folder name": "#_nameInvariantCulture",
		"New media folder dialog": ".modal-dialog",
        "Close icon":".fa.fa-close",
        "duplicate error message":".ui__message.ui__message--error-with-icon",

        //Media page
        "folder detail page":"folder-page",
        "media folder header name":".page__header h1",
        "Media header New folder":".page__header button:nth-child(4)>span",
        "Media header Delete files":".page__header button:nth-child(3)>span",
        "Media header Delete folder":".page__header button:nth-child(2)>span",

        "Files tab" : ".tabpage__menu li:nth-child(1)",
        "Properties tab":".tabpage__menu li:nth-child(2)",
        "Permissions tab":".tabpage__menu li:nth-child(3)",
        "Settings tab":".tabpage__menu li:nth-child(4)",
        // Files tab
        "list view icon":".fa.fa-bars.icon-button",
        "grid view icon":".fa.fa-th-large.icon-button",
        //Properties tab
        "Properties index":"0",
        "supported language":".row__col__xs__4>language-selector>select>option",
        "English(US) dropdown value":".row__col__xs__4>language-selector>select option:nth-child(1)",
        "Swedish dropdown value":".row__col__xs__4>language-selector>select option:nth-child(2)",
        //Permisisons tab
        "Permissions Add ":".base__fake__link.base__right",
        "same permissions":".ng-untouched.ng-pristine.ng-valid>label",
        "Save button":".base__success.tabpage__tab__header__button",
        "Cancel button":".base__danger.tabpage__tab__header__button",

        //Upload files dialog
        "Upload files dialog":".ui__upload-dialog",
        "upload files list":".file-upload-list__container",
        "upload file field":"input[type='file']",
        "upload progress bar succeed":".ui__progress-bar.ui__progress-bar--succeeded",
        "file name field":".ui__upload-progress-bar__filename",
        "file size":".ui__upload-progress-bar__filesize",
        "succeed icon":".fa-check",
        "remove":".ui__upload-progress-bar__cancel",
        "remove icon":".ui__upload-progress-bar__action",//".ui__upload-progress-bar__cancel>i",
        "progress bar action":".ui__upload-progress-bar__action>a",
        "progress bar succeed":".ui__progress-bar--succeeded",
        "progress bar error":".ui__progress-bar--error",
        "upload files close icon":".fa.fa-close",
	},
}