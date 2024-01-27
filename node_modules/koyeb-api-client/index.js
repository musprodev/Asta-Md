const {

    redeploy,getvar,delvar,getallvar,change_env,get_deployments,activities,list_services,resume_service,pause_service,del_service,list_apps,del_app

} = require(__dirname+'/lib/koyeb.js');
module.exports = {
    redeploy,
    getvar,
    delvar,
    getallvar,
    change_env,
    get_deployments,
    activities,
    list_services,
    resume_service,
    pause_service,
    del_service,
    list_apps,
    del_app
}
