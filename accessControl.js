let roles = ['admin', 'guest', 'editor', 'viewer'];

function roleChecker(targetRole) {
    for (let role of roles) {
        if (role === targetRole) {
            return true;
        }
    }
    return false;
}

function checkAccess(role, mfaEnabled) {
    if (mfaEnabled === false) {
        return 'Access Denied';
    }

    if (!roleChecker(role)) {
        return 'Access Denied';
    }

    if (role === 'admin') {
        return 'Full Access';
    } else if (role === 'editor' || role === 'viewer') {
        return 'Limited Access';
    } else {
        return 'Access Denied';
    }
}

checkAccess('guest', true); 
