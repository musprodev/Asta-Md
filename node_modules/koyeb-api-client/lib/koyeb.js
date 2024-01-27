const axios = require('axios');
//-----------------------------------------------------
async function get_deployments(koyeb_api){
if(!koyeb_api) throw new Error("Missing koyeb_api.")
let axiosConfig = {headers: {'Content-Type': 'application/json;charset=UTF-8', "Authorization": `Bearer ${koyeb_api}`}}
status = false
let a = []
await axios.get(`https://app.koyeb.com/v1/deployments`, axiosConfig).then(res => {
let array = ['STOPPED','STOPPING','ERROR','ERRPRING']
for (let i=0;i<res.data.deployments.length;i++){
if(!array.includes(res.data.deployments[i].status)){
  a.push(res.data.deployments[i].status)
}}
if(a.length>1) status = 'true'
})
return {
    states: a,
    status: status
}
}
//-----------------------------------------------------
function checkArray(array,key){
  var status = false
  for(var i=0; i<array.length; i++){
    if(array[i].key == key){
      status = true;
      break;
    }
  }
  return status;
}

//-----------------------------------------------------
async function delvar(a,koyeb_api){
    if(!koyeb_api) throw new Error("Missing koyeb_api.")
let axiosConfig = {headers: {'Content-Type': 'application/json;charset=UTF-8', "Authorization": `Bearer ${koyeb_api}`}}
var status = false
let { data } = await axios.get(`https://app.koyeb.com/v1/services`,axiosConfig)
 let ser = data.services[0].id
let b = await axios.get(`https://app.koyeb.com/v1/deployments/${data.services[0].latest_deployment_id}`,axiosConfig)
let aa = checkArray(b.data.deployment.definition.env,a);
if(aa!==true) return '_No such env in koyeb._'
let vals = []
 for(var i=0;i<b.data.deployment.definition.env.length;i++){
   if(b.data.deployment.definition.env[i].key===a) continue
   vals.push(b.data.deployment.definition.env[i]);
}
let body = {"definition": {"name": b.data.deployment.definition.name,"routes": b.data.deployment.definition.routes,"ports":b.data.deployment.definition.ports,"env":vals,"regions": b.data.deployment.definition.regions,"scalings":b.data.deployment.definition.scalings,"instance_types":b.data.deployment.definition.instance_types,"health_checks": b.data.deployment.definition.health_checks,"git":  b.data.deployment.definition.git}}
 await axios.patch(`https://app.koyeb.com/v1/services/${ser}`, body, axiosConfig).then(res => {
if(res.status===200){ status = `Successfully deleted ${a} var from koyeb.`} else {status = 'Please put Koyeb api key in var KOYEB_API.\nEg: KOYEB_API:api key'
 throw new Error('Missing KOYEB-API.\n'+res.message)
}
})
return status
}
//----------------------------------------------------------------------------------------------------------------------------------------------------
async function change_env(a,koyeb_api){
    if(!koyeb_api) throw new Error("Missing koyeb_api.")
let axiosConfig = {headers: {'Content-Type': 'application/json;charset=UTF-8', "Authorization": `Bearer ${koyeb_api}`}}
var status = '_Please put Koyeb api key in var KOYEB_API._\nEg: KOYEB_API:api key'
let { data } = await axios.get(`https://app.koyeb.com/v1/services`,axiosConfig)
 let ser = data.services[0].id
let b = await axios.get(`https://app.koyeb.com/v1/deployments/${data.services[0].latest_deployment_id}`,axiosConfig)
let bb = a.split(':')
let vals = []
 for(var i=0;i<b.data.deployment.definition.env.length;i++){
if(b.data.deployment.definition.env[i].key===bb[0]){
vals.push({"scopes":["region:fra"],"key":`${bb[0]}`,"value":`${bb[1]}`})
} else {
vals.push(b.data.deployment.definition.env[i]);
}
}
let aa = checkArray(vals,bb[0])
if(!aa===true){
vals.push({"scopes":["region:fra"],"key":`${bb[0]}`,"value":`${bb[1]}`})
}
let body = {
 "definition": {
    "name": b.data.deployment.definition.name,
    "routes": b.data.deployment.definition.routes,
     "ports":b.data.deployment.definition.ports,
    "env":vals,
    "regions": b.data.deployment.definition.regions,
    "scalings":b.data.deployment.definition.scalings,
    "instance_types":b.data.deployment.definition.instance_types,
    "health_checks": b.data.deployment.definition.health_checks,
    "git":  b.data.deployment.definition.git
  }
}
 await axios.patch(`https://app.koyeb.com/v1/services/${ser}`, body, axiosConfig).then(res => {
            if(res.status===200){status = `Successfuly changed var _${bb[0]}:${bb[1]} ._` } else {status = '_Please put Koyeb api key in var KOYEB_API._\nEg: KOYEB_API:api key'}
            throw new Error('Missing KOYEB-API.\n'+res.message)
          })
 return status
}


