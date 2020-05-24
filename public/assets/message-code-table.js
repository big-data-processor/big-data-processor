const messageCodes = {
    'unknown': { name: 'unknown errors', type: 'error', details: 'Sorry, we can not find the error code here.' },
    '404': { name: 'Page not found', type: 'warning', details: 'oh no! We can not find the page. You might want to check the web link again.' },
    '-4': {name: 'Server file system error', type: 'error', details: 'The file system on the server went wrong. Please contact the web admin.'},
    'default': { name: 'Default message', type: 'default', details: 'This is a document.' },
    '-2': { name: 'unknown errors', type: 'error', details: '' },
    '-1': { name: 'HTTPService error', type: 'error', details: 'Server is currently down. Please try again latter.' },
    '0': {
        name: 'Database error', type: 'error',
        details: 'OOPS! Looks like our database has some errors. Please try again.' +
        'If this error keeps occurring, please contact the web administrator. Thank you.'
    },
    /* Server system related */
    's001': {name: 'Server file system error', type: 'error', details: 'The file system on the server went wrong. Please contact the web admin.'},
    's002': { name: 'HTTPService error', type: 'error', details: 'Server is currently down. Please try again latter.' },
    's003': { name: 'Database error', type: 'error', details: 'OOPS! Looks like our database has some errors. Please try again.' +
        'If this error keeps occurring, please contact the web administrator. Thank you.'
    },
    's004': { name: 'Invalid npm package name', type: 'error', details: 'The provided npm package name is invalid.'},
    // Account related
    'a001': { name: 'The email has been used', type: 'error', details: '' },
    'a002': { name: 'The email format has errors', type: 'error', details: '' },
    'a003': { name: 'The password has errors', type: 'error', details: '' },
    'a004': { name: 'Invalid auth token', type: 'error', details: '' },
    'a005': { name: 'Expired auth token', type: 'error', details: 'This token has been expired. We have generated a new token for you. Please sign in and go to user profile page to resend the new token.' },
    'a006': { name: 'Email verified', type: 'success', details: '' },
    'a007': { name: 'Account signed up', type: 'success', details: '' },
    'a008': { name: 'Account already verified', type: 'warning', details: 'This email has already been verified. ' +
        'You may sign in to continue your work.' },
    'a009': { name: 'Sign in failed', type: 'error', details: 'We couldn\'t sign you in. Sure you had the right credentials?' },
    'a010': { name: 'Signed in', type: 'success',
        details: 'Hi, you are now signed in. You may create a project to upload analyze your data,' +
        'or continue to previous works.'
    },
    'a011': { name: 'Sign-in required', type: 'warning',
        details: 'Please sign in first, thank you.' },
    'a012': { name: 'reCaptcha challenge failed', type: 'error', details: 'We do not accept a robot to perform such actions.'},
    'a013': {name: 'Auth token generation failed', type: 'error',
        details: 'Sorry, we could not generate an authentication token for you. Please try again. If this error message keeps showing, please contact the administrator. Thank you.'},
    'a014': {name: 'Account re-name failed', type: 'error', details: 'The new name is not valid so we cannot use the new name for you.'},
    'a015': { name: 'Invalid user ID', type: 'error', details: 'Please check if you use the correct userID.' },
    'a016': { name: 'Signed out', type: 'success', details: 'You are now signed out.' },
    'a017': { name: 'No privileges', type: 'error', details: 'Sorry, you don\'t have privileges to view this page or process this action.'},
    'a018': {name: 'Changing user auth failed', type: 'error', details: 'Sorry, there are some errors when setting the user\'s authority'},
    'a019': {name: 'Account deleted', type: 'warning', details: 'You are now signed out. This account is going to be deleted. Plase contact the administrator for further information.'},
    'a020': {name: 'Auth token generation failed', type: 'error', details: 'Sorry, we could not generate an authentication token for you. Please try again. If this error message keeps showing, please contact the administrator. Thank you.'},
    'a021': {name: 'Verifiation email sending error', type: 'error', details: 'Sorry, we failed to send you a verification email temporarily.'},
    'a022': {name: 'Account re-name failed', type: 'error', details: 'The new name is not valid so we cannot use the new name for you.'},

    '1': { name: 'The email has been used', type: 'error', details: '' },
    '2': { name: 'The email format has errors', type: 'error', details: '' },
    '3': { name: 'The password has errors', type: 'error', details: '' },
    '4': { name: 'Invalid auth token', type: 'error', details: '' },
    '5': { name: 'Expired auth token', type: 'error', details: '' },
    '6': { name: 'Email verified', type: 'success', details: '' },
    '7': { name: 'Account signed up', type: 'success', details: '' },
    '8': { name: 'Account already verified', type: 'warning',
        details: 'This email has already been verified. ' +
        'You may sign in to continue your work.'
    },
    '9': { name: 'Sign in failed', type: 'error', details: '' },
    '10': { name: 'Welcome!', type: 'info',
        details: 'This is a platform to anlyze and select' +
        '<b>biomarker panels</b>. <a href=\'./home\'>This is a google link</a>'
    },
    '11': { name: 'Signed in', type: 'success',
        details: 'Hi, you are now signed in. You may create a project to upload analyze your data,' +
        'or continue to previous works.'
    },
    '12': { name: 'Sign-in required', type: 'warning',
        details: 'Please sign in first to proceed your work.' },
    '13': { name: 'File too large', type: 'error',
        details: 'The file you want to upload is too large. The current file size limit is 8 MB. ' +
        'If you need to analyze larger files, please contact the web administrator.' },
    '14': { name: 'File uploaded', type: 'success', details: 'The file has been uploaded successfully.' +
        'While waiting the format checking, you may continue update the project information.' },
    '15': { name: 'Signed out', type: 'success', details: 'You are now signed out.' },
    '16': { name: 'Invalid file type', type: 'error', details: 'Currently, we only accept the csv file. ' +
        'Please check the file type you want to upload.' },
    '17': { name: 'File format checked', type: 'success', details: 'The file you uploaded has been checked. ' +
        'You may proceed to process the data.' },
    '18': { name: 'Invalid file format', type: 'error', details: 'We found some problems in your file. ' +
        'Please check the invalid lines and modify them to upload again.' },
    '19': { name: 'Invalid project id', type: 'error', details: 'We can not find the project for you.' },
    '20': { name: 'File format under checking.', type: 'warning', details: 'The file is under check. Please wait.' },
    '21': { name: 'The outcome column has been specified', type: 'info',
        details: 'The outcome column for the project has been specified for modeling and cannot be changed.' },
    '22': { name: 'Invalid parameters', type: 'error', details: 'You have sent invalid parameters to server.' },
    '23': { name: 'Invalid user ID', type: 'error', details: 'Please check if you use the correct userID.' },
    '24': { name: 'The project is not ready yet', type: 'warning',
        details: 'You may process an action for the project which is not ready yet. Please wait until the project is ready.'
    },
    '25': { name: 'Project ready', type: 'success',
        details: 'A project is ready for further analysis. We have created a full datasets for you. ' +
        'In addition, we also processed the datasets with simple statistics for you. ' +
        'You may preliminary select some features in or out based on these simple statistics for each feature.'
    },
    '26': { name: 'Subset ready', type: 'success', details: 'The Data you\'ve just created is ready for further analysis.' },
    '27': { name: 'Invalid data file id', type: 'error', details: 'We can not find the data file for you.' },
    '28': { name: 'Data name too long', type: 'error', details: 'The name for the data is too long. ' +
        'Please shorten the name and try saving again.' },
    '29': { name: 'Data description too long', type: 'error',
        details: 'The description for the subset is too long. Please shorten the name and try saving again.' },
    '30': { name: 'Subset removed successfully', type: 'success', details: 'The subset has been removed.' },
    '31': { name: 'Task not available', type: 'error',
        details: 'We can not find the task for you. It is not available. Please check if you use the correct taskid' },
    '32': { name: 'Result creation failed', type: 'error', details: 'There are some errors in your input parameters.' },
    '33': { name: 'Task accomplished', type: 'success', details: 'A task has been successfully performed.' },
    '34': { name: 'Task failed', type: 'error', details: 'We have failed to perform the task. Please see if there are error messages.' },
    '35': {name: 'Invalid result ID', type: 'error', details: 'We can not find the result for you.'},
    '36': { name: 'Result name too long', type: 'error', details: 'The name for the result is too long. ' +
        'Please shorten the name and try saving again.' },
    '37': { name: 'Result description too long', type: 'error',
        details: 'The description for the result is too long. Please shorten the name and try saving again.' },
    '38': { name: 'No privileges', type: 'error', details: 'Sorry, you don\'t have privileges to view the page.'},

    // Project related
    '400': {name: 'Failed to create Project', type: 'error', details: 'No privilege to create a project from the package with admin scope'},
    '401': {name: 'Failed to create project', type: 'error', details: 'Sorry, you cannot create a project from utility package.'},
    '402': {name: 'Failed to set members', type: 'error', details: 'We failed to set members for this project.'},
    // Proxy related
    '501': {name: 'Failed to proxy the web', type: 'error', details: 'We cannot make the proxy for the result.'},
    // File-related messages
    '600': { name: 'File export failed', type: 'warning', details: 'The data file export is failed. Please try again.'},
    '601': { name: 'File export succeeded', type: 'success', details: 'The data file has exported successfully.'},
    '602': { name: 'File sharing failed', type: 'warning', details: 'The file sharing process is failed'},
    '603': { name: 'File sharing succeeded', type: 'success', details: 'The file has been shared.'},
    '604': { name: 'File already existed', type: 'error', details: 'The file name in the folder is already existed.' +
        ' Please make sure if this file is already uploaded.'},
    '605': { name: 'Data File creation failed', type: 'error', details: 'The datafile creation has failed for some unhandled errors.'},
    '606': { name: 'Permission denied', type: 'error', details: 'Permission denied when creation files. Please contact the admin to ' +
        'deal with the file permission issues.'},
    '607': { name: 'Failed to track the file', type: 'error', details: 'You are trying to tracking files under a non-folder.'},
    '608': { name: 'Failed to untrack the file', type: 'error', details: 'The untrack request has failed.'},
    '609': { name: 'File export processing', type: 'info', details: 'A data file is exporting now.'},
    '610': { name: 'Folder creation failed', type: 'error', details: 'We can not create a folder for now. please try again.'},
    '611': { name: 'Invalid file', type: 'error', details: 'This file seems not existed.'},
    '612': { name: 'Failed to remove file', type: 'error', details: 'Please try again.'},
    '613': { name: 'Success to import data files', type: 'success', details: 'You have successfully import datafiles into your project.'},
    // Package/Task related
    '700': {name: 'Invalid Package id', type: 'error', details: 'The package id you input is not valid'},
    '701': {name: 'Package file error', type: 'error', details: 'Error moving the package files.'},
    '702': {name: 'Duplicated packages', type: 'error', details: 'Sorry, this package name has been used. Please try another.'},
    '703': {name: 'Package backed up', type: 'success', details: 'You have successfully backed up this package.'},
    '704': {name: 'Package backup removing failed', type: 'error', details: 'Error backup file name.'},
    '705': {name: 'Package already installed', type: 'warning', details: 'The package you would like to install has been installed.'},
    '706': {name: 'Package List loading failed', type: 'warning', details: 'We have failed to load the full package list. Please try again.'},
    '707': {name: 'Package not fund', type: 'error', details: 'We can not find the package.'},
    '708': {name: 'No priviledge to run the task', type: 'error', details: 'Sorry, you cannot run system tasks.'},
    '709': {name: 'Failed to stop tasks', type: 'error', details: 'Sorry, we failed to stop results, please try again.'},
    '710': {name: 'unable to load task logs', type: 'error', details: 'Sorry, we failed to retrieve the resulting logs.'},
    '711': {name: 'Unable to perform tasks', type: 'error', details: 'Sorry, we can not perform the tasks right now. Please try again.'},
    '712' : {name: 'Failed to load the playbook content', type: 'error', details: 'Sorry, we failed to load the workflow playbook for the task'},
    '713' : {name: 'Package file error', type: 'error', details: 'We can not correctly process the package files.'},
    '714': {name: 'Page saving error', type: 'error', details: 'The page object your are going to save is invalid.'},
    // Connection related
    '800': {name: 'Disconnected', type: 'warning', details: 'You are now disconnected from server. Will try to reconnect ...'},
    '801': {name: 'Reconnected', type: 'success', details: '... and we are back! To synchronize with the server\'s current status, ' + 'you may refresh the page.'},
    // Admin task related
    '900' : {name: 'Task update failed', type: 'error', details: 'No specified task to be saved.'},
    '901' : {name: 'User ID not found', type: 'error', details: 'Sorry, the user id you request is not found.'},
    '902' : {name: 'User approval failed', type: 'warning', details: 'The user may be not verified by email or has been approved.'},
    '903' : {name: 'Invalid task ID', type: 'error', details: 'The task you request is no longer existed.'},
    '904' : {name: 'Unknown date range', type: 'error', details: 'The range to request the history is not known.'},
    '905' : {name: 'Failed to set runtime configs', type: 'error', details: 'The config file cannot be accessed, please check.'},
};


module.exports = messageCodes;