//----------------------------------------------------------------------------------------------------------------------------------------------------
async function getallvar(koyeb_api){
    if(!koyeb_api) throw new Error("Missing koyeb_api.")
let axiosConfig = {headers: {'Content-Type': 'application/json;charset=UTF-8', "Authorization": `Bearer ${koyeb_api}`}}
let { data } = await axios.get(`https://app.koyeb.com/v1/services`,axiosConfig)
let b = await axios.get(`https://app.koyeb.com/v1/deployments/${data.services[0].latest_deployment_id}`,axiosConfig)
let values = []
for(var i=0;i<b.data.deployment.definition.env.length;i++){
if(!b.data.deployment.definition.env[i].key) continue
values.push('*'+b.data.deployment.definition.env[i].key+'* : _'+b.data.deployment.definition.env[i].value+'_')
}
return (values.join('\n'))
}
//----------------------------------------------------------------------------------------------------------------------------------------------------
async function getvar(key,koyeb_api){
    if(!koyeb_api) throw new Error("Missing koyeb_api.")
    let axiosConfig = {headers: {'Content-Type': 'application/json;charset=UTF-8', "Authorization": `Bearer ${koyeb_api}`}}
let { data } = await axios.get(`https://app.koyeb.com/v1/services`,axiosConfig)
let b = await axios.get(`https://app.koyeb.com/v1/deployments/${data.services[0].latest_deployment_id}`,axiosConfig)
for(var i=0;i<b.data.deployment.definition.env.length;i++){
if(!b.data.deployment.definition.env[i].key) continue
   if(b.data.deployment.definition.env[i].key===key){
return (b.data.deployment.definition.env[i].key+':'+b.data.deployment.definition.env[i].value)
}
}
}
//----------------------------------------------------------------------------------------------------------------------------------------------------
async function redeploy(id,koyeb_api){
    if(!koyeb_api) throw new Error("Missing koyeb_api.")
    let axiosConfig = {headers: {'Content-Type': 'application/json;charset=UTF-8', "Authorization": `Bearer ${koyeb_api}`}}
var k = false
var postData = {
  "deployment_group": "prod",
  "sha": ""
};
try{
let ab = await axios.post(`https://app.koyeb.com/v1/services/${id}/redeploy`, postData, axiosConfig)
return ab.data
} catch (e) {
    throw new Error(e)
}
return k
}

//----------------------------------------------------------------------------------------------------------------------------------------------------
async function services(service_id,koyeb_api){
    if(!koyeb_api) throw new Error("Missing koyeb_api.")
    let axiosConfig = {headers: {'Content-Type': 'application/json;charset=UTF-8', "Authorization": `Bearer ${koyeb_api}`}}
try{
 let data = await axios.get('https://app.koyeb.com/v1/services/' + service_id,axiosConfig);
    return data.data
} catch (e) {
    throw new Error(e)
}
}
//---------------------------------------------------------------
async function del_service(service_id,koyeb_api){
    if(!koyeb_api) throw new Error("Missing koyeb_api.")
    let axiosConfig = {headers: {'Content-Type': 'application/json;charset=UTF-8', "Authorization": `Bearer ${koyeb_api}`}}
try{
 let data = await axios.delete('https://app.koyeb.com/v1/services/' + service_id,axiosConfig);
    return data.data
} catch (e) {
    throw new Error(e)
}
}
//---------------------------------------------------------------
async function pause_service(service_id,koyeb_api){
    if(!koyeb_api) throw new Error("Missing koyeb_api.")
    let axiosConfig = {headers: {'Content-Type': 'application/json;charset=UTF-8', "Authorization": `Bearer ${koyeb_api}`}}
try{
 let data = await axios.post(`https://app.koyeb.com/v1/services/${service_id}/pause`,axiosConfig);
    return data.data
} catch (e) {
    throw new Error(e)
}
}

//---------------------------------------------------------------
async function resume_service(service_id,koyeb_api){
    if(!koyeb_api) throw new Error("Missing koyeb_api.")
    let axiosConfig = {headers: {'Content-Type': 'application/json;charset=UTF-8', "Authorization": `Bearer ${koyeb_api}`}}
try{
 let data = await axios.post(`https://app.koyeb.com/v1/services/${service_id}/resume`,axiosConfig);
    return data.data
} catch (e) {
    throw new Error(e)
}
}

//---------------------------------------------------------------
async function list_services(koyeb_api){
    if(!koyeb_api) throw new Error("Missing koyeb_api.")
    let axiosConfig = {headers: {'Content-Type': 'application/json;charset=UTF-8', "Authorization": `Bearer ${koyeb_api}`}}
try{
 let data = await axios.get(`https://app.koyeb.com/v1/services`,axiosConfig);
    return data.data
} catch (e) {
    throw new Error(e)
}
}

//---------------------------------------------------------------
async function activities(koyeb_api){
    if(!koyeb_api) throw new Error("Missing koyeb_api.")
    let axiosConfig = {headers: {'Content-Type': 'application/json;charset=UTF-8', "Authorization": `Bearer ${koyeb_api}`}}
try{
 let data = await axios.get(`https://app.koyeb.com/v1/account/activities`,axiosConfig);
    return data.data
} catch (e) {
    throw new Error(e)
}
}

//---------------------------------------------------------------
async function list_apps(koyeb_api){
    if(!koyeb_api) throw new Error("Missing koyeb_api.")
    let axiosConfig = {headers: {'Content-Type': 'application/json;charset=UTF-8', "Authorization": `Bearer ${koyeb_api}`}}
try{
 let data = await axios.get(`https://app.koyeb.com/v1/apps`,axiosConfig);
    return data.data
} catch (e) {
    throw new Error(e)
}
}

//---------------------------------------------------------------
async function del_app(app_id,koyeb_api){
    if(!koyeb_api) throw new Error("Missing koyeb_api.")
    let axiosConfig = {headers: {'Content-Type': 'application/json;charset=UTF-8', "Authorization": `Bearer ${koyeb_api}`}}
try{
 let data = await axios.delete(`https://app.koyeb.com/v1/apps/${app_id}`,axiosConfig);
    return data.data
} catch (e) {
    throw new Error(e)
}
}
module.exports = { redeploy,getvar,delvar,getallvar,change_env,get_deployments,activities,list_services,resume_service,pause_service,del_service,list_apps,del_app}
